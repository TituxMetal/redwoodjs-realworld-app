import { fireEvent, render } from '@redwoodjs/testing/web'

import Tags from './Tags'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Tags', () => {
  const tags = ['JavaScript', 'TypeScript']

  it('renders successfully', () => {
    expect(() => {
      render(<Tags tags={[]} onAddTagTab={() => {}} />)
    }).not.toThrow()
  })

  it('renders the correct number of tags', () => {
    const { getByText } = render(<Tags tags={tags} onAddTagTab={() => {}} />)

    tags.forEach(tag => {
      expect(getByText(tag)).toBeInTheDocument()
    })
  })

  it('calls onAddTagTab when a tag is clicked', () => {
    const onAddTagTabMock = jest.fn()

    const { getByText } = render(<Tags tags={tags} onAddTagTab={onAddTagTabMock} />)

    fireEvent.click(getByText('JavaScript'))

    expect(onAddTagTabMock).toHaveBeenCalledWith('JavaScript')
  })

  it('calls onAddTagTab when a tag is activated with Enter key', () => {
    const onAddTagTabMock = jest.fn()

    const { getByText } = render(<Tags tags={tags} onAddTagTab={onAddTagTabMock} />)

    fireEvent.keyDown(getByText('JavaScript'), { key: 'Enter', code: 'Enter' })

    expect(onAddTagTabMock).toHaveBeenCalledWith('JavaScript')
  })

  it('calls onAddTagTab when a tag is activated with Space key', () => {
    const onAddTagTabMock = jest.fn()

    const { getByText } = render(<Tags tags={tags} onAddTagTab={onAddTagTabMock} />)

    fireEvent.keyDown(getByText('JavaScript'), { key: ' ', code: 'Space' })

    expect(onAddTagTabMock).toHaveBeenCalledWith('JavaScript')
  })
})
