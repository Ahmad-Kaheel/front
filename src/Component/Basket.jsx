import React, { useEffect } from 'react';
import Drawer from '@mui/material/Drawer';
import { Box, Button, Stack, Typography } from '@mui/material';
import basket from "../assets/images-and-icons/basket/Shopping.svg";
import close from "../assets/images-and-icons/basket/close.svg";
import car from "../assets/images-and-icons/basket/Transport.svg";
import delet from "../assets/images-and-icons/basket/delete.svg";
import productImg from "../assets/images-and-icons/hero/slide1.jpg";
import { useTranslation } from 'react-i18next';

export default function Basket({ openDrawer, handleDrawerClose }) {
    const {t,i18t} = useTranslation('basket')
    return (
        <Drawer 
        open={openDrawer} 
        onClose={handleDrawerClose} 
        >
          <Stack sx={{width:{xs:"350px",sm:"540px"}, paddingX:"32px", paddingBottom:"32px"}} gap={"64px"}>
            {/* محتويات السلة */}
            <Stack flexDirection={"row"} justifyContent={"space-between"} sx={{ paddingY:"32px" }}  className='gradient-border'>
              <Stack flexDirection={"row"} gap={"15px"}>
                <Box component="img" src={basket} />
                <Typography fontWeight={600} fontSize={"16px"} color='colors.black0'>{t("basket")}</Typography>
              </Stack>
              <Box 
                component="img" 
                src={close} 
                onClick={handleDrawerClose} // تأكد من أن النقر على زر الإغلاق يُغلق السلة
                sx={{ cursor: "pointer", color: "colors.black0" }} 
              />
            </Stack>
            <Stack gap="16px"> 
                <Typography  fontWeight={600} fontSize={"16px"} color='colors.black0'>
                   {t("label1")}
                </Typography>
                <Typography  fontWeight={400} fontSize={"16px"} color='colors.black0'>
               {t("label2")}
                </Typography>
            </Stack>
            <Stack flexDirection={"row"} justifyContent={"space-between"} sx={{paddingY:"16px",borderBottom:1,borderWidth:"2px",borderColor:"#36E236"}}>
                <Box component={"img"} src={car} />
                <Typography  fontWeight={400} fontSize={"14px"} color='colors.black0'>{t("delever")}</Typography>
                <Typography  fontWeight={400} fontSize={"14px"} color='colors.black0'>2500 ر.س</Typography>
            </Stack>
            <Stack flexDirection={"row"} justifyContent={"space-between"} sx={{border:1,padding:"32px",borderRadius:"32px",borderWidth:"2px"}}>
                <Stack flexDirection={"row"} gap={"32px"} alignItems={"center"}>
                    <Box component={"img"} src={productImg} sx={{width:"88px",height:"88px"}}/>
                    <Stack gap={"16px"}>
                        <Typography  fontWeight={400} fontSize={"14px"} color='colors.black0'>
                        باقة 100 جوري برتقالية مبهجة
                        </Typography>
                        <Typography  fontWeight={400} fontSize={"14px"} color='colors.black0'>
                        ج.م 6,299
                        </Typography>
                    </Stack>
                    
                </Stack>
                <Stack direction={"row"} justifyContent="space-between" alignItems="center" gap={"20px"}>
                    <Stack flexDirection="row" sx={{ border: 1, padding: "5px", borderRadius: "10px" }} gap="16px">
                        <Typography fontWeight={600} fontSize="24px" color='colors.black0' sx={{ cursor: "pointer" }}>+</Typography>
                        <Typography fontWeight={600} fontSize="24px" color='colors.black0' sx={{ cursor: "pointer" }}>1</Typography>
                        <Typography fontWeight={600} fontSize="24px" color='colors.black0' sx={{ cursor: "pointer" }}>-</Typography>
                    </Stack>
                    <Box component="img" src={delet} sx={{ width: "18px", height: "20px", cursor: "pointer" }} />

                </Stack>
            </Stack>
            <Stack gap={"32px"} sx={{padding:"32px",borderRadius:"32px",border:1,borderWidth:"2px"}}>
                <Typography fontWeight={600} fontSize={"16px"} color='colors.black0'>{t("summary")}</Typography>
                <Stack direction={"row"} justifyContent={"space-between"}>
                    <Typography fontWeight={400} fontSize={"14px"} color='colors.black0'>{t("total")}</Typography>
                    <Typography fontWeight={400} fontSize={"14px"} color='colors.black0'>555رس</Typography>
                </Stack>
                <Stack direction={"row"} justifyContent={"space-between"}>
                    <Typography fontWeight={400} fontSize={"14px"} color='colors.black0'>{t("feez")}</Typography>
                    <Typography fontWeight={400} fontSize={"14px"} color='colors.black0'>مجانا</Typography>
                </Stack>
                <Typography fontWeight={400} fontSize={"14px"} color='colors.black0'>{t("note")}</Typography>
                <Stack direction={"row"} justifyContent={"space-between"}>
                    <Typography fontWeight={400} fontSize={"14px"} color='colors.black0'>{t("total2")}</Typography>
                    <Typography fontWeight={400} fontSize={"14px"} color='colors.black0'>555رس</Typography>
                </Stack>
            </Stack>
            <Stack gap={"16px"}>
                <Button variant="contained" sx={{bgcolor:"colors.red0",fontWeight:500,fontSize:"16px"}}>{t("confirm")}</Button>
                <Button variant="outlined" sx={{borderColor:"colors.red0",color:"colors.red0",fontWeight:500,fontSize:"16px"}}>{t("continue")}</Button>
            </Stack>
        </Stack>
      </Drawer>
  );
}
