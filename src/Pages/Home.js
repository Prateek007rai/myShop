
const Home = (props) => {

   const {data} = props;


// // //////////// Delete the data ///////////////
//    const deleteData = (id) => {
//       const arr = data.filter((item) => item.id !== id);
//       setData(arr);
//    }

   return (
    <div className="home">

      {/* sort item dropdown button  using bootstrap*/}
      <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
               Sort by
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
               <a class="dropdown-item" href="#top" onClick={() => props.sortByIncPrice()}>Low Price First</a>
               <a class="dropdown-item" href="#top" onClick={() => props.sortByDecPrice()}>High Price First</a>
               <a class="dropdown-item" href="#top" onClick={() => props.sortByLowRating()}>Low Rating</a>
               <a class="dropdown-item" href="#top" onClick={() => props.sortByHighRating()}>High Rating</a>
               
            </div>
      </div>


    {data.map((item) => (
      <div className='item-div'>
         <div className='div-image'>
            <span className='item-image'><img src={item.image} alt='item-img' /></span>
         </div> 
         <div>
            <span className='item-title'>{item.title}</span>  
            <p className='item-price'>Rs : {item.price}</p> 

            {/* add to cart button */}
            <button className='add-to-cart-btn' onClick={() => props.dataAddedInCart(item.id)}>Add to Cart</button>
             
            <p className='item-rate'>Rating - {item.rating.rate} <img src='https://cdn-icons-png.flaticon.com/128/477/477406.png' alt='star-img' /></p>  
            <p className='item-desc'>{item.description}</p> 
         </div>  
      </div>
    ))}
    </div>
   )
}

export default Home;