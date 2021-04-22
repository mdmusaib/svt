import React, { useEffect, useRef, useState } from "react";
import { Button, Col, DatePicker, Form, Input, Row, Select } from "antd";
import { ExcelRenderer} from 'react-excel-renderer';

import {
  MailOutlined,
  MobileOutlined,
  UserOutlined,
  PercentageOutlined,
} from "@ant-design/icons";
import moment from "moment";
import EditingTableInBooking from "./EditingTableInBooking";
import EditingTableForVechicle from "./EditingTableForVechicle";
import FileUpload from "./FileUpload";
import useApi from "src/core/useApi";
import TextArea from "antd/lib/input/TextArea";

const { Option } = Select;

const BookingPage = (props) => {
  const [form] = Form.useForm();
  const [rows,setRows]= useState([]);
  const [columns,setColumns]= useState([]);
  let containerRef = useRef();
  let api = useApi();

  const [tableData, setTableData] = useState([]);
  const [vehicleTableData, setVehicleTableData] = useState([]);
  const [excelData,setExcelData] = useState([]);
  useEffect(() => {
    let lgScreen = window.matchMedia("(min-width: 768px)").matches;
    if (lgScreen) {
      containerRef.current.style.padding = "20px 60px";
    }
  }, []);

  useEffect(() => {
    if (props?.location?.type === "view") {
      form.setFieldsValue(props.location.record);
      setTableData(JSON.parse(props.location.record.items));
      setVehicleTableData(props.location.record.vehicle_details);
      // console.log(JSON.parse(props.location.record.vehicle_details))
    }
  }, [props?.location?.type]);

  const handleSubmit = async (value) => {
    let bookingDetails = { vehicle_details: vehicleTableData };
    console.log("upload", bookingDetails);
    let response = await api.invoke({
      endPoint: "https://logistic.svtinfra.com/backend/api/addBooking",
      method: "post",
      data: bookingDetails,
    });
    if (response.status === 1) {
      form.resetFields();
      setVehicleTableData([]);
    } else {
      alert("Something Went Wroung You Booking Couldn`t able to create!");
    }

    console.log("called", response);
  };

  const getTableDataForVehicle = (data) => {
    let vehicle_data = [...data];
    let lastRow = vehicle_data.pop();
    if (parseInt(lastRow.rate) && parseInt(lastRow.weight)) {
      let total_amt = parseInt(lastRow.rate) * parseInt(lastRow.weight);
      lastRow.total_amount = total_amt;
    }
    if (lastRow.gst === "yes" && lastRow.total_amount) {
      let calculatedGST =
        lastRow.total_amount + (lastRow.total_amount * 5) / 100;
      lastRow.total_amount = calculatedGST.toFixed(2);
    }
    console.log("data", vehicle_data, lastRow);
    setVehicleTableData([...vehicle_data, lastRow]);
  };

  const handleReset = () => {
    form.resetFields();
    setTableData([]);
  };
  let getExcel=(file)=>{
    console.log('file',file);
     //just pass the fileObj as parameter
     ExcelRenderer(file, (err, resp) => {
      if(err){
        console.log(err);            
      }
      else{
          setColumns(resp.cols);
          setRows(resp.rows);
      }
    });         
  }
  let saveExcelData=()=>{
    let arr=[];
    for(var i=1;i<rows.length;i++){
      
        arr.push({
          key: i,
          date:rows[0],
          vehicle_no: rows[1],
          from_loc: rows[2],
          to_loc: rows[3],
          dc_no: rows[4],
          material: rows[5],
          weight:rows[6],
          rate: rows[7],
          crusher_amt:rows[8],
          party_name: rows[9],
          unloading_qty:rows[10],
          unloading_rate:rows[11],
          unloading_amt:rows[12],
          gst:rows[13],
          payment_type:rows[14],
          diesel_rt:rows[15],
          diesel_qty:rows[16],
          toll_cost:rows[17],
          loading_quantity:rows[18],
          accepted_quantity:rows[19],
          lead:rows[20],
          expences: rows[21],
          total_amount: rows[22],
          driver_name: rows[23],
          profit: rows[24],
        
      });
    }
    console.log('excel', arr);
  }


  return (
    <div ref={containerRef} style={{ padding: "20px 10px" }}>
      <FileUpload label='Upload Excel' type="Excel" saveExcelData={saveExcelData} excel={true} sendExcel={getExcel}/>
      <FileUpload label="DC CHALAN NO" type="Image"/>
      <Row>
        <EditingTableForVechicle
          getTableData={getTableDataForVehicle}
          rowData={vehicleTableData}
          view={props.location.type === "view"}
        />
        <hr />
        {props.location.type === "view" ? (
          ""
        ) : (
          <Row gutter={16}>
            <Col>
              <Form.Item>
                <Button
                  onClick={handleSubmit}
                  type={"primary"}
                  danger
                  htmlType="submit"
                >
                  Submit
                </Button>
              </Form.Item>
            </Col>
            <Col>
              <Button onClick={handleReset}>Reset</Button>
            </Col>
          </Row>
        )}
      </Row>
    </div>
  );
};

export default BookingPage;
