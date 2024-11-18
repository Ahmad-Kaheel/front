import React from 'react';
import { Stack, Box, Typography, FormControlLabel, Radio } from '@mui/material';

const PaymentOption = ({ value, label, imgSrc, selectedValue, onChange }) => (
  <Stack direction="row" alignItems="center" spacing={2} sx={{ border: 1, p: 2, width: '100%' }}>
    <FormControlLabel value={value} control={<Radio />} checked={selectedValue === value} onChange={onChange} />
    <Box component="img" src={imgSrc} alt={label} sx={{ width: 64, height: 64 }} />
    <Typography fontWeight={400} fontSize="16px" color="text.paragraph">
      {label}
    </Typography>
  </Stack>
);

export default PaymentOption;
