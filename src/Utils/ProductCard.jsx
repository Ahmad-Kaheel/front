import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const ProductCard = ({image,name,price}) => {
  return (
    <Box sx={{position:"relative"}}>
         <Box
            component="img"
            sx={{
                width: "100%",
                height: "500px",
                borderRadius: "32px"
            }}
            // alt={`Slide ${index + 1}`}
            src={image}
        />
        <Box
            sx={{
                position: "absolute",
                width: "100%",
                height: "100%",
                left: "0",
                top: "0",
                zIndex: 10,
                borderRadius: "32px",
                bgcolor: "rgba(0,0,0,0.4)"
            }}
        />
        <Stack sx={{ position: "absolute",width:"100%",gap:1, color: "colors.white0", bottom: "40px", right: "20px", fontWeight: 700, zIndex: 11 }}>
            <Typography fontWeight={700} color={"colors.white0"} sx={{ fontSize: { xs: "11px", sm: "15px", md: "20px", lg: "28px" } }}>{name}</Typography>
            <Typography fontWeight={600} color={"colors.white0"} sx={{ fontSize: { xs: "9px", sm: "27px", md: "20px", lg: "24px" } }}>{price}</Typography>
            <Box sx={{width:"80%",display:"flex",justifyContent:"center",alignItems:"center",bgcolor:"colors.red0",height:"35px",borderRadius:"8px",cursor:"pointer"}}>
                <Typography fontWeight={600} fontSize={"15px"} color={"colors.white0"}>اشتر الان</Typography>
            </Box>
        </Stack>
    </Box>
  )
}

export default ProductCard