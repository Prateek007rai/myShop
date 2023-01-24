


const Cart = (props) => {

    const {cart , setCart} = props ;

    // increase the qty
    const increaseQty = (id) => {
         cart.forEach(element => {
            if(element.id === id){
                element.qty += 1 ;
                console.log('Inc qty' , element.qty)
            }
         });

         setCart(cart);
    }

    // decrease the qty
    const decreaseQty = (id) => {
        cart.forEach(element => {
            if(element.id === id && element.qty > 1){
                element.qty -= 1 ;
                console.log('dec qty' , element.qty)
        }});

        setCart(cart);
    }


    // delete the data from cart
    const deleteFromCart = (id) => {
        const arr = cart.filter((item) => item.id !== id);
        setCart(arr);
    }

    // total sum
    const getTotalSum = () =>{
        var a = 0;
        cart.forEach((item) => a += item.qty*item.price);
        return a ;
    }


    return (
     <div className="Cart">
        {cart.map((item) => (
            <div className='cart-item-div'>
                {/* used some css of home */}
                <div className='div-image'>
                   <span className='item-image'><img src={item.image} alt='item-img' /></span>
                </div> 
                <div>
                   <span className='item-title'>{item.title}</span>  
                   <p className='item-price'>Rs : {item.price}</p> 
       
                   <p className='item-rate'>Rating - {item.rating.rate} <img src='https://cdn-icons-png.flaticon.com/128/477/477406.png' alt='star-img' /></p> 

                   {/* add the count */}
                   <img src="https://cdn-icons-png.flaticon.com/128/4315/4315609.png" alt="add-btn" className="add-button" onClick= {() => increaseQty(item.id)} />

                   <span className="counter">{item.qty}</span>
                   {/* minus button */}
                   <img src="https://cdn-icons-png.flaticon.com/512/4436/4436695.png" alt="minus-btn" className="minus-button" onClick={() =>decreaseQty(item.id)} />


                   {/* DELETE button */}
                   <img src="https://cdn-icons-png.flaticon.com/128/6711/6711573.png" alt="del-btn" className="del-button" onClick={()=> deleteFromCart(item.id)} />
                </div>
            </div>    
        ))}

        <div className="cart-sum-div">
            <span className="cart-sum">Total Rs :</span> <span className="sum"> {getTotalSum()}</span>
        </div>
     </div>
    )
 }
 
 export default Cart;