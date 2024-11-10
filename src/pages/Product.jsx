import { Box, Breadcrumbs, Button, Link, Stack, Tab, Tabs, Typography } from '@mui/material';
import React, { useState } from 'react';
import img1 from "../assets/images and icons/CategoryFilters/Cooled.png";
import img2 from "../assets/images and icons/CategoryFilters/Frozen.png";
import img3 from "../assets/images and icons/CategoryFilters/Imported.png";
import img4 from "../assets/images and icons/CategoryFilters/Soft.png";
import img5 from "../assets/images and icons/CategoryFilters/Spiced.png";
import gift from "../assets/images and icons/product/gift.svg"
import basket from "../assets/images and icons/product/Shopping.svg"
import add from "../assets/images and icons/product/add.svg"
import p1 from "../assets/images and icons/product/p1.svg"
import p2 from "../assets/images and icons/product/p2.svg"
import p3 from "../assets/images and icons/product/p3.svg"
import p4 from "../assets/images and icons/product/p4.svg"
import p5 from "../assets/images and icons/product/p5.svg"
import { SingleProduct } from '../Utils/SingleProduct';

const Product = () => {
  const images = [img1, img2, img3, img4, img5];

  // حالة لتخزين الصورة الكبيرة الحالية
  const [mainImage, setMainImage] = useState(img1);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Stack gap="64px" sx={{ paddingY: "64px", width: "80%", margin: "auto" }}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">لحوم</Link>
        <Link underline="hover" color="inherit" href="/m">لحوم جمل</Link>
        <Typography sx={{ color: 'text.primary' }}>لحم مفروم</Typography>
      </Breadcrumbs>
      <Stack direction={{sx:"column",lg:"row"}} gap={"64px"} alignItems={{xs:"center",lg:"start"}}>
        <Stack direction={{xs:"column",lg:"row"}} alignItems="center" gap={{ xs:"35px",lg:"64px"}}>
          <Stack gap="32px" direction={{xs:"row",lg:"column"}} >
            {images.map((image, index) => (
              <Box
                key={index}
                component="img"
                src={image}
                onClick={() => setMainImage(image)} // عند الضغط، سيتم تغيير الصورة الكبيرة
                sx={{ width:{ xs:"35px",lg:"64px"}, height:{ xs:"35px",lg:"64px"}, cursor: "pointer" }}
              />
            ))}
          </Stack>
          <Box component="img" src={mainImage} sx={{ width: {xs:"300px",lg:"500px"}, height: {xs:"300px",lg:"500px"}}} />
        </Stack>
        <Stack gap={"32px"}>
            <Stack direction={"row"} gap={"64px"}>
                <Stack gap={"16px"}>
                    <Typography fontWeight={600} fontSize={"24px"} color='colors.black0'>6299 ر.س</Typography>
                    <Typography fontWeight={400} fontSize={"14px"} color='colors.black0'>الأسعار شاملة الضرائب</Typography>
                </Stack>
                <Stack direction={"row"} gap={"8px"} alignItems={"center"}>
                    <Box component={'img'} src={gift} sx={{width:"18px",height:"21px"}}/>
                    <Stack gap={"8px"}>
                        <Typography fontWeight={400} fontSize={"14px"} color='colors.black0'>اريح 5554</Typography>
                        <Typography sx={{textDecoration:"underline"}} fontWeight={400} fontSize={"14px"} color='colors.black0'>من نقاط اللحم الذهبي</Typography>
                    </Stack>
                </Stack>
            </Stack>
            <Typography fontWeight={600} fontSize={"24px"} color='colors.black0'>
                لحم المى
            </Typography>
            <Button variant='contained' sx={{bgcolor:"colors.red0",fontSize:"15px",fontWeight:500}} endIcon={<Box component={"img"} src={basket} marginX={"20px"}/>}>أضف للسلة</Button>
            <Stack gap={"32px"} sx={{border:1,borderWidth:"2px",borderColor:"colors.gray0",borderRadius:"16px"}} padding={"22px"} >
              <Stack direction={"row"} gap={"16px"} alignItems={"center"}>
                  <Box component={"img"} src={add} sx={{cursor:"pointer"}}/>
                  <Stack gap={"8px"}>
                      <Typography fontWeight={400} fontSize={"16px"}>اسم الخيار</Typography>
                      <Typography fontWeight={400} fontSize={"14px"}>شرح</Typography>
                  </Stack>
              </Stack>
              <Stack direction={"row"} gap={"16px"} alignItems={"center"}>
                  <Box component={"img"} src={add} sx={{cursor:"pointer"}}/>
                  <Stack gap={"8px"}>
                      <Typography fontWeight={400} fontSize={"16px"}>اسم الخيار</Typography>
                      <Typography fontWeight={400} fontSize={"14px"}>شرح</Typography>
                  </Stack>
              </Stack>
              <Stack direction={"row"} gap={"16px"} alignItems={"center"} >
                  <Box component={"img"} src={add} sx={{cursor:"pointer"}}/>
                  <Stack gap={"8px"}>
                      <Typography fontWeight={400} fontSize={"16px"}>اسم الخيار</Typography>
                      <Typography fontWeight={400} fontSize={"14px"}>شرح</Typography>
                  </Stack>
              </Stack>
             
            </Stack>
            <Stack direction={"row"} alignItems={"center"} gap={"32px"} sx={{border:1,borderWidth:"2px",borderColor:"colors.gray0",borderRadius:"16px"}} padding={"22px"}>
                  <Typography>طرق الدفع</Typography>
                  <Stack gap="8px">
                    <Stack flexDirection={"row"} gap={"8px"}>
                        <Box component={"img"} src={p1} />
                        <Box component={"img"} src={p2} />
                        <Box component={"img"} src={p3} />
                        <Box component={"img"} src={p4} />
                        <Box component={"img"} src={p5} />
                    </Stack>
                    <Stack flexDirection={"row"} gap={"8px"}>
                        <Box component={"img"} src={p5} />
                        <Box component={"img"} src={p4} />
                        <Box component={"img"} src={p3} />
                        <Box component={"img"} src={p2} />
                        <Box component={"img"} src={p1} />
                    </Stack>
                  </Stack>
        </Stack>
        </Stack>
        
      </Stack>
      <Stack width={"60%"} gap={"32px"}>
        <Box >
          <Tabs 
          sx={{
            "& .Mui-selected": {
              color: "colors.red0", // اللون الأحمر عند اختيار التاب
            },
            "& .MuiTabs-indicator": {
              backgroundColor: "colors.red0" // لون الخط السفلي عند اختيار التاب
            },
          }}
          value={value} onChange={handleChange} 
          aria-label="basic tabs example">
            <Tab label="وصف المنتج"  />
            <Tab label="حقائق غذائية" />
          </Tabs>
        </Box>
          {value ===0 && (
            <Typography fontWeight={400} fontSize={"16px"} lineHeight={"24px"} overflow={"auto"} maxHeight={"107px"} color='colors.black0'>
              أضف لمسة من البهجة والدفيء إلى مناسباتك مع باقة 100 جوري برتقالية مبهجة، مغلفة بغلاف تيل داكن يضفي لمسة من الفخامة والتميز. تجمع هذه الباقة الرائعة بين ألوان الجوري البرتقالية الزاهية التي تبث الطاقة والحيوية، مع الغلاف الداكن الذي يعزز من جمال الزهور ويجعلها تبرز بشكل مميز. تُعد هذه الباقة الهدية المثالية لكل المناسبات الخاصة التي تستحق التألق. اطلب الآن واستمتع بجمال هذا التنسيق الذي سيجلب السعادة والابتسامة إلى قلوب أحبائك. اجعل لحظاتك الخاصة أكثر إشراقاً وتميزاً مع باقة الجوري البرتقالية المبهجة في غلاف تيل داكن.
            </Typography>
          )}  
          {value ===1&& (
            <Typography fontWeight={400} fontSize={"16px"} lineHeight={"24px"} color='colors.black0'>
              لحم الماعز له قيم غذائية اعلى من لحوم الحيوانات الاخرى
            </Typography>
          )}  
          <Stack>
            <Typography fontSize={"16px"} fontWeight={600}>الأحجام المتوفرة</Typography>
            <Stack direction={"row"} alignItems={"center"} gap={"8px"}>
              <Box sx={{width:"8px",height:"8px",bgcolor:"colors.black0",borderRadius:"50%"}} />
              <Typography>200g</Typography>
            </Stack>
            <Stack direction={"row"} alignItems={"center"} gap={"8px"}>
              <Box sx={{width:"8px",height:"8px",bgcolor:"colors.black0",borderRadius:"50%"}} />
              <Typography>200g</Typography>
            </Stack>
            <Stack direction={"row"} alignItems={"center"} gap={"8px"}>
              <Box sx={{width:"8px",height:"8px",bgcolor:"colors.black0",borderRadius:"50%"}} />
              <Typography>200g</Typography>
            </Stack>
          </Stack>
      </Stack>
      <Stack gap={"16px"}>
  <Typography fontWeight={600} fontSize={{ xs: "14px", md: "16px" }}>يقوم المستخدمون بشراء هذه المنتجات سوياً</Typography>
  <Stack>
    <Stack
      direction={{ xs: "column", md: "row" }}
      gap={{ xs: "16px", md: "26px",lg:"64px" }}
    >
      {[1, 2, 3].map((_, index) => (
        <Stack key={index} gap={"16px"} width={{ xs: "100%", md: "auto" }}>
          <Stack
            direction={"row"}
            gap={"8px"}
            alignItems={"center"}
            justifyContent={{ xs: "center", md: "flex-start" }}
          >
            <SingleProduct image={img1} name={"لحم مبرد"} desc={"من اجود انواع اللحوم"} />
            <Typography fontWeight={600} fontSize={"40px"}>+</Typography>
            <SingleProduct image={img1} name={"لحم مبرد"} desc={"من اجود انواع اللحوم"} />
          </Stack>
          <Button
            variant="outlined"
            sx={{
              color: "colors.black0",
              borderColor: "colors.red0",
              borderRadius: "8px",
              width: { xs: "100%", md: "auto" },
            }}
          >
            أضف إلى عربة التسوق مقابل 999 ر.س
          </Button>
        </Stack>
      ))}
    </Stack>
  </Stack>
</Stack>

    </Stack>
  );
};

export default Product;
