import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, Typography, Snackbar, Alert } from '@mui/material';
import axios from 'axios';
import { CustomInput } from '../Utils/CustomInput';
import { useTranslation } from 'react-i18next';
import { CircularProgress, Backdrop } from '@mui/material';
import { useSelector } from 'react-redux';

const ChangePassword = ({ open, onClose }) => {
  const { t, i18n } = useTranslation("profileData");
  const token = useSelector((state) => state.user.userInfo.access_token);

  // حالة لتخزين قيم الحقول
  const [passwords, setPasswords] = useState({
    new_password1: '',
    new_password2: ''
  });

  // حالة الرسائل
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('info');
  const [loading, setLoading] = useState(false);

  // غلق Snackbar
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  // تحديث الحقول عند الإدخال
  const handleChange = (key, value) => {
    setPasswords((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  // إرسال البيانات
  const handlePasswordChange = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        'http://209.38.247.212:8000/password/change/',
        passwords,
        {
          headers: {
            'Content-Type': 'application/json',
            'Accept-Language': i18n.language,
            Authorization: `Bearer ${token}`, // إضافة رمز المصادقة
          },
        }
      );
      console.log(response.data);
      // عرض رسالة النجاح
      setSnackbarMessage(t('password_changed_success'));
      setSnackbarSeverity('success');
      setSnackbarOpen(true);
      onClose();
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
      setSnackbarMessage(error.response?.data?.detail || t('password_change_error'));
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>{t("change_password")}</DialogTitle>
        <DialogContent>
          <Stack gap={"32px"}>
            <Stack gap={"16px"}>
              <Typography>{t("new_password1")}</Typography>
              <CustomInput
                name="new_password1" // تصحيح الاسم
                onChange={(e) => handleChange('new_password1', e.target.value)}

                language={i18n.language}
                type="password"
              />
            </Stack>
            <Stack gap={"16px"}>
              <Typography>{t("new_password2")}</Typography>
              <CustomInput
                name="new_password2" // تصحيح الاسم
                onChange={(e) => handleChange('new_password2', e.target.value)}
                language={i18n.language}
                type="password"
              />
            </Stack>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" color="secondary" onClick={onClose}>
            {t("cancel")}
          </Button>
          <Button variant="contained" color="primary" onClick={handlePasswordChange}>
            {t("confirm")}
          </Button>
        </DialogActions>
      </Dialog>

      <Backdrop
        open={loading}
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ChangePassword;
