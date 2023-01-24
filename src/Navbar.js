import { Link } from 'react-router-dom';


const Navbar = (props) => {

    const {cart } = props ;    

     // cart qty count
    const totalCount = () => {
    var total = 0 ; 
    cart.forEach((item) => total += item.qty);
    console.log('....from navbar.js..' , total);
    return total;
    }
    

    return (
        <div className="Navbar">
            <div className="Navbar-Option">
                <img src='https://cdn-icons-png.flaticon.com/128/1040/1040254.png' className='nav-img' alt='shop-img'/>
                <span className='heading'>MyShop</span>    
                <Link to="/" className='nav-opt'> Home </Link>
            </div>
            <div className='user-profile-nav'>
                {/* cart image */}
                <Link to="/cart" className='nav-opt'> <img src='https://cdn-icons-png.flaticon.com/128/9385/9385275.png' className='cart-img' alt='cart-img' /> </Link>
                <span className='count'> {totalCount()} </span>


                {/* profile info */}
                <span className='user-name'> Prateek Rai </span>
                <img src='https://cdn-icons-png.flaticon.com/128/3177/3177440.png' alt='user-img' className='user-img'  />
            </div>        
        </div>
    )
}


export default Navbar;