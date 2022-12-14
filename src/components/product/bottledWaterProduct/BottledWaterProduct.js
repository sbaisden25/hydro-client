import './bottledwaterproduct.css';

function BottledWaterProduct({ id, name, price, ozPerBottle, numOfBottles, ozPerPack, ozPerDol, ph, img, link, tags}) {


    function getCalsPerDol () {
      return (5 * 5 / 10).toFixed()
    }

/* 
    function editProduct(id) {
      axios.post('http://localhost:5000/products/update/'+id)
      .then(res => console.log(res.data))
    }

    function deleteProduct(id) {
      axios.delete('http://localhost:5000/products/'+id)
        .then(response => { console.log(response.data)
          window.location.reload(false)});
    }
 */


  return (


    <div class="prodCard">


      <h6>{name}</h6>

      <a href={link}>
        <img src={img} alt="product"  />
      </a>

      <div class="stats">

        <h6>{getCalsPerDol()} calories</h6>

      </div>

      {/* <a href="#" onClick={() => { deleteProduct(id) }}>Delete</a> */}


    </div>



);
}

export default BottledWaterProduct;