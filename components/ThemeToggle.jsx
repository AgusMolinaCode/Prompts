import React, { useContext } from 'react'
import { HiSun, HiMoon } from 'react-icons/hi'
import { ThemeContext } from '../context/ThemeContext'

const ThemeToggle = () => {

  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <div className='p-2'>
      {theme === 'dark' ? 
      (
        <div className='flex items-center cursor-pointer font-bold' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}><HiSun className='text-yellow-300 text-3xl' /></div>
      ) : 
      (<div className='flex items-center cursor-pointer font-bold' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}><HiMoon className='text-3xl' /></div>)}
    </div>
  )
}

export default ThemeToggle
