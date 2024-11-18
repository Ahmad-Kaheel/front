import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import google from "../assets/images-and-icons/auth/google.svg"
import apple from "../assets/images-and-icons/auth/apple.svg"
import {  FacebookOutlined } from '@mui/icons-material'
import { useTranslation } from 'react-i18next'
import { CustomInput } from '../Utils/CustomInput'

const Login = () => {
  const {t,i18n} = useTranslation("login")
  return (
    <Stack gap={"32px"} sx={{ width: {xs:"300px",md:"600px",sm:"400px",lg:"800px"}, margin: "auto", paddingY: "32px" }}>
      <Typography fontWeight={600} fontSize={"16px"} color='colors.black0'>{t("title")}</Typography>
      <Stack sx={{ padding: {xs:"16px",sm:"20px",md:"32px"}, border: 1,borderWidth:"2px",borderColor:"colors.gray0",borderRadius:"32px" }} gap={"32px"}>
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
            <CustomInput type={"email"} label={t('email')} language={i18n.language} />
            <CustomInput type={"password"} label={t('password')} language={i18n.language} />
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
