import React from 'react'
import './Home.css';
import Product from './Product';
import { Link } from '@mui/material';

function Home() {
  return (
    <div className='home'>
        
      <div className='home_container' >
        <img className='home_image' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' alt='' />
      </div>

      <div className='home_row' >
        <Product 
            title='CRAFTHUT Brass Murti for Home Decor of Lord Hanuman' 
            price={29.91} 
            image='https://m.media-amazon.com/images/I/41CR5y5TEdS._AC_UL400_.jpg' 
            rating={5} 
        />
         <Product 
            title='Bhagat Singh: A Life In Revolution Bhagat Singh: A Life In Revolution' 
            price={6.49} 
            image='https://images-eu.ssl-images-amazon.com/images/I/61dMavTWiIL._AC_UL160_SR160,160_.jpg' 
            rating={5} 
        />
        <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
      </div>

      <div className='home_row' >
          <Product
            id="4903850"
            title="Apple iPhone 14 Pro Max (1 TB) - Gold"
            price={1899.10}
            rating={6}
            image="https://m.media-amazon.com/images/I/71T5NVOgbpL._AC_UY218_.jpg"
          />
          <Product
            id="23445930"
            title="IZI Sky 4K 20MP CMOS 1/3.06 Camera Drone,3 Axis Gimbal 5KM Transmission,Vertical shooting, Precision Hovering, 10+ Flying Modes, GPS,70 Mins Flight"
            price={461.23}
            rating={5}
            image="https://m.media-amazon.com/images/I/71uH1ATOgGL._AC_UL400_.jpg"
          />
          <Product
            id="3254354345"
            title="FUJIFILM X-H2 Mirrorless Camera Black"
            price={598.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71FkkXNf3+L._AC_UY218_.jpg"
          />
      </div>

      <div className='home_row' >
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
      </div>

      <div className='home_row' >
      <Product
            id="90829332"
            title="Lloyd 189 cm (75 Inches) 4K Ultra HD Smart QLED TV 75QX900D (Black) (2022 Model)"
            price={1119.98}
            rating={5}
            image="https://m.media-amazon.com/images/I/81+JXgPUDLL._AC_UY218_.jpg"
          />
      </div>


      <div className='Footer_of_home'>

        <div className='about'>
          <div className='options'>
            <h4>Get to Know Us</h4>
            <Link><p>About Us</p></Link>
            <Link><p>Careers</p></Link>
            <Link><p>Press Releases</p></Link>
            <Link><p>Amazon Science</p></Link>
          </div>
          <div className='options'>
            <h4>Connect with Us</h4>
            <Link><p>Facebook</p></Link>
            <Link><p>Twitter</p></Link>
            <Link><p>Instagram</p></Link>
          </div>
          <div className='options'>
            <h4>Make Money with Us</h4>
            <Link><p>Sell on Amazon</p></Link>
            <Link><p>Sell under Amazon Accelerator</p></Link>
            <Link> <p>Protect and Build Your Brand</p></Link>
            <Link><p>Amazon Global Selling</p></Link>
            <Link><p>Become an Affiliate</p></Link>
            <Link><p>Fulfilment by Amazon</p></Link>
            <Link><p>Advertise Your Products</p></Link>
            <Link><p>Amazon Pay on Merchants</p></Link>
          </div>
        </div>

        <div className='logo'>
          <Link to='/'>
            <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=''/>
          </Link>
            <div className='header_in'>.in</div>
        </div>

        <div className='lang_list'>
            <Link><p>Australia</p></Link>
            <Link><p>Brazil</p></Link>
            <Link> <p>Canada</p></Link>
            <Link><p>China</p></Link>
            <Link><p>France</p></Link>
            <Link><p>Italy</p></Link>
            <Link><p>Japan</p></Link>
            <Link><p>Mexico</p></Link>
            <Link><p>Netherlands</p></Link>
            <Link><p>Poland</p></Link>
            <Link><p>Germany</p></Link>
            <Link><p>Singapore</p></Link>
            <Link><p>Turkey</p></Link>
            <Link><p>United Arab Emirates</p></Link>
            <Link><p>United States</p></Link>
            <Link><p>United Kingdom</p></Link>            
        </div>

        <div className='t_nd_c'>
          <div className='login_footer1'>
            <div className='option condition_footer'>
              Conditions of Use & Sale
            </div>
            <div className='option privacy_footer'>
              &nbsp; Privacy Notice
            </div>
            <div className='option help_footer'>
              Interest-Based Ads
            </div>
          </div>
          <div className='login_footer2'>
            © 1996-2023, Amazon.com, Inc. or its affiliates
          </div>
        </div>

      </div>

    </div>
  )
}

export default Home;