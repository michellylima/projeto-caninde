import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Portfolio from './pages/Portfolio'
import Servicos from './pages/Servicos'
import Contato from './pages/Contato'
import About from './pages/About'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/servicos" component={Servicos} />
                <Route path="/contato" component={Contato} />
                <Route path="/about" component={About} />
            </Switch>
        </BrowserRouter>

    );

}