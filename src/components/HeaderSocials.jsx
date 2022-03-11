import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaDribbble} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='http://linkedin.com' rel="noreferrer" target="_blank"><BsLinkedin/></a>
        <a href='http://github.com' rel="noreferrer" target="_blank"><FaGithub/></a>
        <a href='http://dribbble.com' rel="noreferrer" target="_blank"><FaDribbble/></a>
    </div>
  )
}

export default HeaderSocials