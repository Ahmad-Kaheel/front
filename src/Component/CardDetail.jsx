import React, { useState } from 'react';
import { Stack, TextField, Typography, InputAdornment } from '@mui/material';
import { Lock } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

const CardDetail = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [isCardValid, setIsCardValid] = useState(true);
  const [cvv, setCvv] = useState('');
  const [isCvvValid, setIsCvvValid] = useState(true);
  const [expiryDate, setExpiryDate] = useState('');
  const [isExpiryValid, setIsExpiryValid] = useState(true);
  const { t } = useTranslation('payment');

  // Validate expiry date
  const handleExpiryChange = (event) => {
    const value = event.target.value;
    setExpiryDate(value);
    const currentDate = new Date();
    const [year, month] = value.split('-').map(Number);
    const expiryDate = new Date(year, month - 1); // month is zero-indexed
    setIsExpiryValid(expiryDate >= new Date(currentDate.getFullYear(), currentDate.getMonth()));
  };

  // Luhn algorithm for card validation
  const isLuhnValid = (number) => {
    let sum = 0;
    let shouldDouble = false;
    for (let i = number.length - 1; i >= 0; i--) {
      let digit = parseInt(number[i], 10);
      if (shouldDouble) {
        digit *= 2;
        if (digit > 9) digit -= 9;
      }
      sum += digit;
      shouldDouble = !shouldDouble;
    }
    return sum % 10 === 0;
  };

  // Validate card number
  const handleCardNumberChange = (event) => {
    const value = event.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    setCardNumber(value);
    setIsCardValid(value.length >= 13 && value.length <= 19 && isLuhnValid(value));
  };

  // Validate CVV
  const handleCvvChange = (event) => {
    const value = event.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    setCvv(value);
    setIsCvvValid(value.length === 3);
  };

  return (
    <Stack spacing={2}>
      <Stack>
        <Typography>{t('card')}</Typography>
        <TextField
          value={cardNumber}
          onChange={handleCardNumberChange}
          error={!isCardValid}
          helperText={!isCardValid ? t('errCard') : ''}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock />
              </InputAdornment>
            ),
          }}
        />
      </Stack>
      <Stack direction="row" gap={"16px"}>
        <Stack>
          <Typography>{t('expir')}</Typography>
          <TextField
            type="month"
            value={expiryDate}
            onChange={handleExpiryChange}
            error={!isExpiryValid}
            helperText={!isExpiryValid ? t('errDate') : ''}
          />
        </Stack>
        <Stack>
          <Typography>{t('cvv')}</Typography>
          <TextField
            value={cvv}
            onChange={handleCvvChange}
            error={!isCvvValid}
            helperText={!isCvvValid ? t('errCvv') : ''}
            placeholder="CVV"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock />
                </InputAdornment>
              ),
            }}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default CardDetail;
