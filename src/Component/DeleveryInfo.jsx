import { CheckBox, LocationOn, Search } from '@mui/icons-material'
import { Autocomplete, Box, Checkbox, Stack, Switch, TextField, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import countries from"../Auth/countries"
import car from "../assets/images-and-icons/basket/Transport.svg";
import { CustomInput } from '../Utils/CustomInput'
import PhoneNumberInput from '../Utils/PhoneNumberInput'
import PaymentInfo from './PaymentInfo'

const DeleveryInfo = () => {
    const {t,i18n}  =  useTranslation("payment")
  return (
    <Stack gap={{xs:"20px",md:"22px",lg:"64px"}} direction={{xs:"column",md:"row"}}>
          <Stack gap={"32px"}>
        <Stack direction={"row"} gap={"16px"}>
            <LocationOn sx={{color:"colors.red0"}} />
            <Typography>موقع التوصيل</Typography>
        </Stack>
      
        <CustomInput label={t("location")} language={i18n.language} type={"text"} />

        <Stack direction={"row"} sx={{width:"100%"}} gap={"32px"}> 
            <PhoneNumberInput />
            <CustomInput label={t("phone")} language={i18n.language} type={"text"} />    
        </Stack>
        <Stack direction={"row"} alignItems={"center"}>
            <Checkbox />
            <Typography>
            {t("show")}
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
    <PaymentInfo />
    </Stack>
  )
}

export default DeleveryInfo