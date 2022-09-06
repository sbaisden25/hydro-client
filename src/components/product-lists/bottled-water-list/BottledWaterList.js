import { useState, useEffect } from "react";
import axios from "axios"
import './bottledwaterlist.css';
import BottledWaterProduct from '../../product/bottledWaterProduct/BottledWaterProduct';


function BottledWaterList() {

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

                <BottledWaterProduct 
                key={product._id}
                id={product._id}
                name = {product.name}
                price = {product.name}
                ozPerBottle = {product.OzPerBottle}
                numOfBottles = {product.numOfBottles}
                ozPerPack = {product.ozPerPack}
                ozPerDol = {product.ozPerDol}
                ph = {product}

                img = {product.img}

                 />

            ))}


     </div>

    
);

}

export default BottledWaterList;