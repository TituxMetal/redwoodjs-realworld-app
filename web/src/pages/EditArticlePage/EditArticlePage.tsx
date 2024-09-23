// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const EditArticlePage = ({ slug }) => {
  return (
    <>
      <Metadata title={`Edit ${slug} Article`} description='EditArticle page' />

      <h1>Edit {slug} Article</h1>
      <p>
        Find me in <code>./web/src/pages/EditArticlePage/EditArticlePage.tsx</code>
      </p>
      {/*
          My default route is named `editArticle`, link to me with:
          `<Link to={routes.editArticle()}>EditArticle</Link>`
      */}
    </>
  )
}

export default EditArticlePage
