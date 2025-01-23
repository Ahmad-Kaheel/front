import { Box, Grid, Stack, Typography, Rating, Button } from '@mui/material'
import React from 'react'
import img1 from "../assets/images-and-icons/CategoryFilters/Cooled.png"
import cat1 from "../assets/images-and-icons/hero/slide2.jpg";

const Favorite = () => {
  const products = [
    { img: cat1, name: "اسم الصنف", desc: "وصف المنتج وما يحتويه من مكونات", price: "120 ر.س" },
    { img: cat1, name: "اسم الصنف", desc: "وصف المنتج وما يحتويه من مكونات", price: "120 ر.س" },
    { img: cat1, name: "اسم الصنف", desc: "وصف المنتج وما يحتويه من مكونات", price: "120 ر.س" },
    { img: cat1, name: "اسم الصنف", desc: "وصف المنتج وما يحتويه من مكونات", price: "120 ر.س" },
    { img: cat1, name: "اسم الصنف", desc: "وصف المنتج وما يحتويه من مكونات", price: "120 ر.س" },
    { img: cat1, name: "اسم الصنف", desc: "وصف المنتج وما يحتويه من مكونات", price: "120 ر.س" },
    { img: cat1, name: "اسم الصنف", desc: "وصف المنتج وما يحتويه من مكونات", price: "120 ر.س" },
    { img: cat1, name: "اسم الصنف", desc: "وصف المنتج وما يحتويه من مكونات", price: "120 ر.س" },
    { img: cat1, name: "اسم الصنف", desc: "وصف المنتج وما يحتويه من مكونات", price: "120 ر.س" },
    { img: cat1, name: "اسم الصنف", desc: "وصف المنتج وما يحتويه من مكونات", price: "120 ر.س" },
    { img: cat1, name: "اسم الصنف", desc: "وصف المنتج وما يحتويه من مكونات", price: "120 ر.س" },
    { img: cat1, name: "اسم الصنف", desc: "وصف المنتج وما يحتويه من مكونات", price: "120 ر.س" },


    // إضافة المنتجات الأخرى...
  ];
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container spacing={{ xs: 2, md: 4 }}>
        {products.map((product, index) => (
          <Grid item xs={6} md={4} key={index}>

            <Stack position={"relative"}
              sx={{
                cursor: "pointer",
                "&:hover .product-details": { display: "none" },
                "&:hover .add-to-cart-btn": { display: "flex" }
              }}>
              <Box component="img" src={product.img} sx={{ height: "auto", maxHeight: "256px", borderRadius: "16px", width: "100%" }} />
              <Stack direction={"row"} alignItems={"center"} >
                <Stack className="product-details" width={"100%"}>
                  <Stack direction={"row"} justifyContent={"space-between"}>
                    <Typography>{product.name}</Typography>
                    <Rating name="read-only" value={4} readOnly />
                  </Stack>
                  <Typography>{product.price}</Typography>
                  <Typography>{product.desc}</Typography>
                </Stack>
              </Stack>
              <Button
                variant="contained"
                className="add-to-cart-btn"
                sx={{ display: "none", mt: 2, bgcolor: "colors.red0" }}
              >
                إضافة إلى السلة
              </Button>

            </Stack>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Favorite