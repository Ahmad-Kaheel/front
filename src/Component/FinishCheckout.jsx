import { Box, Button, Divider, Stack, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next'; // استيراد مكتبة الترجمة
import googlePlay from "../assets/images-and-icons/application/googlePlay.svg";
import appleStore from "../assets/images-and-icons/application/apple.svg";

const FinishCheckout = () => {
  const { t } = useTranslation("checkout"); // استخدام الترجمة

  return (
    <Stack padding={{ xs: "20px", md: "64px" }} alignItems={"center"} gap={{ xs: "32px", md: "64px" }}>
      {/* صندوق المعلومات */}
      <Stack 
        className='sh' 
        gap={{ xs: "32px", md: "64px" }} 
        sx={{
          width: { xs: "90%", sm: "80%", md: "70%" },
          padding: { xs: "20px", md: "32px" },
          margin: "auto",
        }}
      >
        <Typography textAlign={"center"} fontWeight={700} fontSize={{ xs: "24px", md: "36px" }}>
          {t("thankYou")}
        </Typography>
        <Typography fontWeight={700} fontSize={{ xs: "18px", md: "28px" }} textAlign={"center"}>
          {t("orderConfirmed")} 
          <Box component={"span"} sx={{ color: "colors.red0" }}>{t("success")}</Box>
        </Typography>
        <Stack gap={{ xs: "16px", md: "32px" }}>
          <Typography fontWeight={600} fontSize={{ xs: "14px", md: "16px" }}>{t("orderSummary")}</Typography>
          <Stack justifyContent={"space-between"} direction={"row"}>
            <Typography fontWeight={600} fontSize={{ xs: "14px", md: "16px" }}>{t("total")}</Typography>
            <Typography fontWeight={600} fontSize={{ xs: "14px", md: "16px" }}>545</Typography>
          </Stack>
          <Stack justifyContent={"space-between"} direction={"row"}>
            <Typography fontWeight={600} fontSize={{ xs: "14px", md: "16px" }}>{t("deliveryFee")}</Typography>
            <Typography fontWeight={600} fontSize={{ xs: "14px", md: "16px" }}>{t("free")}</Typography>
          </Stack>
          <Divider sx={{ opacity: "1" }} />
          <Stack justifyContent={"space-between"} direction={"row"}>
            <Typography fontWeight={600} fontSize={{ xs: "14px", md: "16px" }}>{t("grandTotal")}</Typography>
            <Typography fontWeight={600} fontSize={{ xs: "14px", md: "16px" }}>545</Typography>
          </Stack>
        </Stack>
        <Stack justifyContent={"flex-end"} direction={{ xs: "column", sm: "row" }} gap={{ xs: "16px", md: "32px" }}>
          <Button 
            variant='outlined' 
            sx={{ 
              borderColor: "colors.red0", 
              color: "colors.red0", 
              width: { xs: "100%", sm: "auto" } 
            }}
          >
            {t("continueShopping")}
          </Button>
          <Button 
            variant='contained' 
            sx={{ 
              bgcolor: "colors.red0", 
              width: { xs: "100%", sm: "auto" } 
            }}
          >
            {t("returnHome")}
          </Button>
        </Stack>
      </Stack>

      {/* روابط التطبيقات */}
      <Stack direction={{ xs: "column", sm: "row" }} alignItems={"center"} gap={{ xs: "16px", md: "64px" }}>
        <Typography fontWeight={"400"} fontSize={{ xs: "16px", md: "18px" }} color='colors.red0' textAlign="center">
          {t("closerToUs")}
        </Typography>
        <Stack 
          gap={{ xs: "16px", sm: "32px" }} 
          flexDirection={{ xs: "column", sm: "row" }} 
          alignItems={"center"}
        >
          <Stack 
            gap={"8px"} 
            flexDirection={"row"} 
            sx={{
              width: "fit-content",
              padding: "8px 16px",
              cursor: "pointer",
              border: 1,
              borderStyle: "solid",
              borderWidth: "1px",
              borderRadius: "4px",
              borderColor: "colors.black0",
            }}
          >
            <Typography fontWeight={400} fontSize={{ xs: "14px", md: "16px" }} color='colors.black0'>
              {t("appStore")}
            </Typography>
            <Box component="img" src={appleStore} sx={{ width: "20px", height: "20px" }} />
          </Stack>
          <Stack 
            gap={"8px"} 
            flexDirection={"row"} 
            sx={{
              width: "fit-content",
              padding: "8px 16px",
              cursor: "pointer",
              border: 1,
              borderStyle: "solid",
              borderWidth: "1px",
              borderRadius: "4px",
              borderColor: "colors.black0",
            }}
          >
            <Typography fontWeight={400} fontSize={{ xs: "14px", md: "16px" }} color='colors.black0'>
              {t("googlePlay")}
            </Typography>
            <Box component="img" src={googlePlay} sx={{ width: "20px", height: "20px" }} />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default FinishCheckout;
