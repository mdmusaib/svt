import React, { useContext, useState, useEffect, useRef, createRef } from "react";
import { Table, Input, Button, Popconfirm, Form, Space } from "antd";
import { EyeOutlined,FileTextOutlined,SearchOutlined } from "@ant-design/icons";
import useApi from "src/core/useApi";
const EditableContext = React.createContext(null);





const ListBooking=props=>{
const [dataSource,setDataSource]=useState([]);
const [searchedColumn,setSearchedColumn]=useState('');
const [searchText,setSearchText]=useState('');
const searchInput=createRef();
const getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => searchInput.current.select(), 100);
      }
    },
    render: text =>
      searchedColumn === dataIndex ? (
        text
      ) : (
        text
      ),
  });

  let handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex)
    
  };

  let handleReset = clearFilters => {
    clearFilters();
    setSearchText('')
    
  };



  const columns=[
    {
      title: "* Customer Name",
      dataIndex: "customer_name",
      editable: false,
      width: "50%",
      ...getColumnSearchProps('customer_name'),
    },
    {
      title: "Address",
      dataIndex: "receiver_address",
      editable: false,
      width: "50%",
    },
  //   {
  //     title: "Items ",
  //     dataIndex: "items",
  //     editable: false,
  //     width: "50%",
  //   },
  //   {
  //     title: "* Material",
  //     dataIndex: "material",
  //     editable: false,
  //     width: "50%",
  //   },
  //   {
  //     title: "* Party Name",
  //     dataIndex: "party_name",
  //     editable: false,
  //     width: "50%",
  //   },
    {
      title: "* Rate",
      dataIndex: "rate",
      editable: false,
      width: "50%",
    },
  //   {
  //     title: "* Scale",
  //     dataIndex: "scale",
  //     editable: false,
  //     width: "50%",
  //   },
    {
      title: "* Tot Amt",
      dataIndex: "total_amount",
      editable: false,
    },
  //   {
  //     title: "* Expences",
  //     dataIndex: "expences",
  //     editable: false,
  //   },
    // {
    //   title: "* Driver Name",
    //   dataIndex: "driver_name",
    //   editable: false,
    // },
    // {
    //   title: "* Profit",
    //   dataIndex: "profit",
    //   editable: false,
    // },
    {
      title: "",
      dataIndex: "operation",
      render: (_, record) =>
       dataSource.length >= 1 ? (
           <>
          <div  title="View Booking" style={{cursor:"pointer"}} onClick={()=>handleView(record)}>
            <EyeOutlined/>
            </div>
            <div title="invoice" style={{cursor:"pointer"}}onClick={()=>handleInvoice(record)}>
            <FileTextOutlined />
            </div>
            </>
        ) : null,
    },
  ];

  let api=useApi();

  useEffect(()=>{
    getBooking();
  },[])
const handleView=(record)=>{
    props.history.push({pathname:"addBooking",record:record,type:"view"});
}
const handleInvoice=(record)=>{
    props.history.push({pathname:"invoice",record:record,type:"view"});
}

  const getBooking=async()=>{
    let response=await api.invoke({endPoint:"https://svt-logictics.herokuapp.com/api/getBookings",method:"get"});
    setDataSource(response.data);
    console.log("called", response);
  }

      return (
      <div style={{ width: "100%", overflowX: "scroll" }}>
       
        <Table
          loading={api.inProgress}
          bordered
          dataSource={dataSource}
          columns={columns}
          pagination={false}
        />
      </div>
    );
  }


export default ListBooking;
