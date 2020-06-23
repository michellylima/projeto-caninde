import React from 'react';
import './header-menu.css';
import logoHeaderMenu from '../../assets/logo-header-menu.jpg';

export default function HeaderMenu(){
    return(
        <div className='header-menu-container'>
            <a href='/#'><img id='header-menu-logo' alt='' src={logoHeaderMenu}></img></a>
            <nav className='nav-bar'>
                <ul>
                    <li><a href='/#'>Portfólio</a></li>
                    <li><a href='/#'>Serviços</a></li>
                    <li><a href='/#'>Contato</a></li>
                </ul>
                
            </nav>
            <button style={{display: 'none'}}></button>
        </div>
    );
}