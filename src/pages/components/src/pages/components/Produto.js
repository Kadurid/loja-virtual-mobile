import React from "react";
import {produtos} from './data/produtos.json'
import {carrinho} from './data/carrinho.json'
//import './style.css';
import './css/Produto.css';
import './css/style.css';


class Produto extends React.Component{

  constructor(){
    super();
    var shoppingCart = [];
    this.handleComprar = this.handleComprar.bind(this);
    this.shoppingCart = shoppingCart;
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
      console.log("existe")
    }
    else{
      this.setCartItems([...this.cartItems, {...produto, qty: 1 }]);
      carrinho.push(this.cartItems);
      console.log(this.cartItems)
      console.log("não existe")
    }
  }
  //--------------------------------------------------
  //const  shoppingCart = [];
  handleComprar(data){
        let produto = [data.id, data.descricao, data.valor];
        this.shoppingCart.push(produto);
        carrinho.push(data);
        //var item = JSON.stringify(carrinho);
        alert('Adicionado ao carrinho');
  }

  render(){
    return(
    <div id="container-produto" className="col-md-10">
      <div className="row">
      {produtos.map((data,key) => {
        return(
          <div key={key} className="col-sm-12 col-md-3 produto">
            <div className="row produto-item">
                <div className="col-2">
                    <figure><img src={data.img} className="img-responsive" alt={data.descricao}/></figure>
                </div>
                <div className="col-8 descricao">
                    <header>{data.descricao.substr(0, 25)+"..."}</header>
                    <section><b>Disponível:</b>{data.qtdEstoque}</section>
                    <footer className="">
                        <b>Valor:R${data.valor}<br/><br/></b>
                        <div className="text-center">
                          <button className="btn btn-primary" 
                          onClick={() => { this.onAdd(data);}}>
                            Comprar</button>
                        </div>
                    </footer>
                </div>
            </div>
          </div>
        );
      })}
      </div>
      </div>
    );
  }
}

export default Produto;