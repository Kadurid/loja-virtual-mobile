import React, { Component } from 'react'
import './css/style.css';
import {carrinho} from './data/carrinho.json'

export default class ShoppingCart extends Component {
  constructor(props){
    super(props);
    this.state = {
      cartItems : []
    }
   
  }
  
  onAdd(product){
    const exist = carrinho.find(x => x.id === product.id);
    if(exist){
      product.qtd = product.qtd +1;
    }
    else {
      product["qtd"] = 1;
      carrinho.push(product);
      this.state.cartItems.push(product);  
      console.log(this.state.cartItems)   
    }
    
  }
  onRemove(product){
    const exist = carrinho.find((x) => x.id === product.id);
    if(exist.qtd ===1){
      carrinho.pop(carrinho.filter((x) => x.id !== product.id));
    } else{
      product.qtd = product.qtd - 1;
    }
  }

  render() {
    return (
      <div className="block col-1 carrinho-novo">
        <h2 className="nav-text ">Cart Items</h2>
        <div>
          {carrinho.length === 0 && <div >Cart Is Empty</div>}
          {carrinho.map((item) => (
            <div key={item.id} className="row">
              <div className="col-2">{item.descricao.substr(0, 9)}</div>
              <div className="col-2">
                <button onClick={()=> this.onAdd(item)} className="add"> + </button>
                <button onClick={()=> this.onRemove(item)} className="remove"> - </button>
              </div>
              <div className="col-2 text-right"> 
                {item.qtd} *{item.valor} 
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

