// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const EditorPage = () => {
  return (
    <>
      <Metadata title='Editor' description='Editor page' />

      <h1>EditorPage</h1>
      <p>
        Find me in <code>./web/src/pages/EditorPage/EditorPage.tsx</code>
      </p>
      {/*
          My default route is named `editor`, link to me with:
          `<Link to={routes.editor()}>Editor</Link>`
      */}
    </>
  )
}

export default EditorPage
