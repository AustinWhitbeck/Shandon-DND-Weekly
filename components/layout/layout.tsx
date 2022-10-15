import Header from '../Header'
import Footer from '../Footer'
import { Box } from '@mui/material'

export default function Layout({ children }: any) {
  return (
    <Box display="flex" flexDirection="column" justifyContent="space-between" height="100vh" padding="20px">
      <Header />
      <main>{children}</main>
      <Footer />
    </Box>
  )
}