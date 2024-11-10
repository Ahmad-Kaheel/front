import { Autocomplete, Button,FormControl, InputAdornment, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import countries from './countries'
import { useTranslation } from 'react-i18next'
import { ExpandMore } from '@mui/icons-material'

const RegisterB = () => {
  const {t,i18n} = useTranslation("registerB")
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
              label={t("company")}
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
              label={t("type")}
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
              label={t("record")}
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
              label={t("tax")}
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
              label={t("address")}
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
              label={t("admin")}
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
              label={t("email")}
              type='email'
              variant="outlined"
            />
             <Stack direction={"row"} sx={{width:"100%"}} gap={"32px"}> 
                <Autocomplete sx={{width:"50%"}} disablePortal options={countries} 
                renderInput={(params)=><TextField {...params} label={t("call")}
                InputLabelProps={{
                  className: i18n.language==="ar" ? 'custom-label-rtl' : ''
                }} sx={{
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
                InputProps={{
                  ...params.InputProps,
                  startAdornment: null,
                  endAdornment:null
                  
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
              label={t("website")}
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
              label={t("activity")}
              type='text'
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
            <Typography fontWeight={400} fontSize={"14px"} sx={{cursor:"pointer"}}>{t("customer")}</Typography>
            <Typography fontWeight={600} fontSize={"16px"} sx={{borderBottom:1,cursor:"pointer",color:"colors.red0",borderColor:"colors.red0"}}>{t("cusAcc")}</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default RegisterB
