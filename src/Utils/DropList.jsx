import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Box, Divider, Stack, Typography } from '@mui/material';
import user from "../assets/images and icons/drop/Users.svg"
import order from "../assets/images and icons/drop/Shopping.svg"
import sub from "../assets/images and icons/drop/sub.svg"
import location from "../assets/images and icons/drop/Location.svg"
import mnas from "../assets/images and icons/drop/Arrow.svg"
import logout from "../assets/images and icons/drop/logout.svg"
import fav from "../assets/images and icons/drop/Shapes.svg"
import bag from "../assets/images and icons/drop/bag.svg"
import star from "../assets/images and icons/drop/Arrow.svg"


export default function DropList({ anchorEl, open, handleClose }) {

  return (                            
    <Box>
      <Menu
    
      id="fade-menu"
      MenuListProps={{
        'aria-labelledby': 'fade-button',
      }}
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}  // تم تعديل هذا السطر
      
    >
      <Stack gap={"12px"} sx={{padding:"16px 32px"}}>
        <MenuItem onClick={handleClose}  >
          <Stack direction={"row"} alignItems={"center"} gap={"8px"}>
            <Box component={"img"} src={user} sx={{width:"8px",height:"8px"}} />
            <Typography>عرض/تعديل الملف الشخصي</Typography> 
          </Stack>
        </MenuItem>
        <Box sx={{height:"2px",width:"100%"}}  className="grad-line"/>
        <MenuItem onClick={handleClose}  >
          <Stack direction={"row"} alignItems={"center"} gap={"8px"}>
            <Box component={"img"} src={order} sx={{width:"8px",height:"8px"}} />
            <Typography>طلباتي</Typography> 
          </Stack>
        </MenuItem>
        <MenuItem onClick={handleClose}  >
          <Stack direction={"row"} alignItems={"center"} gap={"8px"}>
            <Box component={"img"} src={sub} sx={{width:"8px",height:"8px"}} />
            <Typography>اشتراكاتي</Typography> 
          </Stack>
        </MenuItem>
        <MenuItem onClick={handleClose}  >
          <Stack direction={"row"} alignItems={"center"} gap={"8px"}>
            <Box component={"img"} src={location} sx={{width:"8px",height:"8px"}} />
            <Typography>عناويني</Typography> 
          </Stack>
        </MenuItem>
        <MenuItem onClick={handleClose}  >
          <Stack direction={"row"} alignItems={"center"} gap={"8px"}>
            <Box component={"img"} src={mnas} sx={{width:"8px",height:"8px"}} />
            <Typography>مناسباتي</Typography> 
          </Stack>
        </MenuItem>
        <MenuItem onClick={handleClose}  >
          <Stack direction={"row"} alignItems={"center"} gap={"8px"}>
            <Box component={"img"} src={fav} sx={{width:"8px",height:"8px"}} />
            <Typography>المفضلة</Typography> 
          </Stack>
        </MenuItem>
        
        <Box sx={{height:"2px",width:"100%"}}  className="grad-line"/>
        <MenuItem onClick={handleClose}  >
          <Stack direction={"row"} alignItems={"center"} gap={"8px"}>
            <Box component={"img"} src={star} sx={{width:"8px",height:"8px"}} />
            <Typography>اللحم الذهبي vip</Typography> 
          </Stack>
        </MenuItem>
        <MenuItem onClick={handleClose}  >
          <Stack direction={"row"} alignItems={"center"} gap={"8px"}>
            <Box component={"img"} src={bag} sx={{width:"8px",height:"8px"}} />
            <Typography>محفظة اللحم الذهبي</Typography> 
          </Stack>
        </MenuItem>
        <Box sx={{height:"2px",width:"100%"}}  className="grad-line"/>

        <MenuItem onClick={handleClose}  >
          <Stack direction={"row"} alignItems={"center"} gap={"8px"}>
            <Box component={"img"} src={logout} sx={{width:"8px",height:"8px"}} />
            <Typography> تسجيل الخروج</Typography> 
          </Stack>
        </MenuItem>
      </Stack>
    </Menu>
    </Box>
  );
}
