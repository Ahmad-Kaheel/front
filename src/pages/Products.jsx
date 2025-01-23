import { Accordion, AccordionDetails, AccordionSummary, Box, Breadcrumbs, Button, FormControl, FormControlLabel, FormGroup, IconButton, Link, MenuItem, Pagination, Rating, Select, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import cat1 from "../assets/images-and-icons/hero/slide2.jpg";
import Grid from '@mui/material/Grid';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { useTranslation } from 'react-i18next';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FullScreenImage from '../Component/FullScreenImage';
import img from "../assets/images-and-icons/CategoryFilters/img1.jpg"
import img1 from "../assets/images-and-icons/filters/Meat.svg";
import img2 from "../assets/images-and-icons/filters/chcken.svg";
import img3 from "../assets/images-and-icons/filters/sold.svg";
import img4 from "../assets/images-and-icons/filters/fruits.svg";
import img5 from "../assets/images-and-icons/filters/Milk.svg";
import message from "../assets/images-and-icons/product/message.svg"

import QuickView from '../Component/QuikView';
import { Helmet } from 'react-helmet-async';
const categories = [
  { img: img1, name: "لحوم" },
  { img: img2, name: "دجاج" },
  { img: img3, name: "بهارات وتوابل" },
  { img: img4, name: "خضار وفواكه" },
  { img: img5, name: " ألبان و أجبان" },
];

const products = [
  { img: img, name: "اسم الصنف", desc: "وصف المنتج وما يحتويه من مكونات", price: "120 ر.س", images: [img1, img2, img3, img4, img5] },
  { img: img, name: "اسم الصنف", desc: "وصف المنتج وما يحتويه من مكونات", price: "120 ر.س", images: [img1, img2, img3, img4, img5] },
  { img: img, name: "اسم الصنف", desc: "وصف المنتج وما يحتويه من مكونات", price: "120 ر.س", images: [img1, img2, img3, img4, img5] },
  { img: img, name: "اسم الصنف", desc: "وصف المنتج وما يحتويه من مكونات", price: "120 ر.س", images: [img1, img2, img3, img4, img5] },
  { img: img, name: "اسم الصنف", desc: "وصف المنتج وما يحتويه من مكونات", price: "120 ر.س", images: [img1, img2, img3, img4, img5] },
  { img: img, name: "اسم الصنف", desc: "وصف المنتج وما يحتويه من مكونات", price: "120 ر.س", images: [img1, img2, img3, img4, img5] },
  { img: img, name: "اسم الصنف", desc: "وصف المنتج وما يحتويه من مكونات", price: "120 ر.س", images: [img1, img2, img3, img4, img5] },
  { img: img, name: "اسم الصنف", desc: "وصف المنتج وما يحتويه من مكونات", price: "120 ر.س", images: [img1, img2, img3, img4, img5] },
  { img: img, name: "اسم الصنف", desc: "وصف المنتج وما يحتويه من مكونات", price: "120 ر.س", images: [img1, img2, img3, img4, img5] },
  { img: img, name: "اسم الصنف", desc: "وصف المنتج وما يحتويه من مكونات", price: "120 ر.س", images: [img1, img2, img3, img4, img5] },
  { img: img, name: "اسم الصنف", desc: "وصف المنتج وما يحتويه من مكونات", price: "120 ر.س", images: [img1, img2, img3, img4, img5] },
  { img: img, name: "اسم الصنف", desc: "وصف المنتج وما يحتويه من مكونات", price: "120 ر.س", images: [img1, img2, img3, img4, img5] },


  // إضافة المنتجات الأخرى...
];

const Products = () => {
  const { t, i18n } = useTranslation("products");
  const isRTL = i18n.language === 'ar';
  const [favorites, setFavorites] = useState(Array(products.length).fill(false)); // لحفظ حالة المفضلة لكل منتج
  const [open, setOpen] = useState(false)
  const [filter, setFilter] = useState("الاكثر مطابقة");

  const toggleFavorite = (index) => {
    const updatedFavorites = [...favorites];
    updatedFavorites[index] = !updatedFavorites[index];
    setFavorites(updatedFavorites);
  };
  const [selectedCategory, setSelectedCategory] = useState(0);
  const handleCategoryClick = (index) => {
    setSelectedCategory(index);
  };
  const handleChange = (event) => {
    setFilter(event.target.value);
};
  return (
   <>
   <Helmet>
      <title>منتجاتنا | متجر المواد الغذائية</title>
      <meta name="description" content="اكتشف مجموعة واسعة من المنتجات مثل اللحوم، الدجاج، الخضار والفواكه، والتوابل. تسوق الآن بأفضل الأسعار!" />
      <meta name="keywords" content="لحوم, دجاج, خضار, فواكه, توابل, متجر المواد الغذائية, شراء منتجات غذائية, منتجات طازجة" />
      <meta name="author" content="اسم متجرك" />
      <meta property="og:title" content="منتجاتنا | متجر المواد الغذائية" />
      <meta property="og:description" content="اكتشف مجموعة واسعة من المنتجات مثل اللحوم، الدجاج، الخضار والفواكه، والتوابل. تسوق الآن بأفضل الأسعار!" />
      <meta property="og:image" content="رابط_الصورة_المميزة" />
      <meta property="og:url" content="https://example.com/products" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="منتجاتنا | متجر المواد الغذائية" />
      <meta name="twitter:description" content="اكتشف مجموعة واسعة من المنتجات مثل اللحوم، الدجاج، الخضار والفواكه، والتوابل. تسوق الآن بأفضل الأسعار!" />
      <meta name="twitter:image" content="رابط_الصورة_المميزة" />
    </Helmet>
         <Stack gap={{ xs: "32px", md: "64px" }} sx={{position:"relative" ,paddingX: { xs: "28px", sm: "32px", md: "128px",lg:"200px", xl:"20%" }, paddingY: "64px",paddingBottom:"150px" }}>
          <Stack direction={"row"} justifyContent={"space-between"} >
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="/">{t("link1")}</Link>
              <Link underline="hover" color="inherit" > {t("all")}</Link>
            </Breadcrumbs>
            <FormControl sx={{ width: {xs:"100px",md:"130px",lg:"167px"}, height: "auto" }}>
              <Select
                  value={filter}
                  onChange={handleChange}
                  displayEmpty
                  sx={{
                      height: "25px",
                      border: "2px solid",
                      borderColor: "colors.gray0",
                      borderRadius: "8px",
                      fontSize:{xs:"8px",md:"12px"},
                      padding:0,
                      color: "text.placeholder",
                      "& .MuiOutlinedInput-notchedOutline": {
                          border: "none",
                      },
                      "& .MuiSelect-icon": {
                          right: i18n.language === 'en' ? '0px' : 'unset',
                          left: i18n.language === 'ar' ? '0px' : 'unset',
                      },
                      "& .css-w76bbz-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-w76bbz-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-w76bbz-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":{
                          paddingRight:1
                      }
                  }}
                  aria-label={t('select_location')}
              >
                  <MenuItem value={"Ryadh"}>{t('select1')}</MenuItem>
                  <MenuItem value={"jaddah"}>{t('select2')}</MenuItem>
                  <MenuItem value={"khobar"}>{t('select3')}</MenuItem>
              </Select>
          </FormControl>
          </Stack>

      <Stack direction="row" gap="16px" flexWrap="wrap" justifyContent={"space-between"}>
       {categories.map((cat, index) => (
  <Stack
    key={index}
    direction="column"
    alignItems="center"
    justifyContent="center"
    onClick={() => handleCategoryClick(index)}
    sx={{
      width: "140px",
      height: "140px",
      borderRadius: "16px",
      bgcolor: "white",
      boxShadow: "0px 2px 25px 1px #28282814",
      border: selectedCategory === index ? "4px solid #9C8616" : "2px solid transparent", // تغيير اللون حسب الفلتر المحدد
      cursor: "pointer",

    }}
    gap="8px"
  >
    <Box
      component="img"
      src={cat.img}
      sx={{ width: "48px", height: "48px", objectFit: "cover" }}
    />
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
                "&:hover .add-to-cart-btn, &:hover .favorite-icon": { display: "flex" },
                position: "relative"
              }}>
              <Box component="img" src={product.img} sx={{ height: "auto", maxHeight: "256px",objectFit:"cover", borderRadius: "16px", width: "100%" }} />
              <Stack direction={"row"} alignItems={"center"} >
                <Stack className="product-details" width={"100%"} >
                <Rating name="read-only" value={4} readOnly />

                  <Stack direction={"row"} justifyContent={"space-between"}>
                    <Typography>{product.name}</Typography>
                  </Stack>
                  <Typography>{product.price}</Typography>
                  <Typography>{product.desc}</Typography>
                </Stack>
              </Stack>
              
              <Stack position={"absolute"} top={"10px"} left={"10px"} zIndex={10} className="favorite-icon" sx={{ display: "none" }}>
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
              <Stack position={"absolute"} top={"10px"} right={"10px"} zIndex={10} className="favorite-icon" sx={{ display: "none" }} >
                <IconButton aria-label="fullscreen">
                  <Box sx={{ bgcolor: "white", display: "flex", justifyContent: "center", alignItems: "center", padding: "5px", borderRadius: "50%" }}>
                    <AddShoppingCartIcon sx={{ fontSize: "30px", color: "black" }} />
                  </Box>
                </IconButton>
              </Stack>
              <Button
                variant="contained"
                className="add-to-cart-btn"
                sx={{
                  display: "none",
                  bgcolor: "colors.red0",
                  position: "absolute",
                  top: "200px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  zIndex: 10,
                  width:"90%",
                  borderRadius:"10px"
                }}
                onClick={() => setOpen(true)}
                endIcon={<VisibilityIcon sx={{mx:"20px"}}/>}
              >
                نظرة سريعة
              </Button>
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
                  <IconButton
          aria-label="message"
          // onClick={handleMessage}
          sx={{
            position: "absolute",
            bottom: "40px", // يجعل الأيقونة في الأسفل
            left: "60px", // يحرك الأيقونة قليلاً إلى اليسار
            zIndex: 10,
            bgcolor:"colors.red0",
            width:"60px",
            height:"60px",
            borderRadius:"50%",
            "&:hover":{bgcolor:"black"}
          }}
        >
          <Box component={"img"} src={message} />
        </IconButton>
                </Stack>
   </>
              );
            };

            export default Products;