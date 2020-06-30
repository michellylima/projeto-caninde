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
                            <p>Vamos fazer o seu projeto voar?</p>
                            <div className='fazer-orcamento'><a href='/#'>Fazer Orçamento</a></div>
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
                        <h2 id='link-projetos'><a href='/#'> Confira todos os nossos projetos </a></h2>
                    </div>
                </section>

                <section className='secao3'>
                    <div className='secao3-container'>
                    <h1>Construímos nossos <br/>resultados <span style={{color: '#0BFEFF'}}>juntos</span>, estamos <br/>ligados pela nossa diversidade <br/>e visão compartilhadas_</h1>
                    <div className='secao3-sub sub-secao1'>
                        <h3><a href='/#'>Design de <br/>Ambientes</a></h3>
                        <p>Confira quais são os nossos serviços <br/> de ambientes e produtos que <br/>podemos realizar para você.</p>
                    </div>

                    <div className='secao3-sub sub-secao2'>
                        <h3><a href='/#'>Design Gráfico <br/>& Branding</a></h3>
                        <p>Confira quais são os nossos serviços <br/> de ambientes e produtos que <br/>podemos realizar para você.</p>
                    </div>

                    <div className='secao3-sub sub-secao3'>
                        <h3><a href='/#'>Ux/Ui Design<br/>Site e Apps</a></h3>
                        <p>Confira quais são os nossos serviços <br/> de ambientes e produtos que <br/>podemos realizar para você.</p>
                    </div>



                    </div>
            
                </section>

                
            <Footer />
        </div>
    );


}