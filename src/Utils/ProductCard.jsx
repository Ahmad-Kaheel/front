import { Box, Button, Stack, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

const ProductCard = ({ image, name, price, onBuyClick, cardHeight = "400px", cardWidth = "100%" }) => {
  const { t, i18n } = useTranslation("discover");

  return (
    <Box
      sx={{
        position: "relative",
        width: cardWidth,
        height: cardHeight,
        borderRadius: "32px",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      {/* Image */}
      <Box
        component="img"
        src={image}
        alt={name}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "32px",
        }}
      />

      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          zIndex: 10,
        }}
      />

      {/* Content */}
      <Stack
        spacing={2}
        sx={{
          position: "absolute",
          bottom: "20px",
          width: "100%",
          zIndex: 11,
          color: "white",
          alignItems: "center",
          padding: "0 10px",
          boxSizing: "border-box",
          textAlign:i18n.language === "ar" ? "right" : "left"
        }}
      >
        <Typography
          fontWeight={700}
          sx={{ fontSize: { xs: "20px", sm: "24px", md: "28px" } ,width:"100%"}}
        >
          {name}
        </Typography>
        <Typography
          fontWeight={600}
          sx={{ fontSize: { xs: "16px", sm: "20px", md: "24px" } ,width:"100%"}}
        >
          {price}
        </Typography>

        <Button
          variant="contained"
          
          sx={{
            width: "calc(100% - 20px)", // 100% minus padding
            maxWidth: "90%",
            borderRadius: "8px",
            fontWeight: 600,
            fontSize: "16px",
            padding: "5px 0",
            bgcolor:"colors.red0"
          }}
          onClick={onBuyClick}
        >
          {
            i18n.language === "ar" ? "اشتر الان" : "Buy Now"
          }
        </Button>
      </Stack>
    </Box>
  );
};

export default ProductCard;
