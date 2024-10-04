import React from 'react'

const Nav = () => {
  return (
    <nav
    className='
    font-rajdhani
    text-white
    flex
    text-xs
    md:text-xl
    items-center
    gap-6
    '
    >
      <a href="#about-me"
      className='hover:text-slate-400 nav-link'>About me</a>
      <a href="#my-projects"
      className='hover:text-slate-400 nav-link'>My Projects</a>
      <a href="#education"
      className='hover:text-slate-400 nav-link'>Education</a>
      <a href="https://github.com/jschmidaguerre?tab=repositories"
      className='mr-8 hover:text-slate-400 nav-link'>Github</a>
    </nav>
  )
}

export default Nav