import React from 'react';
import Hero from '../Component/hero/Hero';
import MobileHero from '../Component/hero/MobileHero'; // استيراد MobileHero
import { Box, useMediaQuery } from '@mui/material';
import DiscoverNow from '../Component/DiscoverNow';
import OtherFilter from '../Component/MeatCategoriesFilters/OtherFilter';
import MeatCountryFilter from '../Component/MeatCategoriesFilters/MeatCountryFilter';
import AnimalsFilter from '../Component/MeatCategoriesFilters/AnimalsFilter';
import DiscountedProducts from '../Component/MeatCategoriesFilters/DiscountedProducts';
import PersonNumberFilter from '../Component/MeatCategoriesFilters/PersonNumberFilter';
import GroupProducts from '../Component/MeatCategoriesFilters/GroupProducts';
import CheifChoices from '../Component/MeatCategoriesFilters/ChefChoices';
import CustomerReview from '../Component/CustomersReview';
import Partners from '../Component/Partners';
const Home = () => {
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm')); // تحقق من حجم الشاشة

  return (
    <Box >
      {isMobile ? <MobileHero /> : <Hero />} {/* عرض MobileHero إذا كانت الشاشة صغيرة */}
      <DiscoverNow />
      <OtherFilter />
      <MeatCountryFilter />
      <AnimalsFilter/>
      <DiscountedProducts />
      <PersonNumberFilter />
      <GroupProducts />
      <CheifChoices />
      <CustomerReview />
      <Partners />
    </Box>
  );
};

export default Home;
