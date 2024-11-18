import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Box } from '@mui/material';
import slide1 from "../../assets/images-and-icons/hero/slide1.jpg";
import slide2 from "../../assets/images-and-icons/hero/slide2.jpg";
import slide3 from "../../assets/images-and-icons/hero/slide3.jpg";
import left from "../../assets/images-and-icons/hero/left.svg";
import right from "../../assets/images-and-icons/hero/right.svg";

const Hero = () => {
  const swiperRef = useRef(null); // مرجع للسلايدر
  const slides = [
    { img: slide2 },
    { img: slide1 },
    { img: slide3 }
  ];

  // وظيفة الانتقال للشريحة التالية
  const handleNext = () => {
    swiperRef.current.swiper.slideNext();
  };

  // وظيفة الانتقال للشريحة السابقة
  const handlePrev = () => {
    swiperRef.current.swiper.slidePrev();
  };

  return (
    <Box sx={{ paddingY: { xs: "32px", sm: "48px", md: "64px" }, paddingX: { xs: "28px", sm: "32px", md: "128px",lg:"256px"} }}>
      <Box sx={{position:"relative"}}>
      <Swiper
    
        ref={swiperRef} // استخدام المرجع
        dir='rtl'
        slidesPerView={1}
        onSlideChange={(swiper) => console.log('Slide index changed to:', swiper.activeIndex)} 
        scrollbar={{ draggable: true }} // إضافة شريط تمرير يمكن سحبه
        modules={[Scrollbar]} 
        style={{ paddingBottom: '20px' }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Box
              component="img"
              sx={{
                width: "100%",
                height: "500px",
                borderRadius: "32px",
              }}
              alt={`Slide ${index + 1}`}
              src={slide.img}
            />
          </SwiperSlide>
        ))}
      
      </Swiper>
          {/* السهم الأيسر */}
          <Box
        onClick={handleNext} // إضافة وظيفة للنقر
        sx={{
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "48px",
          height: "48px",
          left: "0px",
          top: "50%",
          boxShadow: '8px 0px 16px 16px #1919191F',
          transform: "translate(-50%, -50%)",
          zIndex: 10,
          cursor: "pointer",
          bgcolor: "colors.white0",
          borderRadius: "50%"
        }}
      >
        <img src={left} alt="Next" />
      </Box>
      {/* السهم الأيمن */}
      <Box
        onClick={handlePrev} // إضافة وظيفة للنقر
        sx={{
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: '8px 0px 16px 4px #1919191F',
          width: "48px",
          height: "48px",
          right: "0px",
          top: "50%",
          transform: "translate(50%, -50%)",
          zIndex: 10,
          cursor: "pointer",
          bgcolor: "colors.white0",
          borderRadius: "50%"
        }}
      >
        <img src={right} alt="Previous" />
      </Box>
      </Box>
    
    </Box>
  );
};

export default Hero;
