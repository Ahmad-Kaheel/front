import React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs'; // تأكد من تثبيت مكتبة dayjs

export const DateInput = ({ language, label, onChange, required, error, helperText ,onBlur}) => {
  const isRTL = language === "ar";

  const handleDateChange = (value) => {
    if (value) {
      // تحويل التاريخ إلى التنسيق المطلوب YYYY-MM-DD
      const formattedDate = dayjs(value).format('YYYY-MM-DD');
      onChange(formattedDate);
    } else {
      onChange(''); // إذا لم يتم اختيار تاريخ
    }
  };


  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={label}
        onError={error}
        required={required}
        onChange={handleDateChange} // استخدم الدالة المعدلة
        onBlur={onBlur}
        
        slotProps={{
          desktopPaper: {
            dir: 'ltr',
          },
          mobilePaper: {
            dir: 'ltr',
          },
          textField: {
            helperText: helperText || '',
            error: !!error, // عرض الخطأ إذا كان موجودًا
          },
        }}
        sx={{
          direction: isRTL ? "rtl" : "ltr",
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
            transformOrigin: isRTL ? "right" : "left",
          },
          '& .MuiInputBase-root fieldset': {
            textAlign: isRTL ? "right" : "left",
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: 'gray',
          },
          '& .MuiOutlinedInput-input': {
            textAlign: isRTL ? "right" : "left",
          },
        }}
      />
    </LocalizationProvider>
  );
};
