import { routes } from '@redwoodjs/router'
import { render, screen } from '@redwoodjs/testing/web'

import Nav from './Nav'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Nav', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Nav />)
    }).not.toThrow()
  })

  it('has a link to the home page', () => {
    render(<Nav />)

    expect(screen.getByText('Conduit')).toHaveAttribute('href', routes.home())
  })

  describe('when the user is not logged in', () => {
    it('has a link to the login page', () => {
      render(<Nav />)

      expect(screen.getByText('Login')).toHaveAttribute('href', routes.login())
    })

    it('has a link to the signup page', () => {
      render(<Nav />)

      expect(screen.getByText('Sign Up')).toHaveAttribute('href', routes.signup())
    })

    it('has a link to the single article page', () => {
      const slug = 'abc'

      render(<Nav />)

      expect(screen.getByText('View Article abc')).toHaveAttribute('href', routes.article({ slug }))
    })
  })

  describe('when the user is logged in', () => {
    const user = {
      username: 'test'
    }

    it('has a link to the profile page', () => {
      render(<Nav user={user} />)

      expect(screen.getByText('Profile')).toHaveAttribute(
        'href',
        routes.userProfile({ username: user.username })
      )
    })

    it('has a link to the settings page', () => {
      render(<Nav user={user} />)

      expect(screen.getByText('Profile Settings')).toHaveAttribute('href', routes.settings())
    })

    it('has a link to the new article page', () => {
      render(<Nav user={user} />)

      expect(screen.getByText('New article')).toHaveAttribute('href', routes.editor())
    })

    it('has a button to logout', () => {
      render(<Nav user={user} />)

      expect(screen.getByRole('button', { name: 'Logout' })).toBeInTheDocument()
    })
  })
})
