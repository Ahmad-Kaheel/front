import { Button, Stack, Typography } from '@mui/material'
import React from 'react'

const ProfileData = () => {
  return (
    <Stack gap={"32px"}>
        <Stack gap={"32px"} sx={{border:1,padding:{xs:"16px",sm:"32px" , md:"64px"},borderWidth:"2px",borderColor:"colors.gray0",borderRadius:"32px"}}>
          <Stack direction={"row"} gap={{xs:"16px",sm:"32px",md:"64px"}} >
            <Typography fontWeight={400} fontSize={"18px"}>البريد الالكتروني</Typography>
            <Typography fontWeight={400} fontSize={"18px"}>loukman@gmail.com</Typography>
          </Stack>
          <Stack direction={"row"} gap={{xs:"16px",sm:"32px",md:"64px"}}  >
            <Typography fontWeight={400} fontSize={"18px"}>الاسم الأول</Typography>
            <Typography fontWeight={400} fontSize={"18px"}>loukman</Typography>
          </Stack>
          <Stack direction={"row"} gap={{xs:"16px",sm:"32px",md:"64px"}}  >
            <Typography fontWeight={400} fontSize={"18px"}>الاسم الأخير</Typography>
            <Typography fontWeight={400} fontSize={"18px"}>Drywsy</Typography>
          </Stack>
          <Stack direction={"row"} gap={{xs:"16px",sm:"32px",md:"64px"}} >
            <Typography fontWeight={400} fontSize={"18px"}>رقم الهاتف</Typography>
            <Typography fontWeight={400} fontSize={"18px"}>+963992437921</Typography>
          </Stack>
          <Stack direction={"row"} gap={{xs:"16px",sm:"32px",md:"64px"}} >
            <Button variant='contained' sx={{bgcolor:"colors.red0"}}>تعديل</Button>
            <Button variant='outlined' sx={{borderColor:"colors.red0",color:"colors.black0",borderRadius:"8px"}}>تغيير كلمة المرور</Button>
          </Stack>
        </Stack>
        <Button variant='outlined' sx={{borderColor:"colors.red0",width:"fit-content",borderRadius:"8px",color:"colors.black0"}}>تغيير كلمة المرور</Button>
        
      </Stack>
  )
}

export default ProfileData