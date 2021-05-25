import React, { useEffect, useState } from 'react'
import {Col,Typography,Input} from 'antd'
import '../../assets/css/shop.css'
import ContentShop from '../../components/ContentShop'
import { useDispatch } from 'react-redux'
import { searchDataByName } from '../../assets/store/reducers/ProductSlice'
import { useHistory } from 'react-router'
const {Search}=Input
const {Title ,Text }=Typography
const Shop = () => {
    const dispatch=useDispatch()
    const history=useHistory()
    const onSearch=(value)=>{
        dispatch(searchDataByName(value))
        history.push('/search')
    }
    return (
        <div>
            <Col span={24} className="shop-header-top">
                <Title level={4}>Shop</Title>
            </Col>
            <Col span={24} className="shop-header-bottom">
                <Text style={{fontSize:"15px",fontWeight:"300"}}>Shop</Text>
                <div className="shop-header-filter">
                <Search placeholder="Search" onSearch={onSearch} enterButton className="shop-header-input-search"/>
                    <img src={require('../../assets/img/filter.svg').default} alt=""  />
                </div>
            </Col>
            <hr />
            <ContentShop />

            
            
        </div>
    )
}

export default Shop
