import 'antd/dist/antd.css'
import '../assets/css/App.css';
import {HashRouter as Router ,Route,Switch} from 'react-router-dom'
import Login from '../pages/Login';
import Home from '../pages/Home';
// import DetailShop from '../components/DetailShop';
import Detail from '../pages/Content/Detail';
import { useSelector } from 'react-redux';

import { render } from 'react-dom';
import Search from '../pages/Content/Search';


function App() {
 
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={Login}></Route>
      <Route exact path="/home" component={Home}></Route>
        <Route  exact path="/cart" component={Home}></Route>
        <Route   path="/detailShop" component={Home}></Route>
        <Route  exact path="/profile" component={Home}></Route>
        <Route  exact path="/search" component={Home}></Route>
      </Switch>
    </Router>
  );
}

export default App;
