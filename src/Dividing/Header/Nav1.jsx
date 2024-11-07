import { Stack, Typography, FormControl, Select, MenuItem, Box } from '@mui/material';
import React, { useState } from 'react';
import car from "../../assets/images and icons/nav1/car.svg";
import location from "../../assets/images and icons/nav1/location.svg";
import product from "../../assets/images and icons/nav1/product.svg";
import { useTranslation } from 'react-i18next';

const Nav1 = () => {
    const { t, i18n } = useTranslation('nav1');
    const [locat, setLocat] = useState('Ryadh');
    const language = i18n.language

    const handleChange = (event) => {
        setLocat(event.target.value);
    };

    const handleToggleLanguage = () => {
        i18n.changeLanguage(language === 'ar' ? 'en' : 'ar');
    };

    return (
        <Stack
            direction={"row"} 
            alignItems={"center"} 
            justifyContent={"space-between"} 
            className='gradient-border'
            sx={{
                paddingX: { xs: "28px", sm: "32px", md: "70px" }, // استجابة لحجم الشاشة
                paddingY: "16px",
                height: { xs: "auto", md: "65px" }, // اجعل الارتفاع متجاوبًا
                borderBottomWidth: "4px",
                borderBottomStyle: "solid",
                borderImage: "gradient.red_line",
            }}
        >
            <Stack direction={"row"} gap={{ xs: "8px", md: "16px" }} flexWrap="wrap">
                <Stack direction={"row"} alignItems={"center"} gap="7px">
                    <Box component={"img"} src={car} alt='car' sx={{ width: {xs:"12px",md:"24px"}, height:{xs:"12px",md:"24px"}}} />
                    <Typography color="text.paraghraph" sx={{fontSize:{xs:"9px",md:"14px",lg:"15px"}}}>
                        {t('delivery')}
                    </Typography>
                </Stack>
                <Stack direction={"row"} alignItems={"center"}  gap="7px">
                 <Box component={"img"} src={location} alt='location' sx={{ width: {xs:"12px",md:"24px"}, height:{xs:"12px",md:"24px"}}} />

                    <Typography color="text.paraghraph" sx={{fontSize:{xs:"9px",md:"14px",lg:"15px"}}}>
                        {t('location')}
                    </Typography>
                </Stack>
                <Stack direction={"row"} alignItems={"center"}  gap="7px">
                <Box component={"img"} src={product} alt='product' sx={{ width: {xs:"12px",md:"24px"}, height:{xs:"12px",md:"24px"}}} />

                    <Typography color="text.paraghraph" sx={{fontSize:{xs:"9px",md:"14px",lg:"15px"}}}>
                        {t('product')}
                    </Typography>
                </Stack>
            </Stack>
            <Stack direction={"row"} alignItems={"center"} gap={{ xs: "16px", md: "32px" }} sx={{ mt: { xs: "16px", md: 0 } }}>
                <FormControl sx={{ width: "167px", height: "auto" }}>
                    <Select
                        value={locat}
                        onChange={handleChange}
                        displayEmpty
                        sx={{
                            height: "25px",
                            border: "2px solid",
                            borderColor: "colors.gray0",
                            borderRadius: "8px",
                            fontSize: "14px",
                            color: "text.placeholder",
                            "& .MuiOutlinedInput-notchedOutline": {
                                border: "none",
                            },
                            "& .MuiSelect-icon": {
                                right: i18n.language === 'en' ? '10px' : 'unset', 
                                left: i18n.language === 'ar' ? '10px' : 'unset', 
                            },
                        }}
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
                >
                    {i18n.language === 'ar' ? 'English' : 'العربية'}
                </Box>
            </Stack>
        </Stack>
    );
}

export default Nav1;
