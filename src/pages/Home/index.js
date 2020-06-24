import React from 'react';


import './styles.css';
import HeaderMenu from '../../components/header-menu/header-menu'
import Imagem from '../../assets/imagem.jpg'
import Footer from '../../components/footer/footer';

export default function Home(){
    return(
        <div className='home-container'>
            <HeaderMenu />
                <img id='banner-principal' src={Imagem} alt=''/>

                <section className='secao1'>
                    <div className='secao1-container'>
                        <div className='secao1-esquerda' >
                                <h1><span style={{color: '#0BFEFF'}}>Design</span> para a <br/>sua necessidade <br/>de voar cada vez<br/> mais alto_</h1>
                        </div>

                        <div className='secao1-direita-flutante'>

                        </div>
                    </div>
                </section>

                <section className='secao2'>
                    <div className='secao2-container'>
                        <h1>Trabalhamos com sonhos <br/>e mais que isso, tornamos <br/>eles <span style={{color: '#0BFEFF'}}>realidade</span>_ </h1>
                    </div>
                </section>

                <div style={{height: '30rem'}}></div>
            <Footer />
        </div>
    );


}