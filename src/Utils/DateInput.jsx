import React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export const DateInput = ({ language, label }) => {
  const isRTL = language === "ar"; // تحديد إذا كانت اللغة RTL

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={label}
       InputLabelProps={{
        className: language==="ar" ? 'custom-label-rtl' : ''
       }}
        slotProps={{
            desktopPaper: {
              dir: 'ltr',
            },
            mobilePaper: {
              dir: 'ltr',
            },
        
          }}
          
        
        sx={{
          direction: isRTL ? "rtl" : "ltr", // اتجاه الحقل نفسه
          '& .MuiOutlinedInput-root': {
            borderRadius: "12px",
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
            right: isRTL ? "2rem" : "inherit",
            left: isRTL ? "inherit" : "0",

            transformOrigin:isRTL ? "right" :"left"
          },
          '& .MuiInputBase-root fieldset':{
            textAlign:isRTL ? "right" :"left"
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: 'gray',
          },
          '& .MuiOutlinedInput-input': {
            textAlign: isRTL ? "right" : "left", // محاذاة النص داخل الحقل
          },
        }}
      />
    </LocalizationProvider>
  );
};
