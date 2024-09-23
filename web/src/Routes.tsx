// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Route, Router, Set } from '@redwoodjs/router'

import BaseLayout from 'src/layouts/BaseLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={BaseLayout}>
        <Route path='/settings' page={SettingsPage} name='settings' />
        <Route path='/editor' page={EditorPage} name='editor' />
        <Route path='/signup' page={SignupPage} name='signup' />
        <Route path='/login' page={LoginPage} name='login' />
        <Route path='/' page={HomePage} name='home' />
        <Route path='/editor/{slug:String}' page={EditArticlePage} name='editArticle' />
        <Route path='/article/{slug:String}' page={ArticlePage} name='article' />
        <Route path='/profile/{username:String}' page={UserProfilePage} name='userProfile' />
        <Route path='/profile/{username:String}/favorites' page={UserFavoritesPage} name='userFavorites' />
        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes
