import React from 'react';
//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const Botao = (props) => (
    <button  class="form-group col-md-4 btn btn-danger mx-auto" onClick={props.onClick}>{props.label}</button>
  )

  export default Botao