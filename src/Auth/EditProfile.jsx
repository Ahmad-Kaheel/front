import { Autocomplete, Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { useTranslation } from 'react-i18next';
import countries from './countries';
const EditProfile = ({setEdit}) => {
    const {t,i18n} = useTranslation("nav1")
  return (
    <Stack gap={"32px"} sx={{width:"100%"}}>
        <Box onClick={()=>setEdit(false)} sx={{cursor:"pointer"}}>
            <CloseIcon />
        </Box>
        <Stack gap={"32px"} sx={{border:1,padding:"16px"}}>
          <FormControl sx={{ display: "flex", gap: "32px" }}>
            <Stack gap={"16px"}>
                <Typography>البريد الالكتروني</Typography>
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
                <Typography>الاسم الأول</Typography>
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
                <Typography>الاسم الأخير</Typography>
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
                    <Typography>الرمز البريدي</Typography>
                    <Autocomplete disablePortal options={countries} 
                renderInput={(params)=><TextField {...params} 
                InputLabelProps={{
                  className: i18n.language==="ar" ? 'custom-label-rtl' : ''
                }}
                InputProps={{
                  ...params.InputProps,
                  startAdornment: null,
                  endAdornment:null
                  
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
                </Stack>
                <Stack gap={"16px"} width={"70%"}>
                <Typography>رقم الهاتف</Typography>
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
                <Typography>تاريخ الميلاد</Typography>
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
                type='date'
                variant="outlined"
                />
            </Stack>
            <Stack direction={"row"} gap="32px" alignItems={"center"}>
                <FormLabel id="demo-row-radio-buttons-group-label">الجنس</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                  >
                    <Stack direction={"row"}>
                      <FormControlLabel value="female" control={<Radio />} label="أنثى" />
                      <FormControlLabel value="male" control={<Radio />} label="ذكر" />
                    </Stack>
                  </RadioGroup>

             </Stack>
          </FormControl>
          <Button variant='contained' sx={{bgcolor:"colors.red0"}}>حفظ التغييرات</Button>
          
        </Stack>
        <Button variant='outlined' sx={{borderColor:"colors.red0",color:"colors.red0"}}>حذف الحساب</Button>
    </Stack>
  )
}

export default EditProfile