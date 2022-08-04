import React from "react";
import "../assets/styles3.css";
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin} from 'react-icons/bs';


function Footer() {

return (
<footer className="footer">
<div className="container">
   <div className="row">
       <div className="footer-col">
            <h4>company</h4>
            <ul>
                <li><a href="https://github.com/" target="_blank" without rel="noreferrer">about us</a></li>
                <li><a href="https://github.com/" target="_blank" without rel="noreferrer">our services</a></li>
                <li><a href="https://github.com/" target="_blank" without rel="noreferrer">privacy policy</a></li>
                <li><a href="https://github.com/" target="_blank" without rel="noreferrer">affiliate program</a></li>
            </ul>
       </div>
<div className="footer-col">
            <h4>get help</h4>
            <ul>
                <li><a href="https://github.com/" target="_blank" without rel="noreferrer">FAQ</a></li>
                <li><a href="https://github.com/" target="_blank" without rel="noreferrer">shipping</a></li>
                <li><a href="https://github.com/" target="_blank" without rel="noreferrer">order status</a></li>
                <li><a href="https://github.com/" target="_blank" without rel="noreferrer">payment options</a></li>
            </ul>
       </div>
<div className="footer-col">
            <h4>online shop</h4>
            <ul>
                <li><a href="https://github.com/" target="_blank" without rel="noreferrer">backpack</a></li>
                <li><a href="https://github.com/" target="_blank" without rel="noreferrer">shoes</a></li>
                <li><a href="https://github.com/" target="_blank" without rel="noreferrer">trail articles</a></li>
            </ul>
       </div>
<div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
                <a href="https://github.com/" target="_blank" without rel="noreferrer"><BsFacebook /></a>
                <a href="https://github.com/" target="_blank" without rel="noreferrer"><BsTwitter /></a>
                <a href="https://github.com/" target="_blank" without rel="noreferrer"><BsInstagram /></a>
                <a href="https://github.com/" target="_blank" without rel="noreferrer"><BsLinkedin /></a>
            </div>
       </div>
   </div>
 </div>
</footer>
);
}
export default Footer;