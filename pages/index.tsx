import type { NextPage } from 'next'
import {  Box, Typography } from '@mui/material';
import ArticleCard from '../components/ArticleCard';

export interface Article {
  body: string;
  CTA: string;
  readTime: string;
  title: string;
}

const Articles: Article[] = [
  {
    body: "A look back at an exclusive interview with Her Dark Majesty from 1492 DR",
    CTA: "Read Now",
    readTime: "4",
    title: "Today In History - Interview",
  },
  {
    body: "A look back at an exclusive interview with Her Dark Majesty from 1492 DR",
    CTA: "Read Now",
    readTime: "4",
    title: "Today In History - Interview",
  },
  {
    body: "A look back at an exclusive interview with Her Dark Majesty from 1492 DR",
    CTA: "Read Now",
    readTime: "4",
    title: "Today In History - Interview",
  },
]


const Home: NextPage = () => {
  return (
    <>
    <Typography>
      Test with MUI
    </Typography>
    <Box display="flex" justifyContent="center" flexWrap="wrap">
      {Articles.map((article) => {
        return(
              <ArticleCard body={article.body} CTA={article.CTA} readTime={article.readTime} title={article.title} />
        )
      })}
    </Box>
    </>
  )
}

export default Home
