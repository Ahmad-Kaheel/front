import React, { useState } from 'react';
import { Stack, TextField, Typography, FormControl, RadioGroup,Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import PaymentOption from './PaymentOption';
import CardDetail from './CardDetail';

// Import payment images
import gpay from '../assets/images-and-icons/pay/googlepay.png';
import credit from '../assets/images-and-icons/pay/visa-master.png';
import mada from '../assets/images-and-icons/pay/mada.png';
import tamara from '../assets/images-and-icons/pay/tamara.png';
import tabby from '../assets/images-and-icons/pay/pay8.png';
import stc from '../assets/images-and-icons/pay/stc.png';
import paypal from '../assets/images-and-icons/pay/paypal.png';
import buis from '../assets/images-and-icons/pay/Business.svg';

const Checkout = () => {
  const [value, setValue] = useState('');
  const { t } = useTranslation('payment');

  const handleChange = (event) => setValue(event.target.value);

  return (
    <Stack spacing={4} width={{ xs: '100%', md: '400px' }}>
      <Stack spacing={2}>
        <Stack direction="row" spacing={2} alignItems="center">
          <Box component="img" src={buis} alt="Business" />
          <Typography>{t('choice')}</Typography>
        </Stack>
        <Typography>{t('label')}</Typography>
        <FormControl>
          <RadioGroup value={value} onChange={handleChange}>
            <PaymentOption value="gpay" label="Google Pay" imgSrc={gpay} selectedValue={value} onChange={handleChange} />
            <PaymentOption value="credit" label="بطاقة ائتمان" imgSrc={credit} selectedValue={value} onChange={handleChange} />
            {value === 'credit' && <CardDetail />}
            <PaymentOption value="mada" label="مدى/بطاقة الصراف" imgSrc={mada} selectedValue={value} onChange={handleChange} />
            {value === 'mada' && <CardDetail />}
            <PaymentOption value="tamara" label="تمارة" imgSrc={tamara} selectedValue={value} onChange={handleChange} />
            <PaymentOption value="tabby" label="تابي" imgSrc={tabby} selectedValue={value} onChange={handleChange} />
            <PaymentOption value="stc" label="STC" imgSrc={stc} selectedValue={value} onChange={handleChange} />
            <PaymentOption value="paypal" label="PayPal" imgSrc={paypal} selectedValue={value} onChange={handleChange} />
          </RadioGroup>
        </FormControl>
      </Stack>
      <Stack spacing={2}>
        <Typography>{t('note')}</Typography>
        <TextField
          id="note"
          label={t('notLabel')}
          multiline
          rows={4}
          variant="filled"
          sx={{ bgcolor: 'white' }}
        />
      </Stack>
    </Stack>
  );
};

export default Checkout;
