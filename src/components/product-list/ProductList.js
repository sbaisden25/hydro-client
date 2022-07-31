import { useState, useEffect } from "react";
import axios from "axios"
import './productlist.css';
import Product from '../product/Product';
import Footer from "../footer/Footer";

import Lottie from "react-lottie";

import * as preloader from "./preloader.json";

function ProductList() {

  const [products, setProducts] = useState([]);
  const [tag, setTag] = useState('');



// get products by tag 

    useEffect(() => {

    // if no tag, return all products
    if (tag === "" && sortBy === "") {
        axios.get('https://ezbulk-backend.herokuapp.com/products',
        Headers = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'})
        .then(res => {
            setDone(true)
            setProducts(res.data);
        })
    } 

    if (tag !== "" && sortBy === "") {
        axios.get('https://ezbulk-backend.herokuapp.com/products/tags/' + tag,
        Headers = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'})
        .then(res => {
            setDone(true)
            setProducts(res.data);
        })
    }

    if (tag === "" && sortBy !== "") {
        axios.get('https://ezbulk-backend.herokuapp.com/products/sort/' + sortBy,
        Headers = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'})
        .then(res => {
            setDone(true)
            setProducts(res.data);
        })
    }

    if (tag !== '' && sortBy !== '') {
        axios.get('https://ezbulk-backend.herokuapp.com/products/sort/' + sortBy + '/tags/' + tag,
        Headers = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'})
        .then(res => {
            setDone(true)
            setProducts(res.data)
        })
    }


    }, [tag])

    var div = document.getElementsByClassName('dropdown-content');

    for(var  i =0;i<div.length;i++){
    for(var  j =0;j<div[i].children.length;j++){

    div[i].children[j].addEventListener('click',function(){
        this.parentNode.previousElementSibling.innerHTML = this.innerHTML;
            })
        }
    }

    window.onload = function() {
        document.getElementById("default-tag").focus();
      };


  return (

    <div classname="page">


    {!done ? (
        <Lottie 
	    options={defaultOptions}
        height={400}
        width={400}
        speed={2.2}
      /> ) : (


        <div className="list">
            
            {products.map(product => (

                <Product 
                key={product._id}
                id={product._id}
                name = {product.name}
                price = {product.price}
                caloriesPerServing = {product.caloriesPerServing}
                proteinPerServing = {product.proteinPerServing}
                totalFatPerServing = {product.totalFatPerServing}
                carbsPerServing = {product.carbsPerServing}
                servingsPerProduct = {product.servingsPerProduct}
                img = {product.img}
                link = {product.link}
                tag = {product.tag}


                 />

            ))}


     </div>

    )}

    </div>
    
);
}

export default ProductList;