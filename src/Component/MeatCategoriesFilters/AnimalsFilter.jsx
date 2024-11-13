import React, { useRef } from 'react'
import camel from "../../assets/images and icons/CategoryFilters/animals/camel.svg"
import cack from "../../assets/images and icons/CategoryFilters/animals/ckick.svg"
import cow from "../../assets/images and icons/CategoryFilters/animals/cow.svg"
import cowe from "../../assets/images and icons/CategoryFilters/animals/cowe.svg"
import habash from "../../assets/images and icons/CategoryFilters/animals/habash.svg"
import left from "../../assets/images and icons/hero/left.svg"
import right from "../../assets/images and icons/hero/right.svg"

import { Box, Stack, Typography } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useTranslation } from 'react-i18next'
import HeadSection from '../../Utils/HeadSection'
const AnimalsFilter = () => {
    const swiperRef = useRef(null); // مرجع للسلايدر
    const { t, i18n } = useTranslation('animals');
  
    // وظيفة الانتقال للشريحة التالية
    const handleNext = () => {
      swiperRef.current.swiper.slideNext();
    };
  
    // وظيفة الانتقال للشريحة السابقة
    const handlePrev = () => {
      swiperRef.current.swiper.slidePrev();
    };
    const data =[
        {name:"جمل",img:camel},
        {name:"دجاج",img:cack},
        {name:"بقرة",img:cow},
        {name:"عجل",img:cowe},
        {name:"حبش",img:habash},
    ]
  return (
    <Stack gap={"65px"} sx={{ paddingY: { xs: "32px", sm: "48px", md: "64px" }, paddingX: { xs: "28px", sm: "32px", md: "128px" } }}>
       <HeadSection name={t('name')} more={t('more')} />
        <Box sx={{position:"relative"}}>
      <Swiper
    
        ref={swiperRef} // استخدام المرجع
        dir='rtl'
        slidesPerView={3.5}
        initialSlide={1}
        spaceBetween={64}
        centeredSlides
        onSlideChange={(swiper) => console.log('Slide index changed to:', swiper.activeIndex)} // تسجيل فهرس الشريحة الحالية
      >
        {data.map((slide, index) => (
          <SwiperSlide key={index} style={{position:"relative"}}>
            <Stack sx={{padding:"10px",borderBottom:"solid 2px" ,borderBottomColor:"colors.gray0"}} justifyContent={"center"} alignItems={"center"} gap={"64px"}>
                <Box component={"img"} src={slide.img} sx={{width:{xs:"50px",sm:"60px",md:"80px",lg:"100px"}, height:{xs:"30px",sm:"40px",md:"50px",lg:"66px"}}}/>
                <Typography fontWeight={600} fontSize={"20px"} color={"text.titles"} sx={{transform:"translateX(50%)"}}>{slide.name}</Typography>
            </Stack>
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

export default AnimalsFilter