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
          <h1>Agile Kanban Board</h1>
        </header>
        <section className="content">
          <div className="columns">
            <header className="assignedColumn">
              <h1>Assigned</h1>
              <hr />
              <ItemList items={this.state.items} />
            </header>
            <header className="activeColumn">
              <h1>Active</h1>
              <hr />
              <ItemList items={this.state.items} />
            </header>
            <header className="reviewColumn">
              <h1>In Review</h1>
              <hr />
              <ItemList items={this.state.items} />
            </header>
          </div>
        </section>
        <header className="formClass-header">
          <ItemForm addItem={this.addItemToInventory} />
        </header>
      </div>
    )
  }
}


function ItemList(props) {
  return props.items.map(item => <div className="listItem"><Item name={item.name} /></div>)
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
        <h1>Create Ticket</h1>
        <label className="labelClass">
          <input onChange={this.handleChange} type="text" name="name" value="Name" />
        </label>
        <label>
          <input onChange={this.handleChange} type="text" name="weight" value="Weight" />
        </label>
        <label>
          <select onChange={this.handleChange} name="type" value="Type">
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
