import React from 'react'
import one from "../../assets/images and icons/CategoryFilters/Users/User1.svg"
import two from "../../assets/images and icons/CategoryFilters/Users/User2.svg"
import three from "../../assets/images and icons/CategoryFilters/Users/User3.svg"
import four from "../../assets/images and icons/CategoryFilters/Users/User4.svg"
import five from "../../assets/images and icons/CategoryFilters/Users/User5.svg"
import { Box, Stack,Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import HeadSection from '../../Utils/HeadSection'


const PersonNumberFilter = () => {
    const { t, i18n } = useTranslation('person');
    const data = [{
        image:one,
        name:"شخص واجد"
    },
    {
        image:two,
        name:"شخصان"
    },
    {
        image:three,
        name:"ثلاثة أشخاص"
    },
    {
        image:four,
        name:"أربع أشخاص"
    },
    {
        image:five,
        name:"خمس أشخاص"
    },
]
  return (
    <Stack gap={"30px"}   sx={{ paddingY: { xs: "32px", sm: "48px", md: "64px" }, paddingX: { xs: "28px", sm: "32px", md: "70px" } }} >
        <HeadSection name={t("name")} more={t('more')} />
        <Stack flexDirection={"row"} sx={{gap:{xs:"10px",md:"64px",lg:"128px"}}} justifyContent={"center"} >
            {
                data.map((person,index)=>{
                    return(
                        <Stack alignItems={"center"} justifyContent={"space-between"} gap={"10px"} sx={{cursor:"pointer"}}>
                            <Box component={"img"} src={person.image} alt={person.name} sx={{width:{xs:"30px",sm:"40px",md:"50px",lg:"60px"},height:{xs:"35px",sm:"45px",md:"55px",lg:"68px"}}}/>
                            <Typography>{person.name}</Typography>
                        </Stack>
                    )
                })
            }
        </Stack>
    </Stack>
  )
}

export default PersonNumberFilter