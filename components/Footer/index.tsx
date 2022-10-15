import { Box, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Box sx={{ textAlign: 'center'}}>
        <Typography variant="body1" color="text.secondary" fontSize="15px">Have questions? Email us at <strong>help@darkqueen.com</strong> or visit our <strong>FAQs</strong>.</Typography>
        <Typography variant="body1" color="text.secondary" fontSize="15px">Copyright  &copy; ChurchofTiamat, all rights reserved. Thank you for subscribing to our newsletter</Typography>
    </Box>
  )
}

export default Footer