import React from 'react'
import {Col,Typography} from 'antd'
import CartShop from '../../components/CartShop'
import '../../assets/css/shop.css'
import { useSelector } from 'react-redux'
import { ListCart } from '../../assets/store/reducers/CartSlice'
const {Text,Title}=Typography
const Cart = () => {
    const products=useSelector(ListCart)
    return (
        <div>
            <Col span={24} className="shop-header-top">
                <Title level={4}>Shop</Title>
            </Col>
            <Col span={24} className="cart-header-bottom">
                
                <div className="shop-header-filter">
                    <span>{products?.length} items in bag</span>
                </div>
            </Col>
            <hr />
            <CartShop/>

            
            
        </div>
    )
}

export default Cart
