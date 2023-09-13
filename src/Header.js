import React from 'react';
import  './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {

  const [{ basket , user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if(user){
        auth.signOut();
    }
  }

  return (
    <div className='header'>
      <div className='logo'>
         <Link to='/'>
           <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=''/>
         </Link>
         <div className='header_in'>.in</div>
      </div>

      <div className='header_address'>
         <div className='locationLogo'>
          <LocationOnIcon className='header_locationIcon' />
         </div>
         <div className='addressLine'>
         <div className='address-line-1 address-progressive-content' id='glow-ingress-line1'>
            Delivering to Thane 400607
          </div>
          <div className='address-line-2 address-progressive-content' id='glow-ingress-line2'>
            {user ? `hyy we track you` : 'Sign in to update your location'}
          </div>
         </div>
      </div>

      <div className="header_search">
        <input className="header_searchInput" type="text" placeholder='Search Amazon.in'/>
        <SearchIcon className='header_searchIcon' />
      </div>

      <div className="header_nav" >
        <Link to={!user && '/login'}>
          <div onClick={handleAuthentication} className='header_option'>
            <span className='header_optionLineOne' >
              hello {!user ? 'Guest' : user.email}
            </span>
            <span className='header_optionLineTwo' >
               {user ? 'Sign Out' : 'Sign In'}
            </span> 
          </div>
        </Link>

        <div className='header_option'>
          <span className='header_optionLineOne' >
            Returns
          </span>
          <span className='header_optionLineTwo' >
            & Orders
          </span>
        </div>

        <div className='header_option'>
          <span className='header_optionLineOne' >
            Your
          </span>
          <span className='header_optionLineTwo' >
            Prime
          </span>
        </div>

        <Link to='/checkout'>
          <div className='header_optionBasket'>
            <ShoppingBasketIcon />
             <span className='header_optionLineTwo header_basketCount'>
              {basket?.length}
             </span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Header
