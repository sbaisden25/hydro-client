import { useState, useEffect } from "react";
import axios from "axios"
import './tagrow.css';

function TagRow() {

  const [tag, setTag] = useState('');


    window.onload = function() {
        document.getElementById("default-tag").focus();
      };


  return (

    <div className="row">

    
    <div className="tags">


        <button class="button-35 tagbutt" id="default-tag" onClick={() => { setTag("") }}>All</button>


        <button class="button-35 tagbutt gains" onClick={() => { setTag("gains") }}>Gains</button>


    </div>



    </div>
    
);
}

export default TagRow;