import { Stack, Typography, FormControl, Select, MenuItem, Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import product from "../assets/images-and-icons/nav1/product.svg";
import location from "../assets/images-and-icons/nav1/Location.svg";

import { useTranslation } from 'react-i18next';

const Nav1 = () => {
    const { t, i18n } = useTranslation('nav1');
    const [locat, setLocat] = useState('Ryadh');
    const language = i18n.language; // اللغة الحالية من i18n

    // استعادة اللغة من localStorage عند بدء التطبيق
    useEffect(() => {
        const savedLanguage = localStorage.getItem('language') ; // قراءة اللغة المحفوظة
        if (savedLanguage !== i18n.language) {
            i18n.changeLanguage(savedLanguage); // تحديث i18n باللغة المحفوظة
        }
        console.log(i18n.language);
    }, [i18n]);

    const handleChange = (event) => {
        setLocat(event.target.value);
    };

    const handleToggleLanguage = () => {
        const newLanguage = i18n.language === 'ar' ? 'en' : 'ar';
        i18n.changeLanguage(newLanguage); // تغيير اللغة
        localStorage.setItem('language', newLanguage); // حفظ اللغة
      };
      
    return (
        <Stack
            direction={"row"} 
            alignItems={"center"} 
            justifyContent={"space-between"} 
            className='gradient-border'
            sx={{
                paddingX: { xs: "28px", sm: "32px", md: "128px", lg: "200px", xl:"20%" },
                paddingY: "16px",
                height: { xs: "auto", md: "65px" },
                borderBottomWidth: "4px",
                borderBottomStyle: "solid",
                borderImage: "gradient.red_line",
            }}
            role="navigation" // تحسين SEO
            aria-label={t('main_navigation')}
        >
            <Stack direction={"row"} gap={{ xs: "8px", md: "24px" }} flexWrap="wrap">
                <Stack direction={"row"} alignItems={"center"} gap="7px">
                    <Box component={"img"} src={location} alt={t('alt_location_image')} sx={{ width: {xs:"12px",md:"24px"}, height:{xs:"12px",md:"24px"}}} />
                    <Typography color="text.paraghraph" sx={{fontSize:{xs:"9px",md:"13px"}}}>
                        {t('location')}
                    </Typography>
                </Stack>
                <Stack direction={"row"} alignItems={"center"} gap="7px">
                    <Box component={"img"} src={product} alt={t('alt_product_image')} sx={{ width: {xs:"12px",md:"24px"}, height:{xs:"12px",md:"24px"}}} />
                    <Typography color="text.paraghraph" sx={{fontSize:{xs:"9px",md:"13px"}}}>
                        {t('product')}
                    </Typography>
                </Stack>
            </Stack>
            <Typography fontSize={"12px"} fontWeight={600}>شامل الضرائب</Typography>
            <Stack direction={"row"} alignItems={"center"} gap={{ xs: "16px", md: "32px" }}>
                <FormControl sx={{ width: {xs:"100px",md:"130px",lg:"167px"}, height: "auto" }}>
                    <Select
                        value={locat}
                        onChange={handleChange}
                        displayEmpty
                        sx={{
                            height: "25px",
                            border: "2px solid",
                            borderColor: "colors.gray0",
                            borderRadius: "8px",
                            fontSize:{xs:"8px",md:"12px"},
                            padding:0,
                            color: "text.placeholder",
                            "& .MuiOutlinedInput-notchedOutline": {
                                border: "none",
                            },
                            "& .MuiSelect-icon": {
                                right: i18n.language === 'en' ? '0px' : 'unset',
                                left: i18n.language === 'ar' ? '0px' : 'unset',
                            },
                            "& .css-w76bbz-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-w76bbz-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-w76bbz-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":{
                                paddingRight:1
                            }
                        }}
                        aria-label={t('select_location')}
                    >
                        <MenuItem value={"Ryadh"}>{t('select1')}</MenuItem>
                        <MenuItem value={"jaddah"}>{t('select2')}</MenuItem>
                        <MenuItem value={"khobar"}>{t('select3')}</MenuItem>
                    </Select>
                </FormControl>

                <Box 
                    onClick={handleToggleLanguage}
                    sx={{ 
                        cursor: "pointer", 
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "center", 
                        width: "61px", 
                        height: "25px", 
                        fontSize: "14px", 
                        border: "1px", 
                        borderColor: "colors.red0", 
                        borderStyle: "solid", 
                        borderRadius: "8px" 
                    }}
                    aria-label={language === 'ar' ? 'تغيير اللغة إلى الإنجليزية' : 'Switch language to Arabic'}
                >
                    {language === 'ar' ? 'English' : 'العربية'}
                </Box>
            </Stack>
        </Stack>
    );
};

export default Nav1;
