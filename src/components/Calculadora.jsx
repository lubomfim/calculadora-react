import "./Calculadora.css";
import React, { Component  } from "react";

import Buttons from './Buttons'
import Display from './Display'

class Calculadora extends Component {
  constructor(props) {
    super(props)

    this.state = {
      display: '0',
      valores: [0, 0],
      current: 0,
      operation: null,
    }

    this.limpar = this.limpar.bind(this)
    this.addOperador = this.addOperador.bind(this)
    this.addDigito = this.addDigito.bind(this)
  }
  

  limpar() {
    this.setState(state => ({
      display: '0',
      valores: [0, 0],
      operation: null
    }))
  }

  addOperador(operacao) {
   switch(operacao) {
     case "+":
     break;
     case "-":
     console.log(operacao)
     break;
     case "*":
     console.log(operacao)
     break;
     case "/":
     console.log(operacao)
     break;
     case "=":
     console.log(operacao)
     break;
     default:
     console.log(operacao)
     break;
     
   }
  }

  addDigito(n) {
    if (n === '.' && this.state.inicial.includes('.')) {
      return
    } else {
      this.setState(state => ({
        display: state.display === '0' ? state.display = n : state.display += n
      }))
    }
  }

  render() {
    return (
   <div className="main">
    <div className="display">
      <Display operacao={this.state.display}/>
    </div>
    <div className="calculadora">
      <Buttons value="/" type="symbol" click={this.addOperador}/>
      <Buttons value="*" type="symbol" click={this.addOperador} />
      <Buttons value="-" type="symbol" click={this.addOperador} />
      <Buttons value="+" type="symbol" click={this.addOperador} />

      <Buttons value="7" type="number" click={this.addDigito} />
      <Buttons value="8" type="number" click={this.addDigito}/>
      <Buttons value="9" type="number" click={this.addDigito}/>
      <Buttons value="=" type="result" click={this.addOperador}/>

      <Buttons value="4" type="number" click={this.addDigito}/>
      <Buttons value="5" type="number" click={this.addDigito}/>
      <Buttons value="6" type="number" click={this.addDigito}/>

      <Buttons value="3" type="number" click={this.addDigito}/>
      <Buttons value="2" type="number" click={this.addDigito}/>
      <Buttons value="1" type="number" click={this.addDigito}/>

      <Buttons value="." type="ponto" click={this.addDigito}/>
      <Buttons value="0" type="number zero" click={this.addDigito}/>
      <Buttons value="AC" type="limpar" click={this.limpar} />
    </div>
  </div>)
  }
};

export default Calculadora;
