import React, { useEffect, useState } from "react";
import { Col, Rate ,message} from "antd";
import { useHistory, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import '../assets/css/detail.css'
import { getDataById, productID } from "../assets/store/reducers/ProductSlice";
import { addToCart } from "../assets/store/reducers/CartSlice";
const DetailShop = () => {
  const { id } = useParams();
  const dispatch = useDispatch()
  const history=useHistory()
  useEffect(()=>{
    dispatch(getDataById(id))
  },[id])
  const data=useSelector(productID)
  const addProduct=(value)=>{
    dispatch(addToCart(value))
    message.success('them thanh cong',3)

  }
 console.log(data.img)

  

  return (
    
    <div className="detail-shop">
      <Col xs={4} sm={4} md={6} lg={6}>
       
        {(data?.img!==undefined) ?<img src={require('../'+data?.img).default} alt="" width="200" className="detail-shop-img1"/>:''}
      
        <img src={require("../assets/img/itemSP.svg").default} alt="" className="detail-shop-img2" width="150"/>
      </Col>
      <Col xs={20} sm={20} md={18} lg={18} className="detail-shop-right">
        <span className="detail-shop-right-name">{data?.name}</span>
        <span className="detail-shop-right-desc">{data?.desc}</span>
        <span
          style={{ marginTop: "10px" }}
          className="detail-shop-right-price"
        >
          {data?.price} VND
        </span>
        <span>
          <Rate
            allowHalf
            defaultValue={2.5}
            className="detail-shop-right-rate"
          />
        </span>
        <div className="detail-button">
        <button className="detail-button-MN" onClick={()=>history.push('/home')} >Mua ngay</button>
        <button className="detail-button-TVGH" onClick={()=>addProduct({id:data.id,data})}>Thêm vào giỏ hàng</button>
        </div>
        
      </Col>
    </div>
  );
};

export default DetailShop;
