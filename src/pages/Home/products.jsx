import React, { useRef, useEffect, useState } from 'react';
import product1 from '../../assests/images/products/Mbanner.jpg';
import product2 from '../../assests/images/products/NAATUSAKKARAI.jpg';
import product3 from '../../assests/images/products/BLACKPEPPER.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function Products() {
  const [swiperReady, setSwiperReady] = useState(false);

  const bestSellersPrev = useRef(null);
  const bestSellersNext = useRef(null);
  const newArrivalsPrev = useRef(null);
  const newArrivalsNext = useRef(null);
  const trendingPrev = useRef(null);
  const trendingNext = useRef(null);

  const bestSellers = [
    { id: 1, image: product1, title: 'Immunity Booster' },
    { id: 2, image: product2, title: 'Naatusakkarai' },
    { id: 3, image: product3, title: 'Black Pepper' },
    { id: 1, image: product1, title: 'Immunity Booster' },
    { id: 2, image: product2, title: 'Naatusakkarai' },
    { id: 3, image: product3, title: 'Black Pepper' },
    { id: 2, image: product2, title: 'Naatusakkarai' },
    { id: 3, image: product3, title: 'Black Pepper' },
  ];

  const newArrivals = [
    { id: 4, image: product2, title: 'Fresh Palm Sugar' },
    { id: 5, image: product1, title: 'Herbal Honey' },
    { id: 6, image: product3, title: 'Organic Pepper' },
    { id: 4, image: product2, title: 'Fresh Palm Sugar' },
    { id: 5, image: product1, title: 'Herbal Honey' },
    { id: 6, image: product3, title: 'Organic Pepper' },
    { id: 5, image: product1, title: 'Herbal Honey' },
    { id: 6, image: product3, title: 'Organic Pepper' },
  ];

  const whatsTrending = [
    { id: 7, image: product3, title: 'Trending Turmeric' },
    { id: 8, image: product2, title: 'Viral Naatusakkarai' },
    { id: 9, image: product1, title: 'Buzzing Immunity Booster' },
    { id: 7, image: product3, title: 'Trending Turmeric' },
    { id: 8, image: product2, title: 'Viral Naatusakkarai' },
    { id: 9, image: product1, title: 'Buzzing Immunity Booster' },
    { id: 8, image: product2, title: 'Viral Naatusakkarai' },
    { id: 9, image: product1, title: 'Buzzing Immunity Booster' },
  ];

  useEffect(() => {
    setSwiperReady(true);
  }, []);

  const renderSwiper = (data, prevRef, nextRef) => (
    <Swiper
      modules={[Navigation]}
      navigation={{
        prevEl: prevRef.current,
        nextEl: nextRef.current,
      }}
      onInit={(swiper) => {
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
        swiper.navigation.init();
        swiper.navigation.update();
      }}
      spaceBetween={40}
      slidesPerView={1}
      loop={false}
      breakpoints={{
        768: { slidesPerView: 2 },
        992: { slidesPerView: 3 },
      }}
    >
      {data.map((product) => (
        <SwiperSlide key={product.id}  className='product-swiper'>
          <div className="product-slide">
            <div className="product-container">
              <img
                src={product.image}
                alt={product.title}
                className="img-fluid"
                style={{
                  height: '250px',
                  objectFit: 'cover',
                  width: '100%',
                  borderRadius: '8px',
                }}
              />
            </div>
            <h5 className="product-title mt-3">{product.title}</h5>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );

  return (
    <>
      <section>
        <h4 className="text-center py-3 main--title">Shop by Products</h4>
      </section>

      {/* Best Sellers */}
      <section id="multipleTabs">
        <nav className="collectionTabs nav nav-tabs">
          <a href="#" className="nav-item nav-link active group-nav" style={{ border: 'transparent' }}>
            Best Sellers
          </a>
        </nav>
        <div className="mt-4">
          {swiperReady && renderSwiper(bestSellers, bestSellersPrev, bestSellersNext)}
          <div className="d-flex justify-content-end gap-3 mt-4">
            <button ref={bestSellersPrev} className="btn btn-outline-dark px-4 btn-navigation">←</button>
            <button ref={bestSellersNext} className="btn btn-outline-dark px-4 btn-navigation">→</button>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section id="multipleTabs">
        <nav className="collectionTabs nav nav-tabs">
          <a href="#" className="nav-item nav-link active group-nav" style={{ border: 'transparent' }}>
            New Arrivals
          </a>
        </nav>
        <div className="mt-4">
          {swiperReady && renderSwiper(newArrivals, newArrivalsPrev, newArrivalsNext)}
          <div className="d-flex justify-content-end gap-3 mt-4">
            <button ref={newArrivalsPrev} className="btn btn-outline-dark px-4 btn-navigation">←</button>
            <button ref={newArrivalsNext} className="btn btn-outline-dark px-4 btn-navigation">→</button>
          </div>
        </div>
      </section>

      {/* What's Trending */}
      <section id="multipleTabs">
        <nav className="collectionTabs nav nav-tabs">
          <a href="#" className="nav-item nav-link active group-nav" style={{ border: 'transparent' }}>
            What's Trending
          </a>
        </nav>
        <div className="mt-4">
          {swiperReady && renderSwiper(whatsTrending, trendingPrev, trendingNext)}
          <div className="d-flex justify-content-end gap-3 mt-4">
            <button ref={trendingPrev} className="btn btn-outline-dark px-4 btn-navigation">←</button>
            <button ref={trendingNext} className="btn btn-outline-dark px-4 btn-navigation">→</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
