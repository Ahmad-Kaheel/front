import React, { useEffect, useRef } from 'react';
import Drawer from '@mui/material/Drawer';
import { Box, Button, Stack, Typography } from '@mui/material';
import close from "../assets/images-and-icons/basket/close.svg";
import productImg from "../assets/images-and-icons/hero/slide1.jpg";
import ProductCard from '../Utils/ProductCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'
import slide1 from "../assets/images-and-icons/hero/slide1.jpg";
import slide2 from "../assets/images-and-icons/hero/slide2.jpg";
import slide3 from "../assets/images-and-icons/hero/slide3.jpg";
import left from "../assets/images-and-icons/hero/left.svg";
import right from "../assets/images-and-icons/hero/right.svg";
import { useTranslation } from 'react-i18next';
export default function DiscoverDrawer({ openDrawer, setOpenDrawer }) {
    const {t,i18n} = useTranslation("discoverDrawer")
    const swiperRef = useRef(null); // مرجع للسلايدر

    const slides = [
        { img1: slide2,img2:slide3 },
        { img1: slide3,img2:slide2 },
        { img1: slide1,img2:slide2 },
        { img1: slide2,img2:slide1 },
        { img1: slide1,img2:slide3 },
        { img1: slide3,img2:slide1 },
        { img1: slide2,img2:slide3 },
        { img1: slide1,img2:slide2 },
        { img1: slide1,img2:slide3 },

      ];
      const handleNext = () => {
        swiperRef.current.swiper.slideNext();
      };
    
      // وظيفة الانتقال للشريحة السابقة
      const handlePrev = () => {
        swiperRef.current.swiper.slidePrev();
      };
    return (
        <Drawer 
        open={openDrawer} 
        onClose={()=>setOpenDrawer(false)} 
        >
          <Stack sx={{width:"640px", paddingX:"32px", paddingBottom:"32px",bgcolor:"colors.white10"}} gap={"64px"}>
            {/* محتويات السلة */}
            <Stack className='gradient-border' flexDirection={"row"} justifyContent={"space-between"} sx={{ paddingY:"32px" }}>
              <Stack flexDirection={"row"} gap={"15px"}>
                <Typography fontWeight={600} fontSize={"16px"} color='colors.black0'>{t("discover")}</Typography>
              </Stack>
              <Box 
                component="img" 
                src={close} 
                onClick={()=>setOpenDrawer(false)} 
                sx={{ cursor: "pointer", color: "colors.black0" }} 
              />
            </Stack>
            <Stack direction={"row"} gap="20px"> 
                <ProductCard image={productImg} name={"لحم مفروم"} price={"300ر.س"}/> 
                <ProductCard image={productImg} name={"لحم مفروم"} price={"300ر.س"}/> 
            </Stack>
            <Stack gap={"32px"}>
                <Stack direction={"row"} alignItems={"center"} sx={{bgcolor:"white",padding:"16px 32px",borderRadius:"16px"}} justifyContent={"space-between"}>
                    <Stack>
                        <Typography>لحم برتغالي</Typography>
                        <Typography>من اجود اللحوم في العالم </Typography>
                    </Stack>
                    <Box component={"img"} src={productImg} sx={{width:"96px" ,height:"128px",borderRadius:"16px"}}/>
                </Stack>
                <Stack direction={"row"} alignItems={"center"} sx={{bgcolor:"white",padding:"16px 32px",borderRadius:"16px"}} justifyContent={"space-between"}>
                    <Stack>
                        <Typography>لحم برتغالي</Typography>
                        <Typography>من اجود اللحوم في العالم </Typography>
                    </Stack>
                    <Box component={"img"} src={productImg} sx={{width:"96px" ,height:"128px",borderRadius:"16px"}}/>
                </Stack>
            </Stack>
            <Stack flexDirection={"row"} justifyContent={"space-between"}>
                <Stack gap={"32px"} alignItems={"center"}>
                    <Box component={"img"} src={productImg} sx={{width:"250px",height:"250px",borderRadius:"16px"}}/>
                    <Typography fontWeight={600} fontSize={"16px"}>توصيل سريع</Typography>
                </Stack>
                <Stack gap={"32px"} alignItems={"center"}>
                    <Box component={"img"} src={productImg} sx={{width:"250px",height:"250px",borderRadius:"16px"}}/>
                    <Typography fontWeight={600} fontSize={"16px"}>توصيل سريع</Typography>
                </Stack>
            </Stack>
            <Box sx={{position:"relative"}}>
                <Swiper
                
                    ref={swiperRef} // استخدام المرجع
                    dir='rtl'
                    slidesPerView={4}
                    initialSlide={0}
                    spaceBetween={"16px"}
                    onSlideChange={(swiper) => console.log('Slide index changed to:', swiper.activeIndex)} // تسجيل فهرس الشريحة الحالية
                >
                    {slides.map((slide, index) => (
                    <SwiperSlide key={index} style={{position:"relative"}}>
                        <Stack gap={"16px"} >
                            <Box
                            component="img"
                            sx={{
                                width: "128px",
                                height: "64px",
                                borderRadius: "8px",
                                cursor:"pointer"
                            }}
                            alt={`Slide ${index + 1}`}
                            src={slide.img1}

                            />
                            <Box
                            component="img"
                            sx={{
                                width: "128px",
                                height: "64px",
                                borderRadius: "8px",
                                cursor:"pointer"

                            }}
                            alt={`Slide ${index + 1}`}
                            src={slide.img2}
                            />
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
      </Drawer>
  );
}
