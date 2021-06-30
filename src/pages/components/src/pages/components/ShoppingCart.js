import React, { Component } from 'react'
import './css/style.css';

export default class ShoppingCart extends Component {
  constructor(props){
    super(props);
    const {cartItems} = props;
    this.cartItems = cartItems;
    this.onAdd = props.onAdd;
    this.onRemove = props.onRemove;
  }

  render() {
    return (
      <div className="block col-1 carrinho-novo">
        <h2 className="nav-text ">Cart Items</h2>
        <div>
          {this.cartItems.length === 0 && <div >Cart Is Empty</div>}
          {this.cartItems.map((item) => (
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

