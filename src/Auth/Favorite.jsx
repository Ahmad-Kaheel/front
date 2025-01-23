import { Box, Stack, Typography, Rating, Button } from '@mui/material';
import React, { useState } from 'react';
import cat1 from "../assets/images-and-icons/hero/slide2.jpg";
import more from "../assets/images-and-icons/favorite/more.svg";
import share from "../assets/images-and-icons/favorite/share.svg";

const Favorite = () => {
  const products = Array(10).fill({
    img: cat1,
    name: "اسم الصنف",
    company: "اسم الشركة",
    desc: "وصف عن المنتج وصف عن المنتج وصف عن المنتج وصف عن المنتج وصف عن المنتج وصف عن المنتج وصف عن المنتج وصف عن المنتج وصف عن المنتج وصف عن المنتج وصف عن المنتج وصف عن المنتج وصف عن المنتج وصف عن المنتج وصف عن المنتج وصف عن المنتج وصف عن المنتج وصف عن المنتج وصف عن المنتج وصف عن المنتج وصف عن المنتج",
    price: "120 ر.س",
  });

  return (
    <Stack gap={2} sx={{ width: "100%" }}>
      <Typography sx={{ padding: 2, borderBottom: "2px solid", borderColor: "colors.red0", width: "fit-content" }}>
        المفضلة
      </Typography>
      
      <Stack direction="row" justifyContent="space-between" width="100%">
        <Stack direction="row" gap={2}>
          <Typography fontSize={16} fontWeight={600}>قائمة المفضلة</Typography>
          <Typography fontSize={16} fontWeight={600} color='colors.black1'>خاص</Typography>
        </Stack>
        <Stack direction="row" gap={4}>
          <Stack direction="row" gap={2} alignItems="center">
            <Typography color='colors.red0'>مشاركة القائمة مع الآخرين</Typography>
            <Box component="img" src={share} width={24} height={24} />
          </Stack>
          <Stack direction="row" gap={2} alignItems="center">
            <Typography color='colors.red0'>المزيد</Typography>
            <Box component="img" src={more} width={24} height={24} />
          </Stack>
        </Stack>
      </Stack>
      
      <Stack gap={2}>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </Stack>
    </Stack>
  );
};

// مكون فرعي لإدارة حالة وصف المنتج
const ProductCard = ({ product }) => {
  const [showFullDesc, setShowFullDesc] = useState(false);
  const toggleDesc = () => setShowFullDesc(!showFullDesc);
  
  const truncatedDesc = product.desc.length > 100 ? `${product.desc.slice(0, 100)}... ` : product.desc;

  return (
    <Stack direction="row" alignItems="center" gap={2} sx={{ border: "1px solid #ddd", padding: 2, borderRadius: 2 }}>
      <Box component="img" src={product.img} width={"200px"} sx={{ objectFit: "cover", borderRadius: 1, height: "100%" }} />
      <Stack gap={1} width={"100%"}>
        <Stack direction="row" gap={1} alignItems="center">
          <Typography fontWeight={600}>{product.name}</Typography>
          <Typography color="text.secondary">{product.company}</Typography>
        </Stack>
        <Typography variant="body2" color="text.secondary">
          {showFullDesc ? product.desc : truncatedDesc}
          {product.desc.length > 100 && (
            <Typography component="span" color="colors.red0" sx={{ cursor: "pointer" }} onClick={toggleDesc}>
              {showFullDesc ? " عرض أقل" : " عرض المزيد"}
            </Typography>
          )}
        </Typography>
        <Rating name="disabled" value={4} readOnly size="small" />
        <Stack direction={"row"} justifyContent={"space-between"} width={"100%"}>
          <Typography>{product.price}</Typography>
          <Button variant="contained" sx={{ bgcolor: "colors.red0" }}>أَضف لسلة التسوق</Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Favorite;
