import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Box, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import user from "../assets/images-and-icons/drop/Users.svg";
import order from "../assets/images-and-icons/drop/Shopping.svg";
import sub from "../assets/images-and-icons/drop/sub.svg";
import location from "../assets/images-and-icons/drop/Location.svg";
import mnas from "../assets/images-and-icons/drop/Arrow.svg";
import logout from "../assets/images-and-icons/drop/logout.svg";
import fav from "../assets/images-and-icons/drop/Shapes.svg";
import bag from "../assets/images-and-icons/drop/bag.svg";
import star from "../assets/images-and-icons/drop/Arrow.svg";

export default function DropList({ anchorEl, open, handleClose, setOpen }) {
  const { t, i18n } = useTranslation("drop");
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
    handleClose();
  };

  const menuItems = [
    { icon: user, label: t("profile"), onClick: () => handleClick("/profile") },
    { icon: bag, label: t("product"), onClick: () => handleClick("/products") },

    { icon: order, label: t("order"), onClick: () => handleClick("/profile/order") },
    { icon: location, label: t("addr"), onClick: () => handleClick("/profile/address") },
    { icon: fav, label: t("favorite"), onClick: () => handleClick("/profile/favorite") },
    { icon: logout, label: t("out"), onClick: () => handleClick("/logout") }
  ];

  return (
    <Box>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        role="menu" // إضافة role لتعريف هذا كقائمة منسدلة
      >
        <Stack gap={"12px"} sx={{ padding: "16px 32px" }}>
          {menuItems.map((item, index) => (
            <React.Fragment key={index}>
              <MenuItem onClick={item.onClick} role="menuitem" aria-label={item.label}>
                <Stack direction={"row"} alignItems={"center"} gap={"8px"}>
                  <Box component={"img"} src={item.icon} alt={item.label} sx={{ width: "8px", height: "8px" }} />
                  <Typography>{item.label}</Typography>
                </Stack>
              </MenuItem>
              {/* الفاصل بين العناصر باستخدام Box */}
              {index !== menuItems.length - 1 && (
                <Box sx={{ height: "2px", width: "100%", my: "8px" }} className="grad-line"/>
              )}
            </React.Fragment>
          ))}
        </Stack>
      </Menu>
    </Box>
  );
}
