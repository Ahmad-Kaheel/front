import { Stack, Typography ,Box, colors, FormControl, Select, MenuItem} from '@mui/material'
import React, { useState } from 'react'
import facebook from "../assets/images-and-icons/social/Facebook.svg"
import instagram from "../assets/images-and-icons/social/Instagram.svg"
import linkedin from "../assets/images-and-icons/social/Linkedin.svg"
import snap from "../assets/images-and-icons/social/Snapchat.svg"
import tiktok from "../assets/images-and-icons/social/Tiktok.svg"
import whatsapp from "../assets/images-and-icons/social/Whatsapp.svg"
import email from "../assets/images-and-icons/social/Email.svg"

import x from "../assets/images-and-icons/social/X.svg"
import youtube from "../assets/images-and-icons/social/Youtube.svg"
import googlePlay from "../assets/images-and-icons/application/googlePlay.svg"
import appleStore from "../assets/images-and-icons/application/AppStore.svg"
import qr from "../assets/images-and-icons/application/Qr.svg"

import logo from "../assets/images-and-icons/nav2/logo.png"
import p1 from "../assets/images-and-icons/pay/pay1.svg"
import p2 from "../assets/images-and-icons/pay/pay2.svg"
import p3 from "../assets/images-and-icons/pay/pay3.svg"
import p4 from "../assets/images-and-icons/pay/pay4.svg"
import p5 from "../assets/images-and-icons/pay/pay5.svg"
import p6 from "../assets/images-and-icons/pay/pay6.svg"
import p7 from "../assets/images-and-icons/pay/pay7.svg"
import p8 from "../assets/images-and-icons/pay/pay8.png"
import p9 from "../assets/images-and-icons/pay/pay9.svg"
import p10 from "../assets/images-and-icons/pay/pay10.svg"

import { useTranslation } from 'react-i18next'
const social =[
    {img:facebook},{img:instagram},{img:linkedin},{img:email},{img:snap},{img:tiktok},{img:whatsapp},{img:x},{img:youtube}
]
const Footer = () => {
    const { t, i18n } = useTranslation('footer');
    const [locat, setLocat] = useState('Ryadh');
    const language = i18n.language

    const handleChange = (event) => {
        setLocat(event.target.value);
    };

    const handleToggleLanguage = () => {
        i18n.changeLanguage(language === 'ar' ? 'en' : 'ar');
    };

  return (
    <Stack sx={{bgcolor:"colors.black0", paddingTop: { xs: "32px", sm: "48px", md: "64px" }, paddingX: { xs: "28px", sm: "32px", md: "128px",lg:"200px" ,xl:"20%"} }}>
        <Stack flexDirection={{xs:"column",md:"row"}} gap={"20px"} justifyContent={{xs:"center",md:"space-between"}} alignItems={{xs:"center",md:"flex-end"}} sx={{borderBottom:1,paddingY:"64px",borderWidth:"2px",borderColor:"colors.white0"}}>
            <Stack gap={"63px"}>
                <Box component="img" src={logo} sx={{width:"94px",height:"100px"}}/>
                <Stack gap={"32px"} flexDirection={"row"} color={"colors.white0"}>
                    <Typography fontWeight={400} fontSize={"16px"}>{t("commercial")}</Typography>
                    <Typography  fontWeight={400} fontSize={"16px"}>0102011</Typography>
                </Stack>
                <Stack gap={"32px"}>
                    <Typography  fontWeight={400} fontSize={"16px"} color={"colors.white0"}>{t("social")}</Typography>
                    <Stack flexDirection={"row"} gap={"16px"} sx={{flexWrap:{xs:"wrap",md:"nowrap"}}}> 
                        {
                            social.map((icon)=>{
                                return(
                                    <Box component="img" src={icon.img} sx={{width:"24px",height:"24px",cursor:"pointer"}}/>
                                )
                            })
                        }
                    </Stack>
                </Stack>
                <Stack gap={"32px"}>
                    <Typography  fontWeight={400} fontSize={"16px"} color='colors.white0'>{t("download")}</Typography>
                    <Stack direction={"row"} alignItems={"center"} gap={"24px"}>
                        <Box component={"img"} src={qr}/>

                        <Stack gap={"32px"} flexDirection={"column"}>
                            <Stack gap={"8px"} flexDirection={"row"} sx={{padding:"8px 16px",cursor:"pointer", border:1,borderstyle:"solid",borderWidth:"1px",borderRadius:"4px",borderColor:"colors.white0"}}>
                                <Typography  fontWeight={400} fontSize={"16px"} color='colors.white0'>App store</Typography>
                                <Box component="img" src={appleStore} />
                            </Stack>
                            <Stack gap={"8px"} flexDirection={"row"} sx={{padding:"8px 16px",cursor:"pointer", border:1,borderstyle:"solid",borderWidth:"1px",borderRadius:"4px",borderColor:"colors.white0"}}>

                            <Typography  fontWeight={400} fontSize={"16px"} color='colors.white0'>Google play</Typography>
                                <Box component="img" src={googlePlay} />
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
            <Stack gap={"145px"} alignItems={"flex-end"}> 
                <Stack sx={{gap:{xs:"20px",sm:"25px",md:"35px",lg:"64px"}}} flexDirection={"row"}>
                    <Stack gap={"32px"}>
                        <Typography color='colors.gray0' fontWeight={400} fontSize={"16px"} >{t("discover")} </Typography>
                        <Typography color='colors.white0' fontWeight={400} fontSize={"16px"} sx={{cursor:"pointer"}}>{t("partner")}</Typography>
                        <Typography color='colors.white0' fontWeight={400} fontSize={"16px"} sx={{cursor:"pointer"}}> {t("political")} </Typography>
                    </Stack>
                   
                    <Stack gap={"32px"}>
                        <Typography color='colors.gray0' fontWeight={400} fontSize={"16px"}>{t("know")}</Typography>
                        <Typography color='colors.white0' fontWeight={400} fontSize={"16px"} sx={{cursor:"pointer"}}>{t("who")}</Typography>
                        <Typography color='colors.white0' fontWeight={400} fontSize={"16px"} sx={{cursor:"pointer"}}> {t("policy")} </Typography>
                    </Stack>

                    <Stack gap={"32px"}>
                        <Typography color='colors.gray0' fontWeight={400} fontSize={"16px"}>{t("customer")}</Typography>
                        <Typography color='colors.white0' fontWeight={400} fontSize={"16px"} sx={{cursor:"pointer"}}>{t("question")}</Typography>
                        <Typography color='colors.white0' fontWeight={400} fontSize={"16px"} sx={{cursor:"pointer"}}>{ t("condition") }</Typography>
                    </Stack>
                </Stack>
                <Stack direction={"row"} alignItems={"center"} gap={{ xs: "16px", md: "32px" }} sx={{ mt: { xs: "16px", md: 0 } }}>
                    <FormControl  sx={{ width: "167px", height: "auto" }}>
                        <Select
                            value={locat}
                            onChange={handleChange}
                            displayEmpty
                            
                            sx={{
                                height: "25px",
                                border: "2px solid",
                                borderColor: "colors.white0",
                                borderRadius: "8px",
                                fontSize: "14px",
                                color: "colors.white0",
                                "& .MuiOutlinedInput-notchedOutline": {
                                    border: "none",
                                },
                                "& .MuiSelect-icon": {
                                    color:"white",
                                    right: i18n.language === 'en' ? '10px' : 'unset', 
                                    left: i18n.language === 'ar' ? '10px' : 'unset', 
                                },
                            }}
                        >
                            <MenuItem value={"Ryadh"}>{t('select1')}</MenuItem>
                            <MenuItem value={"jaddah"}>{t('select2')}</MenuItem>
                            <MenuItem value={"khobar"}>{t('select3')}</MenuItem>
                        </Select>
                    </FormControl>

                    <Box 
                        onClick={handleToggleLanguage}
                        sx={{ 
                            cursor: "pointer", 
                            display: "flex", 
                            alignItems: "center", 
                            justifyContent: "center", 
                            width: "61px", 
                            height: "25px", 
                            fontSize: "14px", 
                            border: "1px", 
                            borderColor: "colors.white0", 
                            borderStyle: "solid", 
                            borderRadius: "8px",
                            color:"colors.white0"
                             
                        }}
                    >
                        {i18n.language === 'ar' ? 'English' : 'العربية'}
                    </Box>
                </Stack>
            </Stack>
        </Stack>
        <Stack flexDirection={{xs:"column",md:"row"}} gap={"20px"} justifyContent={"space-between"} alignItems={"center"} sx={{paddingY:"64px"}}>
            <Typography fontWeight={400} fontSize={"14px"} color={"colors.white0"}> 
            {t("privacy")}
            </Typography>
            <Stack flexDirection={"row"} gap={"16px"}>
                <Stack flexDirection={"row"} alignItems={"center"} gap="8px"> 
                    <Box sx={{width:"4px",height:"4px",bgcolor:"colors.white0",borderRadius:"50%"}}/>
                    <Typography fontWeight={400} fontSize={"14px"} color={"colors.white0"}>{t("condition")}</Typography>
                </Stack>
                <Stack flexDirection={"row"} alignItems={"center"} gap="8px"> 
                    <Box sx={{width:"4px",height:"4px",bgcolor:"colors.white0",borderRadius:"50%"}}/>
                    <Typography fontWeight={400} fontSize={"14px"} color={"colors.white0"}>{t("policy")}</Typography>
                </Stack>
            </Stack>
            <Stack gap="8px">
                <Stack flexDirection={"row"} gap={"8px"}>
                    <Box component={"img"} src={p1} />
                    <Box component={"img"} src={p2} />
                    <Box component={"img"} src={p3} />
                    <Box component={"img"} src={p4} />
                    <Box component={"img"} src={p5} />
                </Stack>
                <Stack flexDirection={"row"} gap={"8px"}>
                    <Box component={"img"} src={p6} />
                    <Box component={"img"} src={p7} />
                    <Box component={"img"} src={p8} />
                    <Box component={"img"} src={p9} />
                    <Box component={"img"} src={p10} />
                </Stack>
            </Stack>
        </Stack>
    </Stack>                                                                                                                                      
  )
}

export default Footer