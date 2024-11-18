import { LocationCity, LocationOn } from '@mui/icons-material'
import { Button, Stack, Typography } from '@mui/material'
import React from 'react'

const ProfileAdress = () => {
  return (
    <Stack gap={"32px"} width={"100%"}>
      <Stack direction={"row"} sx={{border:1,padding:"16px"}} justifyContent={"space-between"} >
        <Stack gap={"32px"}>
          <Typography fontWeight={700} fontSize={"20px"} color='colors.red0'>المنزل</Typography>
            <Stack direction={"row"}>
                <LocationOn sx={{color:"colors.red0"}}/>
                <Typography>
                    Ahmad,ryadh
                </Typography>
            </Stack>
            <Typography>
                RRMA8944، 8944 رقم 301، 5194, Al Qirawan, Riyadh 13525, Saudi
            </Typography>
            <Stack direction={"row"}>
                <Typography>الاسم :</Typography>
                <Typography>ahmad</Typography>
            </Stack>
            <Stack direction={"row"}>
                <Typography>رقم الهاتف:</Typography>
                <Typography>9999900999</Typography>
            </Stack>
        </Stack>
        <Stack direction={"row"} gap={"8px"}>
            <Typography sx={{cursor:"pointer",textDecoration:"underline"}}>حذف</Typography>
            <Typography sx={{cursor:"pointer",textDecoration:"underline"}}>تعديل</Typography>
        </Stack>
      </Stack>
     
      <Button variant='outlined' sx={{borderColor:"colors.red0",color:"colors.red0"}}>أضف عنوان جديد</Button>
      
    </Stack>
    
  )
}

export default ProfileAdress