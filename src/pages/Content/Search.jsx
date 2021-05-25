import React from 'react'
import {Row,Col,Typography,Input} from 'antd'
import { useSelector } from 'react-redux'
import { searchData } from '../../assets/store/reducers/ProductSlice'
import SearchContent from '../../components/SearchContent'
const {Title,Text}=Typography


const SearchData = () => {
    const data=useSelector(searchData)
    return (
        <div>
            <Col span={24} className="shop-header-top">
                <Title level={4}>Shop</Title>
            </Col>
            <Col span={24} className="shop-header-bottom">
                <Text style={{fontSize:"15px",fontWeight:"300"}}>Shop</Text>
                <div className="shop-header-filter">
                </div>
            </Col>
            <hr />
            <h2>Ket qua tim kiem : cos {data.length} duoc tim thay</h2>
            <SearchContent/>
        </div>
    )
}

export default SearchData
