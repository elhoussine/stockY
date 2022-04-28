import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
   return (
      <div className="footer">
         <div className="footer-content">
            <ul>
               <span>AIR JORDAN</span>
               <li>Air Jordan 1</li>
               <li>Jordan Golf Shoes</li>
               <li>Air Jordan 3</li>
               <li>Air Jordan 11</li>
               <li>Air Jordan 4</li>
               <li>Jordan 1 Mid</li>
            </ul>

            <ul>
               <span>YEEZY</span>
               <li>Yeezy Boost 350</li>
               <li>Yeezy Boost 350 V2</li>
               <li>Yeezy Boost 700</li>
               <li>Yeezy 500</li>
               <li>Yeezy Slides</li>
               <li>Yeezy Foam RNNR</li>
            </ul>

            <ul>
               <span>POPULAR RELEASES</span>
               <li>Yeezy Foam RNNR Sulfur</li>
               <li>Jordan 2 Union LA Grey Fog</li>
               <li>Jordan 2 Union LA Rattan</li>
               <li>New Balance 550 Joe Freshgoods</li>
               <li>New Balance 2002R Joe Freshgoods</li>
               <li>Nike Air Force 1 Low White</li>
            </ul>

            <ul>
               <span>RESOURCES</span>
               <li>Partners</li>
               <li>Developers</li>
               <li>Community</li>
               <li>Apps</li>
               <li>Blog</li>
               <li>Help Center</li>
            </ul>

            <ul>
               <span>COMPANY</span>
               <li>About Us</li>
               <li>Leadership</li>
               <li>Investor Relations</li>
               <li>News</li>
               <li>Media Kit</li>
               <li>Careers</li>
            </ul>
         </div>
         <hr className="footer-line" />
         <div className="sub-footer-content">
            <div>
               <span>UNITED STATES &nbsp;|&nbsp; $ USD</span>
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
               <p>Inspired by StockX, <br /> proudly built by Elhoussine</p>
            </div>
         </div>
      </div>
   )
}

export default Footer;