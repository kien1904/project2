import React from "react";
import '../assets/css/header.css'
import {Header,Menu ,Row,Col,Typography} from 'antd'
import {Link} from 'react-router-dom'
const {Item}=Menu
const {Title}=Typography

const HeaderM = () => {
  return (
    <div>
        <Row className="header-body">
            <Col span={24} className="header-detail">
                <ul className="header-left">
                    <li><img src={require('../assets/img/logo1.svg').default} alt="" /></li>
                    <li><Title level={4} className="header-left-title" >Mobile Shopping</Title></li>

                </ul>
                <ul className="header-right">
                    <li>
                       <Link to="/profile"><img src={require('../assets/img/avatar1.svg').default} alt="" /></Link> 
                    </li>

                </ul>
            </Col>
        </Row>
    
    </div>
  );
};

export default HeaderM;
