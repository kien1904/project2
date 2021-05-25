import React, { useEffect, useState } from 'react'
import {Col,Rate,Row,Button, Input,InputNumber,Typography} from 'antd'
import '../assets/css/cart.css'
import { useDispatch, useSelector } from 'react-redux'
import {PlusOutlined,MinusOutlined} from '@ant-design/icons'
import {Link} from 'react-router-dom'
import { ListCart ,priceSelector,totalItem,updateQuantity} from '../assets/store/reducers/CartSlice'
// import '../assets/css/contentShop.css'
const {Title}=Typography
const CartShop = () => {
  const dispatch=useDispatch()
  const totalPrice=useSelector(priceSelector)
    const items=useSelector(totalItem)
const products=useSelector(ListCart)
    return (
      <div>
       {products.map((pro,index)=>(
         <Row className="cart-shop-content">
         <Col xs={4} sm={4} md={6} lg={5} className="content-img">
         <Link to={`/detailShop/${pro.id}`}  >
             <img
             
             src={require(`../${pro.img}`).default}
             alt=""
             width="120"
           
           />
             </Link>
           </Col>
             <Col xs={18} sm={16} md={15} lg={16} className="cart-shop-mid">
             <span className="cart-shop-mid-name">{pro.name}</span>
           <span
             style={{ marginTop: "10px" }}
             className="cart-shop-mid-price"
           >
             {pro.price} VND
           </span>
           <span>
             <Rate
               allowHalf
               defaultValue={2.5}
               className="cart-shop-mid-rate"
             />
           </span>
             </Col>
             <Col xs={2} sm={4} md={3} lg={3} className="cart-shop-right">
               <div className="cart-span">
                 <span className="plus" onClick={()=>dispatch(updateQuantity({index,id:pro.id,sl:pro.amount+1}))}>{<PlusOutlined />}</span>
                 <span className="quan">{pro.amount}</span>
                 <span className="minus" onClick={()=>dispatch(updateQuantity({index,id:pro.id,sl:pro.amount>1?pro.amount-1:pro.amount}))}>{<MinusOutlined />}</span>
               </div>
                 
                 
          </Col>
             
             
         </Row>

       ))}
        
        <hr />
        <Row className="total">
        <div  className="cart-total-price">
              <span>total Item: <span className="price"> {items}</span></span>

              <span>Total Price: <span className="price"> {totalPrice} VND</span></span>
              
            </div>
        </Row>

        

  

      </div>

        
    )
}

export default CartShop