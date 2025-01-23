import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, Typography, CircularProgress, Backdrop } from '@mui/material';
import React, { useEffect, useState } from 'react';
import EditProfile from './EditProfile';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import ChangePassword from './ChangePassword';
import api from '../Api/Api';

const ProfileData = () => {
  const userInfo = useSelector((state) => state.user.userInfo);

  console.log('Redux userInfo in ProfileData:', userInfo); // تأكد من أن البيانات تصل هنا

  const [edit, setEdit] = useState(false);
  const [changePassword, setChangePassword] = useState(false);
  const [loading, setLoading] = useState(false); // حالة التحميل
  const [profileData, setProfileData] = useState(null); // تخزين البيانات
  const { t, i18n } = useTranslation("profileData");

   useEffect(() => {
    console.log('Redux User Info:', userInfo);
    const fetchData = async () => {
      setLoading(true); // بدء التحميل
      try {
        const response = await api.get('api/user/profile/', 
          {
            headers: {
                'accept': 'application/json',
                'Accept-Language': i18n.language,
            },
        });
        setProfileData(response.data); // تخزين البيانات في الحالة
        console.log('Response:', response.data);
      } catch (error) {
        console.error('Error fetching profile data:', error.response?.data || error.message);
      } finally {
        setLoading(false); // إنهاء التحميل
      }
    };

    fetchData();
  }, [i18n.language]);

  return (
    <>
      <Backdrop
        open={loading}
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      {(!edit && !loading) && profileData && ( // عرض البيانات إذا لم يكن هناك تحميل
        <Stack gap={"32px"} width={"100%"}>
          <Stack gap={"32px"} sx={{ border: 1, padding: { xs: "16px", sm: "32px", md: "64px" }, borderWidth: "2px", borderColor: "colors.gray0", borderRadius: "32px" }}>
            <Stack direction={"row"} gap={{ xs: "16px", sm: "32px", md: "64px" }}>
              <Typography fontWeight={400} fontSize={"18px"}>{t("mail")}</Typography>
              <Typography fontWeight={400} fontSize={"18px"}>{profileData.email}</Typography>
            </Stack>
            <Stack direction={"row"} gap={{ xs: "16px", sm: "32px", md: "64px" }}>
              <Typography fontWeight={400} fontSize={"18px"}>{t('fname')}</Typography>
              <Typography fontWeight={400} fontSize={"18px"}>{profileData.first_name}</Typography>
            </Stack>
            <Stack direction={"row"} gap={{ xs: "16px", sm: "32px", md: "64px" }}>
              <Typography fontWeight={400} fontSize={"18px"}>{t("lname")}</Typography>
              <Typography fontWeight={400} fontSize={"18px"}>{profileData.last_name}</Typography>
            </Stack>
            <Stack direction={"row"} gap={{ xs: "16px", sm: "32px", md: "64px" }}>
              <Typography fontWeight={400} fontSize={"18px"}>{t("phone")}</Typography>
              <Typography fontWeight={400} fontSize={"18px"}>{profileData.phone}</Typography>
            </Stack>
            <Stack direction={"row"} gap={{ xs: "16px", sm: "32px", md: "64px" }}>
              <Button variant='contained' onClick={() => setEdit(true)} sx={{ bgcolor: "colors.red0" }}>{t("update")}</Button>
              <Button variant='outlined' onClick={() => setChangePassword(true)} sx={{ borderColor: "colors.red0", color: "colors.black0", borderRadius: "8px" }}>{t("change")}</Button>
            </Stack>
          </Stack>
          <Button variant='outlined' sx={{ borderColor: "colors.red0", width: "fit-content", borderRadius: "8px", color: "colors.black0" }}>{t("delete")}</Button>
          {
            <ChangePassword open={changePassword} onClose={() => setChangePassword(false)} />
          }
        </Stack>
      )}

      {edit && (
        <EditProfile setEdit={setEdit} />
      )}
    </>
  );
};

export default ProfileData;
