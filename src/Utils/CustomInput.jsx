import { TextField } from '@mui/material'
import React from 'react'

export const CustomInput = ({language,label,type}) => {

  return (
    <TextField
        InputLabelProps={{
            className: language==="ar" ? 'custom-label-rtl' : ''
        }}
            sx={{
            textAlign:'right',
            width:"100%",
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
            label={label}
            type={type}
            variant="outlined"
    />
  )
}
