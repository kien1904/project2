import React, { useEffect, useState } from 'react'
import { Row,Col } from 'antd';

import HeaderM from '../components/HeaderM';
import SliderM from '../components/SliderM';
import Shop from './Content/Shop';
import '../assets/css/shop.css'
import {HashRouter as Router ,Route} from 'react-router-dom'

import Detail from './Content/Detail';
import Cart from './Content/Cart';
import Profile from './Content/Profile';
import Login from './Login';
import App from '../routers/App';
import { useSelector } from 'react-redux';

import SearchData from './Content/Search';
import { checkSelector, loadSelector } from '../assets/store/reducers/UserSlice';


const Home = () => {
    const check=useSelector(checkSelector)
    const load=useSelector(loadSelector)


    return (
        <div>
            
            <Router>

                
            {load===false && check===false ?<Route exact path="/" component={Login}></Route>:(
                <>
                <HeaderM/>
                 
                    
                 <Row>
                 <Col xs={8} sm={8} md={6} lg={4} >
                
                  <><SliderM/></>
              
                     
                 </Col>
                 <Col xs={16} sm={16} md={18} lg={20} className="shop">
                     
                         <Route exact path="/home" component={Shop}></Route>
                         <Route exact path="/cart" component={Cart}></Route>
                         <Route   path="/detailShop/:id" component={Detail}></Route>
                         <Route exact path="/profile" component={Profile}></Route>
                         <Route exact path="/search" component={SearchData}></Route>
             
                 </Col>
         
             </Row>
           
                </>
            )}    
                
               
                   



        
            
    </Router>

            
            
            
            
        </div>
    )
}

export default Home
