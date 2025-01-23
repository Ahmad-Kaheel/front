import { Box, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import bg from "../../assets/images-and-icons/MobileHero/background.png"
import logo from "../../assets/images-and-icons/nav2/logo.png"
import x from "../../assets/images-and-icons/MobileHero/x.svg"
import MenuIcon from '@mui/icons-material/Menu';
import DropList from '../../Utils/DropList'
const MobileHero = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };
  return (
    <Box sx={{width:"100%",height:"100vh",position:"relative"}}>
        <Box
        sx={{width:"100%",height:"100%"}}
        component={"img"}
        src={bg}
        />
        <Stack sx={{position:"absolute",top:"40px",paddingX:"20px",left:0,width:"100%"}} flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"}>
            <Box component="img" width={"90px"} height={"90px"} src={logo} />
            <Box sx={{width:"34px",height:"34px",display:"flex",justifyContent:"center",alignItems:"center",bgcolor:"colors.white0",borderRadius:"50%"}} onClick={handleClick}>
                <MenuIcon />
            </Box>
        </Stack>
        <Stack sx={{position:"absolute",bottom:"100px",paddingX:"20px",left:"50%",transform:'translateX(-50%)',width:"100%"}} flexDirection={"row"} alignItems={"center"} justifyContent={"center"}>
           <Box sx={{bgcolor:"colors.red0",width:"70%",height:"30px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                <Typography sx={{fontWeight:600,fontSize:16,color:"colors.white0"}}>اشتر الآن</Typography>
           </Box>
        </Stack>
        <DropList 
          anchorEl={anchorEl} 
          setAnchorEl={setAnchorEl}                               
          open={open}
          setOpen={setOpen}
          handleClose={handleClose}
        />
    </Box>
  )
}

export default MobileHero