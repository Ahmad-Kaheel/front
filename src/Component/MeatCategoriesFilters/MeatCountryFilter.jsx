import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Aus from "../../assets/images and icons/flags/Australia.svg"
import Brazil from "../../assets/images and icons/flags/Brazil.svg"
import Ecuador from "../../assets/images and icons/flags/Ecuador.svg"
import India from "../../assets/images and icons/flags/India.svg"
import Uruguay from "../../assets/images and icons/flags/Uruguay.svg"
import { useTranslation } from 'react-i18next'
import HeadSection from '../../Utils/HeadSection'
const MeatCountryFilter = () => {
    const { t, i18n } = useTranslation('country');

  const data = [
    {
        flag:Aus,
        name:"Australia"
    },
    {
        flag:Brazil,
        name:"Brazil"
    },
    {
        flag:Ecuador,
        name:"Ecuador"
    },
    {
        flag:India,
        name:"India"
    },
    {
        flag:Uruguay,
        name:"Uruguay"
    },
  ]
  return (
    <Stack gap={"65px"}  sx={{ paddingY: { xs: "32px", sm: "48px", md: "64px" }, paddingX: { xs: "28px", sm: "32px", md: "70px" } }}>
        <HeadSection name={t('name')} more={t('more')} /> 
        <Stack flexDirection={"row"} sx={{gap:{xs:"5px",md:"64px",lg:"128px"},cursor:"pointer"}} justifyContent={"center"} alignItems={"center"}>
            {
                data.map((country,index)=>{
                    return(
                        <Stack alignItems={"center"} gap={"10px"}>
                            <Box component={"img"} src={country.flag} alt={country.name} sx={{width:{xs:"60px",sm:"70px",md:"100px",lg:"128px"} ,height:{xs:"60px",sm:"70px",md:"100px",lg:"128px"}}}/>
                            <Typography>{country.name}</Typography>
                        </Stack>
                    )
                })
            }
        </Stack>
    </Stack>
  )
}

export default MeatCountryFilter