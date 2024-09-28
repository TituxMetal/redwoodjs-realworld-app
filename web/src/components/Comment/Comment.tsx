interface CommentProps {
  comment: {
    text: string
    username: string
    createdAt: string
  }
}

const Comment = ({ comment }: CommentProps) => (
  <div className='rounded-b-md rounded-t-sm border border-zinc-500'>
    <p className='px-6 py-4 text-zinc-300'>{comment.text}</p>
    <div className='flex items-center space-x-4 rounded-b-md bg-zinc-800 px-6 py-4 font-semibold'>
      <span>{comment.username}</span>
      <span className='text-sm text-zinc-400'>{comment.createdAt}</span>
    </div>
  </div>
)

export default Comment
