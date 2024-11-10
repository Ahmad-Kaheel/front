import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import google from "../assets/images and icons/auth/google.svg"
import apple from "../assets/images and icons/auth/apple.svg"
import {  FacebookOutlined } from '@mui/icons-material'
import { useTranslation } from 'react-i18next'

const Login = () => {
  const {t,i18n} = useTranslation("login")
  return (
    <Stack gap={"32px"} sx={{ width: {xs:"300px",md:"600px",sm:"400px",lg:"800px"}, margin: "auto", paddingY: "128px" }}>
      <Typography fontWeight={600} fontSize={"16px"} color='colors.black0'>{t("title")}</Typography>
      <Stack sx={{ padding: {xs:"16px",sm:"20px",md:"32px",lg:"64px"}, border: 1,borderWidth:"2px",borderColor:"colors.gray0",borderRadius:"32px" }} gap={"32px"}>
        <Stack alignItems={"center"} gap={"32px"}>
          <Typography fontWeight={600} fontSize={"16px"} color='colors.black0'>{t("label1")}</Typography>
          <Stack direction={"row"} gap={"16px"}>
            <Box component={"img"} src={apple} sx={{ cursor: "pointer", padding: "8px" }} />
            <Box component={"img"} src={google} sx={{ cursor: "pointer", padding: "8px" }} />
            <Box sx={{ cursor: "pointer", padding: "8px" }}>
              <FacebookOutlined />
            </Box>
          </Stack>
          <Typography>{t("label2")}</Typography>
        </Stack>
        <Stack gap={"32px"}>
          <FormControl sx={{ display: "flex", gap: "32px" }}>
            <TextField
            
              sx={{
                textAlign:'right',
                height: "42px",
                '& .MuiOutlinedInput-root': {
                  borderRadius: "12px", // تغيير زاوية الانحناء
                  borderWidth: "2px", // تعديل سمك الحدود
                  
                  '& fieldset': {
                    borderColor: "rgba(0, 0, 0, 0.23)", // لون الحدود
                  },
                  '&:hover fieldset': {
                    borderColor: "gray", // تغيير لون الحدود عند التمرير
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: "gray", // لون الحدود عند التركيز
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'gray', // لون النص الافتراضي للـ label
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: 'gray', // لون النص عند صعوده للأعلى عند التركيز
                },
              }}
              InputLabelProps={{
                className: i18n.language==="ar" ? 'custom-label-rtl' : ''
              }}
              id="outlined-basic"
              label={t("email")}
              type='email'
              variant="outlined"
            />
            <TextField
              
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
              InputLabelProps={{
                className: i18n.language==="ar" ? 'custom-label-rtl' : ''
              }}
              id="outlined-basic"
              label={t("password")}
              type='password'
              variant="outlined"
            />
          </FormControl>
          <FormGroup sx={{width:"fit-content"}}>
            <FormControlLabel control={<Checkbox  />} label={t("remember")} />
          </FormGroup>
          <Stack direction={"row"} alignItems={"center"} gap={"32px"}>
            <Button variant='contained' sx={{bgcolor:"colors.red0"}}>{t("title")}</Button>
            <Typography fontWeight={400} fontSize={"14px"} sx={{textDecoration:"underline",cursor:"pointer"}}> {t("forget")} </Typography>
          </Stack>
          <Stack direction={"row"} alignItems={"center"} gap={"32px"}>
            <Typography fontWeight={400} fontSize={"14px"} sx={{textDecoration:"underline",cursor:"pointer"}}>{t("account")}</Typography>
            <Typography fontWeight={600} fontSize={"16px"} sx={{borderBottom:1,cursor:"pointer",color:"colors.red0",borderColor:"colors.red0"}}>{t("create")}</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Login
