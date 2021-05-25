import React from "react";
import {carrinho} from './data/carrinho.json';
import {compra} from './data/compras.json';
import './css/style.css';


class CartList extends React.Component{
  constructor(){
    super();
    var total =0;
    this.total = total;
    carrinho.map((data,key)=>{
        this.total = this.total + parseFloat(data.valor);
    });
  }
  
  handleConfirmaCompra(){
    if(carrinho.length!==0){
      compra.push(carrinho);
      alert("Parabéns, compra efetuada com sucesso!!");
    }
    else{
      alert("Carrinho Vazio");
    }
    
  }
  
  render(){
    return(
        <div id="containerCarrinho" className="col-12">
            <div className="table-responsive">
                <table className="table">
                    <tr>
                        <th>Descrição</th>
                        <th>Valor</th>
                    </tr>
                    {carrinho.map((data,key) => { 
                        
                        return(
                            <tr key={key}>
                                <td>{data.descricao}</td>
                                <td>R${data.valor}</td>
                            </tr>
                        );
                    })
                    }
                    <tr>
                        <td>Total</td>
                        <td>R$ {this.total}</td>
                    </tr>
                </table>
                <div className="text-center" > <button className="btn btn-primary" onClick={() => { this.handleConfirmaCompra();}}>Confirmar Compra</button>
                        </div>
            </div>
        </div>
    );
  }
}

export default CartList;