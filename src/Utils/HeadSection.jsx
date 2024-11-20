import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next';

const HeadSection = ({name,more}) => {
    const { t, i18n } = useTranslation('country');

  return (
    <Stack flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"}>
            <Typography fontWeight={700} sx={{fontSize:{xs:"15px",sm:"22px",md:"26px"}}} color={"colors.black0"}> {name} </Typography>
            <Stack gap={"16px"}>
                <Typography fontWeight={500} fontSize={"16px"} color={"colors.red0"}>{more}</Typography>
                <Box width={"50%"} height={"2px"} bgcolor={"colors.red0"} sx={{transform: i18n.language === "ar" ? 'translateX(-50%)' : 'translateX(50%)'}}/>
            </Stack>
    </Stack>
  )
}

export default HeadSection