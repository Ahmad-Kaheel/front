import { FormControl, RadioGroup, Stack ,FormControlLabel, Radio, Box, Typography, TextField, InputAdornment} from '@mui/material'
import React, { useState } from 'react'
import gpay from "../assets/images and icons/pay/googlepay.png"
import credit from "../assets/images and icons/pay/visa-master.png"
import mada from "../assets/images and icons/pay/mada.png"
import tamara from "../assets/images and icons/pay/tamara.png"
import tabby from "../assets/images and icons/pay/pay8.png"
import stc from "../assets/images and icons/pay/stc.png"
import paypal from "../assets/images and icons/pay/paypal.png"



import buis from "../assets/images and icons/pay/Business.svg"
import { Lock } from '@mui/icons-material'
const CardDetail = () => {  // Capitalize component name
  const [cardNumber, setCardNumber] = useState('');
  const [isCardValid, setIsCardValid] = useState(true);
  const [cvv, setCvv] = useState('');
  const [isCvvValid, setIsCvvValid] = useState(true);
  const [expiryDate, setExpiryDate] = useState('');
  const [isExpiryValid, setIsExpiryValid] = useState(true);
  const handleExpiryChange = (event) => {
    const value = event.target.value;
    setExpiryDate(value);

    // Get the current date and check if the entered date is in the future
    const currentDate = new Date();
    const [year, month] = value.split('-').map(Number);
    const expiryDate = new Date(year, month - 1); // month is zero-indexed

    // Validate that expiry date is in the future
    setIsExpiryValid(expiryDate >= new Date(currentDate.getFullYear(), currentDate.getMonth()));
  };

  const isLuhnValid = (number) => {
    let sum = 0;
    let shouldDouble = false;
  
    for (let i = number.length - 1; i >= 0; i--) {
      let digit = parseInt(number[i]);
  
      if (shouldDouble) {
        digit *= 2;
        if (digit > 9) digit -= 9;
      }
  
      sum += digit;
      shouldDouble = !shouldDouble;
    }
  
    return sum % 10 === 0;
  };
  const handleCvvChange = (event) => {
    const value = event.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    setCvv(value);

    // Check if the CVV length is 3 or 4 digits
    setIsCvvValid(value.length === 3);
  };

  const handleCardNumberChange = (event) => {
    const value = event.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    setCardNumber(value);

    // Check if the card number length is between 13 and 19 and passes the Luhn algorithm
    setIsCardValid(value.length >= 13 && value.length <= 19 && isLuhnValid(value));
  };
  return (
    <Stack sx={{padding:"32px",bgcolor:"colors.white0"}}>
      <Stack>
        <Typography>رقم البطاقة</Typography>
        <TextField
          value={cardNumber}
          onChange={handleCardNumberChange}
          error={!isCardValid}
          helperText={!isCardValid ? "رقم البطاقة غير صالح" : ""}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock />
              </InputAdornment>
            ),
          }}
        />
      </Stack>
      <Stack direction={"row"} gap={"16px"}>
      <Stack>
        <Typography> تاريخ الانتهاء</Typography>
        <TextField
         type="month"
         value={expiryDate}
         onChange={handleExpiryChange}
         error={!isExpiryValid}
         helperText={!isExpiryValid ? "تاريخ الانتهاء غير صالح" : ""}
        />
      </Stack>
      <Stack>
        <Typography>رمز الحماية</Typography>
        <TextField
          value={cvv}
          onChange={handleCvvChange}
          error={!isCvvValid}
          helperText={!isCvvValid ? "رمز الحماية غير صالح" : ""}
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
}
const Checkout = () => {
   const [value, setValue] = useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Stack gap={"32px"} width={{xs:"100%",md:"400px"}}>
        <Stack>
            <Stack gap={"32px"}> 
                <Stack gap={"16px"}>
                  <Stack direction={"row"} gap={"16px"}>
                    <Box component={"img"} src={buis} />
                    <Typography>اختر طريقة الدفع</Typography>
                  </Stack>
                  <Typography>عملية الدفع امنة ومشفرة</Typography>
                </Stack>
                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={value}
                    onChange={handleChange}
                  >
                    <Stack direction={"row"} alignItems={"center"} gap={"32px"} sx={{border:1,width:"100%",mb:"16px"}}>
                      <FormControlLabel value="gpay" control={<Radio />}  />
                      <Box component={"img"} src={gpay} sx={{width:"64px",height:"64px"}}/>
                      <Typography fontWeight={400} fontSize={"16px"} color='text.paragraph'> googlePlay</Typography>
                    </Stack>
                    <Stack direction={"row"} alignItems={"center"} gap={"32px"} sx={{border:1,width:"100%",mb:"16px"}}>
                      <FormControlLabel value="credit" control={<Radio />}  />
                      <Box component={"img"} src={credit} sx={{width:"64px",height:"64px"}}/>
                      <Typography fontWeight={400} fontSize={"16px"} color='text.paragraph'> بطاقة ائتمان </Typography>
                    </Stack>
                    {
                      value ==="credit" && <CardDetail />
                    }
                    <Stack direction={"row"} alignItems={"center"} gap={"32px"} sx={{border:1,width:"100%",mb:"16px"}}>
                      <FormControlLabel value="mada" control={<Radio />}  />
                      <Box component={"img"} src={mada} sx={{width:"64px",height:"64px"}}/>
                      <Typography fontWeight={400} fontSize={"16px"} color='text.paragraph'> مدى/بطاقة الصراف</Typography>
                    </Stack>
                    {
                      value ==="mada" && <CardDetail />
                    }
                    <Stack direction={"row"} alignItems={"center"} gap={"32px"} sx={{border:1,width:"100%",mb:"16px"}}>
                      <FormControlLabel value="tamara" control={<Radio />}  />
                      <Box component={"img"} src={tamara} sx={{width:"64px",height:"64px"}}/>
                      <Typography fontWeight={400} fontSize={"16px"} color='text.paragraph'>قسم فاتورتك الى اربع دفعات بدون فوائد مع تمارة</Typography>
                    </Stack>
                    <Stack direction={"row"} alignItems={"center"} gap={"32px"} sx={{border:1,width:"100%",mb:"16px"}}>
                      <FormControlLabel value="tabby" control={<Radio />}  />
                      <Box component={"img"} src={tabby} sx={{width:"64px",height:"64px"}}/>
                      <Typography fontWeight={400} fontSize={"16px"} color='text.paragraph'>قسم فاتورتك الى اربع دفعات بدون فوائد مع تابي</Typography>
                    </Stack>
                    <Stack direction={"row"} alignItems={"center"} gap={"32px"} sx={{border:1,width:"100%",mb:"16px"}}>
                      <FormControlLabel value="stc" control={<Radio />}  />
                      <Box component={"img"} src={stc} sx={{width:"64px",height:"64px"}}/>
                      <Typography fontWeight={400} fontSize={"16px"} color='text.paragraph'> Stc</Typography>
                    </Stack>
                    <Stack direction={"row"} alignItems={"center"} gap={"32px"} sx={{border:1,width:"100%",mb:"16px"}}>
                      <FormControlLabel value="paypal" control={<Radio />}  />
                      <Box component={"img"} src={paypal} sx={{width:"64px",height:"64px"}}/>
                      <Typography fontWeight={400} fontSize={"16px"} color='text.paragraph'> paypal</Typography>
                    </Stack>
                  </RadioGroup>
                </FormControl>
                <Stack gap={"16px"}>
                  <Typography>ملاحظات أخرى لفريق العمل</Typography>
                  <TextField
                    
                    id="filled-multiline-static"
                    label="ملاحظاتك من فضلك"
                    multiline
                    rows={4}
                    variant="filled"
                    sx={{bgcolor:"white",color:"colors.red0"}}
                  />
                </Stack>
            </Stack>
        </Stack>
    </Stack>
  )
}

export default Checkout