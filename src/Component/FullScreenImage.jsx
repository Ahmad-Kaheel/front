import { Box, Dialog, DialogContent } from '@mui/material'
import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import left from "../assets/images-and-icons/hero/left.svg";
import right from "../assets/images-and-icons/hero/right.svg";
import { Close } from '@mui/icons-material';

const FullScreenImage = ({ open, setOpen, slides }) => {
  const swiperRef = useRef(null);

  const handleNext = () => {
    swiperRef.current.swiper.slideNext();
  };

  const handlePrev = () => {
    swiperRef.current.swiper.slidePrev();
  };

  return (
    <Dialog
      sx={{ height: "100%", width: "100%", maxWidth: "100%", }} // تعيين عرض وحجم كامل
      onClose={() => setOpen(false)}
      open={open}
      fullWidth
      maxWidth="md"
    >
      <DialogContent >
        <Box onClick={()=>setOpen(false)} sx={{width:"30px",height:"30px",border:1,cursor:"pointer",borderRadius:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <Close sx={{cursor:"pointer",fontSize:"20px",}}/>
        </Box>
      <Box sx={{ position: "relative"}} >
        <Swiper
          ref={swiperRef}
          dir='rtl'
          slidesPerView={1}
          onSlideChange={(swiper) => console.log('Slide index changed to:', swiper.activeIndex)}
          scrollbar={{ draggable: true }}
          modules={[Scrollbar]}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} >
              <Box
                component="img"
                sx={{
                  width: "100%",
                  height: "80vh", // عرض الصورة ليكون مناسبًا لارتفاع النافذة
                }}
                alt={`Slide ${index + 1}`}
                src={slide}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* السهم الأيسر */}
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

        {/* السهم الأيمن */}
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
      </DialogContent>
    </Dialog>
  )
}

export default FullScreenImage;
