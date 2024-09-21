# Specifications

Try to keep the code as clean and readable as possible. Also, try to write tests for the code you
write.

## Frontend Specifications

The site must be fully responsive and accessible.

### Layout

The layout is defined in the `src/layouts/MainLayout.js` file. It includes a header, a main content
area and a footer.

### Header

The header is defined in the `src/components/Header.js` file. It includes the logo, the navigation
links and the user menu.

### Unauthenticated user

If no user is logged in, then the header should include links to:

- the home page
- the login page
- the register page

the link of the active page should use the active css class.

### Authenticated user

If a user is logged in, then the header should include links to:

- the home page
- the new article page
- the settings page
- the profile page

the link of the active page should use the active css class.

### Pages

The pages are defined in the `src/pages` directory.

### Home page

The Home page includes up to three tabs:

- a default **Global Feed** tab
- an optional **tag name** tab, appears after clicking one of the popular tags
- an optional **Your Feed** tab, appears after logging in

The Global Feed tab should display articles from all users. The tag name tab should display articles
from all users with the tag. The Your Feed tab should display articles from the logged in user
follows.

Each article should include:

- a meta information block:
  - author avatar that should be a link to the author's profile page
  - publication date
  - a like icon with the count of likes
- the title of the article
- a short description of the article
- a read more link
- a list of tags

### Routing

- / -> Home page (Global Feed tab)
  - List of tags
  - List of articles pulled from either:
    - all articles
    - articles from a tag
    - articles from the logged in user follows
  - Pagination for the list of articles
- /login -> Login page
- /register -> Register page
- /settings -> Settings page
- /editor -> Create article page
- /editor/:slug -> Edit article page
- /article/:slug -> Article page
  - Delete article button (only visible to the author)
  - Render Markdown from database
  - Comments section at bottom of the page
    - Comment form (only visible to authenticated users)
    - Delete comment button (only visible to the author)
- /profile/:username -> Profile page
  - Show basic user info
- /profile/:username/favorites -> Profile favorites page
  - List of articles populated from author's created articles or favorited articles

## Backend Specifications

### Endpoint

Since RedwoodJS is a fullstack framework and uses GraphQL, the backend is defined as a GraphQL API.

### Authentication

The authentication is done using JSON Web Tokens. The token is sent in the Authorization header of
the requests.

### Registration

The registration is done using a mutation. The mutation expects a username, an email and a password.

### Login

The login is done using a mutation. The mutation expects an email and a password.

### Get current user

Authentication is required to retrieve the current user. The user is retrieved from the jwt present
in the session cookie.

### Update user

Authentication is required to update the user. The user is updated using a mutation. The mutation
accepts an email, a password, a bio and a image.

### Get Profile

Authentication is optional. The profile is retrieved using a query. The query expects a username.

### Follow user

Authentication is required. The user is followed using a mutation. The mutation expects a username.

### Unfollow user

Authentication is required. The user is unfollowed using a mutation. The mutation expects a
username.

### List articles

Authentication is optional. The articles are retrieved using a query. The query provides a tag, an
author username or a favorited by username to filter the articles by.

Query Parameters:

    #### Filter by tag

    The tag is provided as a query parameter. The tag is used to filter the articles by.

    #### Filter by author

    The author username is provided as a query parameter. The author username is used to filter the articles by.

    #### Favorited by

    The favorited by username is provided as a query parameter. The favorited by username is used to filter the articles by.

    #### Limit

    The limit is provided as a query parameter. The limit is used to limit the number of articles returned.

    #### Offset

    The offset is provided as a query parameter. The offset is used to skip a number of articles.

### Feed Articles

Authentication is required. The feed articles are retrieved using a query. The query accepts limit
and offset.

### Get Article

Authentication is optional. The article is retrieved using a query. The query expects an article
slug.

### Create Article

Authentication is required. The article is created using a mutation. The mutation expects a title, a
description, a body and an optional tagList.

### Update Article

Authentication is required. The article is updated using a mutation. The mutation accepts an article
slug, a title, a description, a body and an optional tagList. The slug is used to identify the
article to update and will be updated if the title is changed.

### Delete Article

Authentication is required. The article is deleted using a mutation. The mutation expects an article
slug.

### Add Comments to an article

Authentication is required. The comment is added using a mutation. The mutation expects an article
slug and a comment body.

### Get Comments from an article

Authentication is optional. The comments are retrieved using a query. The query expects an article
slug.

### Delete Comment

Authentication is required. The comment is deleted using a mutation. The mutation expects an article
slug and a comment id.

### Favorite Article

Authentication is required. The article is favorited using a mutation. The mutation expects an
article slug.

### Unfavorite Article

Authentication is required. The article is unfavorited using a mutation. The mutation expects an
article slug.

### Get Tags

Authentication is optional. The tags are retrieved using a query.
