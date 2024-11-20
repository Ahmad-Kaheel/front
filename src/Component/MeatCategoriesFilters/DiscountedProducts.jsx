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
import { Scrollbar } from 'swiper/modules';

const DiscountedProducts = () => {
    const swiperRef = useRef(null);
    const { t, i18n } = useTranslation('discount');
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down('sm'));
    const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const isMd = useMediaQuery(theme.breakpoints.between('md', 'lg'));
    const spaceBetween = isXs ? 20 : isSm ? 30 :32

   
    const slides = [
      { img: slide2, oldPrice: "1233 ريال سعودي", newPrice: "1000 ريال سعودي" },
      { img: slide1, oldPrice: "126 ريال سعودي", newPrice: "100 ريال سعودي" },
      { img: slide3, oldPrice: "183 ريال سعودي", newPrice: "156 ريال سعودي" },
      { img: slide1, oldPrice: "126 ريال سعودي", newPrice: "100 ريال سعودي" },
      { img: slide2, oldPrice: "1233 ريال سعودي", newPrice: "1000 ريال سعودي" },

    ];

    const handleNext = () => {
      swiperRef.current.swiper.slideNext();
    };

    const handlePrev = () => {
      swiperRef.current.swiper.slidePrev();
    };

    return (
        <Stack gap={{ xs: "32px" }}  sx={{ paddingY: { xs: "32px", sm: "48px", md: "64px" }, paddingX: { xs: "28px", sm: "32px", md: "128px",lg:"200px",xl:"256px" } }}>
            <Stack flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"}>
                <Typography fontWeight={700} sx={{ fontSize: { xs: "20px", sm: "30px", md: "36px" } }} color={"colors.black0"}>
                    {t('name')}
                </Typography>
            </Stack>
            <Box sx={{ position: "relative" }}>
                  <Swiper
                    ref={swiperRef}
                    dir="rtl"
                    slidesPerView={isXs ? 1 : isSm? 1.5 : 3}
                    initialSlide={0}
                    spaceBetween={spaceBetween} // Adjusted gap between slides
                    modules={[Scrollbar]} 
                    scrollbar={{ draggable: true }}
                    style={{paddingBottom:"20px"}}
                  >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index} >
                            <Box
                                component="img"
                                sx={{
                                    width: "100%",
                                    height: "400px",
                                    borderRadius: "16px",
                                    position:"relative"
                                }}
                                alt={`Slide ${index + 1}`}
                                src={slide.img}
                            />
                            <Box
                                sx={{
                                    position: "absolute",
                                    width: "100%",
                                    height: "100%",
                                    left: "0",
                                    top: "0",
                                    zIndex: 10,
                                    borderRadius: "16px",
                                    bgcolor: "rgba(0,0,0,0.4)"
                                }}
                            />
                            <Stack sx={{ position: "absolute", color: "colors.white0", bottom: "40px", right: "20px", fontWeight: 700, zIndex: 11 }}>
                                <Box sx={{ position: "relative" }}>
                                    <Typography fontWeight={700} sx={{ fontSize: { xs: "11px", sm: "15px", md: "20px"} }}>{slide.oldPrice}</Typography>
                                    <Box width={"86%"} height={"3px"} sx={{ bgcolor: "colors.red0", position: "absolute", right: "0", top: "50%" }} />
                                </Box>
                                <Typography fontWeight={700} sx={{ fontSize: { xs: "15px", sm: "20px", md: "24px"} }}>{slide.newPrice}</Typography>
                            </Stack>
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
    );
}

export default DiscountedProducts;
