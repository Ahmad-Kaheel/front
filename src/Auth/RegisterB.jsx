import { Autocomplete, Button,FormControl, Stack, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import countries from './countries'
import { useTranslation } from 'react-i18next'
import { CustomInput } from '../Utils/CustomInput'
import PhoneNumberInput from '../Utils/PhoneNumberInput'
import { useNavigate } from 'react-router-dom'
import {CircularProgress,Backdrop } from '@mui/material';
import authApi from '../Api/AuthApi'
const RegisterB = () => {
  const {t,i18n} = useTranslation("registerB")
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    is_vendor: true,
    company_name: '',
    company_type: '',
    commercial_registration_number: '',
    tax_number: '',
    manager_name: '',
    company_email: '',
    email: '',
    mobile_number: '',
    country_code: '',
    local_phone: '',
    website: '',
    business_activity: '',
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
        mobile_number: fullPhoneNumber, // Update the full phone number
    }));
};
  
  

  
const handleSubmit = async () => {
  
  
  const dataToSend = { ...formData }; // No need to re-compute phone_number
  setLoading(true);
  try {
          const response = await authApi.post('api/register/', dataToSend,
          {
              headers: {
                  'Content-Type': 'application/json',
                  'Accept-Language': i18n.language,
              },
          }
      );
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
  const newErrors = { ...errors }; // نسخ الأخطاء الحالية

  switch (key) {
    case "company_name":
      if (!value.trim()) newErrors.company_name = t("company_name_error");
      else delete newErrors.company_name;
      break;

    case "company_type":
      if (!value.trim()) newErrors.company_type = t("company_type_error");
      else delete newErrors.company_type;
      break;

    case "country_code":
      if (!value.trim()) newErrors.country_code = t("country_code_error");
      else delete newErrors.country_code;
      break;

    case "local_phone":
      if (!value.trim()) newErrors.local_phone = t("local_phone_error");
      else if (!/^\d+$/.test(value)) newErrors.local_phone = t("local_phone_invalid_error");
      else delete newErrors.local_phone;
      break;

    case "email":
      if (!value.trim()) newErrors.email = t("email_error");
      else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,63}$/.test(value))
        newErrors.email = t("email_invalid_error");
      else delete newErrors.email;
      break;

    case "commercial_registration_number":
      if (!value.trim())
        newErrors.commercial_registration_number = t("commercial_registration_number_error");
      else delete newErrors.commercial_registration_number;
      break;

    case "mobile_number":
      if (!value.trim()) newErrors.mobile_number = t("phone_error");
      else delete newErrors.mobile_number;
      break;

    case "tax_number":
      if (!value.trim()) newErrors.tax_number = t("tax_number_error");
      else delete newErrors.tax_number;
      break;

    case "manager_name":
      if (!value.trim()) newErrors.manager_name = t("manager_name_error");
      else delete newErrors.manager_name;
      break;

    case "company_email":
      if (!value.trim()) newErrors.company_email = t("company_email_error");
      else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,63}$/.test(value))
        newErrors.company_email = t("company_email_invalid_error");
      else delete newErrors.company_email;
      break;

    case "website":
      if (!value.trim()) newErrors.website = t("website_error");
      else delete newErrors.website;
      break;

    case "business_activity":
      if (!value.trim()) newErrors.business_activity = t("business_activity_error");
      else delete newErrors.business_activity;
      break;

    case "password1":
      if (!value) newErrors.password1 = t("password1_error");
      else if (
        !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d])[A-Za-z\d@$!%*?&#_-]{8,}$/.test(value)
      )
        newErrors.password1 = t("password1_invalid_error");
      else delete newErrors.password1;
      break;

    case "password2":
      if (!value) newErrors.password2 = t("password2_error");
      else if (value !== formData.password1) newErrors.password2 = t("passwords_mismatch_error");
      else delete newErrors.password2;
      break;

    default:
      break;
  }

  setErrors(newErrors); // تحديث الأخطاء
};

  return (
    <Stack gap={"32px"} sx={{ width: { xs: "300px",sm:"500px", md: "700px", lg: "800px",xl:"1000px" }, margin: "auto", paddingY: "32px" }}>
      <Typography fontWeight={600} fontSize={"16px"} color='colors.black0'>{t("title")}</Typography>
      <Stack sx={{ padding: {xs:"16px",sm:"20px",md:"32px"}, border: 1,borderWidth:"2px",borderColor:"colors.gray0",borderRadius:"32px" }} gap={"32px"}>
        
        <Stack gap={"32px"}>
          <FormControl sx={{ display: "flex", gap: "32px" }}>
           
            <CustomInput
             language={i18n.language} 
             type={"text"} 
             label={t('company')} 
             onChange={(e) => handleChange('company_name', e.target.value)}
             onBlur={(e) => validateField('company_name', e.target.value)}
             required
             error={errors.company_name} // إذا كان هناك خطأ في الحقل
             helperText={errors.company_name}
             />
          
            <CustomInput 
            language={i18n.language} 
            type={"text"} 
            label={t('type')} 
            onChange={(e) => handleChange('company_type', e.target.value)}
            onBlur={(e) => validateField('company_type', e.target.value)}
            required
            error={errors.company_type} // إذا كان هناك خطأ في الحقل
            helperText={errors.company_type}
            />

          
            <CustomInput 
            language={i18n.language} 
            type={"text"} 
            label={t('record')} 
            onChange={(e) => handleChange('commercial_registration_number', e.target.value)}
            onBlur={(e) => validateField('commercial_registration_number', e.target.value)}
            required
            error={errors.commercial_registration_number} // إذا كان هناك خطأ في الحقل
            helperText={errors.commercial_registration_number}
            />

           
            <CustomInput 
            language={i18n.language}
            type={"text"} 
            label={t('tax')} 
            onChange={(e) => handleChange('tax_number', e.target.value)}
            onBlur={(e) => validateField('tax_number', e.target.value)}
            required
            error={errors.tax_number} // إذا كان هناك خطأ في الحقل
            helperText={errors.tax_number}
            />

            
            <CustomInput 
            language={i18n.language}
             type={"text"} 
             label={t('address')}
            //  onChange={(e) => handleChange('tax_number', e.target.value)}
            //   onBlur={(e) => validateField('tax_number', e.target.value)}
            //   required
            //   error={errors.tax_number} // إذا كان هناك خطأ في الحقل
            //   helperText={errors.tax_number}
             />

           
            <CustomInput
             language={i18n.language} 
             type={"text"} 
             label={t('admin')} 
             onChange={(e) => handleChange('manager_name', e.target.value)}
             onBlur={(e) => validateField('manager_name', e.target.value)}
             required
             error={errors.manager_name} // إذا كان هناك خطأ في الحقل
             helperText={errors.manager_name}
             />

           
            <CustomInput 
            language={i18n.language} 
            type={"email"} 
            label={t('email')}
            onChange={(e) => handleChange('company_email', e.target.value)}
             onBlur={(e) => validateField('company_email', e.target.value)}
             required
             error={errors.company_email} // إذا كان هناك خطأ في الحقل
             helperText={errors.company_email}
            />

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
            onChange={(e) => handlePhoneChange(e.target.value)} // تمرير القيمة الصحيحة
            onBlur={(e) => validateField('local_phone', e.target.value)}
            required
            error={errors.local_phone}
            helperText={errors.local_phone}
          />


            </Stack>
              <CustomInput 
              language={i18n.language} 
              type={"text"} 
              label={t('website')} 
              onChange={(e) => handleChange('website', e.target.value)}
              onBlur={(e) => validateField('website', e.target.value)}
              required
              error={errors.website} // إذا كان هناك خطأ في الرقم المحلي
              helperText={errors.website} // عرض رسالة الخطأ
              />
            
          
              <CustomInput 
              language={i18n.language}
              type={"text"} 
              label={t('Activity')} 
               
              onChange={(e) => handleChange('business_activity', e.target.value)}
              onBlur={(e) => validateField('business_activity', e.target.value)}
              required
              error={errors.business_activity} // إذا كان هناك خطأ في الرقم المحلي
              helperText={errors.business_activity} // عرض رسالة الخطأ
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
              variant='contained'
              onClick={handleSubmit}
              disabled={loading}
               sx={{bgcolor:"colors.red0"}} >
                {t("button")}
              </Button>
          </FormControl>
    
          <Stack direction={"row"} alignItems={"center"} gap={"32px"}>
            <Typography fontWeight={400} fontSize={"14px"} sx={{cursor:"pointer"}}>{t("account")}</Typography>
            <Typography fontWeight={600} fontSize={"16px"} sx={{borderBottom:1,cursor:"pointer",color:"colors.red0",borderColor:"colors.red0"}}>{t("in")}</Typography>
          </Stack>
          <Stack direction={"row"} alignItems={"center"} gap={"32px"}>
            <Typography fontWeight={400} fontSize={"14px"} sx={{cursor:"pointer"}}>{t("customer")}</Typography>
            <Typography fontWeight={600} fontSize={"16px"} sx={{borderBottom:1,cursor:"pointer",color:"colors.red0",borderColor:"colors.red0"}}>{t("cusAcc")}</Typography>
          </Stack>
        </Stack>
      </Stack>
      <Backdrop
          open={loading}
          sx={{
            color: "#fff",
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
    </Stack>
  )
}

export default RegisterB