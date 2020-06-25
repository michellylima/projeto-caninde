import React from 'react';


import './styles.css';
import HeaderMenu from '../../components/header-menu/header-menu';
import Footer from '../../components/footer/footer';
import Imagem from '../../assets/imagem.jpg';
import ImagemProjeto from '../../assets/imagem_projeto.jpg';

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
                        <div className='projetos-container'>
                            <div className='projeto'>
                                <img className='imagem-projeto' src={ImagemProjeto} alt=''/> 
                                <h3>Nome do Projeto</h3>
                                <p>Descrição que é uma frase inicial sobre o projeto e para quem foi feito</p>
                            </div>
                            
                            <div className='projeto'>
                                <img className='imagem-projeto' src={ImagemProjeto} alt=''/> 
                                <h3>Nome do Projeto</h3>
                                <p>Descrição que é uma frase inicial sobre o projeto e para quem foi feito</p>
                            </div>


                        </div>
                    </div>
                </section>

                <div style={{height: '30rem'}}></div>
            <Footer />
        </div>
    );


}