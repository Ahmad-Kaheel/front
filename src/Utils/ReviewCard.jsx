import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
const ReviewCard = ({userName,review,userImage}) => {
  return (
    <Stack flexDirection={"row"} alignItems={"center"} gap={"16px"} >
        <Box component={"img"} src={userImage} width="156px" height="156px"/>
        <Stack gap={'8px'}>
            <Typography fontWeight={600} fontSize={"16px"}>{userName}</Typography>
            <Typography fontWeight={400} fontSize={"16px"}>
            {review}
            </Typography>
        </Stack>
    </Stack>
  )
}

export default ReviewCard