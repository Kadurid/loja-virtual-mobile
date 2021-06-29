import React, { Component } from 'react'
import Produto from './components/Produto';
import ProductSlider from './components/ProductSlider';
import {produtos} from './components/data/produtos.json'

export default class Home extends Component {
  render() {
    return (
      <div>
        <ProductSlider produtos={produtos}  />
      </div>
    )
  }
}
