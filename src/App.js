import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './pages/components/Navbar';
import {produtos} from './pages/components/data/produtos.json'
import ProductSlider from './pages/components/ProductSlider'
import MeuPerfil from './pages/MeuPerfil';
import ShoppingCart from './pages/components/ShoppingCart';
//---------------------------------------------------------
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      cartItems : []
    }
   this.onAdd = this.onAdd.bind(this);
   this.onRemove = this.onRemove.bind(this);
   console.log(this.state.cartItems);
  }
  
  onAdd(product){
    const exist = this.state.cartItems.find(x => x.id === product.id);
    if(exist){
      product.qtd = product.qtd +1;
    }
    else {
      product["qtd"] = 1;
      this.state.cartItems.push(product);
      console.log(this.state.cartItems)   
    }
    
  }
  
  onRemove(product){
    const exist = this.state.cartItems.find((x) => x.id === product.id);
    if(exist.qtd ===1){
      this.state.cartItems.filter((x) => x.id !== product.id);
    } else{
      product.qtd = product.qtd - 1;
    }
  }

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path='/'>
              <ProductSlider produtos={produtos} cartItems={this.state.cartItems} onAdd={this.onAdd} onRemove={this.onRemove}/>
            </Route>
            <Route exact path= '/perfil' component= {MeuPerfil} />
            <Route exact path='/carrinho'>
              <ShoppingCart cartItems={this.state.cartItems} onAdd={this.onAdd} onRemove={this.onRemove}/>
            </Route>
          </Switch>
          <Navbar />
        </Router>
      </div>
    )
  }
}

