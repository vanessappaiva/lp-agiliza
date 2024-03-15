import React from 'react'
import './style.scss';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import About from '../../components/About';
import Flow from '../../components/Flow';
import Partners from '../../components/Partners';
import Journey from '../../components/Journey';
import Howworks from '../../components/Howworks';
import Footer from '../../components/Footer';


const Home = () => {
  return (
    <div className='home'>
        <Navbar></Navbar>
        <Hero></Hero>
        <About></About>
        <Flow></Flow>
        <Partners></Partners>
        <Journey></Journey>
        <Howworks></Howworks>
        <Footer></Footer>

    </div>
  )
}

export default Home