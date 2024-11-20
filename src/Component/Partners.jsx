import { Box, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import pa1 from "../assets/images-and-icons/partners/pa1.png"
import pa2 from "../assets/images-and-icons/partners/pa2.png"
import pa3 from "../assets/images-and-icons/partners/pa3.png"
import left from "../assets/images-and-icons/hero/left.svg";
import right from "../assets/images-and-icons/hero/right.svg";
import { useTranslation } from 'react-i18next';
import HeadSection from '../Utils/HeadSection';
import ReviewCard from '../Utils/ReviewCard';
import { Scrollbar } from 'swiper/modules';


const Partners = () => {
    const swiperRef = useRef(null);
    const { t, i18n } = useTranslation('partners');
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down('sm'));
    const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const isMd = useMediaQuery(theme.breakpoints.between('md', 'lg'));
    const spaceBetween = isXs ? 20 : isSm ? 30 : 32


   
    const slides = [
      {img:pa1},{img:pa2},{img:pa3},{img:pa2},  {img:pa1},{img:pa1},{img:pa2},{img:pa1},{img:pa2},
    ];

    const handleNext = () => {
      swiperRef.current.swiper.slideNext();
    };

    const handlePrev = () => {
      swiperRef.current.swiper.slidePrev();
    };
  return (
    <Stack gap={{ xs: "32px", sm: "48px", md: "65px" }}  sx={{ paddingY: { xs: "32px", sm: "48px", md: "64px" }, paddingX: { xs: "28px", sm: "32px", md: "128px",lg:"200px",xl:"256px" } }}>
            <HeadSection name={t('name')} more={t('more')} />
            <Box sx={{ position: "relative" }}>
            <Swiper
                     ref={swiperRef}
                     dir="rtl"
                     slidesPerView={isXs ? 2.5 : isSm? 3.5 :isMd?4.5:5.5}
                     initialSlide={0}
                     spaceBetween={spaceBetween} // Adjusted gap between slides
                     modules={[Scrollbar]} 
                     scrollbar={{ draggable: true }}
                     style={{paddingBottom:"20px"}}
                  >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index} style={{ position: "relative" }}>
                            <ReviewCard userName={slide.name} review={slide.desc} userImage={slide.img} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Left Arrow */}
                <Box
                    onClick={handleNext}
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

                {/* Right Arrow */}
                <Box
                    onClick={handlePrev}
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

export default Partners