import { Metadata } from '@redwoodjs/web'

const ArticlePage = ({ slug }) => {
  return (
    <>
      <Metadata title={`${slug} Article`} description='Article page' />

      <section className='flex h-32 w-full flex-col items-center justify-center space-y-4 bg-green-900 text-center text-zinc-300'>
        <h1 className=' text-4xl font-bold uppercase'>Article Title</h1>
      </section>
      <section className='my-4 flex w-full max-w-screen-md flex-col space-y-4 text-xl'>
        <p>Article Details Page</p>
      </section>
    </>
  )
}

export default ArticlePage
