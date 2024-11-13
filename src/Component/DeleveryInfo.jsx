import { CheckBox, LocationOn, Search } from '@mui/icons-material'
import { Autocomplete, Box, Checkbox, Stack, Switch, TextField, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import countries from"../Auth/countries"
import car from "../assets/images and icons/basket/Transport.svg";

const DeleveryInfo = () => {
    const {t,i18n}  =  useTranslation("nav2")
  return (
    <Stack gap={"32px"}>
        <Stack direction={"row"} gap={"16px"}>
            <LocationOn sx={{color:"colors.red0"}} />
            <Typography>موقع التوصيل</Typography>
        </Stack>
      
        <TextField
            sx={{
                width: "100%",
                '& .MuiOutlinedInput-root': {
                    borderRadius: "12px", 
                    borderWidth: "2px", 
                    '& fieldset': { borderColor: "rgba(0, 0, 0, 0.23)" },
                    '&:hover fieldset': { borderColor: "gray" },
                    '&.Mui-focused fieldset': { borderColor: "gray" },
                },
                '& .MuiInputLabel-root': { color: 'gray' },
                '& .MuiInputLabel-root.Mui-focused': { color: 'gray' },
                }}
                InputLabelProps={{
                    className: i18n.language === "ar" ? 'custom-label-rtl' : ''
                }}
                id="outlined-basic"
                label="اسم المستلم"
                type="text"
                variant="outlined"
        />

        <Stack direction={"row"} sx={{width:"100%"}} gap={"32px"}> 
            <Autocomplete sx={{width:"50%"}} disablePortal options={countries} 
            renderInput={(params)=><TextField {...params} label="رمز النداء"
            InputLabelProps={{
                className: i18n.language==="ar" ? 'custom-label-rtl' : ''
            }}
            InputProps={{
                ...params.InputProps,
                startAdornment: null,
                
            }}
            sx={{
                height: "42px",
                '& .MuiOutlinedInput-root': {
                borderRadius: "12px",
                borderWidth: "2px",
                '& fieldset': {
                    borderColor: "rgba(0, 0, 0, 0.23)",
                },
                '&:hover fieldset': {
                    borderColor: "gray",
                },
                '&.Mui-focused fieldset': {
                    borderColor: "gray",
                },
                },
                '& .MuiInputLabel-root': {
                color: 'gray',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                color: 'gray', // لون النص عند صعوده للأعلى عند التركيز
                },
            }}
            id="outlined-basic"
            type='text'
            variant="outlined"
            />} />
                <TextField
                InputLabelProps={{
                    className: i18n.language==="ar" ? 'custom-label-rtl' : ''
                }}
            
                sx={{
                height: "42px",
                '& .MuiOutlinedInput-root': {
                    borderRadius: "12px",
                    borderWidth: "2px",
                    '& fieldset': {
                    borderColor: "rgba(0, 0, 0, 0.23)",
                    },
                    '&:hover fieldset': {
                    borderColor: "gray",
                    },
                    '&.Mui-focused fieldset': {
                    borderColor: "gray",
                    },
                },
                '& .MuiInputLabel-root': {
                    color: 'gray',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                    color: 'gray', // لون النص عند صعوده للأعلى عند التركيز
                },
                width:"100%"
                }}
                id="outlined-basic"
                label="رقم الهاتف"
                type='text'
                variant="outlined"
            />
        </Stack>
        <Stack direction={"row"} alignItems={"center"}>
            <Checkbox />
            <Typography>
            لا تظهر تفاصيل هويتي للمستلم
            </Typography>
        </Stack>
        <Stack gap={"16px"}>
            <Stack direction={"row"} gap={"16px"}>
                <Box component={"img"} src={car} />
                <Typography>وقت التوصيل</Typography>
            </Stack>
            <Stack direction={"row"} gap={"16px"}>
                <Stack gap={"32px"} sx={{padding:"32px",border:1,borderWidth:"2px",borderColor:"colors.gray0",borderRadius:"16px"}}>
                    <Typography>أسرع وقت</Typography>
                    <Stack>
                        <Typography>اليوم</Typography>
                        <Typography>6.00pm-10.00pm</Typography>
                    </Stack>
                </Stack>
                <Stack gap={"32px"} sx={{padding:"32px",border:1,borderWidth:"2px",borderColor:"colors.gray0",borderRadius:"16px"}}>
                    <Typography>أسرع وقت</Typography>
                    <Typography sx={{cursor:"pointer",color:"colors.red0",textDecoration:"underline"}}>اختر وقت وتاريخ محدد</Typography>
                </Stack>
            </Stack>
        </Stack>
    </Stack>
  )
}

export default DeleveryInfo