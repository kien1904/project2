import React from "react";
import { Col, DatePicker, Row ,Typography,Select,Button, message} from "antd";
import { useDispatch, useSelector } from "react-redux";


import "../../assets/css/profile.css";
import moment from 'moment'
import { Redirect, useHistory } from "react-router";
import { loadSelector, LoginSelector, logout } from "../../assets/store/reducers/UserSlice";
const {Title}=Typography
const {Option}=Select
const Profile = () => {
//   const user = useSelector(userSlect);
  // console.log(user)
  const user=useSelector(LoginSelector)
  const load=useSelector(loadSelector)
  const history=useHistory()
  const dispatch=useDispatch()
 
    const dangxuat=()=>{
      dispatch(logout())
      history.push("/")
    }
  return (
    <div className="profile-shop">
      <Row className="profile-shop-top">
        <Title level={3}>Profile</Title>
        <Button type="primary" className="dangxuat" onClick={dangxuat}> Dang xuat</Button>
      </Row>
      <div className="profile-shop-middle">
        <Col span={6}>
          <img
            src={require("../../assets/img/avatar1.svg").default}
            alt=""
            width="150px"
          />
        </Col>
        <Col span={18} className="profile-shop-right">
          <Title level={2}>{user?.name}</Title>
          
        </Col>
      </div>
      <div className="profile-shop-bottom">
          <table>
              <tbody>
                  <tr>
                      <td>Date of Birth</td>
                      <td><DatePicker defaultValue={moment('2015-01-01', 'YYYY-MM-DD')} /></td>
                  </tr>
                  <tr>
                      <td>Sex</td>
                      <td>
                          <Select defaultValue="nam">
                              <Option value="nam">Nam</Option>
                              <Option value="nu">Nu</Option>
                          </Select>
                      </td>
                      
                  </tr>
                  <tr>
                      <td>Address</td>
                      <td>177 Ha dong Ha Noi</td>

                  </tr>
                  <tr>
                      <td>Company Address</td>
                      <td>177 Ha dong Ha Noi</td>

                  </tr>

              </tbody>
          </table>

      </div>
    </div>
  );
};

export default Profile;
