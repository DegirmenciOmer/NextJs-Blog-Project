import Link from 'next/link'
import React from 'react'
import { title } from '../styles/Header.module.css'
// import headerStyles from '../styles/Header.module.css'

const Header = () => {
  let x = 2
  return (
    <header>
      <div className='container'>
        <Link passHref href='/'>
          <h2>Dev Blog</h2>
        </Link>
      </div>
    </header>
  )
}

export default Header
