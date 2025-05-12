import React from 'react'
import MainLogo from "../assests/images/logo/riya logo.png";
import { FiUser, FiHeart, FiShoppingCart } from "react-icons/fi";
import { Container, Row } from 'reactstrap';

function Header() {
  return (
    <>
    <header>
      {/* punch line */}
      <section className='w-100'>
        <div className='py-1 text-center w-100 text-white-size bg-gradient d-md-block d-none'>
          <p className='m-0'>QUALITY GUARANTEED | SHIPPING WORLDWIDE</p>
        </div>
      </section>
      {/* logo */}
      <section>
        <div className='d-flex flex-basis-auto align-items-center flex-grow-1 p-4'>
          <a href='/' className='navbar-brand position-absolute'>
          <img src={MainLogo} alt="Riya ThirstQuenchers" style={{width: '11rem'}} />
          </a>
          <ul className='navbar-nav ml-auto' style={{ fontSize: '1.2rem' }}>
  <li className="nav-item">
    <a href="/" className="nav-link">
      <FiUser /> Sign In
    </a>
  </li>
  <li className="nav-item">
    <a href="/" className="nav-link">
      <FiHeart /> My Orders
    </a>
  </li>
  <li className="nav-item">
    <a href="/" className="nav-link">
      <FiShoppingCart /> Cart (0)
    </a>
  </li>
</ul>

        </div>
      </section>
      {/* menu */}
      <section>
        <nav className='primary-header d-flex align-items-center '>
          <Container fluid>
            <Row>
              <ul className='navbar-nav mx-auto mb-2 justify-content-center gap-3 ' style={{ fontSize: '1.2rem' }}>
                <li class="nav-item"><a href="/" class="nav-link">Home</a></li>
                <li class="nav-item"><a href="/" class="nav-link">Products</a></li>
                <li class="nav-item"><a href="/" class="nav-link">About Us</a></li>
                <li class="nav-item"><a href="/" class="nav-link">Shipping & Delivery</a></li>
                
              </ul>
            </Row>
          </Container>

        </nav>
      </section>
    </header>
    </>
  )
}

export default Header