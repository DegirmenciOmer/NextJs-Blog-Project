import React from 'react'
import { title } from '../styles/Header.module.css'
// import headerStyles from '../styles/Header.module.css'

const Header = () => {
  let x = 2
  return (
    <div>
      <span className={`title ${title}`}>Header</span>
      <style jsx>
        {`
          .title {
            color: ${x > 3 ? 'blue' : 'red'};
          }
        `}
      </style>
    </div>
  )
}

export default Header
