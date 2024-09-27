interface TagsProps {
  tags: string[]
  onAddTagTab: (tag: string) => void
}

const Tags: React.FC<TagsProps> = ({ tags, onAddTagTab }) => {
  return (
    <div className='mt-4'>
      {tags.map((tag, index) => (
        <span
          key={index}
          className='my-1 mr-2 inline-block rounded-lg bg-zinc-600 px-3 py-1 text-sm text-zinc-200'
          onClick={() => onAddTagTab(tag)}
          role='button'
          tabIndex={0}
          onKeyDown={e => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              onAddTagTab(tag)
            }
          }}
        >
          {tag}
        </span>
      ))}
    </div>
  )
}

export default Tags
