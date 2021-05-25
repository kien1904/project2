import React, { useEffect } from "react";
import "../assets/css/slider.css"
import {  Menu, Layout } from "antd";
import {Link} from 'react-router-dom'
import { UserOutlined ,HomeOutlined,ShoppingCartOutlined} from "@ant-design/icons";
import { useSelector } from "react-redux";

const { Item, SubMenu } = Menu;

const {Sider}=Layout
const SliderM = () => {

  
  return (
    
      <div  className="slider-body">
        
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{ height: "100%", borderRight: 0 }}
          className="slider-menu" 
          
          // openKeys={["2"]}
        >
          <SubMenu key="sub1"  title="Menu" className="slider-submenu" >
            <Item key="1" icon={<HomeOutlined  className="title-icon"/>} className="slider-title" >
              <Link to="/home">Shop</Link>
            </Item>
            <Item key="2" icon={<ShoppingCartOutlined  className="title-icon"/>}  className="slider-title">
            <Link to="/cart">Cart</Link>
            </Item>
            <Item key="3" icon={<UserOutlined  className="title-icon"/>} className="slider-title">
            <Link to="/profile">My Profile</Link>
            </Item>
          </SubMenu>
        </Menu>
      </div>
    
  );
};

 
export default SliderM;
