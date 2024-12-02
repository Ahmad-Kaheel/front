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
    <Stack spacing={2} sx={{ paddingY: { xs: "32px", sm: "48px", md: "64px" }, paddingX: { xs: "28px", sm: "32px", md: "128px", lg: "200px", xl: "20%" } }}>
      <HeadSection name="أصنافنا" />
      <Stack
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: '1fr 1fr 1fr 1fr' }, // أعمدة ديناميكية
          gap: '32px', // المسافة بين السوايبرات
          alignItems: 'center',
        }}
      >
        {data.map((cat, index) => (
          <Stack key={index} alignItems="center">
            <Box sx={{ position: 'relative', width: '100%', maxWidth: '300px' }}>
              <Swiper
                ref={swiperRef}
                dir="rtl"
                modules={[Autoplay, Scrollbar]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                slidesPerView={1}
                scrollbar={{ draggable: true }}
                style={{ paddingBottom: '20px' }}
              >
                {cat.images.map((slide, imgIndex) => (
                  <SwiperSlide key={imgIndex}>
                    <Box
                      component="img"
                      sx={{
                        width: '100%',
                        height: '300px',
                        borderRadius: '16px',
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
                  width: '40px',
                  height: '40px',
                  left: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 10,
                  cursor: 'pointer',
                  bgcolor: 'white',
                  borderRadius: '50%',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                }}
              >
                <img src={left} alt="Next" />
              </Box>

              {/* السهم الأيمن */}
              <Box
                onClick={handlePrev}
                sx={{
                  position: 'absolute',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '40px',
                  height: '40px',
                  right: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 10,
                  cursor: 'pointer',
                  bgcolor: 'white',
                  borderRadius: '50%',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                }}
              >
                <img src={right} alt="Previous" />
              </Box>
            </Box>
            <Typography>{cat.title}</Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default OurCategories;
