import { Stack, Box, Typography } from '@mui/material';
import React, { useRef } from 'react';
import HeadSection from '../Utils/HeadSection';
import milk from '../assets/images-and-icons/OurCategories/milk.png';
import oil from '../assets/images-and-icons/OurCategories/oil.png';
import so from '../assets/images-and-icons/OurCategories/so.png';
import fruits from '../assets/images-and-icons/OurCategories/fruits.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import left from '../assets/images-and-icons/hero/left.svg';
import right from '../assets/images-and-icons/hero/right.svg';

const OurCategories = () => {
  const data = [
    { title: 'أجبان وألبان', images: [milk] },
    { title: 'زيوت', images: [oil] },
    { title: 'بهارات وأصناف أخرى', images: [so] },
    { title: 'فواكه', images: [fruits] },
  ];

  const swiperRef = useRef(null);

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <Stack spacing={4} sx={{ paddingY: { xs: '32px', sm: '48px', md: '64px' }, paddingX: { xs: "28px", sm: "32px", md: "128px",lg:"200px",xl:"20%" } }}>
      <HeadSection name="أصنافنا" />

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        {data.map((cat, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              width: '100%',
              maxWidth: { xs: '80px', sm: '120px', md: '160px', lg: '200px' }, // عرض البطاقة مرن
            }}
          >
            <Box sx={{ position: 'relative', width: '100%', maxWidth: '100%' }}>
              <Swiper
                ref={swiperRef}
                dir="rtl"
                modules={[Autoplay, Scrollbar]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                slidesPerView={1}
                scrollbar={{ draggable: true }}
                style={{ paddingBottom: '16px' }}
              >
                {cat.images.map((slide, imgIndex) => (
                  <SwiperSlide key={imgIndex}>
                    <Box
                      component="img"
                      sx={{
                        width: '100%',
                        height: { xs: '80px', sm: '120px', md: '160px', lg: '200px' },
                        borderRadius: '12px',
                        objectFit: 'cover',
                      }}
                      src={slide}
                      alt={`Slide ${imgIndex}`}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* السهم الأيسر */}
              <Box
                onClick={handleNext}
                sx={{
                  position: 'absolute',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: {xs:'20px',sm:"25",md:"30px"},
                  height: {xs:'20px',sm:"25",md:"30px"},
                  left: '-10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 10,
                  cursor: 'pointer',
                  bgcolor: 'white',
                  borderRadius: '50%',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
                }}
              >
                <img src={left} alt="Next" style={{ width: '60%' }} />
              </Box>

              {/* السهم الأيمن */}
              <Box
                onClick={handlePrev}
                sx={{
                  position: 'absolute',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: {xs:'20px',sm:"25",md:"30px"},
                  height: {xs:'20px',sm:"25",md:"30px"},
                  right: '-10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 10,
                  cursor: 'pointer',
                  bgcolor: 'white',
                  borderRadius: '50%',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
                }}
              >
                <img src={right} alt="Previous" style={{ width: '60%' }} />
              </Box>
            </Box>
            <Typography sx={{ marginTop: '12px', fontSize: '14px', fontWeight: '500' }}>{cat.title}</Typography>
          </Box>
        ))}
      </Box>
    </Stack>
  );
};

export default OurCategories;
