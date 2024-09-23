import { render } from '@redwoodjs/testing/web'

import EditArticlePage from './EditArticlePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('EditArticlePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EditArticlePage />)
    }).not.toThrow()
  })
})
