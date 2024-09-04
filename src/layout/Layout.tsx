import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className='py-16'>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
