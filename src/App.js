import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import styled from 'styled-components';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <SayForName name="Alex" surname="Tyurin" link="vk.com" />
        <SayForName name="Irina" surname="Tyurina" link="vk.com" />
        <SayForName name="Valrntina" surname="Tyurin" link="vk.com" />
      </div>
      
    );
  }
}


function SayForName (props) {
  return (
    <div>
      <h1> Мое имя {props.name}, фамилия  - {props.surname}</h1>
      <a href={props.link}> Ссылка на мой профиль </a>
    </div>
    )
}


export default App;
