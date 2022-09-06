import { useState, useEffect } from "react";
import axios from "axios"
import './bottledwaterlist.css';
import Product from '../../product/Product';


function ProductList() {

  const [products, setProducts] = useState([]);


// get products

    useEffect(() => {

    // return all products
        axios.get('http://localhost:5000/bottledWater',
        Headers = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'})
        .then(res => {
            setProducts(res.data);
        })
    

    }, [products])





  return (


        <div className="list">
            
            {products.map(product => (

                <Product 
                key={product._id}
                id={product._id}
                name = {product.name}
                img = {product.img}

                 />

            ))}


     </div>

    
);

}

export default ProductList;