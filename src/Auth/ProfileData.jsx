import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import EditProfile from './EditProfile';
import { useTranslation } from 'react-i18next';

const ProfileData = () => {
  const [edit, setEdit] = useState(false);
  const [changePassword, setChangePassword] = useState(false);

  const [delet, setDelet] = useState(false);
  const {t,i18n} = useTranslation("profileData")
  return (
    <>
      {(!edit && !delet) && (
        <Stack gap={"32px"} width={"100%"}>
        <Stack gap={"32px"} sx={{border:1,padding:{xs:"16px",sm:"32px" , md:"64px"},borderWidth:"2px",borderColor:"colors.gray0",borderRadius:"32px"}}>
          <Stack direction={"row"} gap={{xs:"16px",sm:"32px",md:"64px"}} >
            <Typography fontWeight={400} fontSize={"18px"}>{t("mail")}</Typography>
            <Typography fontWeight={400} fontSize={"18px"}>loukman@gmail.com</Typography>
          </Stack>
          <Stack direction={"row"} gap={{xs:"16px",sm:"32px",md:"64px"}}  >
            <Typography fontWeight={400} fontSize={"18px"}>{t('fname')}</Typography>
            <Typography fontWeight={400} fontSize={"18px"}>loukman</Typography>
          </Stack>
          <Stack direction={"row"} gap={{xs:"16px",sm:"32px",md:"64px"}}  >
            <Typography fontWeight={400} fontSize={"18px"}>{t("lname")}</Typography>
            <Typography fontWeight={400} fontSize={"18px"}>Drywsy</Typography>
          </Stack>
          <Stack direction={"row"} gap={{xs:"16px",sm:"32px",md:"64px"}} >
            <Typography fontWeight={400} fontSize={"18px"}>{t("phone")}</Typography>
            <Typography fontWeight={400} fontSize={"18px"}>963992437921+</Typography>
          </Stack>
          <Stack direction={"row"} gap={{xs:"16px",sm:"32px",md:"64px"}} >
            <Button variant='contained' onClick={()=>setEdit(true)} sx={{bgcolor:"colors.red0"}}>{t("update")}</Button>
            <Button variant='outlined' onClick={()=>setChangePassword(true)} sx={{borderColor:"colors.red0",color:"colors.black0",borderRadius:"8px"}}>{t("change")}</Button>
          </Stack>
        </Stack>
        <Button variant='outlined' sx={{borderColor:"colors.red0",width:"fit-content",borderRadius:"8px",color:"colors.black0"}}>{t("delete")}</Button>
        <Dialog
        open={changePassword}
        onClose={()=>setChangePassword(false)}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle>{t("change")}</DialogTitle>
        <DialogContent>
          <Stack gap={"64px"}>
              <Stack gap={"16px"}>
                <Typography>{t("current")}</Typography>
                <TextField
                  sx={{
                      textAlign:'right',
                      height: "42px",
                      '& .MuiOutlinedInput-root': {
                      borderRadius: "12px", // تغيير زاوية الانحناء
                      borderWidth: "2px", // تعديل سمك الحدود
                      
                      '& fieldset': {
                          borderColor: "rgba(0, 0, 0, 0.23)", // لون الحدود
                      },
                      '&:hover fieldset': {
                          borderColor: "gray", // تغيير لون الحدود عند التمرير
                      },
                      '&.Mui-focused fieldset': {
                          borderColor: "gray", // لون الحدود عند التركيز
                      },
                      },
                      '& .MuiInputLabel-root': {
                      color: 'gray', // لون النص الافتراضي للـ label
                      },
                      '& .MuiInputLabel-root.Mui-focused': {
                      color: 'gray', // لون النص عند صعوده للأعلى عند التركيز
                      },
                  }}
                  InputLabelProps={{
                      className: i18n.language==="ar" ? 'custom-label-rtl' : ''
                  }}
                  id="outlined-basic"
                  type='password'
                  variant="outlined"
                  />
              </Stack>
              <Stack gap={"16px"}>
                <Typography>{t("new")}</Typography>
                <TextField
                  sx={{
                      textAlign:'right',
                      height: "42px",
                      '& .MuiOutlinedInput-root': {
                      borderRadius: "12px", // تغيير زاوية الانحناء
                      borderWidth: "2px", // تعديل سمك الحدود
                      
                      '& fieldset': {
                          borderColor: "rgba(0, 0, 0, 0.23)", // لون الحدود
                      },
                      '&:hover fieldset': {
                          borderColor: "gray", // تغيير لون الحدود عند التمرير
                      },
                      '&.Mui-focused fieldset': {
                          borderColor: "gray", // لون الحدود عند التركيز
                      },
                      },
                      '& .MuiInputLabel-root': {
                      color: 'gray', // لون النص الافتراضي للـ label
                      },
                      '& .MuiInputLabel-root.Mui-focused': {
                      color: 'gray', // لون النص عند صعوده للأعلى عند التركيز
                      },
                  }}
                  InputLabelProps={{
                      className: i18n.language==="ar" ? 'custom-label-rtl' : ''
                  }}
                  id="outlined-basic"
                  type='password'
                  variant="outlined"
                  />
              </Stack>
          </Stack>
        </DialogContent>
        <DialogActions sx={{gap:"10px"}}>
          <Button variant='contained' sx={{bgcolor:"colors.red0"}} onClick={()=>setChangePassword(false)}>{t("cancel")}</Button>
          <Button variant='contained'  sx={{bgcolor:"colors.red0"}}>{t("confirm")}</Button>
        </DialogActions>
      </Dialog>
      </Stack>
      )}
      {
        edit && (
          <EditProfile setEdit={setEdit}/>
        )
      }
    </>
  )
}

export default ProfileData