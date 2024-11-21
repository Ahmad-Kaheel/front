import { Box, Breadcrumbs, Button, IconButton, Link, Stack, Tab, Tabs, Typography } from '@mui/material';
import React, { useState } from 'react';
import img1 from "../assets/images-and-icons/CategoryFilters/img1.jpg";
import img2 from "../assets/images-and-icons/CategoryFilters/Frozen.png";
import img3 from "../assets/images-and-icons/CategoryFilters/Imported.png";
import img4 from "../assets/images-and-icons/CategoryFilters/Soft.png";
import img5 from "../assets/images-and-icons/CategoryFilters/Spiced.png";
import gift from "../assets/images-and-icons/product/gift.svg"
import basket from "../assets/images-and-icons/product/Shopping.svg"
import meat from "../assets/images-and-icons/nav1/meat.png"
import halal from "../assets/images-and-icons/nav1/halal.png"
import car from "../assets/images-and-icons/nav1/car.svg"
import pro from "../assets/images-and-icons/nav1/product.svg"


import p1 from "../assets/images-and-icons/pay/pay1.svg"
import p2 from "../assets/images-and-icons/pay/pay2.svg"
import p3 from "../assets/images-and-icons/pay/pay3.svg"
import p4 from "../assets/images-and-icons/pay/pay4.svg"
import p5 from "../assets/images-and-icons/pay/pay5.svg"
import p6 from "../assets/images-and-icons/pay/pay6.svg"
import p7 from "../assets/images-and-icons/pay/pay7.svg"
import p8 from "../assets/images-and-icons/pay/pay8.png"
import p9 from "../assets/images-and-icons/pay/pay9.svg"
import p10 from "../assets/images-and-icons/pay/pay10.svg"

import { SingleProduct } from '../Utils/SingleProduct';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import FullScreenImage from '../Component/FullScreenImage';
import { useTranslation } from 'react-i18next';
const Product = () => {
  const images = [img1, img2, img3, img4, img5];
  const { t, i18n } = useTranslation("product");

  const [favorites, setFavorites] = useState(false); // لحفظ حالة المفضلة لكل منتج

  const toggleFavorite = () => {
    setFavorites(!favorites);
  };

  // حالة لتخزين الصورة الكبيرة الحالية
  const [mainImage, setMainImage] = useState(img1);
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Stack gap="64px" sx={{ paddingY: "64px", paddingX: { xs: "20px", sm: "32px", md: "128px", lg: "200px",xl:"256px" } }}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">{t("link1")}</Link>
        <Link underline="hover" color="inherit" href="/m">{t("link2")}</Link>
        <Typography sx={{ color: 'text.primary' }}>{t("link3")}</Typography>
      </Breadcrumbs>
      <Stack direction={{ xs: "column", md: "row" }} gap={"32px"} sx={{ alignItems: "stretch", height: "100%" }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems={{ xs: "center", md: "flex-start" }}
          gap={{ xs: "35px", lg: "32px" }}
          sx={{ flex: 1 }}
          height={"auto"}
        >
          <Stack gap="32px"  direction={{ xs: "row", md: "column" }}>
            {images.map((image, index) => (
              <Box
                key={index}
                component="img"
                src={image}
                onClick={() => setMainImage(image)}
                sx={{
                  width: { xs: "35px", lg: "64px" },
                  height: { xs: "35px", lg: "64px" },
                  cursor: "pointer",
                  border: mainImage === image ? "4px solid" : "none",
                  borderColor: "colors.red0",
                }}
              />
            ))}
          </Stack>
          <Box
            sx={{
              position: "relative",
              flex: 1,
              width:"300px",
              height:"100%",
              maxHeight: "100%", // تقييد الارتفاع ليكون بنفس ارتفاع المواصفات
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden", // منع تجاوز الصورة
              borderRadius:"16px"
            }}
          >
            <Box
              component="img"
              src={mainImage}
              sx={{
                width:"100%",
                height: "100%", // تقييد الارتفاع
                maxHeight: "100%", // الالتزام بأقصى ارتفاع
                borderRadius: "16px",
                objectFit: "cover", // ضمان احتواء الصورة داخل الحاوية
              }}
            />
            <Stack position={"absolute"} top={"30px"} left={{ xs: "20px", lg: "60px" }} zIndex={10}>
              <IconButton aria-label="add to favorites" onClick={() => toggleFavorite()}>
                {favorites ? (
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
            <Stack position={"absolute"} bottom={"30px"} left={{ xs: "20px", lg: "60px" }} zIndex={10}>
              <IconButton aria-label="full screen">
                <Box sx={{ bgcolor: "white", display: "flex", justifyContent: "center", alignItems: "center", padding: "5px", borderRadius: "50%" }}>
                  <FullscreenExitIcon sx={{ fontSize: "30px", color: "black" }} onClick={() => setOpen(true)} />
                </Box>
              </IconButton>
            </Stack>
          </Box>
        </Stack>
        <Stack gap={"16px"} sx={{ flex: 1, height: "auto" }}>
          <Stack direction={"row"} gap={"64px"}>
            <Stack gap={"16px"}>
              <Typography fontWeight={600} fontSize={"24px"} color='colors.black0'>6299 ر.س</Typography>
              <Typography fontWeight={400} fontSize={"14px"} color='colors.black0'>{t("price")}</Typography>
            </Stack>
            <Stack direction={"row"} gap={"8px"} alignItems={"center"}>
              <Box component={'img'} src={gift} sx={{ width: "18px", height: "21px" }} />
              <Stack gap={"8px"}>
                <Typography fontWeight={400} fontSize={"14px"} color='colors.black0'>{t("point")}</Typography>
                <Typography sx={{ textDecoration: "underline" }} fontWeight={400} fontSize={"14px"} color='colors.black0'>  {t("point2")}</Typography>
              </Stack>
            </Stack>
          </Stack>
          <Typography fontWeight={600} fontSize={"24px"} color='colors.black0'>
            لحم المى
          </Typography>
          <Button variant='contained' sx={{ bgcolor: "colors.red0", fontSize: "15px", fontWeight: 500 }} endIcon={<Box component={"img"} src={basket} marginX={"20px"} />}> {t("cart")}</Button>
          <Stack gap={"16px"} sx={{ border: 1, borderWidth: "2px", borderColor: "colors.gray0", borderRadius: "16px" }} padding={"22px"} >
            <Stack direction={"row"} gap={"16px"} alignItems={"center"}>
              <Box component={"img"} src={meat} sx={{ cursor: "pointer", width: "24px", height: "24px" }} />
              <Stack gap={"8px"}>
                <Typography fontWeight={400} fontSize={"16px"}>{t("label1")}</Typography>
                <Typography fontWeight={400} fontSize={"14px"}>{t("label2")} </Typography>
              </Stack>
            </Stack>
            <Stack direction={"row"} gap={"16px"} alignItems={"center"}>
              <Box component={"img"} src={halal} sx={{ cursor: "pointer", width: "24px", height: "24px" }} />
              <Stack gap={"8px"}>
                <Typography fontWeight={400} fontSize={"16px"}>{t("label3")}</Typography>
                <Typography fontWeight={400} fontSize={"14px"}>{t("label4")}</Typography>
              </Stack>
            </Stack>
            <Stack direction={"row"} gap={"16px"} alignItems={"center"} >
              <Box component={"img"} src={pro} sx={{ cursor: "pointer" }} />
              <Stack gap={"8px"}>
                <Typography fontWeight={400} fontSize={"16px"}>{t("label5")}</Typography>
                <Typography fontWeight={400} fontSize={"14px"}>{t("label6")}</Typography>
              </Stack>
            </Stack>
            <Stack direction={"row"} gap={"16px"} alignItems={"center"} >
              <Box component={"img"} src={car} sx={{ cursor: "pointer" }} />
              <Stack gap={"8px"}>
                <Typography fontWeight={400} fontSize={"16px"}>{t("label7")}</Typography>
                <Typography fontWeight={400} fontSize={"14px"}> {t("label8")}  </Typography>
              </Stack>
            </Stack>

          </Stack>
          <Stack direction={"row"} alignItems={"center"} gap={"32px"} sx={{ border: 1, borderWidth: "2px", borderColor: "colors.gray0", borderRadius: "16px" }} padding={"22px"}>
            <Typography> {t("payment")}</Typography>
            <Stack gap="8px">
              <Stack flexDirection={"row"} gap={"8px"}>
                <Box component={"img"} src={p1} />
                <Box component={"img"} src={p2} />
                <Box component={"img"} src={p3} />
                <Box component={"img"} src={p4} />
                <Box component={"img"} src={p5} />
              </Stack>
              <Stack flexDirection={"row"} gap={"8px"}>
                <Box component={"img"} src={p6} />
                <Box component={"img"} src={p7} />
                <Box component={"img"} src={p8} />
                <Box component={"img"} src={p9} />
                <Box component={"img"} src={p10} />
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
            <Tab label={t("desc")} />
            <Tab label={t("info")} />
          </Tabs>
        </Box>
        {value === 0 && (
          <Typography fontWeight={400} fontSize={"16px"} lineHeight={"24px"} overflow={"auto"} maxHeight={"107px"} color='colors.black0'>
            أضف لمسة من البهجة والدفيء إلى مناسباتك مع باقة 100 جوري برتقالية مبهجة، مغلفة بغلاف تيل داكن يضفي لمسة من الفخامة والتميز. تجمع هذه الباقة الرائعة بين ألوان الجوري البرتقالية الزاهية التي تبث الطاقة والحيوية، مع الغلاف الداكن الذي يعزز من جمال الزهور ويجعلها تبرز بشكل مميز. تُعد هذه الباقة الهدية المثالية لكل المناسبات الخاصة التي تستحق التألق. اطلب الآن واستمتع بجمال هذا التنسيق الذي سيجلب السعادة والابتسامة إلى قلوب أحبائك. اجعل لحظاتك الخاصة أكثر إشراقاً وتميزاً مع باقة الجوري البرتقالية المبهجة في غلاف تيل داكن.
          </Typography>
        )}
        {value === 1 && (
          <Typography fontWeight={400} fontSize={"16px"} lineHeight={"24px"} color='colors.black0'>
            لحم الماعز له قيم غذائية اعلى من لحوم الحيوانات الاخرى
          </Typography>
        )}
        <Stack>
          <Typography fontSize={"16px"} fontWeight={600}>{t("size")}</Typography>
          <Stack direction={"row"} alignItems={"center"} gap={"8px"}>
            <Box sx={{ width: "8px", height: "8px", bgcolor: "colors.black0", borderRadius: "50%" }} />
            <Typography>200g</Typography>
          </Stack>
          <Stack direction={"row"} alignItems={"center"} gap={"8px"}>
            <Box sx={{ width: "8px", height: "8px", bgcolor: "colors.black0", borderRadius: "50%" }} />
            <Typography>200g</Typography>
          </Stack>
          <Stack direction={"row"} alignItems={"center"} gap={"8px"}>
            <Box sx={{ width: "8px", height: "8px", bgcolor: "colors.black0", borderRadius: "50%" }} />
            <Typography>200g</Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack gap={"16px"}>
        <Typography fontWeight={600} fontSize={{ xs: "14px", md: "16px" }}> {t("togither")} </Typography>
        <Stack>
          <Stack
            direction={{ xs: "column", md: "row" }}
            gap={{ xs: "16px", md: "26px", lg: "64px" }}
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
                  {t("addCart")}
                </Button>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Stack>
      <FullScreenImage open={open} setOpen={setOpen} slides={images} />
    </Stack>
  );
};

export default Product;
