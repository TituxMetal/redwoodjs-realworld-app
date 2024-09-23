import Footer from 'src/components/Footer/Footer'
import Nav from 'src/components/Nav/Nav'

type BaseLayoutProps = {
  children?: React.ReactNode
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <>
      <section className='layout'>
        <Nav />
        <main className='flex flex-grow flex-col items-center'>{children}</main>
        <Footer />
      </section>
    </>
  )
}

export default BaseLayout
