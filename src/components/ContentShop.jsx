import React, { useEffect, useState } from "react";
import { Row, Col, Rate } from "antd";
import "../assets/css/contentShop.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productSelector } from "../assets/store/reducers/ProductSlice";

const ContentShop = () => {
  const products = useSelector(productSelector);
  console.log(products.length)

  return (
    <Row className="content-body">
      

      {products.map(pro=>(

        <>
        <Col xs={24} sm={24} md={12} lg={12} className="content-shop">
        
      
      

        <Col span={7} className="content-shop-left">
          <Link to={`/detailShop/${pro.id}`}>
            <img src={require(`../${pro.img}`).default} alt="" width="120" />
          </Link>
        </Col>
        <Col span={17} className="content-shop-right">
          <span className="content-shop-right-name">{pro.name}</span>
          <span
            style={{ marginTop: "10px" }}
            className="content-shop-right-price"
          >
          {pro.price}  VND
          </span>
          <span>
            <Rate
              allowHalf
              defaultValue={5}
              className="content-shop-right-rate"
            />
          </span>
        </Col>
        </Col>
        </>
        ))}


      
    </Row>
  );
};

export default ContentShop;
