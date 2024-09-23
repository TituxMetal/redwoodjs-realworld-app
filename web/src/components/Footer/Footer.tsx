import { Link } from '@redwoodjs/router'

const Footer = () => {
  return (
    <footer className='w-full bg-violet-900 py-5 text-center text-violet-100'>
      Copyright &copy; 2024. All Rights Reserved.
      <br />
      <Link to='#'>Privacy Policy</Link> &middot; <Link to='#'>Disclaimers</Link> &middot;{' '}
      <Link to='#'>Terms and Conditions</Link>
    </footer>
  )
}

export default Footer
