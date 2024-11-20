import { Accordion, AccordionDetails, AccordionSummary, Box, Breadcrumbs, Button, FormControlLabel, FormGroup, IconButton, Link, Pagination, Rating, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import cat1 from "../assets/images-and-icons/hero/slide2.jpg";
import Grid from '@mui/material/Grid';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { useTranslation } from 'react-i18next';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FullScreenImage from '../Component/FullScreenImage';
import img1 from "../assets/images-and-icons/CategoryFilters/img1.jpg";
import img2 from "../assets/images-and-icons/CategoryFilters/img1.jpg";
import img3 from "../assets/images-and-icons/CategoryFilters/img1.jpg";
import img4 from "../assets/images-and-icons/CategoryFilters/img1.jpg";
import img5 from "../assets/images-and-icons/CategoryFilters/img1.jpg";
import QuickView from '../Component/QuikView';
const categories = [
  { img: img1, name: "لحوم" },
  { img: img1, name: "دجاج" },
  { img: img1, name: "بهارات وتوابل" },
  { img: img1, name: "خضار وفواكه" },
  { img: img1, name: "أصناف أخرى" },
];

const products = [
  { img: img1, name: "اسم الصنف", desc: "وصف المنتج وما يحتويه من مكونات", price: "120 ر.س", images: [img1, img2, img3, img4, img5] },
  { img: img1, name: "اسم الصنف", desc: "وصف المنتج وما يحتويه من مكونات", price: "120 ر.س", images: [img1, img2, img3, img4, img5] },
  { img: img1, name: "اسم الصنف", desc: "وصف المنتج وما يحتويه من مكونات", price: "120 ر.س", images: [img1, img2, img3, img4, img5] },
  { img: img1, name: "اسم الصنف", desc: "وصف المنتج وما يحتويه من مكونات", price: "120 ر.س", images: [img1, img2, img3, img4, img5] },
  { img: img1, name: "اسم الصنف", desc: "وصف المنتج وما يحتويه من مكونات", price: "120 ر.س", images: [img1, img2, img3, img4, img5] },
  { img: img1, name: "اسم الصنف", desc: "وصف المنتج وما يحتويه من مكونات", price: "120 ر.س", images: [img1, img2, img3, img4, img5] },
  { img: img1, name: "اسم الصنف", desc: "وصف المنتج وما يحتويه من مكونات", price: "120 ر.س", images: [img1, img2, img3, img4, img5] },
  { img: img1, name: "اسم الصنف", desc: "وصف المنتج وما يحتويه من مكونات", price: "120 ر.س", images: [img1, img2, img3, img4, img5] },
  { img: img1, name: "اسم الصنف", desc: "وصف المنتج وما يحتويه من مكونات", price: "120 ر.س", images: [img1, img2, img3, img4, img5] },
  { img: img1, name: "اسم الصنف", desc: "وصف المنتج وما يحتويه من مكونات", price: "120 ر.س", images: [img1, img2, img3, img4, img5] },
  { img: img1, name: "اسم الصنف", desc: "وصف المنتج وما يحتويه من مكونات", price: "120 ر.س", images: [img1, img2, img3, img4, img5] },
  { img: img1, name: "اسم الصنف", desc: "وصف المنتج وما يحتويه من مكونات", price: "120 ر.س", images: [img1, img2, img3, img4, img5] },


  // إضافة المنتجات الأخرى...
];

const Products = () => {
  const { t, i18n } = useTranslation("products");
  const isRTL = i18n.language === 'ar';
  const [favorites, setFavorites] = useState(Array(products.length).fill(false)); // لحفظ حالة المفضلة لكل منتج
  const [open, setOpen] = useState(false)

  const toggleFavorite = (index) => {
    const updatedFavorites = [...favorites];
    updatedFavorites[index] = !updatedFavorites[index];
    setFavorites(updatedFavorites);
  };

  return (
    <Stack gap={{ xs: "32px", md: "64px" }} sx={{ paddingX: { xs: "28px", sm: "32px", md: "128px",lg:"200px", xl: "256px" }, paddingY: "64px" }}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">{t("link1")}</Link>
        <Link underline="hover" color="inherit" > {t("all")}</Link>
      </Breadcrumbs>



      <Stack direction="row" gap="16px" flexWrap="wrap" justifyContent="center">
        {categories.map((cat, index) => (
          <Stack key={index} direction="row" alignItems="center" sx={{ padding: "16px", borderRadius: "16px", bgcolor: "white", boxShadow: "0px 2px 25px 1px #28282814" }} gap="16px">
            <Box component="img" src={cat.img} sx={{ width: "48px", height: "48px" }} />
            <Typography>{cat.name}</Typography>
          </Stack>
        ))}
      </Stack>

      <Stack direction={{ xs: "column", md: "row" }} gap="64px">
        <Stack gap="64px" sx={{ width: { xs: "90%", md: "205px" }, height: "fit-content", border: 1, borderWidth: "2px", borderColor: "gray", borderRadius: "8px" }}>
          <Accordion sx={{ width: "100%", boxShadow: "none" }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">{t("filter")}</AccordionSummary>
            <AccordionDetails>
              <Stack gap="32px" padding="32px 16px">
                <Box sx={{ height: "2px", width: "100%" }} className="grad-line" />

                <Stack gap="16px" alignItems="flex-start">
                  <Typography>المناسبات</Typography>
                  <FormGroup sx={{ flexDirection: "column", alignItems: "flex-start" }}>
                    <FormControlLabel control={<Checkbox />} label="Label" />
                    <FormControlLabel control={<Checkbox />} label="Required" />
                    <FormControlLabel control={<Checkbox />} label="Disabled" />
                  </FormGroup>
                  <Typography color="colors.red0" sx={{ borderBottom: 2, textAlign: "center", cursor: "pointer", width: "fit-content", paddingX: "10px" }}>
                    عرض المزيد
                  </Typography>
                </Stack>

                <Box sx={{ height: "2px", width: "100%" }} className="grad-line" />

                <Stack gap="16px" alignItems="flex-start">
                  <Typography>السعر</Typography>
                  <RadioGroup
                    row={!isRTL}
                    sx={{ flexDirection: isRTL ? "row" : "column", alignItems: "flex-start" }}
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                  >
                    <FormControlLabel value="female" control={<Radio />} label="السعر بين100-300" />
                    <FormControlLabel value="male" control={<Radio />} label="السعر بين 300-1000" />
                    <FormControlLabel value="male" control={<Radio />} label="السعر أكبر من 1000" />

                  </RadioGroup>
                </Stack>
              </Stack>
            </AccordionDetails>
          </Accordion>
        </Stack>

        <Stack sx={{ width: "100%" }} justifyContent="space-between" gap={"30px"}>
          <Box>
            <Grid container spacing={{ xs: 2, md: 4 }}>
              {products.map((product, index) => (
                <Grid item xs={6} md={4} key={index}>
                  <QuickView open={open} setOpen={setOpen} slides={product.images} />

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
                    <Stack position={"absolute"} top={"10px"} left={"10px"} zIndex={10}>
                      <IconButton aria-label="add to favorites" onClick={() => toggleFavorite(index)}>
                        {favorites[index] ? (
                          <Box sx={{ bgcolor: "white", display: "flex", justifyContent: "center", alignItems: "center", padding: "5px", borderRadius: "50%" }}>
                            <FavoriteIcon sx={{ fontSize: "30px", fill: "red" }} />
                          </Box>
                        ) : (
                          <Box sx={{ bgcolor: "white", display: "flex", justifyContent: "center", alignItems: "center", padding: "5px", borderRadius: "50%" }}>
                            <FavoriteBorderIcon sx={{ fontSize: "30px" }} />
                          </Box>
                        )}
                      </IconButton>

                    </Stack>
                    <Stack position={"absolute"} top={"10px"} right={"10px"} zIndex={10} onClick={() => setOpen(true)}>
                      <IconButton aria-label="add to favorites" >
                        <Box sx={{ bgcolor: "white", display: "flex", justifyContent: "center", alignItems: "center", padding: "5px", borderRadius: "50%" }}>
                          <FullscreenExitIcon sx={{ fontSize: "30px", color: "black" }} />
                        </Box>
                      </IconButton>

                    </Stack>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Box>
          <Stack alignItems="center" >
            <Pagination count={10} variant="outlined" size="large" shape="rounded" dir='ltr' />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Products;