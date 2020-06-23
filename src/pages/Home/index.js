import React from 'react';
import './styles.css';
import HeaderMenu from '../../components/header-menu/header-menu'
import Footer from '../../components/footer/footer';

export default function Home(){
    return(
        <>
        <HeaderMenu />
        <div style={{height: '30rem'}}></div>
        <Footer />
        </>
    );


}