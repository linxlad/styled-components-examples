import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Wrapper from './components/Wrapper';
import Button from './components/Button';
import MaxTheme from './constants/MaxTheme'
import './App.css';

class App extends Component {
  render() {
  return (
    <div>
      <ThemeProvider theme={MaxTheme}>
        <Wrapper green>
          <Button>Normal</Button>
          <Button type='primary'>Primary</Button>
          <Button type='sexy'>Sexy</Button>
        </Wrapper>
      </ThemeProvider>
    </div>
  );
  }
}

export default App;
