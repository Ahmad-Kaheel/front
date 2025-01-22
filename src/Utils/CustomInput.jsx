import { TextField } from '@mui/material';
import React, { useState } from 'react';

export const CustomInput = ({ language, label, type, onChange, required,error ,helperText,onBlur}) => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    if (onChange) onChange(event); // استدعاء الدالة إذا تم تمريرها
  };


  return (
    <TextField
      InputLabelProps={{
        className: language === "ar" ? 'custom-label-rtl' : ''
      }}
      size='small'
      onBlur={onBlur}
      required={required}
      error={error} // تحديد الخطأ بناءً على حالة "error"
      helperText={helperText} // رسالة مساعدة عند وجود خطأ
      sx={{
        textAlign: 'right',
        width: "100%",
        height: "42px",
        '& .MuiOutlinedInput-root': {
          borderRadius: "12px",
          '& fieldset': {
            borderColor: error ? "red" : "rgba(0, 0, 0, 0.23)", // تغيير لون الحدود عند وجود خطأ
          },
          '&:hover fieldset': {
            borderColor: error ? "red" : "gray",
          },
          '&.Mui-focused fieldset': {
            borderColor: error ? "red" : "gray",
          },
        },
        '& .MuiInputLabel-root': {
          color: error ? "red" : 'gray', // تغيير لون النص عند وجود خطأ
        },
        '& .MuiInputLabel-root.Mui-focused': {
          color: error ? "red" : 'gray',
        },
      }}
      id="outlined-basic"
      label={label}
      type={type}
      variant="outlined"
      value={value}
      onChange={handleChange} // استدعاء الدالة عند الكتابة
    />
  );
};
