import React, { useEffect, useState } from 'react';
import { Stack, Typography, Box } from '@mui/material';
import { Helmet } from 'react-helmet-async'; // استيراد React Helmet
import menu from "../assets/images-and-icons/nav2/menu.svg";
import search from "../assets/images-and-icons/nav2/search.svg";
import users from "../assets/images-and-icons/nav2/Users.svg";
import bascket from "../assets/images-and-icons/nav2/Shopping.svg";
import logo from "../assets/images-and-icons/nav2/logo.png";
import { useTranslation } from 'react-i18next';
import DropList from '../Utils/DropList';
import Basket from '../Component/Basket';
import DiscoverDrawer from '../Component/DiscoverDrawer';
import SearchDrawer from '../Utils/SearchDrawer';
import { useNavigate } from 'react-router-dom';

const Nav2 = () => {
  const { t, i18n } = useTranslation('nav2');
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);  // حالة فتح السلة
  const [openDrawerDiscover, setOpenDrawerDiscover] = useState(false);
  const [openDrawerSearch, setOpenDrawerSearch] = useState(false);
  const navigate = useNavigate()
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  return (
    <>


      <Stack
        className='nav-shadow'
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{
          paddingX: { xs: "28px", sm: "32px", md: "128px",lg:"200px", xl:"20%" },
          paddingY: "10px",
          flexWrap: { xs: "wrap", md: "nowrap" },
        }}
      >
        {/* قائمة الأيقونات والأزرار */}
        <Stack flexDirection={"row"} gap={{ xs: "16px", md: "32px" }} flexWrap="wrap">
          <Stack

            flexDirection={"row"}
            gap={"6px"}
            sx={{ cursor: "pointer" }}
            onClick={() => setOpenDrawerDiscover(true)}
            aria-label={i18n.language === "ar" ? "قائمة المكونات" : "list menu"} // إضافة aria-label للعنصر
          >
            <img src={menu} alt={i18n.language === "ar" ? "أيقزنة قائمة" : " menu icon"} style={{ width: "24px", height: "20px" }} />
            <Typography sx={{ color: "text.titles", fontSize: { xs: "12px", md: "14px" } }}>
              {t('list')}
            </Typography>
          </Stack>

          <Stack
            flexDirection={"row"}
            gap={"6px"}
            sx={{ cursor: "pointer" }}
            onClick={() => setOpenDrawerSearch(true)}
            aria-label={i18n.language === "ar" ? "بحث عن لحوم وخضراوات وألبان" : "search of meat , fruits,food "}
          >
            <img src={search} alt="search icon" style={{ width: "24px", height: "20px" }} />
            <Typography sx={{ color: "text.titles", fontSize: { xs: "12px", md: "14px" } }}>
              {t("search")}
            </Typography>
          </Stack>
        </Stack>

        <Box sx={{ cursor: "pointer", mt: { xs: "10px", md: 0 } }}>
          <img src={logo} alt={i18n.language === "ar" ? "متجر اللحم الذهبي " : "golden meat store"} style={{ width: "80px", height: { xs: "40px", md: "50px" } }} />
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
            aria-label={i18n.language === "ar" ? "الملف الشخصي" : "profile"}

          >
            <img src={users} alt="user icon" style={{ width: "24px", height: "20px" }} />
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
            aria-label={i18n.language === "ar" ? "سلة التسوق" : "basket"}
          >
            <img src={bascket} alt="shopping basket" style={{ width: "24px", height: "20px" }} />
            <Typography sx={{ color: "text.titles", fontSize: { xs: "12px", md: "14px" } }}>
              {t('bascket')}
            </Typography>
          </Stack>
        </Stack>

        <Basket openDrawer={openDrawer} handleDrawerClose={handleDrawerClose} />
        <DiscoverDrawer openDrawer={openDrawerDiscover} setOpenDrawer={setOpenDrawerDiscover} />
        <SearchDrawer openDrawer={openDrawerSearch} setOpenDrawer={setOpenDrawerSearch} />
      </Stack>
    </>
  );
}

export default Nav2;
