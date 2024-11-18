import { Autocomplete, Button,FormControl, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import countries from './countries'
import { useTranslation } from 'react-i18next'
import { CustomInput } from '../Utils/CustomInput'
import PhoneNumberInput from '../Utils/PhoneNumberInput'

const RegisterB = () => {
  const {t,i18n} = useTranslation("registerB")
  return (
    <Stack gap={"32px"} sx={{ width: {xs:"300px",md:"600px",sm:"400px",lg:"800px"}, margin: "auto", paddingY: "32px" }}>
      <Typography fontWeight={600} fontSize={"16px"} color='colors.black0'>{t("title")}</Typography>
      <Stack sx={{ padding: {xs:"16px",sm:"20px",md:"32px"}, border: 1,borderWidth:"2px",borderColor:"colors.gray0",borderRadius:"32px" }} gap={"32px"}>
        
        <Stack gap={"32px"}>
          <FormControl sx={{ display: "flex", gap: "32px" }}>
           
            <CustomInput language={i18n.language} type={"text"} label={t('company')} />
          
            <CustomInput language={i18n.language} type={"text"} label={t('type')} />

          
            <CustomInput language={i18n.language} type={"text"} label={t('record')} />

           
            <CustomInput language={i18n.language} type={"text"} label={t('tax')} />

            
            <CustomInput language={i18n.language} type={"text"} label={t('address')} />

           
            <CustomInput language={i18n.language} type={"text"} label={t('admin')} />

           
            <CustomInput language={i18n.language} type={"email"} label={t('email')} />

             <Stack direction={"row"} sx={{width:"100%"}} gap={"32px"}> 
              <PhoneNumberInput />
                  
              <CustomInput language={i18n.language} type={"text"} label={t('phone')} />
             </Stack>
            
              <CustomInput language={i18n.language} type={"text"} label={t('website')} />
            
          
              <CustomInput language={i18n.language} type={"text"} label={t('Activity')} />


          
              <CustomInput language={i18n.language} type={"email"} label={t('email')} />
              
            
              <CustomInput language={i18n.language} type={"password"} label={t('password')} />

              <Button variant='contained' sx={{bgcolor:"colors.red0"}} >{t("button")}</Button>
          </FormControl>
    
          <Stack direction={"row"} alignItems={"center"} gap={"32px"}>
            <Typography fontWeight={400} fontSize={"14px"} sx={{cursor:"pointer"}}>{t("account")}</Typography>
            <Typography fontWeight={600} fontSize={"16px"} sx={{borderBottom:1,cursor:"pointer",color:"colors.red0",borderColor:"colors.red0"}}>{t("in")}</Typography>
          </Stack>
          <Stack direction={"row"} alignItems={"center"} gap={"32px"}>
            <Typography fontWeight={400} fontSize={"14px"} sx={{cursor:"pointer"}}>{t("customer")}</Typography>
            <Typography fontWeight={600} fontSize={"16px"} sx={{borderBottom:1,cursor:"pointer",color:"colors.red0",borderColor:"colors.red0"}}>{t("cusAcc")}</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default RegisterB
