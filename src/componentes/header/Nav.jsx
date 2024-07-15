import React from 'react'

const Nav = () => {
  return (
    <div
    className='
    font-rajdhani
    flex
    justify-start
    mx-6
    
    '
    >

      <ul>
        <li className='
        hover:text-xl
        '>
          <a href="#About-Me">
            About Me
          </a>
        </li>
        <li className='
        hover:text-xl
        '>
          <a href="#My-Projects">
            My Projects
          </a>        
        </li>
        <li className='
        hover:text-xl
        '>
          <a href="https://github.com/jschmidaguerre?tab=repositories">
            Github
          </a>        
        </li>
      </ul>

    </div>
  )
}

export default Nav