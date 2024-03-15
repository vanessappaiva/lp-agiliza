import React from 'react'
import './style.scss';
import { FaArrowRightLong } from "react-icons/fa6";
import DollImage2 from '../../assets/images/doll2.png';
import CadastroIcon from '../../assets/images/cadastro-icon';
import LoginIcon from '../../assets/images/login-icon';
import ProcessoIcon from '../../assets/images/processo-icon';


const About = () => {
  return (
    <div className='about'>
      <div className='text'>
        <p className='text-about'>Seu negócio mais ágil e lucrativo.</p>
        <h4 className='title-about'>Mostramos todas<br />
          as fases do processo,<br />
          <span className='highlight-green'>identificando atrasos</span><br />
          que possam impactar<br />
          seus prazos.
        </h4>
        <div className='btn-about'>solicite uma demo <FaArrowRightLong className='icon-btn' /></div>
      </div>

      <div className='center-div'>
        <img className='img-about' src={DollImage2} alt='Doll Image2' />
      </div>

      <div className='text'>
        <h4 className='title-about'>Conte com o<br />
          <span className='highlight-green'>Agiliza Doutor</span> em<br />
          todas as etapas<br />
        </h4>
        <div className='botoes'>
          <span className='span-btn'> <CadastroIcon className="icon" /> cadastro</span>
          <span className='span-btn'> <LoginIcon className="icon" /> login</span>
          <span className='span-btn'> <ProcessoIcon className="icon" />processos</span>
        </div>

      </div>

    </div>
  )
}

export default About