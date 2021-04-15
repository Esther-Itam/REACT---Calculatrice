import logo from '../logo.svg';
import '../App.css';
import Button from './Button';
import Operation from './Operation';
import Result from './Result';
import InputNumber from './InputNumber';
import {connect} from "react-redux"; 
import {bindActionCreators} from "redux";
import {calculate, updateInput1, updateInput2, changeOperator, generateNumber} from '../actions/actions';
import React, { Component } from 'react';


class App extends Component{
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="form">
          <InputNumber id="number1" placeholder="number1" value={this.props.number1} onChange= {(event)=>{this.props.updateInput1(event.target.value)}}/>
          <InputNumber id="number2" placeholder="number2" value={this.props.number2} onChange= {(event)=>{this.props.updateInput2(event.target.value)}}/>
          <Operation onChange= {(event)=>{this.props.changeOperator(event.target.value)}}/>
          <Button id="calcul" value="Calcul" onClick={this.props.calculate}/>
          <Button id="random" value="Random" onClick={this.props.generateNumber}/>
          <Result result={this.props.result}/>
        </div>
      </header>
    </div>
    )
  }   
}

const mapStateToProps = (state) => {
  return {
      number1: state.number1,
      number2: state.number2,
      operator: state.operator,
      result: state.result
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    calculate,
    updateInput1,
    updateInput2, 
    changeOperator,
    generateNumber
  }, dispatch)
}
  
export default connect(mapStateToProps, mapDispatchToProps)(App)

