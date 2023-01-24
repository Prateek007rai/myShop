
const Home = (props) => {

   const {data} = props;

// // //////////// Delete the data ///////////////
//    const deleteData = (id) => {
//       const arr = data.filter((item) => item.id !== id);
//       setData(arr);
//    }

   return (
    <div className="home">
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