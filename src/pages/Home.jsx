import React from 'react';
import Hero from '../Component/hero/Hero';
import MobileHero from '../Component/hero/MobileHero';
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
import { Helmet } from 'react-helmet-async';
import OurCategories from '../Component/OurCategories';

const Home = () => {
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'));

  return (
    <>
      <Helmet>
        <title>اللحم الذهبي | متجر بيع اللحوم</title> {/* استخدم `<title>` HTML هنا */}
        <meta name="description" content="تسوق أفضل أنواع اللحوم الطازجة والمختارة بعناية في السعودية. متوفر لدينا لحوم بقر، ودجاج، وضأن، مع خدمة توصيل سريعة إلى باب منزلك في جميع أنحاء المملكة." />
        <meta name="keywords" content="خضراوات وفواكه، لبن، متجر بيع لحوم بالسعودية، متجر بيع خضراوات بالسعودية، لحوم طازجة، شراء لحوم السعودية، لحوم بقر، لحوم ضأن، توصيل لحوم، لحوم عالية الجودة، أفضل لحوم في السعودية" />
        <meta property="og:title" content="متجر اللحوم الطازجة - لحوم عالية الجودة في السعودية" />
        <meta property="og:description" content="احصل على أفضل اللحوم الطازجة والمختارة بعناية مع خدمة التوصيل السريعة. متوفر لدينا لحوم بقر، ودجاج، وضأن، إلى باب منزلك!" />
        <meta name="geo.region" content="SA" />
        <meta name="geo.placename" content="Saudi Arabia" />
      </Helmet>
      <Box sx={{maxWidth:"2000px",margin:"auto"}}>
        {isMobile ? <MobileHero /> : <Hero />} {/* عرض MobileHero إذا كانت الشاشة صغيرة */}
        <OurCategories/>
        <DiscountedProducts />
        <DiscoverNow />
        <OtherFilter />
        <MeatCountryFilter />
        <AnimalsFilter />
        <PersonNumberFilter />
        <GroupProducts />
        <CheifChoices />
        <CustomerReview />
        <Partners />
      </Box>
    </>
  );
};

export default Home;
