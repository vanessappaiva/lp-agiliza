import React from 'react'
import './style.scss';
import { FaArrowRightLong } from "react-icons/fa6";
import DollImage from '../../assets/images/doll.png';
import PCImage from '../../assets/images/pc.png';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='img-div'>
        {/* Importe a imagem usando o caminho correto */}
        <img className='img-hero' src={DollImage} alt='Doll Image2' />
      </div>

      <div className='text'>
        <h2 className='title-hero'>Descomplique seus <br /> <span className='highlight-green'>processos</span> cirúrgicos.</h2>
        <p className='text-hero'>sistema que gerencia dados e prazos, trazendo <br /> maior agilidade de todo o processo.</p>
        <div className='btn-hero'>Entenda como funciona <FaArrowRightLong className='icon-btn' /></div>
      </div>

      <div className='img-div'>
        {/* Importe a imagem usando o caminho correto */}
        <img className='img-hero' src={PCImage} alt='PC Image2' />
      </div>

    </div>
  )
}

export default Hero