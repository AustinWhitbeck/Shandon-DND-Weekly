import React from 'react'
import { Box, Typography } from '@mui/material';

const Header = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <Box sx={{ borderRadius: '100%', width: '80px', height: '80px', backgroundColor: 'secondary.main'}}/>
        <Typography variant="h3" component="h1" color="text.secondary">The Church of</Typography>
        <Typography variant="h3" component="h1" color="text.secondary">Tiamat</Typography>
        <Typography color="secondary.dark">MONTHLY NEWSLETTER</Typography>
    </Box>
  )
}

export default Header