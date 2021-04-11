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
const  FileUpload =()=>{
  const [imagedata,setImageData]=useState('');
  const myFormRef=useRef(); 
//FileChange
let handleChange=(file)=>{

  setImageData(file[0]);


}

  //Form Submission
  let addFormData=(evt)=>{
    
      evt.preventDefault();
      const fd = new FormData();
      const name=document.getElementById("name").value;
      fd.append('image', imagedata);
      fd.append('name',name );
     
      //Post Request to laravel API Route
      axios.post('https://logistic.svtinfra.com/api/uploadFile', fd
      ).then(res=>
      {
    // myFormRef.current.reset();
    console.log('res',res)
    
    }
    );
    
}
return (
      
  <div className="file_upload">
    <Form style={{ paddingTop: 20, paddingLeft: 180 }} >
      <Row>
        <Col span={5}>
          <label>DC CHALAN *</label>
        </Col>
        <Col span={11}>
          {/* <Form.Item
            name="name"
            rules={[{ required: true, message: "Please enter your name!" }]}
          > */}
            <input placeholder="No"  id="name" />
          {/* </Form.Item> */}
        </Col>
      </Row>
      <Row>
        <Col span={5}>
          <label>Images *</label>
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