import { Box, Stack, Typography, useMediaQuery } from '@mui/material'
import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import slide1 from "../../assets/images-and-icons/CategoryFilters/Cooled.png";
import slide2 from "../../assets/images-and-icons/CategoryFilters/Frozen.png";
import slide3 from "../../assets/images-and-icons/CategoryFilters/Imported.png";
import slide4 from "../../assets/images-and-icons/CategoryFilters/Soft.png";
import slide5 from "../../assets/images-and-icons/CategoryFilters/Spiced.png";



import left from "../../assets/images-and-icons/hero/left.svg";
import right from "../../assets/images-and-icons/hero/right.svg";
import { useTranslation } from 'react-i18next';
import HeadSection from '../../Utils/HeadSection';
import { useTheme } from '@emotion/react';
import { Scrollbar } from 'swiper/modules';
import ProductCard from '../../Utils/ProductCard';
const OtherFilter = () => {
    const swiperRef = useRef(null); // مرجع للسلايدر
    const { t, i18n } = useTranslation('other');
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down('sm'));
    const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const isMd = useMediaQuery(theme.breakpoints.between('md', 'lg'));
    const spaceBetween = isXs ? 12 : isSm ? 14 : 16
    const slides = [
      { img: slide1,type:"لحم متبل" },
      { img: slide2,type:"لحم مبرد" },
      { img: slide3,type:"لحم متبل" },
      { img: slide4,type:"لحم متبل" },

      { img: slide5,type:"لحم متبل" },

      { img: slide3,type:"لحم شرائح" }
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
    <Stack  gap={"32px"} sx={{ paddingY: { xs: "32px", sm: "48px", md: "64px" }, paddingX: { xs: "28px", sm: "32px", md: "128px",lg:"200px" ,xl:"20%"}}}>
        <HeadSection name={t('name')} more={t("more")} />
        <Box sx={{position:"relative"}}>
      <Swiper
        ref={swiperRef} // استخدام المرجع
        dir='rtl'
        slidesPerView={isXs ? 2 : isSm? 2.5:isMd?3.3:4}
        initialSlide={0}
        spaceBetween={spaceBetween}
        modules={[Scrollbar]} 
        scrollbar={{ draggable: true }}
        onSlideChange={(swiper) => console.log('Slide index changed to:', swiper.activeIndex)}
        style={{paddingBottom:"20px"}}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} style={{position:"relative"}}>
            {/* <Box
              component="img"
              sx={{
                maxWidth: "272px",
                height: "272px",
                borderRadius: "32px",
              }}
              alt={`Slide ${index + 1}`}
              src={slide.img}
            />
            <Stack sx={{position:"absolute",color:"colors.white0",bottom:"20px",left:0}}>
              <Typography >{slide.type}</Typography>

            </Stack> */}
            <ProductCard image={slide.img} name={slide.type} />
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
    
    </Stack>
  )
}

export default OtherFilter