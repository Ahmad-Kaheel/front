import { Autocomplete, Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import countries from './countries'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useTranslation } from 'react-i18next';
const RegisterC = () => {
  const {t,i18n}=useTranslation("registerC")
  return (
    <Stack gap={"32px"} sx={{ width: {xs:"300px",md:"600px",sm:"400px",lg:"800px"}, margin: "auto", paddingY: "128px" }}>
      <Typography fontWeight={600} fontSize={"16px"} color='colors.black0'>{t("title")}</Typography>
      <Stack sx={{ padding: {xs:"16px",sm:"20px",md:"32px",lg:"64px"}, border: 1,borderWidth:"2px",borderColor:"colors.gray0",borderRadius:"32px" }} gap={"32px"}>
        <Stack gap={"32px"}>
          <FormControl sx={{ display: "flex", gap: "32px" }}>
            <TextField
            InputLabelProps={{
              className: i18n.language==="ar" ? 'custom-label-rtl' : ''
            }}
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
              id="outlined-basic"
              label={t("fname")}
              type='text'
              variant="outlined"
            />
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
              }}
              id="outlined-basic"
              label={t("lname")}
              type='text'
              variant="outlined"
            />
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
                <Autocomplete sx={{width:"50%"}} disablePortal options={countries} 
                renderInput={(params)=><TextField {...params} label={t("call")}
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
                    width:"50%"
                  }}
                  id="outlined-basic"
                  label={t("phone")}
                  type='text'
                  variant="outlined"
                />
             </Stack>
             <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DatePicker 
        label={t("date")} 
        InputLabelProps={{
          className: i18n.language==="ar" ? 'custom-label-rtl' : ''
        }}
        sx={{
            direction: "ltr",
            borderRadius: "32px",
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
    />
</LocalizationProvider>

              <TextField
                InputLabelProps={{
                  className: i18n.language==="ar" ? 'custom-label-rtl' : ''
                }}
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
                  id="outlined-basic"
                  label={t("email")}
                  type='email'
                  variant="outlined"
              />
              <TextField
              InputLabelProps={{
                className: i18n.language==="ar" ? 'custom-label-rtl' : ''
              }}
                  sx={{
                    textAlign:'right',
                    height: "42px",
                    '& .MuiOutlinedInput-root': {
                      borderRadius: "12px", // تغيير زاوية الانحناء
                      borderWidth: "2px", // تعديل سمك الحدود
                      
                      '& fieldset': {
                        borderColor: "gray", // لون الحدود
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
                  id="outlined-basic"
                  label={t("password")}
                  type='password'
                  variant="outlined"
                />
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
