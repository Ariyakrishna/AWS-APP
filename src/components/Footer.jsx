import React from "react";
import { FiTruck, FiShield, FiCheckCircle, FiHeadphones } from "react-icons/fi";  // Importing icons
import Certified from "../assests/images/certified.jpeg";


const Footer = () => {
  return (
    <footer className="footer">
      {/* Footer Highlights */}
      <div className="footer-highlights">
        <div className="highlight-item">
          <FiTruck size={24} />
          <div className="highlight-text">Quick Shipping</div>
        </div>
        <div className="highlight-item">
          <FiShield size={24} />
          <div className="highlight-text">Secured Payments</div>
        </div>
        <div className="highlight-item">
          <FiCheckCircle size={24} />
          <div className="highlight-text">Quality Guaranteed</div>
        </div>
        <div className="highlight-item">
          <FiHeadphones size={24} />
          <div className="highlight-text">
            Customer Support
            <div className="support-time">10 am to 6 pm</div>
          </div>
        </div>
      </div>

      {/* Footer Middle Section */}
      <div className="footer-middle">
        {/* Footer Description */}
        <div className="footer-description">
          <h2>Fresh Grocery Delivered to Your Doorstep</h2>
          <p>
            We bring the freshest produce, organic groceries, and pantry essentials to your doorstep. 
            Enjoy hassle-free shopping with great prices, fast delivery, and a wide selection of items.
          </p>
        </div>

        {/* Footer Links */}
        <div className="footer-links">
          <div className="link-column">
            <h4>Customer Service</h4>
            <ul>
              <li>Contact Us</li>
              <li>Shipping & Delivery</li>
              <li>Returns & Exchanges</li>
              <li>Track Order</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div className="link-column">
            <h4>About Us</h4>
            <ul>
              <li>Our Story</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div className="link-column">
            <h4>Quick Links</h4>
            <ul>
              <li>Shop Now</li>
              <li>Special Offers</li>
              <li>Gift Cards</li>
              <li>Order History</li>
              <li>My Account</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-image">
          <img src={Certified} alt="Footer Image" className="footer-img" />
        </div>
      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-social">
          <a href="#" className="social-icon">FB</a>
          
        </div>
        <div className="footer-copy">
          © 2023 GroceryHub. All rights reserved.
        </div>
        
        {/* Footer Image */}
       
      </div>
    </footer>
  );
};

export default Footer;
