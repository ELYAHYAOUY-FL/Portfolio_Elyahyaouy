import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaAngellist } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/imane-el-yahyaouy/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/ELYAHYAOUY-FL" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a email="elyahyaouyiman9@gmail.com" target="_blank" rel="noreferrer" ><AiOutlineMail /></a>
    </div>
  )
}

export default HeaderSocials