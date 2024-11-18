import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

export const SingleProduct = ({image,name,desc}) => {
  return (
    <Stack gap={"8px"}>
        <Box component={"img"} src={image} sx={{width:{xs:"140px",md:"100px",lg:"130px"},height:{xs:"140px",md:"100px",lg:"130px"},borderRadius:"16px"}}/>
        <Typography fontSize={{xs:"16px",md:"12px",lg:"16px"}}>{name}</Typography>
        <Typography fontSize={{xs:"16px",md:"12px",lg:"16px"}}>{desc}</Typography>
    </Stack>
  )
}
