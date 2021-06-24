import React, { Component } from 'react'
import {carrinho} from './data/carrinho.json';
import {compra} from './data/compras.json';
import './css/style.css';

export default class ShopCart extends Component {
  constructor(){
    super();
    var cartItems = [];
    this.cartItems = cartItems;
  }

  //Parte Vergonhosa de Função Repetida
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
      carrinho.push(this.cartItems);
      console.log(carrinho);
    }
    else{
      this.setCartItems([...this.cartItems, {...produto, qty: 1 }]);
      carrinho.push(this.cartItems);
      console.log(carrinho);
    }
  }

  onRemove(produto){

  }
  //--------------------------------------------------

  
  
  render() {
    return (
      <div className="block">
        <h2 className='nav-text'>Carrinho</h2>
        <div className='nav-text'>
          {carrinho.length === 0 && <div>Carrinho Vazio</div>}
        </div>
        {carrinho.map((item,key) => {
          return(
            <div key ={key} className="row">
              <div className="col-2">{item.descricao}</div>
              <div className="col-2">
                <div>
                  <button onClick={() => this.onAdd(item)} className="add">
                    +
                  </button>
                  <button onClick={() => this.onRemove(item)} className="remove">
                    -
                  </button>
                </div>
                <div className='col-2 text-right'>
                  {item.qty}* ${item.valor}
                </div>
              </div>

            </div>
          );
        })}
      </div>
    )
  }
}
