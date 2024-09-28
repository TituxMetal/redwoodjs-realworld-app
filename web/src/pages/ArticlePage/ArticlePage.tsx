import ReactMarkdown from 'react-markdown'

import { Metadata } from '@redwoodjs/web'

import Comment from 'src/components/Comment/Comment'
import Tags from 'src/components/Tags/Tags'

const ArticlePage = ({ slug }) => {
  console.log(slug)
  const post = {
    title: 'Understanding TypeScript Generics',
    slug,
    description: 'An in-depth look at generics in TypeScript and how they can improve your code.',
    content: `Generics provide a way to make components work with any data type and not restrict to one data type. This allows for greater flexibility and reusability of components.

## Benefits of Using Generics

- **Type Safety**: Ensures that types are consistent across your code.
- **Reusability**: Write components that can work with any data type.
- **Maintainability**: Easier to manage and update code.

## Example

\`\`\`typescript
function identity<T>(arg: T): T {
  return arg
}

const result = identity<string>("Hello, TypeScript!")
\`\`\`

In the above example, the \`identity\` function uses a generic type \`T\` to allow the function to accept any type of argument and return the same type.

## Conclusion

Generics are a powerful feature in TypeScript that enhance the flexibility and robustness of your code. By leveraging generics, you can create highly reusable and type-safe components.
    `,
    createdAt: '2023-10-05',
    authorUsername: 'John Doe',
    tags: ['TypeScript', 'Generics', 'Programming']
  }

  // Dummy comments data
  const comments = [
    {
      username: 'Alice',
      text: 'Great article! I learned a lot about generics.',
      createdAt: '2023-10-06'
    },
    {
      username: 'Bob',
      text: 'Thanks for the clear explanations and examples!',
      createdAt: '2023-10-07'
    },
    {
      username: 'Charlie',
      text: 'I appreciate the depth of this article. Very helpful!',
      createdAt: '2023-10-08'
    }
  ]

  return (
    <>
      <Metadata title={post.title} description={post.description} />

      <section className='flex w-full flex-col bg-zinc-800 p-6 text-zinc-100'>
        <div className='mx-auto flex w-full max-w-screen-xl flex-col space-y-4'>
          <h1 className='text-4xl font-bold'>{post.title}</h1>
          <div className='flex flex-col'>
            <span className='text-lg font-semibold text-zinc-100'>{post.authorUsername}</span>
            <span className='text-zinc-400'>{post.createdAt}</span>
          </div>
          <p>{post.description}</p>
        </div>
      </section>
      <section className='mx-auto flex w-full max-w-screen-xl flex-col text-xl'>
        <article className='prose prose-zinc dark:prose-invert max-w-full p-6 xl:px-0'>
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>

        <section className='my-4'>
          <Tags tags={post.tags} onAddTagTab={() => {}} />
        </section>

        <section className='my-6 space-y-4'>
          <h2 className='pb-4 text-2xl font-bold leading-snug'>Comments</h2>
          {comments.map(comment => (
            <Comment key={comment.createdAt} comment={comment} />
          ))}
        </section>
      </section>
    </>
  )
}

export default ArticlePage
