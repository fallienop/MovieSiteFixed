import React from 'react';
import {BrowserRouter,NavLink,Switch, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import ListPage from './pages/ListPage/ListPage';
import Details from './components/Details/Details';
import Header from './components/Header/Header';
import './reset.css';
import './common.css';

class App extends React.Component {
  getClassName({ isActive, exact }) {
    if (isActive && exact) {
      return 'active';
    }
    return '';
  }
  render() {
    return (
      <div className="app">
                <Header />

<BrowserRouter>

<ul style={{display:"flex", gap:'10px', marginLeft:'20px', marginTop:"6px"}} >
  <li>
    <NavLink className={this.getClassName} to="/" exact>Home</NavLink>
  </li>
  <li>
    <NavLink className={this.getClassName} to="/list">List</NavLink>
  </li>
</ul>
<Switch>
<Route path="/" exact component={MainPage} />
<Route path="/list" exact component={ListPage} />
<Route path="/details"  exact component={Details} />
</Switch>
</BrowserRouter>

       
      </div>
    );
  }
}

export default App;
