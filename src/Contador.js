import React from 'react';
import './App.css';


const Contador = (props) => (
    <h1 class="my-title">{props.min}:{props.sec}</h1>
)

export default Contador