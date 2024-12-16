import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import offer1 from "../assets/images-and-icons/CategoryFilters/card.jpg";

import offer2 from "../assets/images-and-icons/CategoryFilters/card.jpg";
import offer3 from "../assets/images-and-icons/CategoryFilters/card.jpg";
import { useTranslation } from 'react-i18next'

const newOffers = [
    {
        title: "اشتراك طويل الأمد",
        img: offer1
    },
    {
        title: "البيع بالحملة",
        img: offer2
    },
    {
        title: "توصيل سريع جدا",
        img: offer3
    },
    {
        title: "البيع بالحملة",
        img: offer2
    },
]

const DiscoverNow = () => {
    const { t, i18n } = useTranslation("discover")

    return (
        <Stack gap={{ xs: "32px" }} sx={{ paddingY: { xs: "32px", sm: "48px", md: "64px" }, paddingX: { xs: "28px", sm: "32px", md: "128px",lg:"200px",xl:"20%" } }}>
            <Typography fontWeight={700} fontSize={{ xs: "17px", sm: "22px", md: "30px" }}>{t("discover")}</Typography>
            <Stack 
                direction={"row"} 
                gap={{ xs: "10px",md:"32px"}} 
                justifyContent={"space-between"}
                // alignItems={{ }}
            >
                {
                    newOffers.map((offer, index) => (
                        <Box 
                            key={index} 
                            sx={{ 
                                // width:"40%",
                                height: {xs:"120px",sm:"180px",md:"240px",lg:"272px"},
                                maxWidth:"272px",
                                borderRadius: {xs:"14px",sm:"16px"}, 
                                overflow: "hidden", 
                                position: "relative" 
                            }}
                        >
                            <Box component={"img"} src={offer.img} sx={{ width: "100%",objectFit:"cover", height: "100%" }} />
                            <Typography 
                                sx={{ 
                                    position: "absolute", 
                                    bottom: {xs:"35px",sm:"65px",md:"75px"} ,
                                    [i18n.language === "ar" ? "right" : "left"]: {xs:"5px",sm:"8px",md:"10px"}, 
                                    color: "colors.white0", 
                                    fontWeight: 600, 
                                    fontSize: { xs: "8px",sm:"15px",md:"19px" }, 
                                    zIndex: 11 
                                }}
                            >
                                {offer.title}
                            </Typography>
                            <Box 
                                sx={{ 
                                    position: "absolute", 
                                    bottom:{xs:"20px",sm:"35px"},
                                    [i18n.language === "ar" ? "right" : "left"]: {xs:"5px",sm:"8px",md:"10px"},
                                    padding: {xs:"1px"}, 
                                    zIndex: 11, 
                                    borderBottom: 1, 
                                    borderColor: "colors.red0", 
                                    cursor: "pointer" 
                                }}
                            >
                                <Typography sx={{ fontSize: { xs: "8px",sm:"15px",md:"19px" }, fontWeight: 500, color: "colors.red0" }}>
                                    {t("choice")}
                                </Typography>
                            </Box>
                            <Box sx={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", bgcolor: "rgba(0,0,0,0.4)", zIndex: 10 }} />
                        </Box>
                    ))
                }
            </Stack>
        </Stack>
    )
}

export default DiscoverNow
