import { AccountBalance } from '@mui/icons-material'
import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import user from "../assets/images-and-icons/welcome/user.svg"
import company from "../assets/images-and-icons/welcome/company.svg"

const Welcome = () => {
  return (
    <Stack sx={{height:"100vh"}} justifyContent={"center"} alignItems={"center"} gap={"64px"}> 
        <Stack alignItems={"center"} sx={{width:"auto"}} gap={"32px"} >
            <Typography fontSize={"28px"} sx={{width:"auto"}} fontWeight={700} color='text.titles'>أهلاً بكم في اللحم الذهبي</Typography>
            <Typography fontSize={"18px"}   sx={{width:"auto",textAlign:"center"}} fontWeight={400} color='text.paragraph'>شرح بسيط يوضح عمل والخدمات المقدمة من قبل شركة اللحم الذهبي</Typography>
        </Stack>
        <Stack direction={"row"} gap={"32px"}>
        <Stack gap={"32px" } className='shad-box' sx={{padding:"64px 64px"}}>
            <Stack gap={"32px" } alignItems={"center"} >
              <Box component="img" src={user} />
              <Typography fontSize={"16px"} fontWeight={600} sx={{textAlign:"center"}}>اللحم الذهبي للشركات</Typography>
              <Typography fontSize={"14px"} fontWeight={400}   sx={{textAlign:"center"}}>شرح بسيط يوضح عمل شركة اللحم الذهبي</Typography>
            </Stack>
            <Typography color={"colors.red0"} fontSize={"16px"} width={"100%"} fontWeight={400} textAlign={"end"} sx={{textDecoration:"underline"}}>دخول</Typography>
          </Stack>
          <Stack gap={"32px" } className='shad-box' sx={{padding:"64px 64px"}}>
            <Stack gap={"32px" } alignItems={"center"} >
            <Box component="img" src={company} />
              <Typography fontSize={"16px"} fontWeight={600} sx={{textAlign:"center"}}>اللحم الذهبي للأفراد</Typography>
              <Typography fontSize={"14px"} fontWeight={400}   sx={{textAlign:"center"}}>شرح بسيط يوضح عمل شركة اللحم الذهبي</Typography>
            </Stack>
            <Typography color={"colors.red0"} fontSize={"16px"} width={"100%"} fontWeight={400} textAlign={"end"} sx={{textDecoration:"underline"}}>دخول</Typography>
          </Stack>
        </Stack>
    </Stack>
  )
}

export default Welcome