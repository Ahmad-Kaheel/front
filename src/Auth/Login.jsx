import React, { useState,useEffect } from 'react';
import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, Stack, Typography, CircularProgress, Backdrop, Snackbar, Alert } from '@mui/material';
import google from "../assets/images-and-icons/auth/google.svg";
import apple from "../assets/images-and-icons/auth/apple.svg";
import { FacebookOutlined } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { CustomInput } from '../Utils/CustomInput';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUser } from '../state/slices/UserSlice';
import { useNavigate } from 'react-router-dom';
import authApi from '../Api/AuthApi';
const Login = () => {
  const { t, i18n } = useTranslation("login");
  const dispatch = useDispatch();
  const navigate = useNavigate()
  // حالات بيانات تسجيل الدخول والتحميل
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false, // حقل لتذكر المستخدم
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // حالات لعرض مربع الحوار
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('info'); // "success", "error", "warning", "info"

  // تحديث الحقول عند الكتابة
  const handleChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
const handleCheckboxChange = (event) => {
  setFormData((prev) => ({
    ...prev,
    rememberMe: event.target.checked,
  }));
};

  // دالة التحقق من الحقول
  const validateFields = () => {
    const newErrors = {};
    if (!formData.email.trim()) {
      newErrors.email = t("email_error");
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,63}$/.test(formData.email)) {
      newErrors.email = t("email_invalid_error");
    }
    if (!formData.password.trim()) {
      newErrors.password = t("password_error");
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  // دالة تسجيل الدخول
  const handleLogin = async () => {
    if (!validateFields()) return;

    setLoading(true);
    try {
      const response = await authApi.post('api/login/', formData, {
        headers: { 'Content-Type': 'application/json', 'Accept-Language': i18n.language },
      });

      const userInfo = response.data;
      dispatch(setUser(userInfo)); // قم بإرسال البيانات الكاملة مباشرة إلى Redux
      document.cookie = `refresh_token=${userInfo.refresh_token}; Path=/`;
      document.cookie = `access_token=${userInfo.access_token}; Path=/`;
      navigate('/');
    } catch (error) {
      setSnackbarMessage(error.response?.data?.detail || t("login_failed"));
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    } finally {
      setLoading(false);
    }
  };


  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };
  // إغلاق مربع الحوار

  return (
    <Stack gap={"32px"} sx={{ width: { xs: "300px", sm: "500px", md: "700px", lg: "800px", xl: "1000px" }, margin: "auto", paddingY: "32px" }}>
      <Typography fontWeight={600} fontSize={"16px"} color='colors.black0'>{t("title")}</Typography>
      <Stack sx={{ padding: { xs: "16px", sm: "20px", md: "32px" }, border: 1, borderWidth: "2px", borderColor: "colors.gray0", borderRadius: "32px" }} gap={"32px"}>
        <Stack alignItems={"center"} gap={"32px"}>
          <Typography fontWeight={600} fontSize={"16px"} color='colors.black0'>{t("label1")}</Typography>
          <Stack direction={"row"} gap={"16px"}>
            <Box component={"img"} src={apple} sx={{ cursor: "pointer", padding: "8px" }} />
            <Box component={"img"} src={google} sx={{ cursor: "pointer", padding: "8px" }} />
            <Box sx={{ cursor: "pointer", padding: "8px" }}>
              <FacebookOutlined />
            </Box>
          </Stack>
          <Typography>{t("label2")}</Typography>
        </Stack>
        <Stack gap={"32px"}>
          <FormControl sx={{ display: "flex", gap: "32px" }}>
            <CustomInput
              type={"email"}
              label={t('email')}
              language={i18n.language}
              onChange={(e) => handleChange('email', e.target.value)}
              error={!!errors.email}
              helperText={errors.email}
            />
            <CustomInput
              type={"password"}
              label={t('password')}
              language={i18n.language}
              onChange={(e) => handleChange('password', e.target.value)}
              error={!!errors.password}
              helperText={errors.password}
            />
          </FormControl>
          <FormGroup sx={{ width: "fit-content" }}>
  <FormControlLabel
    control={
      <Checkbox
        checked={formData.rememberMe}
        onChange={handleCheckboxChange}
      />
    }
    label={t("remember")}
  />
</FormGroup>

          <Stack direction={"row"} alignItems={"center"} gap={"32px"}>
          <Button
          variant="contained"
          color="primary"
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} /> : t("title")}
        </Button>
            <Typography fontWeight={400} fontSize={"14px"} sx={{ textDecoration: "underline", cursor: "pointer" }}> {t("forget")} </Typography>
          </Stack>
          <Stack direction={"row"} alignItems={"center"} gap={"32px"}>
            <Typography fontWeight={400} fontSize={"14px"} sx={{ textDecoration: "underline", cursor: "pointer" }}>{t("account")}</Typography>
            <Typography fontWeight={600} fontSize={"16px"} sx={{ borderBottom: 1, cursor: "pointer", color: "colors.red0", borderColor: "colors.red0" }}>{t("create")}</Typography>
          </Stack>
        </Stack>
      </Stack>
      {/* Loading Indicator */}
      <Backdrop
        open={loading}
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      {/* Snackbar for Messages */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export default Login;
