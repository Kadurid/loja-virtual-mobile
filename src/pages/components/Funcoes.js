import React, { Component } from 'react'

export default class Funcoes extends Component {
  constructor(){
    super();
    var cartItems = [];
    this.cartItems = cartItems;
  }
  setCartItems(dado){
    this.cartItems.push(dado);
  }
  onAdd(produto){
    const exist = this.cartItems.find((x) => x.id === produto.id);
    if(exist) {
      this.setCartItems(
        this.cartItems.map(
          (x) => x.id === produto.id ? {...exist, qty: exist.qty + 1 } : x
        )
      );
    }
    else{
      this.setCartItems([...this.cartItems, {...produto, qty: 1 }]);
    }
  }
  
}
