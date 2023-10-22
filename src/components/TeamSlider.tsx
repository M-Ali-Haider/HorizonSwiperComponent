import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import SwiperCore from 'swiper/core';
import imager from './SwiperImager.webp';
import LocationLogo from './siLocation.svg';
import './TeamSlider.css';

SwiperCore.use([Navigation, Pagination]);

function TeamSlider() {

  const interleaveOffset = 0.5;
  return (
    <Swiper
      allowTouchMove={false}
      watchSlidesProgress={true}  
      speed={900}
      navigation={true}
      pagination={{ clickable: true }}
      className="swiper"
      onProgress={(swiper)=>{
            for (let i = 0; i < swiper.slides.length; i++) {
                let slideProgress= (swiper.slides[i] as any).progress;
                let innerOffset = swiper.width * interleaveOffset;
                let innerTranslate = slideProgress * innerOffset;
                (swiper.slides[i].querySelector('.slide-inner') as HTMLElement).style.transform = `translate3d(${innerTranslate}px, 0, 0)`;
            }
           
      }}
      onTouchStart={(swiper)=>{
            for (let i = 0; i < swiper.slides.length; i++) {
                swiper.slides[i].style.transition = '';
            }
      }}
      onSetTransition={(swiper,speed)=>{
        for (let i = 0; i < swiper.slides.length; i++) {
            swiper.slides[i].style.transition = speed + 'ms';
            (swiper.slides[i].querySelector('.slide-inner')as HTMLElement).style.transition = speed + 'ms';
        }
      }}>
        
    <div className="meet-the-team">Meet the team!</div>
      <SwiperSlide>
        <div className="slide-inner">
          <img src={imager} alt=""/>
          <div className="slide-inner-absolute">
            <div className="si-heading">Hi, I'm Hamza</div>
            <div className="si-location"><img src={LocationLogo} alt="" srcSet="" />Islamabad</div>
            <div className="si-position">UI/UX Designer</div>
          </div>
          <div className="slide-inner-number">1</div>
          <div className="cv-container">
            CV
          </div>
        </div>
        
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-inner">
          <img src={imager} alt=""/>
          <div className="slide-inner-absolute">
            <div className="si-heading">Hi, I'm Abdullah</div>
            <div className="si-location"><img src={LocationLogo} alt="" srcSet="" />Islamabad</div>
            <div className="si-position">Web Developer</div>
          </div>
          <div className="slide-inner-number">2</div>
          <div className="cv-container">
            CV
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-inner">
          <img src={imager} alt=""/>
          <div className="slide-inner-absolute">
            <div className="si-heading">Hi, I'm Ali</div>
            <div className="si-location"><img src={LocationLogo} alt="" srcSet="" />Islamabad</div>
            <div className="si-position">Web Developer</div>
          </div>
          <div className="slide-inner-number">3</div>
          <div className="cv-container">
            CV
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    
  );
}
export default TeamSlider;
