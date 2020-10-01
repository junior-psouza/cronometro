import React from 'react';
import Contador from './Contador'
import Botao from './Botao'
import LabelRelogio from './LabelRelogio'
import './App.css';
import { Button } from 'reactstrap';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      sec: 0,
      min: 0,
      stop: false,
      nameStop: "Parar",
      name: "Timer", 
      par: ""
    };
  }

   zerarTotal() {
      this.state.sec = -1
      this.state.min = 0
      this.state.par = ""
   }
  
  par(){
    var j = this.state.min+ ":"+ this.state.sec + "\n\n"
    this.state.par = this.state.par + j
  }
  
  stopTimer(){
    this.setState({ 
        stop: !this.state.stop 
      })
    if (this.state.stop)
      this.state.nameStop = "Stop"
    else
      this.state.nameStop = "Start"
  }

  increment () {
    if (this.state.stop === false){
      this.setState(
         function (state, props) {
          if (state.sec >= 5){
            this.zerar();
            this.incrementMin(state);
          }  
          return({ sec: state.sec +1})
         })
    }
  }
  
  incrementMin (state) {
    this.setState(() => { 
      return {min: state.min +1}
    })
  };
  
  zerar() {
    this.setState({ 
      sec: 0 
    })
  }

  componentDidMount(){
    this.timer = setInterval(
      () => this.increment(), 1000)
  }
  

  render(){

    return (
      <div className="form-group col-md-4 container border border-danger" align="center">
        <span >
        <div >
        <Contador min={this.state.min} sec={this.state.sec} />
        <LabelRelogio name={this.state.name} />
        </div>
        
        <Botao  onClick={() => this.zerarTotal()} label={"Zerar"} />
        
        <Botao onClick={() => this.stopTimer()} label={this.state.nameStop} />
        <Botao onClick={() => this.par()} label={"Pacial"} />
        <LabelRelogio name={this.state.par} />
        </span>
      </div>
    );
  }
}

export default App;