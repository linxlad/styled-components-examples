import React, { Component } from 'react';
import Wrapper from './components/Wrapper';
import Button from './components/Button';
import './App.css';

class App extends Component {
  render() {
  return (
    <div>
      <Wrapper green>
        <Button>Normal</Button>
        <Button type='primary'>Primary</Button>
        <Button type='sexy'>Sexy</Button>
      </Wrapper>
    </div>
  );
  }
}

export default App;
