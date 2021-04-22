import React, { useRef, useState } from 'react';
// import './App.css';
//Success POPUP
// import Swal from 'sweetalert2'
//For API Requests
import axios from 'axios';
import Form from 'antd/lib/form/Form';
import { Button, Col, Input, Row } from 'antd';
import {

  UserOutlined,
 
} from "@ant-design/icons";
const  FileUpload =(props)=>{
  const [imagedata,setImageData]=useState('');
  const myFormRef=useRef(); 
//FileChange
let handleChange=(file)=>{

  
  if(props.excel){
    props.sendExcel(file[0]);
  }else{
    setImageData(file[0]);
  }

}

  //Form Submission
  let addFormData=(evt)=>{
      if(props.excel){
        props.saveExcelData();
      }else{

        evt.preventDefault();
        const fd = new FormData();
        const name=document.getElementById("name").value;
        fd.append('image', imagedata);
        fd.append('name',name );
       
        //Post Request to laravel API Route
        axios.post('https://logistic.svtinfra.com/backend/api/uploadFile', fd
        ).then(res=>
        {
      // myFormRef.current.reset();
      console.log('res',res)
  
      alert('file uploaded successfully!',res);
      }
      ).catch((error) => alert("Error:", error))
      }
    
}
return (
      
  <div className="file_upload">
    <Form style={{ paddingTop: 20, paddingLeft: 180 }} >
      <Row>
        <Col span={5}>
          <label>{props.label}</label>
        </Col>
        {!props.excel && 
          <Col span={11}>
            <input placeholder="No"  id="name" />
        </Col>
        }
      </Row>
      <Row>
        <Col span={5}>
          {/* <label>{props.type}</label> */}
        </Col>
        <Col span={11}>
          <input
            type="file"
            multiple="true"
            class="form-control-file border"
            id="images"
            onChange={ (e) => handleChange(e.target.files) } 
          />
        </Col>
      </Row>

      <Col span={11}>
        {/* <Form.Item> */}
          <Button
            style={{ marginLeft: "80%", marginTop: "5px" }}
            type={"primary"}
            danger
            htmlType="submit"
            onClick={addFormData}
          >
            Submit
          </Button>
        {/* </Form.Item> */}
      </Col>
    </Form>
  </div> 

   
)
}

 export default FileUpload;