import React, {
    useContext,
    useState,
    useEffect,
    useRef,
    createRef,
  } from "react";
  import { Table, Input, Button, Popconfirm, Form, Space, Col,Modal } from "antd";
  import {
    EyeOutlined,
    FileTextOutlined,
    SearchOutlined,
  } from "@ant-design/icons";
  import useApi from "src/core/useApi";
  
  const EditableContext = React.createContext(null);
  
  const CustomerTable = (props) => {
    const [dataSource, setDataSource] = useState([]);
    const [searchedColumn, setSearchedColumn] = useState("");
    const [searchText, setSearchText] = useState("");
    const [selectedRow,setSelectedRow]=useState([]);
    const searchInput = createRef();
    const getColumnSearchProps = (dataIndex) => ({
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => (
        <div style={{ padding: 8 }}>
          <Input
            ref={searchInput}
            placeholder={`Search ${dataIndex}`}
            value={selectedKeys[0]}
            onChange={(e) =>
              setSelectedKeys(e.target.value ? [e.target.value] : [])
            }
            onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
            style={{ width: 188, marginBottom: 8, display: "block" }}
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
            <Button
              onClick={() => handleReset(clearFilters)}
              size="small"
              style={{ width: 90 }}
            >
              Reset
            </Button>
          </Space>
        </div>
      ),
      filterIcon: (filtered) => (
        <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
      ),
      onFilter: (value, record) =>
        record[dataIndex]
          ? record[dataIndex]
              .toString()
              .toLowerCase()
              .includes(value.toLowerCase())
          : "",
      onFilterDropdownVisibleChange: (visible) => {
        if (visible) {
          setTimeout(() => searchInput.current.select(), 100);
        }
      },
      render: (text) => (searchedColumn === dataIndex ? text : text),
    });

    const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  let handleShowImage=()=>{
      console.log('selectedRow',selectedRow);
  }
    let handleSearch = (selectedKeys, confirm, dataIndex) => {
      confirm();
      setSearchText(selectedKeys[0]);
      setSearchedColumn(dataIndex);
    };
  
    let handleReset = (clearFilters) => {
      clearFilters();
      setSearchText("");
    };
  
    const columns = [
      
      {
        title: "Name",
        dataIndex: "name",
        editable: false,
        width: "200",
      },
      {
        title: "Email",
        dataIndex: "email",
        editable: false,
        width: "200",
      },
      {
        title: "Mobile",
        dataIndex: "mobile",
        editable: false,
        width: "200",
      },
      {
        title: "GST No",
        dataIndex: "gst",
        editable: false,
        width: "200",
      },
      {
        title: "Address",
        dataIndex: "address",
        editable: false,
        width: "200",
      },
    ];
  
    let api = useApi();
  
    useEffect(() => {
      getBooking();
    }, []);
    const handleView = (record) => {
      props.history.push({
        pathname: "addBooking",
        record: record,
        type: "view",
      });
    };

    const getBooking = async () => {
      let response = await api.invoke({
        endPoint: "https://logistic.svtinfra.com/backend/api/getCustomerDetails",
        method: "get",
      });
      let res=[];
      response?.map((data,index)=>{
        res.push({"key":index,...data});
      });
      setDataSource(res);
      console.log("called", response);
    };
     
    
    return (
      <div style={{ width: "100%" }}>
        <Table
          className="listTable" 
          
          loading={api.inProgress}
          bordered
          dataSource={dataSource}
          columns={columns}
          pagination={false}
          
        />
      </div>
    );
  };
  
  export default CustomerTable;
  