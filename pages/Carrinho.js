import React, { Component } from 'react'
import ShoppingCart from './components/ShoppingCart';
import './components/css/style.css';
import {carrinho} from './components/data/carrinho.json'

export default class Carrinho extends Component {
  render() {
    return (
      <div>
        <ShoppingCart cart={carrinho}/>
      </div>
    )
  }
}
