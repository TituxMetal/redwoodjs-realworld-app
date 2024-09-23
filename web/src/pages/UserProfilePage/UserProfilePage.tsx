// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const UserProfilePage = ({ username }) => {
  return (
    <>
      <Metadata title={`${username}'s Profile`} description='UserProfile page' />

      <h1>{username}&apos;s Profile</h1>
      <p>
        Find me in <code>./web/src/pages/UserProfilePage/UserProfilePage.tsx</code>
      </p>
      <p>Your username is: {username}</p>
      {/*
          My default route is named `userProfile`, link to me with:
          `<Link to={routes.userProfile({ username })}>UserProfile</Link>`
      */}
    </>
  )
}

export default UserProfilePage
