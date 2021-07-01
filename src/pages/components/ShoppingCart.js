import React, { Component } from 'react'
import './css/style.css';

export default class ShoppingCart extends Component {
  constructor(props){
    super(props);
    const {cartItems} = props;
    this.state = {
      cartItems: cartItems
    }
    //this.cartItems = cartItems;
    this.onAdd = props.onAdd;
    this.onRemove = props.onRemove;
  }
  componentWillReceiveProps(){
   this.forceUpdate();
  }

  render() {
    return (
      <div className="block col-1 carrinho-novo" key={this.props.cartItems}>
        <h2 className="nav-text ">Cart Items</h2>
        <div>
          {this.props.cartItems.length === 0 && <div >Cart Is Empty</div>}
          {this.props.cartItems.map((item) => (
            <div key={item.id} className="row">
              <div className="col-xs-4">{item.descricao.substr(0, 9)}</div>
              <div className="col-xs-4">
                <button onClick={()=> this.props.onAdd(item)} className="add"> + </button>
                <button onClick={()=> this.props.onRemove(item)} className="remove"> - </button>
              </div>
              <div className="col-xs-4 text-right"> 
                {item.qtd} *{item.valor} 
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

