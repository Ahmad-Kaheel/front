import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import offer1 from "../assets/images-and-icons/CategoryFilters/img1.jpg";

import offer2 from "../assets/images-and-icons/CategoryFilters/img1.jpg";
import offer3 from "../assets/images-and-icons/CategoryFilters/img1.jpg";
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
    }
]

const DiscoverNow = () => {
    const { t, i18n } = useTranslation("discover")

    return (
        <Stack gap={{ xs: "32px" }} sx={{ paddingY: { xs: "32px", sm: "48px", md: "64px" }, paddingX: { xs: "28px", sm: "32px", md: "128px",lg:"200px",xl:"256px" } }}>
            <Typography fontWeight={700} fontSize={{ xs: "17px", sm: "22px", md: "30px" }}>{t("discover")}</Typography>
            <Stack 
                direction={{ xs: "column", sm: "row" }} 
                gap={{ xs: "32px"}} 
                justifyContent={"space-between"}
                alignItems={{ xs: "center", md: "flex-start" }}
            >
                {
                    newOffers.map((offer, index) => (
                        <Box 
                            key={index} 
                            sx={{ 
                                width:{xs:"100%",md:"40%"},
                                height: "400px",
                                borderRadius: "16px", 
                                overflow: "hidden", 
                                position: "relative" 
                            }}
                        >
                            <Box component={"img"} src={offer.img} sx={{ width: "100%", height: "100%" }} />
                            <Typography 
                                sx={{ 
                                    position: "absolute", 
                                    bottom:  "75px" ,
                                    [i18n.language === "ar" ? "right" : "left"]: "32px", 
                                    color: "colors.white0", 
                                    fontWeight: 700, 
                                    fontSize: { xs: "16px", sm: "18px", md: "20px",lg:"24px" }, 
                                    zIndex: 11 
                                }}
                            >
                                {offer.title}
                            </Typography>
                            <Box 
                                sx={{ 
                                    position: "absolute", 
                                    bottom:"33px",
                                    [i18n.language === "ar" ? "right" : "left"]: "32px", 
                                    padding: "6px", 
                                    zIndex: 11, 
                                    borderBottom: 1, 
                                    borderColor: "colors.white0", 
                                    cursor: "pointer" 
                                }}
                            >
                                <Typography sx={{ fontSize: { xs: "10px", sm: "12px" }, fontWeight: 500, color: "colors.white0" }}>
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
