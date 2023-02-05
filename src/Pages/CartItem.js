

function CartItem (props) {

    const { item} = props ;
    

    // // increase qty
    // const IncQtyInCart = (id) => {
    //     console.log('IncQty from app.js', cart);
    //     cart.forEach((value) => {if(value.id === id){
    //         console.log('value from cart' , value);
    //         value.qty = value.qty + 1 ;
    //     }})
    //     setCart(cart);
    //     props.getTotalSum();
    //     quantity += 1 ;
    //     console.log('IncQty from app.js', quantity);
    //     setQuantity(quantity);
    // }

    //     // decrease qty
    //     const DecQtyInCart = (id) => {
    //         console.log('DecQty from app.js', cart);
    //         cart.forEach((value) => {if(value.id === id){
    //             console.log('value from cart' , value);
    //             if(value.qty > 1){
    //             value.qty = value.qty - 1 ;
    //             quantity -= 1 ;
    //             }
    //         }})
    //         props.getTotalSum();
    //         setCart(cart);
    //         setQuantity(quantity);
    //     }



    // // delete the data from cart
    // const deleteFromCart = (id) => {
    //     const arr = cart.filter((item) => item.id !== id);
    //     quantity = 0 ;
    //     setCart(arr);
    // }

    // // total sum
    // const getTotalSum = () =>{
    //     var a = 0;
    //     cart.forEach((item) => a += item.qty*item.price);
    //     return a ;
    // }



    return (
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
                   <img src="https://cdn-icons-png.flaticon.com/128/4315/4315609.png" 
                   alt="add-btn" className="add-button" 
                   onClick= {() =>{props.onIncreaseQty(item)}} 
                   />

                   {/* <span className="counter">{props.qtyOfItem(item)}</span> */}
                   <span className="counter">{item.qty}</span>
                   {/* minus button */} 
                   <img src="https://cdn-icons-png.flaticon.com/512/4436/4436695.png" 
                   alt="minus-btn" className="minus-button" 
                   onClick={() =>{props.onDecreaseQty(item)}} 
                    />

                  {/* DELETE button */}
                  <img src="https://cdn-icons-png.flaticon.com/128/6711/6711573.png" alt="del-btn" className="del-button" onClick={()=>{props.onDeleteProduct(item.id)}} />
                   
                </div>
            </div>    
    )
 }
 
 export default CartItem;