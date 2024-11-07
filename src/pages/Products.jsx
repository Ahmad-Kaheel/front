import { Box, Breadcrumbs, Link, Stack, Typography } from '@mui/material'
import React from 'react'
import cat1 from "../assets/images and icons/hero/slide2.jpg"
const categories = [
    {img:cat1,name:"لحوم"},
    {img:cat1,name:"دجاج"},
    {img:cat1,name:"بهارات وتوابل"},
    {img:cat1,name:"خضار وفواكه"},
    {img:cat1,name:"أصناف أخرى"},

]
const Products = () => {
  return (
    <Stack gap={"64px"} sx={{width:"70%",marginX:"auto",paddingY:"128px"}}>
          <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                لحوم
                </Link>
                <Link
                underline="hover"
                color="inherit"
                href="/m"
                >
                لحوم جمل
                </Link>
                <Typography sx={{ color: 'text.primary' }}>لحم مفروم</Typography>
            </Breadcrumbs>
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                لحم السهول
                </Link>
                
                <Typography sx={{ color: 'text.primary' }}> 122  منتج</Typography>
            </Breadcrumbs>
            <Stack direction={"row"} gap={"32px"}>
                {
                    categories.map((cat)=>{
                        return(
                            <Stack direction={"row"} alignItems={"center"} sx={{padding:"16px",borderRadius:"16px",bgcolor:"white0",boxShadow:"0px 2px 25px 1px #28282814"}} gap={"16px"} >
                                <Box component={"img"} src={cat.img} sx={{width:"48px",height:"48px"}} />
                                <Typography >{cat.name}</Typography>
                            </Stack>
                        )
                    })
                }
            </Stack>
    </Stack>
  )
}

export default Products