import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai';
import { RiFacebookFill } from 'react-icons/ri';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BsYoutube } from 'react-icons/bs';
import './footer.css'
const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className='container'>
            <div className='about'>
                <div className='logo'>
                          <img src='data:image/jpeg;base64,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' alt='logo'></img>
                </div>
                <div className='detail'>
                    <p>We are a team of designers and developers that create high quality WordPress</p>
                    <div className='icon'>
                        <li><RiFacebookFill /></li>
                        <li><AiOutlineInstagram /></li>
                        <li><AiOutlineTwitter /></li>
                        <li><BsYoutube /></li>
                    </div>
                </div>
            </div>
            <div className='account'>
                <h3>My Account</h3>
                <ul>
                    <li>Account</li>
                    <li>Order</li>
                    <li>Cart</li>
                    <li>shipping</li>
                    <li>return</li>
                </ul>
            </div>
            <div className='page'>
                <h3>Pages</h3>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Terma & Condition</li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer