import React, { Component } from 'react';
import './App.css';
import Button from './components/button';
import Result from './components/result';

class App extends Component {

  state = { counter: 0 };

  incrementCounter = (incrementValue) => {
    this.setState((prevState) => {
      return {
          counter: prevState.counter + incrementValue 
      }
    });
  }

  render() {
    return (
      <div>
        <Button incrementValue={1} onClickFunction={this.incrementCounter} />
        <Button incrementValue={5} onClickFunction={this.incrementCounter} />
        <Button incrementValue={10} onClickFunction={this.incrementCounter} />
        <Button incrementValue={100} onClickFunction={this.incrementCounter} />
        <Result counter={this.state.counter} />
      </div>
    );
  }
}

export default App;
