/*
   1) grid-container

   2) row

   3) center

   4) brand

*/
import React, { Component } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

import { connect } from "react-redux";

interface IState{}

interface IProps{
   count:any;
}


class App extends Component<IProps,IState> {
   constructor(props:IProps){
      super(props);
   }
   render(){
      console.log( this.props.count>0?100:0);
      return (
         <React.Fragment>
            <Router>
               <div className="grid-container">
                  <header className="row">
                     <div>
                        <NavLink to="/" exact={true} strict className="brand">AshokIT</NavLink>
                     </div>
    
                     <div>
                         <NavLink to="/cart" exact={true} strict>cart 
                           {this.props.count>0 ? (<span className="badge-success">{this.props.count}</span>) : (<span className="badge-empty">{this.props.count}</span>) }
                         </NavLink>
                         <NavLink to="/" exact={true} strict>signin</NavLink>
                     </div>
                  </header>
    
                  <main>
                      <Route path="/" component={HomeScreen} exact={true} strict></Route>
                      <Route path="/product/:id" component={ProductScreen} exact={true} strict></Route>
                      <Route path="/cart/:id" component={CartScreen} exact={true} strict></Route>
                  </main>
    
                  <footer className="row center">
                      copyright@ashokit.in
                  </footer>
               </div>
               
            </Router>
         </React.Fragment>
      );
   }
  
}

const receive = (state:any)=>{
   return{
      count : state.cart.finalArray.length
   }
};


const send = (dispatch:any)=>{
   return{

   }
};



export default connect(receive,send)(App);
