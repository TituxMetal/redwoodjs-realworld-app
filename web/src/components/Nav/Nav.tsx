import { Link, routes } from '@redwoodjs/router'

interface NavProps {
  user?: {
    username: string
  }
}

const Nav = ({ user }: NavProps) => {
  return (
    <nav className='top-bar w-full bg-violet-900 px-5 text-violet-100'>
      <div className='container mx-auto flex w-full content-center items-center justify-between py-6'>
        <Link to={routes.home()} className='text-3xl font-bold'>
          Conduit
        </Link>
        <ul>
          <li>
            <Link to={routes.article({ slug: 'abc' })}>View Article abc</Link>
          </li>
          {user && (
            <>
              <li>
                <Link to={routes.userProfile({ username: user.username })}>Profile</Link>
              </li>
              <li>
                <Link to={routes.settings()} className='button'>
                  Profile Settings
                </Link>
              </li>
              <li>
                <Link to={routes.editor()}>New article</Link>
              </li>
              <li>
                <button type='button'>Logout</button>
              </li>
            </>
          )}
          {!user && (
            <>
              <li>
                <Link to={routes.login()} className='button'>
                  Login
                </Link>
              </li>
              <li>
                <Link to={routes.signup()}>Sign Up</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default Nav
