import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
const ReviewCard = ({userName,review,userImage}) => {
  return (
    <Stack flexDirection={"row"} alignItems={"center"} gap={"16px"} paddingY={"20px"}>
        <Box component={"img"} src={userImage} width="100px" height="100px"/>
        <Stack gap={'4px'}>
            <Typography fontWeight={600} fontSize={"16px"}>{userName}</Typography>
            <Typography fontWeight={400} fontSize={"12px"}>
            {review}
            </Typography>
        </Stack>
    </Stack>
  )
}

export default ReviewCard