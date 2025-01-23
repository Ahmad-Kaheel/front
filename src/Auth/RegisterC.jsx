import React, { useState } from 'react';
import axios from 'axios';

import {CircularProgress,Backdrop } from '@mui/material';
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { CustomInput } from '../Utils/CustomInput';
import { DateInput } from '../Utils/DateInput';
import PhoneNumberInput from '../Utils/PhoneNumberInput';
import { useNavigate } from 'react-router-dom';
import authApi from '../Api/AuthApi';

const RegisterC = () => {
  const { t, i18n } = useTranslation("registerC");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    gender: '',
    phone_number: '', // الحقل النهائي الذي سيتم دمجه عند الإرسال
    country_code: '', // رمز الدولة منفصل
    local_phone: '', // الرقم المحلي
    date_of_birth: '',
    email: '',
    password1: '',
    password2: '',
  });
  
  const [selectedCountry, setSelectedCountry] = useState({
    code: 'SA',
    label: 'Saudi Arabia',
    phone: '966',
  });
  const [errors, setErrors] = useState({});
  const handlePhoneChange = (localPhone) => {
    const fullPhoneNumber = `+${selectedCountry.phone}${localPhone}`;
    setFormData((prev) => ({
        ...prev,
        local_phone: localPhone, // Keep track of the local phone input
        phone_number: fullPhoneNumber, // Update the full phone number
    }));
};

  

  
const handleSubmit = async () => {
  console.log(formData.phone_number); // Log the final phone number
  const dataToSend = { ...formData }; // No need to re-compute phone_number
  setLoading(true);
  try {
    const response = await authApi.post('api/register/', dataToSend,{
      headers: {
          'Accept-Language': i18n.language, // تخصيص اللغة لهذه العملية فقط
          'Content-Type':"application/json",
      },
    });
      
      console.log('Response:', response.data);
      navigate("/");
  } catch (error) {
      console.error('Submission Error:', error.response?.data || error.message);
      if (error.response) {
          setErrors((prevErrors) => ({ ...prevErrors, ...error.response.data }));
      }
  } finally {
      setLoading(false);
  }
};

  
  
  
  const handleChange = (key, value) => {
    setFormData((prev) => {
      const updatedData = { ...prev, [key]: value };
      console.log("Updated formData:", updatedData);
      return updatedData;
    });
  
    // التحقق الفوري عند تعديل القيمة
    validateField(key, value);
  };
  
  const validateField = (key, value) => {
    const newErrors = { ...errors }; // نسخة من الأخطاء الحالية
  
    switch (key) {
      case 'first_name':
        if (!value.trim()) newErrors.first_name = t("First name is required.");
        else delete newErrors.first_name; // إزالة الخطأ إذا كانت القيمة صحيحة
        break;
      case 'last_name':
        if (!value.trim()) newErrors.last_name = t("Last name is required.");
        else delete newErrors.last_name;
        break;
        case 'country_code':
          if (!value || !value.phone) {
              newErrors.country_code = t("Country code is required.");
          } else {
              delete newErrors.country_code;
          }
          break;
      
      case 'local_phone':
        if (!value.trim()) newErrors.local_phone = t("Phone number is required.");
        else if (!/^\d+$/.test(value)) newErrors.local_phone = t("Invalid phone number format.");
        else delete newErrors.local_phone;
        break;
      case 'email':
        if (!value.trim()) {
          newErrors.email = t("Email is required.");
        } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
          newErrors.email = t("Invalid email address.");
        } else {
          delete newErrors.email;
        }
        break;
      case 'gender':
        if (!value) newErrors.gender = t("Gender is required.");
        else delete newErrors.gender;
        break;
      case 'phone_number':
        if (!value.trim()) newErrors.phone_number = t("Phone number is required.");
        else delete newErrors.phone_number;
        break;
        
      
      case 'date_of_birth':
        if (!value) newErrors.date_of_birth = t("Date of birth is required.");
        else delete newErrors.date_of_birth;
        break;
      case 'password1':
        if (!value) {
          newErrors.password1 = t("Password is required.");
        } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d])[A-Za-z\d@$!%*?&#_-]{8,}$/.test(value)) {
          newErrors.password1 = t(
            "Password must be at least 8 characters, contain an uppercase letter, a lowercase letter, a number, and a special character."
          );
        } else {
          delete newErrors.password1;
        }
        break;
      case 'password2':
        if (!value) {
          newErrors.password2 = t("Confirm password is required.");
        } else if (value !== formData.password1) {
          newErrors.password2 = t("Passwords do not match!");
        } else {
          delete newErrors.password2;
        }
        break;
      default:
        break;
    }
  
    setErrors(newErrors); // تحديث الأخطاء
  };
  
  
  
  const validatePasswords = () => {
    const { password1, password2 } = formData;
    const newErrors = {};
  
    // تحقق من تطابق كلمتي السر
    if (password1 !== password2) {
      newErrors.passwordMatch = t("Passwords do not match!");
    }
  
    // تحقق من قوة كلمة السر
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d])[A-Za-z\d@$!%*?&#_-]{8,}$/;
    if (!passwordRegex.test(password1)) {
      newErrors.passwordStrength = t(
        "Password must be at least 8 characters, contain an uppercase letter, a lowercase letter, a number, and a special character."
      );
    }
  
    setErrors((prevErrors) => ({ ...prevErrors, ...newErrors }));
  
    // أضف هذا السطر لتتبع الأخطاء
    console.log("Password Validation Errors:", newErrors);
  
    return Object.keys(newErrors).length === 0;
  };
  
  

  return (
    <Stack
      gap={"32px"}
      sx={{
        width: { xs: "300px",sm:"500px", md: "700px", lg: "800px",xl:"1000px" },
        margin: "auto",
        paddingY: "32px",
      }}
    >
      <Typography fontWeight={600} fontSize={"16px"} color="colors.black0">
        {t("title")}
      </Typography>
      <Stack
        sx={{
          padding: { xs: "16px", sm: "20px", md: "32px" },
          border: 1,
          borderWidth: "2px",
          borderColor: "colors.gray0",
          borderRadius: "32px",
        }}
        gap={"32px"}
      >
        <Stack gap={"32px"}>
          <FormControl sx={{ display: "flex", gap: "32px" }}>
            <CustomInput
              language={i18n.language}
              type="text"
              label={t("fname")}
              onChange={(e) => handleChange('first_name', e.target.value)}
              onBlur={(e) => validateField('first_name', e.target.value)}
              required
              error={errors.first_name} // إذا كان هناك خطأ في الحقل
              helperText={errors.first_name} // عرض رسالة الخطأ
            />
            <CustomInput
              language={i18n.language}
              type={"text"}
              label={t("lname")}
              onChange={(e) => handleChange('last_name', e.target.value)}
              onBlur={(e) => validateField('last_name', e.target.value)} 
              required
              error={errors.last_name} // إذا كان هناك خطأ في الحقل
              helperText={errors.last_name} // عرض رسالة الخطأ
            />
            <Stack direction={"row"} gap="32px" alignItems={"center"}>
              <FormLabel id="demo-row-radio-buttons-group-label">{t("gender")}</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                onChange={(e) => handleChange('gender', e.target.value)}
                
              >
                
                <Stack direction={"row"}>
                  <FormControlLabel value="female" control={<Radio />} label={t("female")} />
                  <FormControlLabel value="male" control={<Radio />} label={t("male")} />
                </Stack>
              </RadioGroup>
            </Stack>
            {errors.gender && (
              <Typography color="error" variant="caption">
                {errors.gender}
              </Typography>
            )}
            <Stack direction={"row"} sx={{ width: "100%" }} gap={"32px"}>
            <PhoneNumberInput
              selectedCountry={selectedCountry}
              setSelectedCountry={setSelectedCountry}
              required
              error={errors.country_code} // إذا كان هناك خطأ في الرقم المحلي
              helperText={errors.country_code} // عرض رسالة الخطأ
              onBlur={(e) => validateField('country_code', selectedCountry)}
            />
            <CustomInput
              label={t("Phone Number")}
              language={i18n.language}
              onChange={(e) => handlePhoneChange(e.target.value)} // Pass the actual value
              onBlur={(e) => validateField('local_phone', e.target.value)}
              required
              error={errors.local_phone}
              helperText={errors.local_phone}
          />

            </Stack>
            <DateInput
              language="ar"
              label="تاريخ الميلاد"
              onChange={(value) => handleChange('date_of_birth', value)}
              onBlur={(e) => validateField('date_of_birth', e.target.value)}
              required
              error={errors.date_of_birth} // عرض إطار باللون الأحمر إذا كان هناك خطأ
              helperText={errors.date_of_birth} // عرض رسالة الخطأ
            />


            <CustomInput
              language={i18n.language}
              label={t("email")}
              type={"email"}
              onChange={(e) => handleChange('email', e.target.value)}
              onBlur={() => validateField('email', formData.email)} 
              required
              error={errors.email} // إذا كان هناك خطأ في الحقل
              helperText={errors.email} // عرض رسالة الخطأ
            />
            <CustomInput
              language={i18n.language}
              label={t("password")}
              type={"password"}
              onChange={(e) => handleChange('password1', e.target.value)}
              onBlur={() => validateField('password1', formData.password1)} 
               required
               error={errors.password1} // إذا كان هناك خطأ في الحقل
              helperText={errors.password1}
            />
            <CustomInput
              language={i18n.language}
              label={t("confirm password")}
              type={"password"}
              onChange={(e) => handleChange('password2', e.target.value)}
              onBlur={() => validateField('password2', formData.password2)} 
              required
               error={errors.password2} // إذا كان هناك خطأ في الحقل
              helperText={errors.password2}
            />
            
            <Button
              variant="contained"
              sx={{ bgcolor: "colors.red0" }}
              onClick={handleSubmit}
              disabled={loading}
            >
              {t("button")}
            </Button>
            <Backdrop
              open={loading}
              sx={{
                color: "#fff",
                zIndex: (theme) => theme.zIndex.drawer + 1,
              }}
            >
              <CircularProgress color="inherit" />
            </Backdrop>
          </FormControl>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default RegisterC;
