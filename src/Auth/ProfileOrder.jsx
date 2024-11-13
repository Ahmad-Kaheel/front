import { OnlinePredictionRounded } from '@mui/icons-material'
import { Button, Stack, Typography } from '@mui/material'
import React from 'react'

const ProfileOrder = () => {
  return (
    <Stack gap={"32px"} width={"100%"}>
      <Stack direction={"row"} sx={{border:1,padding:"64px"}} gap={{xs:"16px",sm:"32px",md:"64px"}} >
        <Stack gap={"32px"}>
            <Stack direction={"row"}>
                <OnlinePredictionRounded sx={{color:"colors.red0"}}/>
                <Typography>
                    لحم مفروم اسباني + خضار الصحة
                </Typography>
            </Stack>
            <Typography>
                تم الطلب فب تاريخ 11/11/2024
            </Typography>
            <Stack direction={"row"}>
                <Typography>العنوان :</Typography>
                <Typography>الرياض ,شارع 3344</Typography>
            </Stack>
            <Stack direction={"row"}>
                <Typography>رقم الهاتف:</Typography>
                <Typography>9999900999</Typography>
            </Stack>
        </Stack>
       
      </Stack>
     
      <Button variant='outlined' sx={{borderColor:"colors.red0",color:"colors.red0"}}>أضف عنوان جديد</Button>
      
    </Stack>
  )
}

export default ProfileOrder