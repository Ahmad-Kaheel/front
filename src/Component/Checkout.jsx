import React, { useState } from 'react';
import { Stack, TextField, Typography, FormControl, RadioGroup,Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import PaymentOption from './PaymentOption';
import CardDetail from './CardDetail';

// Import payment images
import gpay from '../assets/images-and-icons/pay/googlepay.png';
import visa from '../assets/images-and-icons/pay/visa.svg';
import master from '../assets/images-and-icons/pay/master.svg';
import sadad from '../assets/images-and-icons/pay/sadad.svg';
import ur from '../assets/images-and-icons/pay/urpay.svg';

import mada from '../assets/images-and-icons/pay/mada.svg';
import tamara from '../assets/images-and-icons/pay/tamara.svg';
import tabby from '../assets/images-and-icons/pay/tabby.svg';
import apple from '../assets/images-and-icons/pay/itunes.svg';

import stc from '../assets/images-and-icons/pay/stc.svg';
import paypal from '../assets/images-and-icons/pay/paypal.svg';
import buis from '../assets/images-and-icons/pay/Business.svg';

import PaymentInfo from './PaymentInfo';
import { CustomInput } from '../Utils/CustomInput';

const Checkout = () => {
  const [value, setValue] = useState('');
  const { t ,i18n} = useTranslation('payment');

  const handleChange = (event) => setValue(event.target.value);

  return (
    <Stack gap={{xs:"20px",md:"22px",lg:"64px"}} direction={{xs:"column",md:"row"}}>
      <Stack spacing={4} width={{ xs: '100%', md: '400px' }}>
      <Stack spacing={2}>
        <Stack direction="row" spacing={2} alignItems="center">
          <Box component="img" src={buis} alt="Business" />
          <Typography>{t('choice')}</Typography>
        </Stack>
        <Typography>{t('label')}</Typography>
        <FormControl >
          <RadioGroup value={value} onChange={handleChange}>
            <Stack gap={"10px"}>
            <PaymentOption value="paypal" label="Paypal" imgSrc={paypal} selectedValue={value} onChange={handleChange} />
            <PaymentOption value="Apple" label="Apple pay" imgSrc={apple} selectedValue={value} onChange={handleChange} />
            <PaymentOption value="visa" label="Visa Card" imgSrc={visa} selectedValue={value} onChange={handleChange} />
            {value === 'visa' && <CardDetail />}
            <PaymentOption value="master" label="Master Card" imgSrc={master} selectedValue={value} onChange={handleChange} />
            {value === 'master' && <CardDetail />}
            <PaymentOption value="tabby" label="Tabby" imgSrc={tabby} selectedValue={value} onChange={handleChange} />
            <PaymentOption value="tamara" label="Tamara" imgSrc={stc} selectedValue={value} onChange={handleChange} />
            <PaymentOption value="sadad" label="سداد" imgSrc={sadad} selectedValue={value} onChange={handleChange} />
            <PaymentOption value="stc" label="STC pay" imgSrc={stc} selectedValue={value} onChange={handleChange} />
            <PaymentOption value="urpay" label="Ur pay" imgSrc={ur} selectedValue={value} onChange={handleChange} />
            <PaymentOption value="mada" label="مدى" imgSrc={mada} selectedValue={value} onChange={handleChange} />
            {value === 'mada' && <CardDetail />}

            </Stack>
          </RadioGroup>
        </FormControl>
      </Stack>
      <Stack spacing={2}>
      <TextField
        InputLabelProps={{
            className: i18n.language==="ar" ? 'custom-label-rtl' : ''
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
            label={t("notLabel")}
            type={"text"}
            variant="outlined"
            multiline
            rows={4}
    />
        

      </Stack>
    

    </Stack>
    </Stack>
  );
};

export default Checkout;
