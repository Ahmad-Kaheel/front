import { Button, Divider, Stack, Typography } from '@mui/material'
import React from 'react'

const FinishCheckout = () => {
  return (
    <Stack padding={{xs:"20px",md:"123px"}}>
        <Stack className='sh' gap={"64px"} sx={{width:{xs:"85%",sm:"80%",md:"70%",padding:"32px"} , margin:"auto"}}  >
        <Typography>عزيزي السيد احمد محمد</Typography>
        <Typography>تتقدم شركة اللحم الذهبي بخالص الشكر لك لاختيارك إياها.
            تم تأكيد طلبك ذي الرقم #9999 وسيتم توصيله لك بالزمان والمكان المحددين من قبلك .
        </Typography>
        <Stack gap={"32px"} >
            <Typography fontWeight={600} fontSize={"16px"}>ملخص الطلب</Typography>
            <Stack justifyContent={"space-between"} direction={"row"}>
                <Typography fontWeight={600} fontSize={"16px"}>المجموع</Typography>
                <Typography fontWeight={600} fontSize={"16px"}>545</Typography>
            </Stack>
            <Stack justifyContent={"space-between"} direction={"row"}>
                <Typography fontWeight={600} fontSize={"16px"}>رسوم التوصيل</Typography>
                <Typography fontWeight={600} fontSize={"16px"}>مجاني</Typography>
            </Stack>
            <Divider sx={{opacity:"1"}}/>
            <Stack justifyContent={"space-between"} direction={"row"}>
                <Typography fontWeight={600} fontSize={"16px"}> الاجمالي</Typography>
                <Typography fontWeight={600} fontSize={"16px"}>545</Typography>
            </Stack>
        </Stack>
        <Stack justifyContent={"flex-end"} direction={"row"} gap={"32px"}>
            <Button variant='outlined' sx={{borderColor:"colors.red0",color:"colors.red0"}}>متابعة التسوق</Button>
            <Button variant='contained' sx={{bgcolor:"colors.red0"}}> العودة للصفحة الرئيسية</Button>

        </Stack>
    </Stack>  
    </Stack>  
  )
}

export default FinishCheckout