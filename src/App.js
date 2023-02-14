import { BrowserRouter,  Routes , Route } from 'react-router-dom';
import {useState , useEffect} from 'react';
import Navbar from './Navbar';
import Home from './Pages/Home';
import Cart from './Pages/Cart';

const App = () => {

  const [data , setData] = useState([]);
  const [cart , setCart] = useState([]);
  
  

  useEffect(()=> {
     const url = 'https://fakestoreapi.com/products';

     fetch(url)
     .then(response => response.json())
     .then(data => {                               //this 'data' is the array of all fetched albums id and title .
        data.forEach((product) => product.qty = 0);            //here in each product qty is initially added as '0'.
        // console.log(data);
        setData(data);
     });
  }, []);


  // added item in cart
  const dataAddedInCart = (id) => {
    const varr = fetch(`https://fakestoreapi.com/products/${id}`)
    .then(response => response.json())
    .then(data => {                           
       return data;
    });
   
    varr.then((value) => {
      console.log('var value' , value);
      value.qty = 1;
      cart.push(value);                                  //here varr is promise so we refined it and used it in cart from app.js directly and passing it as props
      setCart(cart);   
    });
    console.log('========from app.js====', cart);
  }


  //sorting the array by inc price
  const sortByIncPrice = () =>{
    data.sort(function(a, b) {
       return parseFloat(a.price) - parseFloat(b.price);
   });
   const arr = data.filter((item) => item.id !== -20 );
   console.log('sorted increasing array' , arr)
   setData(arr);
 }


  //sorting the array by inc price
 const sortByDecPrice = () =>{
    data.sort(function(a, b) {
       return parseFloat(b.price) - parseFloat(a.price);
   });
   const arr = data.filter((item) => item.id !== -20 );
   console.log('sorted decreasing array' , arr)
   setData(arr);
 }

   //sorting the array by Low rating
  const sortByLowRating = () =>{
    data.sort(function(a, b) {
       return parseFloat(a.rating.rate) - parseFloat(b.rating.rate);
   });
   const arr = data.filter((item) => item.id !== -20 );
   console.log('sorted by low rating array' , arr)
   setData(arr);
  }

     //sorting the array by Low rating
    const sortByHighRating = () =>{
      data.sort(function(a, b) {
         return parseFloat(b.rating.rate) - parseFloat(a.rating.rate);
     });
     const arr = data.filter((item) => item.id !== -20 );
     console.log('sorted by high rating array' , arr)
     setData(arr);
    }  



  return (
    <div className="App">
        <BrowserRouter>
          <Navbar cart={cart} />
          <Routes>

            <Route path='/' element={<Home data={data} setData={setData}
             cart={cart} dataAddedInCart={dataAddedInCart}
             sortByDecPrice={sortByDecPrice} 
             sortByIncPrice= {sortByIncPrice}
             sortByLowRating= {sortByLowRating} 
             sortByHighRating= {sortByHighRating}
             />} 
            />

            <Route path='/cart' element={
              <Cart 
              cart={cart} 
              setCart={setCart} 
              />}
            />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
