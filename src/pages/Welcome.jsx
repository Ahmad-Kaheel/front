import { Box, Button, Stack, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next'; // استيراد مكتبة الترجمة
import user from "../assets/images-and-icons/welcome/user.png";
import company from "../assets/images-and-icons/welcome/company.svg";

const Welcome = () => {
  const { t ,i18n} = useTranslation("welcome"); // استخدام الترجمة

  return (
    <Stack 
      sx={{
        minHeight: "100vh", 
        maxWidth:"1400px",
        margin:"auto",
        width: "100%", 
        justifyContent: "center", 
        paddingY:"32px",
        alignItems: "center", 
        gap: { xs: "32px", sm: "64px" } // Adjust gap based on screen size
      }}
    >
      <Stack 
        alignItems={"center"} 
        sx={{ width: "auto" }} 
        gap={"32px"}
      >
        <Typography 
          fontSize={{ xs: "22px", sm: "28px" }} // Adjust font size based on screen size
          sx={{ width: "auto" }} 
          fontWeight={700} 
          color='text.titles'
          textAlign="center"
        >
          {t("welcome.title")}
        </Typography>
        
      </Stack>

      <Stack 
        direction={{ xs: "column", sm: "row" }} // Change direction on small screens
        gap={"32px"} 
        justifyContent="center" 
        alignItems={"center"}
        sx={{ width: "100%", maxWidth: "1200px" }} // Limit max width on large screens
      >
        {/* اللحم الذهبي للشركات */}
        <Stack 
          gap={"32px"} 
          className='shad-box' 
          sx={{ 
            padding: "32px", 
            width: "100%", 
            maxWidth: "350px", 
            textAlign: "center" 
          }}
        >
          <Box 
            component="img" 
            src={user} 
            sx={{ width: "43px", height: "48px", objectFit: "contain", margin: "0 auto" }} // Ensure images are consistent
          />
          <Typography 
            fontSize={"16px"} 
            fontWeight={600}
          >
            {t("welcome.forIndividuals.title")}
          </Typography>
          
          <Button 
           sx={{bgcolor:"colors.red0",color:"white"}}
          >
            {t("welcome.forIndividuals.login")}
          </Button>
        </Stack>

        {/* اللحم الذهبي للأفراد */}
        <Stack 
          gap={"32px"} 
          className='shad-box' 
          sx={{ 
            padding: "32px", 
            width: "100%", 
            maxWidth: "350px", 
            textAlign: "center" 
          }}
        >
          <Box 
            component="img" 
            src={company} 
            sx={{ width: "43px", height: "48px", objectFit: "contain", margin: "0 auto" }} 
          />
          <Typography 
            fontSize={"16px"} 
            fontWeight={600}
          >
            {t("welcome.forCompanies.title")}
          </Typography>
          <Button 
           sx={{bgcolor:"colors.red0",color:"white"}}
          >
            {t("welcome.forCompanies.login")}
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Welcome;
