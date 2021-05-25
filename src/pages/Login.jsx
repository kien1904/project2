import React, { useEffect, useState } from "react";
import {
  Typography,
  Form,
  Row,
  Col,
  Input,
  Checkbox,
  Button,
  Modal,
  message,
  Select,
  Option,
  DatePicker
} from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "../assets/css/login.css";
import { useDispatch, useSelector } from "react-redux";
import {
  sendDataToServer,
  CheckDataOnServer,
  checkSelector,
 
} from "../assets/store/reducers/UserSlice";

import { useHistory } from "react-router";


const { Title, Link, Text } = Typography;
const { Item } = Form;
const { Password } = Input;
const Login = () => {
  //const checkLogin = checkOnServer;
  const history = useHistory();
  const dispatch = useDispatch();
  const [loading,setLoading]=useState(false)
  const [modal, setModal] = useState(false);
  const  check  = useSelector(checkSelector);
  const [user, setUser] = useState({
    
    name: "",
    email: "",
    password: "",
  });


  const setModalTrue = () => {
    setModal(true);
  };
  
  //    console.log(modal)
  useEffect(()=>{
    
    if (check===true && loading===true ) {
      message.success("dang nhap thanh cong",3,history.push("/home"));
      // setLoading(false)
      // checkLogin=false;
    }
    if(loading===true&& check===false){
      message.warning(
        "Ban chua co tai khoan . Ban can dang ki",
        3,
        setModalTrue()
      );
      setLoading(false)
    }
  
  },[check,loading])
  // console.log(loading)
  const GetDataLogIn = (value) => {
    
    dispatch(CheckDataOnServer(value));
    setLoading(!loading)

  };


  const setModalFalse = () => {
    setModal(false);
  };
  const getDataByClient = () => {
    if(user!== null){
      dispatch(sendDataToServer(user))

    }
    
    message.success("dang ki thanh cong", 3, setModalFalse());
    setUser({
      
      name: "",
      email: "",
      password: "",
    });
  };

  const layout = {
    labelCol: {
      xs: {
        span: 2,
      },
      sm: {
        span: 4,
      },
      md: {
        span: 6,
      },
      lg: {
        span: 6,
      },
    },
    wrapperCol: {
      xs: {
        span: 8,
      },
      sm: {
        span: 16,
      },
      md: {
        span: 24,
      },
      lg: {
        span: 24,
      },
    },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
   
      [name]: value,
    });
  };

  return (
    <div className="body-login">
      {/* <Title level={2}>Login</Title> */}
      <Row>
        <Col xs={2} sm={4} md={6} lg={7}></Col>
        <Col xs={20} sm={16} md={12} lg={10}>
          <div className="body-logo">
            <img src={require("../assets/img/logo1.svg").default} alt="" />
          </div>

          <Form
            className="body-form"
            onFinish={GetDataLogIn}
            initialValues={{
              checkbox: true,
            }}
          >
            <Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "ban chua nhap ten dang nhap",
                },
              ]}
              className="body-item"
            >
              <Input
                type="text"
                placeholder="username"
                prefix={<UserOutlined className="body-icon" />}
                className="body-input"
              />
            </Item>
            <Item
              name="passwordLogin"
              rules={[
                {
                  required: true,
                  message: "ban chua nhap password",
                },
              ]}
              className="body-item"
            >
              <Password
                placeholder="password"
                prefix={<LockOutlined className="body-icon" />}
                className="body-input"
                name="password"
              />
            </Item>
            <Row className="body-save">
              <Item name="checkbox" valuePropName="checked">
                <Checkbox className="body-checkbox set-size">
                  Remember Password
                </Checkbox>
              </Item>
              <Item className="body-password">
                <Link className="body-link set-size">Forgot Password?</Link>
              </Item>
            </Row>

            <Item className="body-btn">
              <Button
                htmlType="submit"
                className="body-submit"
                size="large"
                type="primary"
              >
                Sign In
              </Button>
            </Item>
            <Item className="body-register">
              <Text className="body-text">
                Ban chua co tai khoan?{" "}
                <Link className="body-link" mark onClick={setModalTrue}>
                  Đăng kí
                </Link>
              </Text>
            </Item>
          </Form>
          <div className="footer">
            <Text className="body-text">
              Nếu có gì thắc mắc xin liên hệ 1900.9000 <br /> Bản quyền thuộc về
              Anna Bitch
            </Text>
          </div>
        </Col>
        <Col xs={2} sm={4} md={6} lg={7}></Col>
      </Row>
      <Modal
        visible={modal}
        onCancel={setModalFalse}
        centered
        title="Dang ki"
        footer={[
          <Button type="default" onClick={setModalFalse}>
            Trở về
          </Button>,
          <Button type="primary" onClick={getDataByClient}>
            Đăng kí
          </Button>,
        ]}
      >
        <Form {...layout}>
          <Item
            label="Name"
            rules={[
              {
                required: true,
                message: "Ban chua nhap ten",
              },
            ]}
          >
            <Input onChange={handleChange} name="name" value={user.name} />
          </Item>
          <Item
            label="Email"
            rules={[
              {
                required: true,
                message: "Ban chua nhap email",
              },
            ]}
          >
            <Input onChange={handleChange} name="email" value={user.email} />
          </Item>
          <Item
            label="Password"
            rules={[
              {
                required: true,
                message: "Ban chua nhap Password",
              },
            ]}
          >
            <Password
              onChange={handleChange}
              name="password"
              value={user.password}
            />
          </Item>
          

        </Form>
      </Modal>
    </div>
  );
};

export default Login;
