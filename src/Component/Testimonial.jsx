import React, { useEffect } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Testimonials = () => {
  useEffect(() => {
    // Initialize Swiper
    new Swiper('.testimonials-slider', {
      speed: 600,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 20
        }
      }
    });


    
  //  * Clients Slider
 
   new Swiper('.clients-slider', {
     speed: 400,
     loop: true,
     autoplay: {
       delay: 5000,
       disableOnInteraction: false
     },
     slidesPerView: 'auto',
     pagination: {
       el: '.swiper-pagination',
       type: 'bullets',
       clickable: true
     },
     breakpoints: {
       320: {
         slidesPerView: 2,
         spaceBetween: 40
       },
       480: {
         slidesPerView: 3,
         spaceBetween: 60
       },
       640: {
         slidesPerView: 4,
         spaceBetween: 80
       },
       992: {
         slidesPerView: 6,
         spaceBetween: 120
       }
     }
   });

    // Initialize AOS
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  return (


<>


{/* <!-- ======= Clients Section ======= --> */}
  <section id="clients" className="clients mt-5 "style={{marginTop:'10px'}}>
  <div className="container" data-aos="zoom-in">
    <div className="clients-slider swiper">
      <div className="swiper-wrapper align-items-center" style={{marginTop:'30px'}}>
        <div className="swiper-slide"><img src="assets/img/clients/client-1.png" className="img-fluid" alt='img' /></div>
        <div className="swiper-slide"><img src="assets/img/clients/client-2.png" className="img-fluid" alt='img' /></div>
        <div className="swiper-slide"><img src="assets/img/clients/client-3.png" className="img-fluid" alt='img'/></div>
        <div className="swiper-slide"><img src="assets/img/clients/client-4.png" className="img-fluid" alt='img' /></div>
        <div className="swiper-slide"><img src="assets/img/clients/client-5.png" className="img-fluid" alt='img'/></div>
        <div className="swiper-slide"><img src="assets/img/clients/client-6.png" className="img-fluid" alt='img'/></div>
        <div className="swiper-slide"><img src="assets/img/clients/client-7.png" className="img-fluid" alt='img'/></div>
        <div className="swiper-slide"><img src="assets/img/clients/client-8.png" className="img-fluid" alt='img' /></div>
      </div>
      <div className="swiper-pagination" />
    </div>
  </div>
</section>

    {/* <!-- End Clients Section --> */}

    <section id="testimonials" className="testimonials ">
      <div className="container" data-aos="fade-up">
    <div className="section-title">
      <h2>Testimonials</h2>
      <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.</p>
    </div>
    <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay={100}>
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <div className="testimonial-wrap">
            <div className="testimonial-item">
              <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt='img' />
              <h3>Saul Goodman</h3>
              <h4>Ceo &amp; Founder</h4>
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left" />
                Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                <i className="bx bxs-quote-alt-right quote-icon-right" />
              </p>
            </div>
          </div>
        </div>{/* End testimonial item */}
        <div className="swiper-slide">
          <div className="testimonial-wrap">
            <div className="testimonial-item">
              <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt='img'/>
              <h3>Sara Wilsson</h3>
              <h4>Designer</h4>
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left" />
                Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                <i className="bx bxs-quote-alt-right quote-icon-right" />
              </p>
            </div>
          </div>
        </div>{/* End testimonial item */}
        <div className="swiper-slide">
          <div className="testimonial-wrap">
            <div className="testimonial-item">
              <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img"alt='img' />
              <h3>Jena Karlis</h3>
              <h4>Store Owner</h4>
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left" />
                Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                <i className="bx bxs-quote-alt-right quote-icon-right" />
              </p>
            </div>
          </div>
        </div>{/* End testimonial item */}
        <div className="swiper-slide">
          <div className="testimonial-wrap">
            <div className="testimonial-item">
              <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt='img'/>
              <h3>Matt Brandon</h3>
              <h4>Freelancer</h4>
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left" />
                Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                <i className="bx bxs-quote-alt-right quote-icon-right" />
              </p>
            </div>
          </div>
        </div>{/* End testimonial item */}
        <div className="swiper-slide">
          <div className="testimonial-wrap">
            <div className="testimonial-item">
              <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img"alt='img' />
              <h3>John Larson</h3>
              <h4>Entrepreneur</h4>
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left" />
                Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat esse veniam culpa fore nisi cillum quid.
                <i className="bx bxs-quote-alt-right quote-icon-right" />
              </p>
            </div>
          </div>
        </div>{/* End testimonial item */}
      </div>
      <div className="swiper-pagination" />
    </div>
  </div>
    </section>
   
    </>
  );
};

export default Testimonials;
