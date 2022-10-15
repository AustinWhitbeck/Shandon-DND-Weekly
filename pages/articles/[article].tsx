import { Box } from '@mui/material'
import { useRouter } from 'next/router'
import ArticleCard from '../../components/ArticleCard'
import { Article, Articles } from '../index'

const Article = () => {
  const router = useRouter()
  const { article } = router.query

  const thisArticle: Article = Articles.find((a) => a.id == parseInt(article as string)) as Article;


  return (
    <Box display="flex" justifyContent="center">
      <ArticleCard id={thisArticle.id} body={thisArticle.body} CTA={thisArticle.CTA} readTime={thisArticle.readTime} title={thisArticle.title}/>
    </Box>
  )
}

export default Article