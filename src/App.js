import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [{
        name: "item-A",
        type: 0.5,
        type: "solid"
      },
      {
        name: "item-B",
        weight: 0.25,
        type: "liquid"
      },
      {
        name: "item-C",
        weight: 0.1,
        type: "gas"
      }]
    }
  }

  addItemToInventory = (item) => {
    this.setState(state => {
      return { items: [...state.items, item] }
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>This is a list of items</h1>
        </header>
        <ItemList items={this.state.items} />
        <ItemForm addItem={this.addItemToInventory} />
      </div>
    )
  }
}


function ItemList(props) {
  return props.items.map(item => <Item name={item.name} />)
}

function Item(props) {
  return <div>{props.name}</div>
}

class ItemForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: null,
      weight: null,
      type: null
    }
  }

  handleSubmit = (submit) => {
    submit.preventDefault()
    console.log('form submitted', this.state)
    this.props.addItem(this.state)
  }

  handleChange = (field) => {
    field.preventDefault()
    console.log('field change detected: ', field.target.name)
    console.log('value change detected: ', field.target.value)
    // if (field.target.name === 'name') {
    //   this.setState({ 'name': field.target.value }, function () {
    //     console.log('name field after submission', this.state)
    //   })
    // } else if (field.target.name === 'weight') {
    //   this.setState({ 'weight': field.target.value }, function () {
    //     console.log('weight field after submission', this.state)
    //   })
    // } else if (field.target.name === 'type') {
    //   this.setState({ 'type': field.target.value }, function () {
    //     console.log('type field after submission', this.state)
    //   })
    //   }
    // }
    const { name, value } = field.target
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label> Name:
          <input onChange={this.handleChange} type="text" name="name" />
        </label>
        <label> Weight:
        <input onChange={this.handleChange} type="text" name="weight" />
        </label>
        <label> Type:
          <select onChange={this.handleChange} name="type">
            <option value="solid">Solid</option>
            <option value="liquid">Liquid</option>
            <option value="gas">Gas</option>
          </select>
        </label>
        <input type="submit" />
      </form>
    )
  }
}






// const Title = (props) => <h1>{props.name}</h1>

export default App;
