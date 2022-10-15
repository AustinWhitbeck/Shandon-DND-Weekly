import { Box, Button, Typography } from "@mui/material"
import Link from "next/link"
import { Article } from "../../pages"

interface Props {
  body: string;
  CTA: string;
  readTime: string;
  title: string;
}


const ArticleCard = ({body, CTA, readTime, title}: Props) => {
  return (
    <Box sx={{ margin: '0 0 40px 0'}}>
      <Box  sx={{ padding: '10px', borderTopLeftRadius: '5px', borderTopRightRadius: '5px', width: '400px', height: '100px', backgroundColor: 'secondary.main'}}>
      </Box>
      <Box  sx={{ padding: '20px', borderBottomLeftRadius: '5px', borderBottomRightRadius: '5px', width: '400px',  backgroundColor: 'primary.main'}}>
        <Typography color="text.secondary" variant="body1" fontSize="13px">{readTime} Minute Read</Typography>
        <Typography color="text.secondary" fontWeight="350" fontSize="26px" marginBottom="10px">{title} </Typography>
        <Typography color="text.secondary" fontWeight="700" fontSize="15px" marginBottom="20px">{body}</Typography>
        <Button sx={{ color: 'text.secondary', fontWeight: '700', fontSize: '15px', padding: '0'}}>{CTA}</Button>
      </Box>
    </Box>

  )
}

export default ArticleCard