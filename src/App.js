/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Header from "./components/header";
import Card from "./components/Card";


function App() {
  let [cartValue, setCartValue] = useState(0);
  
  let data= [
    {
    item:"Fancy Product",
    price:"$40 - $80",
    },
    {
    item:"Special Item",
    oldPrice:"$20",
    price:"$18",
    isSale:true
    },
    {
      item:"Sale Item",
      oldPrice:"$50",
      price:"$25",
      isSale:true
      },
    {
      item:"Popular Item",
      price:"$40",
    },
    {
      item:"Sale Item",
      oldPrice:"$50",
      price:"$25",
      isSale:true
      },
    {
      item:"Fancy Product",
      price:"$120 - $280",
    },
    {
      item:"Special Item",
      oldPrice:"$20",
      price:"$18",
      isSale:true
    },
    {
        item:"Popular Item",
        price:"$40",
    },


  ]
  
  return <>
    <NavBar cartValue = {cartValue}/>
    <Header/>
    
    
    
    <section className="py-5">
    <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          <Card  setCartValue={setCartValue} data = {data[0]}/>
          <Card  setCartValue={setCartValue} data = {data[1]}/>
          <Card  setCartValue={setCartValue} data = {data[2]}/>
          <Card  setCartValue={setCartValue} data = {data[3]}/>
          <Card  setCartValue={setCartValue} data = {data[4]}/>
          <Card  setCartValue={setCartValue} data = {data[5]}/>
          <Card  setCartValue={setCartValue} data = {data[6]}/>
          <Card  setCartValue={setCartValue} data = {data[7]}/>
        </div>
    </div>
    </section>
   
</>




}

export default App;


                      