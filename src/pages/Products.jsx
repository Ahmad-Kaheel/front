import { Breadcrumbs, Link, Stack, Typography } from '@mui/material'
import React from 'react'

const Products = () => {
  return (
    <Stack>
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
    </Stack>
  )
}

export default Products