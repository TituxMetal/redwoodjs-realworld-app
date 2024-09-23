import { Metadata } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <Metadata title='Home' description='Home page' />

      {/* Main Content */}

      <section className='flex h-32 w-full flex-col items-center justify-center space-y-4 bg-emerald-600 text-center text-emerald-100'>
        <h1 className=' text-4xl font-bold uppercase'>conduit</h1>
        <p className='text-2xl'>A place to share your knowledge.</p>
      </section>
      <section className='my-4 flex w-full max-w-screen-md flex-col space-y-4 text-xl'>
        <p>Home Page</p>
      </section>
    </>
  )
}

export default HomePage
