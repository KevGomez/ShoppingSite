import React, { Component } from 'react';
import { HashRouter, Route, Switch ,BrowserRouter as Router} from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
import './App.scss';

import DefaultFooter from "./containers/DefaultLayout/DefaultFooter";
import DefaultHeader from "./containers/DefaultLayout/DefaultHeader";
import AddProduct from "./views/pages/Product/AddProduct/AddProduct";
import {DefaultLayout} from "./containers";
import ShowAllProducts from "./views/pages/Product/ShowAllProducts/ShowAllProducts";
import ShowOneProduct from "./views/pages/Product/ShowOneProduct/ShowOneProduct";
import Home from "./views/pages/HomePage";
import Register from "./views/pages/Register"
import PaymentMain from "./views/pages/Payment/PaymentMain"
import cardPayment from "./views/pages/Payment/cardPayment"
import receiptPayment from "./views/pages/Payment/receiptPayment"
import payConfirm from "./views/pages/Payment/payConfirm"
import UpdateProduct from "./views/pages/Product/UpdateProduct/UpdateProduct";
import MyShop from "./views/pages/Product/MyShop/MyShop";

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
//const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));

// Pages
// const Login = React.lazy(() => import('./views/Pages/Login'));
// const Page404 = React.lazy(() => import('./views/Pages/Page404'));
// const Page500 = React.lazy(() => import('./views/Pages/Page500'));

class App extends Component {




  render() {
    return (
        <Router>

            <div className="App">
                <DefaultHeader/>
                <Switch>
                    <Route  path="/" exact   component={Home} />
                    <Route exact path="/Register" component={Register} />
                    <Route path="/allProducts/:id" exact component={ShowAllProducts} />
                    <Route path="/oneProduct/:id" exact component={ShowOneProduct} />
                    <Route path="/Myshop" exact component={MyShop} />
                    <Route path="/Myshop/addProduct" component={AddProduct} />
                    <Route path="/Myshop/UpdateProduct/:id" exact component={UpdateProduct} />
                    <Route path="/paymentMain" component={PaymentMain} />
                    <Route path="/cardPayment" component={cardPayment} />
                    <Route path="/receiptPayment" component={receiptPayment} />
                    <Route path="/payConfirm" component={payConfirm} />
                </Switch>
                <DefaultFooter/>
                
            </div>
        </Router>
    );
  }

}

export default App;
