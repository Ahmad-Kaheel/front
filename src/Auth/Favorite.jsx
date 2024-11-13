import { Box, Grid, Grid2 } from '@mui/material'
import React from 'react'
import ProductCard from '../Utils/ProductCard'
import img1 from "../assets/images and icons/CategoryFilters/cooled.png"
const Favorite = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid2 container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid2 item xs={6}>
          <ProductCard image={img1} name={"لحم مفروم"} price={"1000"} />
        </Grid2>
        <Grid2 item xs={6}>
            <ProductCard image={img1} name={"لحم مفروم"} price={"1000"} />
        </Grid2>
        <Grid2 item xs={6}>
            <ProductCard image={img1} name={"لحم مفروم"} price={"1000"} />
        </Grid2>
        <Grid2 item xs={6}>
            <ProductCard image={img1} name={"لحم مفروم"} price={"1000"} />
        </Grid2>
      </Grid2>
    </Box>
  )
}

export default Favorite