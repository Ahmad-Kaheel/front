import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import pc from  "../assets/images-and-icons/product/pc0.jpg"
const ProductCard = ({
  image=pc,
  name,
  price,
  onBuyClick,
  oldPrice,
  newPrice  

}) => {
  const { t, i18n } = useTranslation("discover");

  return (
    <Box
      sx={{
        position: "relative",
        maxWidth:"272px",
        height: {xs:"150px",sm:"250px",md:"272px",lg:"272px"},
        borderRadius: "16px",
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
          borderRadius: "16px",
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
        // spacing={2}
        gap={{xs:"4px",md:"10px"}}
        sx={{
          position: "absolute",
          bottom: "20px",
          width: "100%",
          zIndex: 11,
          color: "white",
          alignItems: i18n.language === "ar" ? "flex-start" : "flex-end", // التحكم بالمحاذاة
          padding: "0 20px", // الإزاحة عن الجوانب
          boxSizing: "border-box",
          textAlign: i18n.language === "ar" ? "right" : "left",
        }}
      >
        <Typography
          fontWeight={700}
          sx={{
            fontSize: { xs: "10px", sm: "13px", md: "16px" },
            width: "100%",
          }}
        >
          {name}
        </Typography>
          <Box sx={{ position: "relative" }}>
              <Typography fontWeight={700} sx={{fontSize: { xs: "10px", sm: "13px", md: "16px" }, }}>{oldPrice}</Typography>
              <Box width={"86%"} height={"3px"} sx={{ bgcolor: "colors.red0", position: "absolute", right: "0", top: "50%" }} />
          </Box>
          <Typography fontWeight={700} sx={{ fontSize: { xs: "13px", sm: "17px", md: "20px"} }}>{newPrice}</Typography>
        <Typography
          fontWeight={600}
          sx={{
            fontSize: { xs: "16px", sm: "20px", md: "24px" },
            width: "100%",
          }}
        >
          {price}
        </Typography>

        <Button
          variant="contained"
          sx={{
            bgcolor:"colors.red0",
            width: "100%",
            borderRadius: "8px",
            fontWeight: 600,
            fontSize: "16px",
            padding: "0px 0",
            alignSelf: i18n.language === "ar" ? "flex-end" : "flex-start", // نفس الإزاحة
          }}
          onClick={onBuyClick}
        >
          {i18n.language === "ar" ? "اشتر الآن" : "Buy Now"}
        </Button>
      </Stack>
    </Box>
  );
};

export default ProductCard;
