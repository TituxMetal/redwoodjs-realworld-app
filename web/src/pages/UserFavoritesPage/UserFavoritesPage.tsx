// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const UserFavoritesPage = ({ username }) => {
  return (
    <>
      <Metadata title={`${username}'s Favorites Articles`} description='UserFavorites page' />

      <h1>{username}&apos;s Favorites Articles</h1>
      <p>Your username is: {username}</p>
      {/*
          My default route is named `userFavorites`, link to me with:
          `<Link to={routes.userFavorites({ username })}>UserFavorites</Link>`
      */}
    </>
  )
}

export default UserFavoritesPage
