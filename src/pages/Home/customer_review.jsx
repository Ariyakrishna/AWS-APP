import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function Customer_review() {
  const [swiperReady, setSwiperReady] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    setSwiperReady(true);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: 'Priya S.',
      feedback:
        'I’ve been using these organic products for a few months now, and I can genuinely feel the difference . The naatusakkarai reminds me of what my grandmother used to use back in the day.',
      avatar: 'https://via.placeholder.com/80',
    },
    {
      id: 2,
      name: 'Arun M.',
      feedback:
        'The entire ordering process was smooth, and the packaging was eco-friendly, which I really appreciated. You can tell a lot of care goes into how the products are made and shipped.',
      avatar: 'https://via.placeholder.com/80',
    },
    {
      id: 3,
      name: 'Lakshmi R.',
      feedback:
        'I ordered black pepper and turmeric, and the aroma when I opened the packet was unbelievable. It’s rare to find this kind of freshness these days. Will definitely be ordering again!',
      avatar: 'https://via.placeholder.com/80',
    },
    {
      id: 4,
      name: 'Karthik D.',
      feedback:
        'Loved everything about my first order. The customer support was helpful, delivery was quick, and the products exceeded my expectations. My family is hooked!',
      avatar: 'https://via.placeholder.com/80',
    },
    {
      id: 5,
      name: 'Divya N.',
      feedback:
        'Finding pure, chemical-free ingredients online is tough, but this site made it easy. The quality is consistently excellent, and I appreciate the transparency about sourcing.',
      avatar: 'https://via.placeholder.com/80',
    },
  ];
  

  return (
    <>
      <section>
        <h4 className="text-center py-3 custom-testimonial-title">Hear from our customers!</h4>
      </section>

      <section className="mt-4 customer-review" >
        {swiperReady && (
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
            spaceBetween={30}
            slidesPerView={4}
            loop={false}
            breakpoints={{
              768: { slidesPerView: 2 },
              992: { slidesPerView: 4 },
            }}
          >
            {testimonials.map((review) => (
              <SwiperSlide key={review.id} className='customer-review-slide' >
                <div className="card p-4 h-100 shadow-sm rounded-3 testimonialWrapper">
                <p className="text-muted testimonial-text">"{review.feedback}"</p>
                  <div className="d-flex align-items-center mb-3">
                   
                    <small className="mb-0 testimonial-name mt-5">{review.name}</small>
                  </div>
                 
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* Navigation Buttons */}
        <div className="d-flex justify-content-end gap-3 mt-4">
          <button ref={prevRef} className="btn btn-outline-dark px-4 btn-navigation">←</button>
          <button ref={nextRef} className="btn btn-outline-dark px-4 btn-navigation">→</button>
        </div>
      </section>
    </>
  );
}

export default Customer_review;
