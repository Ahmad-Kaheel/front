import { Accordion, AccordionDetails, AccordionSummary, Box, Breadcrumbs, FormControlLabel, FormGroup, Link, Pagination, Stack, Typography } from '@mui/material';
import React from 'react';
import cat1 from "../assets/images and icons/hero/slide2.jpg";
import Grid from '@mui/material/Grid';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

const categories = [
    { img: cat1, name: "لحوم" },
    { img: cat1, name: "دجاج" },
    { img: cat1, name: "بهارات وتوابل" },
    { img: cat1, name: "خضار وفواكه" },
    { img: cat1, name: "أصناف أخرى" },
];

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

    
    // المزيد من المنتجات
];

const Products = () => {
  return (
    <Stack gap={{ xs: "32px", md: "64px" }} sx={{ width: "90%", marginX: "auto", paddingY: "128px" }}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">لحوم</Link>
        <Link underline="hover" color="inherit" href="/m">لحوم جمل</Link>
        <Typography sx={{ color: 'text.primary' }}>لحم مفروم</Typography>
      </Breadcrumbs>

      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">لحم السهول</Link>
        <Typography sx={{ color: 'text.primary' }}>122 منتج</Typography>
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
        <Stack gap="64px" sx={{ width: { xs: "90%", md: "205px" },height:"fit-content", border: 1, borderWidth: "2px", borderColor: "gray", borderRadius: "8px" }}>
          <Accordion sx={{ width: "100%", boxShadow: "none" }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">التصنيف</AccordionSummary>
            <AccordionDetails>
  <Stack gap="32px" padding="32px 16px">
    <Box sx={{ height: "2px", width: "100%" }} className="grad-line" />

    <Stack gap="16px" direction={{ xs: "row", lg: "column" }} alignItems={{ xs: "center", lg: "flex-start" }}>
      <Typography>المناسبات</Typography>
      <FormGroup row sx={{ flexDirection: { xs: "row", lg: "column" } }}>
        <FormControlLabel control={<Checkbox />} label="Label" />
        <FormControlLabel control={<Checkbox />} label="Required" />
        <FormControlLabel control={<Checkbox />} label="Disabled" />
      </FormGroup>
      <Typography color="colors.red0" sx={{ borderBottom: 2, textAlign: "center", cursor: "pointer", width: "fit-content", paddingX: "10px" }}>
        عرض المزيد
      </Typography>
    </Stack>
    <Box sx={{ height: "2px", width: "100%" }} className="grad-line" />

    <Stack gap="16px" direction={{ xs: "row", lg: "column" }} alignItems={{ xs: "center", lg: "flex-start" }}>
      <Typography>المناسبات</Typography>
      <FormGroup row sx={{ flexDirection: { xs: "row", lg: "column" } }}>
        <FormControlLabel control={<Checkbox />} label="Label" />
        <FormControlLabel control={<Checkbox />} label="Required" />
        <FormControlLabel control={<Checkbox />} label="Disabled" />
      </FormGroup>
      <Typography color="colors.red0" sx={{ borderBottom: 2, textAlign: "center", cursor: "pointer", width: "fit-content", paddingX: "10px" }}>
        عرض المزيد
      </Typography>
    </Stack>
    <Box sx={{ height: "2px", width: "100%" }} className="grad-line" />

    <Stack gap="16px" direction={{ xs: "row", lg: "column" }} alignItems={{ xs: "center", lg: "flex-start" }}>
      <Typography>المناسبات</Typography>
      <FormGroup row sx={{ flexDirection: { xs: "row", lg: "column" } }}>
        <FormControlLabel control={<Checkbox />} label="Label" />
        <FormControlLabel control={<Checkbox />} label="Required" />
        <FormControlLabel control={<Checkbox />} label="Disabled" />
      </FormGroup>
      <Typography color="colors.red0" sx={{ borderBottom: 2, textAlign: "center", cursor: "pointer", width: "fit-content", paddingX: "10px" }}>
        عرض المزيد
      </Typography>
    </Stack>

    <Box sx={{ height: "2px", width: "100%" }} className="grad-line" />

    <Stack gap="16px" direction={{ xs: "row", lg: "column" }} alignItems={{ xs: "center", lg: "flex-start" }}>
      <Typography>السعر</Typography>
      <RadioGroup row sx={{ flexDirection: { xs: "row", lg: "column" } }} aria-labelledby="demo-controlled-radio-buttons-group" name="controlled-radio-buttons-group">
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
      </RadioGroup>
    </Stack>
  </Stack>
</AccordionDetails>

          </Accordion>
        </Stack>

        <Stack sx={{ width: "100%" }} justifyContent="space-between" gap={"30px"}>
          <Box>
            <Grid container spacing={{ xs: 2, md: 8 }} rowGap={{ xs: 4, md: 8 }}>
              {products.map((product, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Stack>
                    <Box component="img" src={product.img} sx={{ height: "auto", maxHeight: "256px", borderRadius: "16px" ,width:"205px"}} />
                    <Typography>{product.name}</Typography>
                    <Typography>{product.price}</Typography>
                    <Typography>{product.desc}</Typography>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Box>
          <Stack spacing={2} alignItems="center">
            <Pagination count={10} variant="outlined" shape="rounded" />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Products;
