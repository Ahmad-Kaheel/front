import React from 'react';
import Drawer from '@mui/material/Drawer';
import x from "../assets/images-and-icons/MobileHero/x.svg"
import search from "../assets/images-and-icons/nav2/search.svg"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'
import { Box, InputAdornment, Stack, TextField } from '@mui/material';

export default function DiscoverDrawer({ openDrawer, setOpenDrawer }) {

  return (
    <Drawer
      open={openDrawer}
      onClose={() => setOpenDrawer(false)}
      anchor='top'
    >
      <Stack direction={"row"} justifyContent={"center"} gap={{ xs: "20px", sm: "50px", md: "200px", lg: "400px" }} sx={{ paddingY: "64px", bgcolor: "colors.white10" }}>
        <TextField
          id="outlined-basic"
          label="ما الذي تبحث عنه ؟"
          variant="outlined"
          slotProps={{
            input: {
              startAdornment: (
                <Box
                  component={"img"}
                  src={search}
                  sx={{
                    marginRight: "20px",
                    color: "gray", // لون الأيقونة في الوضع العادي
                    "&:focus-within": {
                      color: "colors.red0", // لون الأيقونة عند التركيز
                    },
                  }}
                />
              ),
              sx: {
                "&:focus-within .MuiOutlinedInput-notchedOutline": {
                  borderColor: "colors.red0",
                },
              },
            },
          }}
          InputLabelProps={{
            sx: {
              color: "gray", // لون الـ label في الوضع العادي
              "&.Mui-focused": {
                color: "colors.red0", // لون الـ label عند التركيز
              },
            },
          }}
        />

        <Box component={"img"} src={x} onClick={() => setOpenDrawer(false)} sx={{ cursor: "pointer" }} />
      </Stack>
    </Drawer>
  );
}
