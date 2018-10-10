import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <h1 className="App-title">Hello Universe!</h1> */}
          <Title name="this is a configurable component" property2={2 * 2} />
        </header>
      </div>
    );
  }
}


class Title extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [{
        id: 1,
        name: 'item-A',
        weight: 0.1,
        type: 'solid'
      },
      {
        id: 2,
        name: 'item-B',
        weight: 0.5,
        type: 'liquid'
      },
      {
        id: 3,
        name: 'item-C',
        weight: 0.75,
        type: 'gas'
      }]
    }
    // this.decrement = this.decrement.bind(this)
    // this.increment = this.increment.bind(this)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>This is a list of items</h1>
        </header>
        <ItemList items={this.state.items} />
      </div>
    )
  }
}

// this returns all props items the same way
// function ItemList(props) {
//   return props.items.map(item => <div>{item.name} {item.type}</div>)
// }

function ItemList(props) {
  return props.items.map(item => <Item name={item.name} />)
}

function Item(props) {
  return <div>{props.name}</div>
}






// const Title = (props) => <h1>{props.name}</h1>

export default App;
