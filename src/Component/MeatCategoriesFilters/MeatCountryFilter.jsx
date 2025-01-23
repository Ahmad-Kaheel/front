import { Box, Stack, Typography,CircularProgress, Backdrop  } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Aus from "../../assets/images-and-icons/flags/Australia.svg";
import Brazil from "../../assets/images-and-icons/flags/Brazil.svg";
import Ecuador from "../../assets/images-and-icons/flags/Ecuador.svg";
import India from "../../assets/images-and-icons/flags/India.svg";
import Uruguay from "../../assets/images-and-icons/flags/Uruguay.svg";
import usa from "../../assets/images-and-icons/flags/usa.svg";

import { useTranslation } from 'react-i18next';
import HeadSection from '../../Utils/HeadSection';
import axios from 'axios';
import api from '../../Api/Api';

const MeatCountryFilter = () => {
    const { t, i18n } = useTranslation('country');
    const [loading, setLoading] = useState(false); 
    const [countryData, setCountryData] = useState(null); // تخزين البيانات

    const data = [
        { flag: Aus, name: "Australia" },
        { flag: Brazil, name: "Brazil" },
        { flag: Ecuador, name: "Ecuador" },
        { flag: India, name: "India" },
        { flag: Uruguay, name: "Uruguay" },
        { flag: usa, name: "USA" },

    ];
    useEffect(() => {
        const fetchData = async () => {
          setLoading(true); // بدء التحميل
          try {
           const response = await api.get('api/catalogue/countries/', 
              {
                headers: {
                  'Content-Type': 'application/json',
                  'Accept-Language': i18n.language,
                },
              }
            );
            setCountryData(response.data); // تخزين البيانات في الحالة
            console.log('Response:', response.data);
          } catch (error) {
            console.error('Error fetching profile data:', error.response?.data || error.message);
          } finally {
            setLoading(false); // إنهاء التحميل
          }
        };
    
        fetchData();
      }, [i18n.language]); // أضف التبعية إذا لزم الأمر
    
    return (
        <Stack 
            gap={{ xs: "32px" }}
            sx={{ paddingY: { xs: "32px", sm: "48px", md: "64px" }, paddingX: { xs: "20px", sm: "32px", md: "128px",lg:"200px",xl:"20%"} }}
        >
            <HeadSection name={t('name')}/> 

            <Stack 
                flexDirection="row"
                sx={{
                    gap: { xs: "20px", sm: "32px", md: "64px", lg: "95px" },
                    cursor: "pointer",
                    textAlign: { xs: "center", sm: "initial" },
                }}
                justifyContent={"center"}
                alignItems={"center"}
            >
                {data.map((country, index) => (
                    <Stack 
                        key={index}
                        alignItems={"center"}
                        gap={"10px"}
                        sx={{ maxWidth: { xs: "100%", sm: "auto" } }}
                    >
                        <Box 
                            component={"img"}
                            src={country.flag} 
                            alt={country.name}
                            sx={{
                                width: { xs: "18px", sm: "20px", md: "30px", lg: "64px",xl:"90px" },
                                height: { xs: "18px", sm: "20px", md: "30px", lg: "64px",xl:"90px" },
                            }}
                        />
                        <Typography variant="body1" sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px",xl:'25px' } }}>
                            {country.name}
                        </Typography>
                    </Stack>
                ))}
            </Stack>
            <Backdrop
                open={loading}
                sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </Stack>
    );
};

export default MeatCountryFilter;
