import { Box, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import slide1 from "../../assets/images-and-icons/hero/slide1.jpg";
import slide2 from "../../assets/images-and-icons/hero/slide2.jpg";
import slide3 from "../../assets/images-and-icons/hero/slide3.jpg";
import left from "../../assets/images-and-icons/hero/left.svg";
import right from "../../assets/images-and-icons/hero/right.svg";
import { useTranslation } from 'react-i18next';
import ProductCard from '../../Utils/ProductCard';
import HeadSection from '../../Utils/HeadSection';
import { Scrollbar } from 'swiper/modules';



const CheifChoices = () => {
    const swiperRef = useRef(null);
    const { t, i18n } = useTranslation('choices');
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down('sm'));
    const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const isMd = useMediaQuery(theme.breakpoints.between('md', 'lg'));
    const spaceBetween = isXs ? 20 : isSm ? 30 : 32


   
    const slides = [
      { img: slide2, name: "لحم مفروم", price: "1000 ر.س" },
      { img: slide1, name: "لحم كفتة", price: "100 ر.س" },
      { img: slide3, name: "183  لحم ابيض", price: "156 ر.س" },
      { img: slide2, name: "لحم مفروم", price: "1000 ر.س" },
      { img: slide1, name: "لحم كفتة", price: "100 ر.س" },
      { img: slide3, name: "183  لحم ابيض", price: "156 ر.س" }
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
                     slidesPerView={isXs ? 1 : isSm? 1.5 :isMd?2.5:3}
                     initialSlide={0}
                     spaceBetween={spaceBetween} // Adjusted gap between slides
                     modules={[Scrollbar]} 
                     scrollbar={{ draggable: true }}
                     style={{paddingBottom:"20px"}}
                  >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index} style={{ position: "relative" }}>
                            <ProductCard image={slide.img} name={slide.name} price={slide.price} />
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

export default CheifChoices