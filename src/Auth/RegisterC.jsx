import { Autocomplete, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import PhoneNumberInput from '../Utils/PhoneNumberInput';

import { useTranslation } from 'react-i18next';
import { CustomInput } from '../Utils/CustomInput';
import { DateInput } from '../Utils/DateInput';
const RegisterC = () => {
  const {t,i18n}=useTranslation("registerC")
  return (
    <Stack gap={"32px"} sx={{ width: {xs:"300px",md:"600px",sm:"400px",lg:"800px"}, margin: "auto", paddingY: "32px" }}>
      <Typography fontWeight={600} fontSize={"16px"} color='colors.black0'>{t("title")}</Typography>
      <Stack sx={{ padding: {xs:"16px",sm:"20px",md:"32px"}, border: 1,borderWidth:"2px",borderColor:"colors.gray0",borderRadius:"32px" }} gap={"32px"}>
        <Stack gap={"32px"}>
          <FormControl sx={{ display: "flex", gap: "32px" }}>
            
            <CustomInput language={i18n.language} type={"text"} label={t("fname")} />
            <CustomInput language={i18n.language} type={"text"} label={t("lname")} />

           
             <Stack direction={"row"} gap="32px" alignItems={"center"}>
                <FormLabel id="demo-row-radio-buttons-group-label">{t("gender")}</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                  >
                    <Stack direction={"row"}>
                      <FormControlLabel value="female" control={<Radio />} label={t("female")} />
                      <FormControlLabel value="male" control={<Radio />} label={t("male")} />
                    </Stack>
                </RadioGroup>
             </Stack>
             <Stack direction={"row"} sx={{width:"100%"}} gap={"32px"}> 
                <PhoneNumberInput />
              <CustomInput language={i18n.language} type={"text"} label={t("phone")} />
             </Stack>
             <DateInput label={t('date')} language={i18n.language}/>
              <CustomInput language={i18n.language} label={t("email")} type={"email"} />
              <CustomInput language={i18n.language} label={t("password")} type={"password"} />
              <Button variant='contained' sx={{bgcolor:"colors.red0"}} >{t("button")}</Button>
          </FormControl>
    
          <Stack direction={"row"} alignItems={"center"} gap={"32px"}>
            <Typography fontWeight={400} fontSize={"14px"} sx={{cursor:"pointer"}}>{t("account")}</Typography>
            <Typography fontWeight={600} fontSize={"16px"} sx={{borderBottom:1,cursor:"pointer",color:"colors.red0",borderColor:"colors.red0"}}>{t("in")}</Typography>
          </Stack>
          <Stack direction={"row"} alignItems={"center"} gap={"32px"}>
            <Typography fontWeight={400} fontSize={"14px"} sx={{cursor:"pointer"}}>{t("vendor")}</Typography>
            <Typography fontWeight={600} fontSize={"16px"} sx={{borderBottom:1,cursor:"pointer",color:"colors.red0",borderColor:"colors.red0"}}>{t("venAcc")}</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default RegisterC