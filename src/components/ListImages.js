import React, {
    useContext,
    useState,
    useEffect,
    useRef,
    createRef,
  } from "react";
  import { Table, Input, Button, Popconfirm, Form, Space, Col,Modal, Row } from "antd";
  import {
    EyeOutlined,
    FileTextOutlined,
    SearchOutlined,
  } from "@ant-design/icons";
  import useApi from "src/core/useApi";
  
  const EditableContext = React.createContext(null);
  
  const ListImages = (props) => {
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
        title: "* Chalan NO",
        dataIndex: "name",
        editable: false,
        width: "200",
      },
      {
        title: "* Image",
        dataIndex: "images",
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
        endPoint: "https://logistic.svtinfra.com/backend/api/getImages",
        method: "get",
      });
      let res=[];
      response?.map((data,index)=>{
        res.push({"key":index,...data});
      });
      setDataSource(res);
      console.log("called", response);
    };
    let rowSelection= {
        onChange: (selectedRowKeys, selectedRows) => {
          console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
          setSelectedRow(selectedRows);
        },
        getCheckboxProps: (record) => ({
          disabled: record.name === 'Disabled User',
          // Column configuration not to be checked
          name: record.name,
        }),
      } 
      
  
    return (
      <div style={{ width: "100%" }}>
        <Table
          className="listTable" 
          rowSelection={{
            type: "checkbox",
            ...rowSelection,
          }}
          loading={api.inProgress}
          bordered
          dataSource={dataSource}
          columns={columns}
          pagination={false}
          
        />
        <Modal centered width={800} height={500} style={{marginLeft:"20%",marginTop:"10%"}} title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        {
            selectedRow.map(data=>
              <div style={{width:"100%",height:"100%", overflow:'auto'}}>
              <Row>
                <Col md={6}>
                <img src={`https://logistic.svtinfra.com/backend/public/img/${data.images}`} alt="Images" />
                </Col>
                </Row>
                </div>
            )
        }
      </Modal>
         <Col>
              <Form.Item>
                <Button disabled={selectedRow.length===0} onClick={showModal} type={"primary"} danger htmlType="submit">
                  get Images
                </Button>
              </Form.Item>
            </Col>
      </div>
    );
  };
  
  export default ListImages;
  