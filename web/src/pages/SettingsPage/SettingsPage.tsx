// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const SettingsPage = () => {
  return (
    <>
      <Metadata title='Settings' description='Settings page' />

      <h1>SettingsPage</h1>
      <p>
        Find me in <code>./web/src/pages/SettingsPage/SettingsPage.tsx</code>
      </p>
      {/*
          My default route is named `settings`, link to me with:
          `<Link to={routes.settings()}>Settings</Link>`
      */}
    </>
  )
}

export default SettingsPage