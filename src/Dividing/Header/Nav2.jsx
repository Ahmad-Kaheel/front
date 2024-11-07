import React, { useEffect, useState } from 'react';
import { Stack, Typography, Box } from '@mui/material';
import menu from "../../assets/images and icons/nav2/menu.svg";
import search from "../../assets/images and icons/nav2/search.svg";
import users from "../../assets/images and icons/nav2/Users.svg";
import bascket from "../../assets/images and icons/nav2/Shopping.svg";
import logo from "../../assets/images and icons/nav2/logo.png";
import { useTranslation } from 'react-i18next';
import DropList from '../../Utils/DropList';
import Basket from '../../Component/basket';
import DiscoverDrawer from '../../Component/DiscoverDrawer';
import SearchDrawer from '../../Utils/SearchDrawer'
const Nav2 = () => {
  const { t } = useTranslation('nav2');
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);  // حالة فتح السلة
  const [openDrawerDiscover, setOpenDrawerDiscover] = useState(false); 
  const [openDrawerSearch, setOpenDrawerSearch] = useState(false); 


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };
  const handleDrawerClose = () => {
    console.log("Closing drawer from Nav2");
    setOpenDrawer(false);
  };

  // طباعة حالة openDrawer لتتبعها
 console.log("Drawer is open:", openDrawer);
 useEffect(() => {
  if (!openDrawer) {
    console.log("Drawer should now be closed.");
  }
}, [openDrawer]);  // مراقبة openDrawer

  return (
    <Stack 
      className='nav-shadow' 
      flexDirection={"row"} 
      justifyContent={"space-between"} 
      alignItems={"center"} 
      sx={{
        paddingX: { xs: "28px", sm: "32px", md: "70px" },
        paddingY: "10px",
        flexWrap: { xs: "wrap", md: "nowrap" },
      }}
    >
      {/* قائمة الأيقونات والأزرار */}
      <Stack flexDirection={"row"} gap={{ xs: "16px", md: "32px" }} flexWrap="wrap">
        <Stack flexDirection={"row"} gap={"6px"} sx={{ cursor: "pointer" }} onClick={()=>setOpenDrawerDiscover(true)}>
          <img src={menu} style={{ width: "24px", height: "20px" }} />
          <Typography sx={{ color: "text.titles", fontSize: { xs: "12px", md: "14px" } }}>
            {t('list')}
          </Typography>
        </Stack>
        <Stack flexDirection={"row"} gap={"6px"} sx={{ cursor: "pointer" }} onClick={()=>setOpenDrawerSearch(true)}>
          <img src={search} style={{ width: "24px", height: "20px" }} />
          <Typography sx={{ color: "text.titles", fontSize: { xs: "12px", md: "14px" } }}>
            {t("search")}
          </Typography>
        </Stack>
      </Stack>
      
      <Box sx={{ cursor: "pointer", mt: { xs: "10px", md: 0 } }}>
        <img src={logo} style={{ width: "auto", height: { xs: "40px", md: "50px" } }} />
      </Box>

      {/* زر المستخدم وزر السلة */}
      <Stack flexDirection={"row"} gap={{ xs: "16px", md: "32px" }} flexWrap="wrap" mt={{ xs: "10px", md: 0 }}>
        <Stack
          flexDirection={"row"}
          gap={"6px"} 
          sx={{ cursor: "pointer" }} 
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <img src={users} style={{ width: "24px", height: "20px" }} />
          <Typography sx={{ color: "text.titles", fontSize: { xs: "12px", md: "14px" } }}>
            {t('acc')}
          </Typography>
        </Stack>
        <DropList 
          anchorEl={anchorEl} 
          setAnchorEl={setAnchorEl}                               
          open={open}
          setOpen={setOpen}
          handleClose={handleClose}
        />

        {/* زر السلة مع استخدام الحالة */}
        <Stack
  flexDirection={"row"}
  gap={"6px"} 
  sx={{ cursor: "pointer" }} 
  onClick={() => setOpenDrawer(true)}  // فتح Drawer بشكل صريح
>
          <img src={bascket} style={{ width: "24px", height: "20px" }} />
          <Typography sx={{ color: "text.titles", fontSize: { xs: "12px", md: "14px" } }}>
            {t('bascket')}
          </Typography>
        </Stack>
      </Stack>
      <Basket openDrawer={openDrawer} handleDrawerClose={handleDrawerClose} />
      <DiscoverDrawer openDrawer={openDrawerDiscover} setOpenDrawer={setOpenDrawerDiscover} />
      <SearchDrawer openDrawer={openDrawerSearch} setOpenDrawer={setOpenDrawerSearch} />

    </Stack>
  );
}

export default Nav2;
