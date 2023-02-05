import CartItem from './CartItem';

function Cart(props) {

    const { cart, setCart } = props ;
    

    // increase the qty
    const onIncreaseQty = (item) => {

        const index = cart.indexOf(item);
        console.log('index from cart.js: ' , index);
        cart[index].qty += 1 ;
        // qtyOfItem(item);
        // getCartTotal();
        const arr = cart.filter((item) => item.id !== -20 );
        setCart(arr);
        console.log('index from cart.js: ' , cart);

    }


    // Decrease the qty
    const onDecreaseQty = (item) => {

        const index = cart.indexOf(item);
        console.log('index from cart.js: ' , index);
        if(cart[index].qty > 1){
        cart[index].qty -= 1 ;
        }
        // qtyOfItem(item);
        // getCartTotal();
        const arr = cart.filter((item) => item.id !== -20 );
        setCart(arr);
        console.log('index from cart.js: ' , cart);
    }
        
    //count the qty
    const qtyOfItem = (item) => {
         console.log('------->' , item.qty);
         return item.qty;
    }

    // deletion
    const onDeleteProduct =(id) => {
        const arr  = cart.filter((item) => item.id !== id ) ;
        setCart(arr);
    }

    
   // total price
   const getCartTotal = () =>{
  
    let Total = 0;
  
    // loop each product
    cart.forEach((product) => {
      Total += product.price*product.qty;
    })
    // BTW no need to returnthe total ,  bcz props.total will fetch it automatically
    return Total;
    }

   
    return (
     <div className="Cart">
        {cart.map((item) => (
            <CartItem 
            item={item} 
            onIncreaseQty = {onIncreaseQty}
            onDecreaseQty = {onDecreaseQty}
            onDeleteProduct = {onDeleteProduct} 
            qtyOfItem={qtyOfItem}
            />  
              
        ))}

        <div className="cart-sum-div">
            <span className="cart-sum">Total :</span> <span className="sum"> <img src='https://cdn-icons-png.flaticon.com/128/3998/3998647.png' className='rupee-sign' alt='rupee' /> {getCartTotal()} </span>
        </div>
     </div>
    )
 }
 
 export default Cart;