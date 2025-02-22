import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MarketDetails from './pages/MarketDetails';
import AddMarket from './pages/AddMarket';
import FindProducts from './pages/FindProducts';
import UserProfile from './pages/UserProfile';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ShopSetup from './pages/ShopSetup';
import AboutUs from './pages/AboutUs';
import NewsUpdates from './pages/NewsUpdates';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/market/:id" component={MarketDetails} />
          <Route path="/add-market" component={AddMarket} />
          <Route path="/find-products" component={FindProducts} />
          <Route path="/profile" component={UserProfile} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/shop-setup" component={ShopSetup} />
          <Route path="/about" component={AboutUs} />
          <Route path="/news" component={NewsUpdates} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;