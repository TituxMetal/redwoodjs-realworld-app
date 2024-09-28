import { render } from '@redwoodjs/testing/web'

import Comment from './Comment'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Comment', () => {
  const mockedComment = { text: 'Hello World', username: 'Jane Doe', createdAt: '2021-01-01' }
  it('renders successfully', () => {
    expect(() => {
      render(<Comment comment={mockedComment} />)
    }).not.toThrow()
  })

  it('renders the comment text', () => {
    const { getByText } = render(<Comment comment={mockedComment} />)

    expect(getByText(mockedComment.text)).toBeInTheDocument()
  })

  it('renders the username', () => {
    const { getByText } = render(<Comment comment={mockedComment} />)

    expect(getByText(mockedComment.username)).toBeInTheDocument()
  })

  it('renders the createdAt date', () => {
    const { getByText } = render(<Comment comment={mockedComment} />)

    expect(getByText(mockedComment.createdAt)).toBeInTheDocument()
  })
})
