import "./Calculadora.css";
import React, { Component  } from "react";

import Buttons from './Buttons'
import Display from './Display'


class Calculadora extends Component {

  constructor(props) {
    super(props);

    this.state = {
      display: '0',
      operations: []
    }

    this.limpar = this.limpar.bind(this)
    this.resultado = this.resultado.bind(this)
    this.addDigito = this.addDigito.bind(this)
  }
  

  limpar() {
    this.setState(state => ({display: '0', operations: []}))
  }

  resultado() {
    let conta = this.state.display.split(/[*\-+/]/ig)
    let novaConta = []

     conta.forEach((element, indice) => {
      novaConta.push(Number(element))
      
      if (indice < this.state.operations.length) {
        novaConta.push(this.state.operations[indice])
      }
    })

    let resultado = 0;

    for (let i = 0; i < novaConta.length; i++) {
      if (novaConta[i] === '+') {
        resultado = resultado === 0 ? novaConta[i - 1] + novaConta[i + 1] : resultado + novaConta[i + 1]
      } else if (novaConta[i] === '-') {
         resultado = resultado === 0 ? novaConta[i - 1] - novaConta[i + 1] : resultado - novaConta[i + 1]
      } else if (novaConta[i] === '/') {
         resultado = resultado === 0 ? novaConta[i - 1] / novaConta[i + 1] : resultado / novaConta[i + 1]
      } else if (novaConta[i] === '*') {
         resultado = resultado === 0 ? novaConta[i - 1] * novaConta[i + 1] : resultado * novaConta[i + 1]
      }
    }

    this.setState(state => ({
      display: resultado,
      operations: []
    }))
  }

  addDigito(n) {
    let novoArray = [...this.state.operations]
    if (isNaN(Number(n)) && n !== '.') novoArray.push(n)

    this.setState(state => ({
      display: state.display === '0' ? state.display = n : state.display += n,
      operations: novoArray
    }))
  }

  render() {
    return (
   <div className="main">
    <div className="display">
      <Display operacao={this.state.display}/>
    </div>
    <div className="calculadora">
      <Buttons value="/" type="symbol" click={this.addDigito}/>
      <Buttons value="*" type="symbol" click={this.addDigito} />
      <Buttons value="-" type="symbol" click={this.addDigito} />
      <Buttons value="+" type="symbol" click={this.addDigito} />

      <Buttons value="7" type="number" click={this.addDigito} />
      <Buttons value="8" type="number" click={this.addDigito}/>
      <Buttons value="9" type="number" click={this.addDigito}/>
      <Buttons value="=" type="result" click={this.resultado}/>

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
