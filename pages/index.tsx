import type { NextPage } from 'next'
import {  Box, Typography } from '@mui/material';
import ArticleCard from '../components/ArticleCard';

export interface Article {
  id: number;
  body: string;
  CTA: string;
  readTime: string;
  title: string;
}

export const Articles: Article[] = [
  {
    id: 1,
    body: "A look back at an exclusive interview with Her Dark Majesty from 1492 DR",
    CTA: "Read Now",
    readTime: "4",
    title: "Today In History - Interview",
  },
  {
    id: 2,
    body: "A look back at an exclusive interview with Her Dark Majesty from 1492 DR",
    CTA: "Start Listening",
    readTime: "2",
    title: "10 Podcasts That Every Wyrmlaird Should Add to Their Listening Queue",
  },
  {
    id: 3,
    body: "Whether you’re already deep into your journey of authentic worship, or just getting started, these podcasts are a must-have in your daily hustle.",
    CTA: "Learn More",
    readTime: "11",
    title: "The Rite of Respect, Do’s and Don’ts",
  },
]


const Home: NextPage = () => {
  return (
    <>
    <Box display="flex" justifyContent="center" flexWrap="wrap">
      {Articles.map((article) => {
        return(
              <ArticleCard id={article.id} body={article.body} CTA={article.CTA} readTime={article.readTime} title={article.title} />
        )
      })}
    </Box>
    </>
  )
}

export default Home
