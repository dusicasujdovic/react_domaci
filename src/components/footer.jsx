import React from 'react'
//import InstagramIcon from '@mui/icons-material/Instagram';
//import FacebookIcon from '@mui/icons-material/Facebook';
//import GoogleIcon from '@mui/icons-material/Google';
import {AiFillGoogleCircle} from 'react-icons/ai';
import {AiFillFacebook} from'react-icons/ai';
import {AiFillInstagram} from 'react-icons/ai';

function Footer() {
  return (
      <div className='footer'>
        <div className='socialMediaIcons'>
          <a href='https://www.weleda.rs/'>
            <AiFillGoogleCircle />
          </a>
          <a href='https://www.instagram.com/'>
            <AiFillInstagram />
          </a>
          <a href='https://www.facebook.com/'>
            <AiFillFacebook />
          </a>
          </div>
          <p> &copy; 2023 WELEDA <br></br>weleda@gmail.com </p>
    </div>
  )
}

export default Footer