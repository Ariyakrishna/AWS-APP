import React from 'react'
import HomeBanner from "../../assests/images/homebanner.jpg";
import { Row } from 'reactstrap';
import Products from "./products";
import Customer_review from "./customer_review";

function Index() {
  return (
    <>
    {/* Banner */}
    <div className='d-flex align-items-center justify-content-center' id='homeBanner' style={{ backgroundImage: `url(${HomeBanner})`,height: '650px', backgroundSize: 'cover', backgroundPosition: 'top', backgroundRepeat: 'no-repeat' }}>
      <div>
        <div className='text-center'>
          <h1 className='text-white text-center banner-text'>Grown By Nature - Served By Nature</h1>
          <a href="/"><button type="button" class="btn btn-outline-light px-5 py-2 banner-button">Shop Now</button></a>
        </div>
      </div>
    </div>

    {/* Motto */}

    <div className='mb-4'>
      <div id='detail_1'>
        <Row className='pt-5'>
          <div className='col-sm-8 col-12 mx-auto py-sm-5 pt-4 pb-3'>
            <h1 className='text-center'>Motto of RIYA</h1>
            <p className='text-center'>
            At RIYA, quality isn’t just a promise — it’s our philosophy. Every product we create is a reflection of our dedication to craftsmanship, comfort, and innovation.
<br />
Blending timeless elegance with modern trends, we curate collections that cater to every lifestyle — whether you're seeking everyday essentials or standout pieces that elevate your look and experience.
<br />
With an unwavering passion for design and a deep understanding of our customers' needs, we strive to deliver excellence at every touchpoint. Discover style redefined — where exceptional quality meets unbeatable value, crafted just for you.
            </p>

          </div>
        </Row>
      </div>
    </div>

    {/* products */}
    <Products />

    {/* Customer Review */}
    <Customer_review />
    </>
  )
}

export default Index