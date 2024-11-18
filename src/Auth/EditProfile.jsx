import { Autocomplete, Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { useTranslation } from 'react-i18next';
import countries from './countries';
import PhoneNumberInput from '../Utils/PhoneNumberInput';
import { DateInput } from '../Utils/DateInput';
const EditProfile = ({setEdit}) => {
    const {t,i18n} = useTranslation("profileData")
  return (
    <Stack gap={"32px"} sx={{width:"100%"}}>
        <Box onClick={()=>setEdit(false)} sx={{cursor:"pointer"}}>
            <CloseIcon />
        </Box>
        <Stack gap={"32px"} sx={{border:1,padding:"16px"}}>
          <FormControl sx={{ display: "flex", gap: "32px" }}>
            <Stack gap={"16px"}>
                <Typography>{t("mail")}</Typography>
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
                type='email'
                variant="outlined"
                />
            </Stack>
            <Stack gap={"16px"}>
                <Typography>{t("fname")}</Typography>
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
                type='text'
                variant="outlined"
                />
            </Stack>
            <Stack gap={"16px"}>
                <Typography>{t("lname")}</Typography>
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
                type='text'
                variant="outlined"
                />
            </Stack>
            <Stack direction={"row"} gap={"32px"}>
                <Stack gap={"16px"} width={"30%"}>
                    <Typography>{t("zip")}</Typography>
                    <PhoneNumberInput />
                </Stack>
                <Stack gap={"16px"} width={"70%"}>
                <Typography>{t("phone")}</Typography>
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
                type='text'
                variant="outlined"
                />
                </Stack>
            </Stack>
            <Stack gap={"16px"}>
                <Typography>{t("date")}</Typography>
                <DateInput />
            </Stack>
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
          </FormControl>
          <Button variant='contained' sx={{bgcolor:"colors.red0"}}>{t("save")}</Button>
          
        </Stack>
        <Button variant='outlined' sx={{borderColor:"colors.red0",color:"colors.red0"}}>{t("delete")}</Button>
    </Stack>
  )
}

export default EditProfile