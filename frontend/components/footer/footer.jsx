import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
   return (
      <div className="footer">
         <div className="footer-content">
            <ul>
               <span>AIR JORDAN</span>
               <li><Link to="/products">Air Jordan 1</Link></li>
               <li><Link to="/products">Jordan Golf Shoes</Link></li>
               <li><Link to="/products">Air Jordan 3</Link></li>
               <li><Link to="/products">Air Jordan 11</Link></li>
               <li><Link to="/products">Air Jordan 4</Link></li>
               <li><Link to="/products">Jordan 1 Mid</Link></li>
            </ul>
            <ul>
               <span>YEEZY</span>
               <li><Link to="/products">Yeezy Boost 350</Link></li>
               <li><Link to="/products">Yeezy Boost 350 V2</Link></li>
               <li><Link to="/products">Yeezy Boost 700</Link></li>
               <li><Link to="/products">Yeezy 500</Link></li>
               <li><Link to="/products">Yeezy Slides</Link></li>
               <li><Link to="/products">Yeezy Foam RNNR</Link></li>
            </ul>
            <ul>
               <span>POPULAR RELEASES</span>
               <li><Link to="/products">Yeezy Foam RNNR Sulfur</Link></li>
               <li><Link to="/products">Jordan 2 Union LA Grey Fog</Link></li>
               <li><Link to="/products">Jordan 2 Union LA Rattan</Link></li>
               <li><Link to="/products">New Balance 550 Joe Freshgoods</Link></li>
               <li><Link to="/products">New Balance 2002R Joe Freshgoods</Link></li>
               <li><Link to="/products">Nike Air Force 1 Low White</Link></li>
            </ul>
            <ul>
               <span>RESOURCES</span>
               <li><Link to="/about">Partners</Link></li>
               <li><Link to="/about">Developers</Link></li>
               <li><Link to="/about">Community</Link></li>
               <li><Link to="/about">Apps</Link></li>
               <li><Link to="/about">Blog</Link></li>
               <li><Link to="/about">Help Center</Link></li>
            </ul>
            <ul>
               <span><Link to="/about">COMPANY</Link></span>
               <li><Link to="/about">About Us</Link></li>
               <li><Link to="/about">Leadership</Link></li>
               <li><Link to="/about">Investor Relations</Link></li>
               <li><Link to="/about">News</Link></li>
               <li><Link to="/about">Media Kit</Link></li>
               <li><Link to="/about">Careers</Link></li>
            </ul>
         </div>
         <hr className="footer-line" />
         <div className="sub-footer-content">
            <div>
               <p>UNITED STATES &nbsp;|&nbsp; $ USD
               <br />©2022 ALL RIGHTS RESERVED </p>
            </div>
            <div className="social-icons">
               <a href="https://github.com/elhoussine" target="_blank" title="Github">
                  <i className="fa fa-github-square" aria-hidden="true"></i>
               </a>
               <a href="https://www.linkedin.com/in/elhoussine-elouardy/" target="_blank" title="Linkedin">
                  <i className="fa fa-linkedin-square" aria-hidden="true"></i>
               </a>
               <a href="https://angel.co/u/elhoussine-elouardy" target="_blank" title="Angellist">
                  <i className="fa fa-angellist fa-1g" aria-hidden="true"></i>
               </a>
               <a href="https://twitter.com/hou551ne" target="_blank" title="Twitter">
                  <i className="fa fa-twitter-square" aria-hidden="true"></i>
               </a>
               <a href="mailto:elouardy.elhoussine@gmail.com" title="Google">
                  <i className="fa fa-google-plus-square" aria-hidden="true"></i>
               </a>
            </div>
            <div>
               <p className="right">Inspired by StockX
               <br />proudly built by Elhoussine</p>
            </div>
         </div>
      </div>
   )
}

export default Footer;