import React from "react";
import './css/Rodape.css';

class Body extends React.Component{
  render(){
    return(
      <div>
        <footer className="rodape">
            <div className="col-md-3">
                <i className = "pi pi-envelope"></i>
                <h3>Contato</h3>
                <h4>loja@falso.com</h4>
                <h4>Face/lojafalsa.com</h4>
            </div>
        </footer>
      </div>
    );
  }
}

export default Body;