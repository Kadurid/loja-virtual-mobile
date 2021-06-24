import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './pages/components/Navbar';
import Home from './pages/Home';
import MeuPerfil from './pages/MeuPerfil';
import Carrinho from './pages/Carrinho';
import Rodape from './pages/components/Rodape';
//---------------------------------------------------------
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path= '/perfil' component= {MeuPerfil} />
            <Route path='/carrinho' component = {Carrinho} />
          </Switch>
          <Navbar />
          <Rodape />
        </Router>
      </div>
    )
  }
}

