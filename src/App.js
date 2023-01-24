import { BrowserRouter,  Routes , Route } from 'react-router-dom';
import {useState , useEffect} from 'react';
import Navbar from './Navbar';
import Home from './Pages/Home';
import Cart from './Pages/Cart';

function App() {

  const [data , setData] = useState([]);
  const [cart , setCart] = useState([]);
  
  

  useEffect(()=> {
     const url = 'https://fakestoreapi.com/products';

     fetch(url)
     .then(response => response.json())
     .then(data => {                               //this 'data' is the array of all fetched albums id and title .
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
    });

    
    console.log('============', cart);
  }


  return (
    <div className="App">
        <BrowserRouter>
          <Navbar cart={cart} />
          <Routes>
            <Route path='/' element={<Home data={data} setData={setData} cart={cart} dataAddedInCart={dataAddedInCart} />} />
            <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
