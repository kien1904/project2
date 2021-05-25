import React from 'react'
import DetailShop from '../../components/DetailShop'
import {Col,Typography,Row } from 'antd'
import  '../../assets/css/shop.css'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ListCart } from '../../assets/store/reducers/CartSlice'
const {Title,Text}=Typography


const Detail = () => {
    const products=useSelector(ListCart)
    return (
        <div>
             <Col span={24} className="shop-header-top">
                <Title level={4}>Shop</Title>
            </Col>
            <Col span={24} className="shop-header-bottom">
                <Text style={{fontSize:"15px",fontWeight:"300"}}>Shop</Text>
                <div className="shop-header-filter">
                    <div style={{position:"relative"}}>

                    
                   <Link to="/cart"><img src={require('../../assets/img/cart.svg').default} alt=""  /> <span className="quantity">{products.length}</span> </Link> 
                </div>
                </div>
            </Col>
            <hr />
            <DetailShop/>
        </div>
    )
}

export default Detail
