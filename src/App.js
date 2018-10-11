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
        type: "solid",
        status: 'assigned'
      },
      {
        name: "item-B",
        weight: 0.25,
        type: "liquid",
        status: 'active'
      },
      {
        name: "item-C",
        weight: 0.1,
        type: "gas",
        status: 'inReview'
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
          <h1>Kanban Board</h1>
        </header>
        <section className="content">
          <div className="columns">
            <header className="assignedColumn">
              <h1>Assigned</h1>
              <hr />
              <AssignedList items={this.state.items} />
            </header>
            <header className="activeColumn">
              <h1>Active</h1>
              <hr />
              <ActiveList items={this.state.items} />
            </header>
            <header className="reviewColumn">
              <h1>In Review</h1>
              <hr />
              <ReviewList items={this.state.items} />
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


function AssignedList(props) {
  return props.items.filter((item) => {
    return item.status === 'assigned'
  }).map(item => {
    return (<div className='listItem'><Item name={item.name} status={item.status} /></div>)
  })
}

function ActiveList(props) {
  return props.items.filter((item) => {
    return item.status === 'active'
  }).map(item => {
    return (<div className='listItem'><Item name={item.name} status={item.status} /></div>)
  })
}

function ReviewList(props) {
  return props.items.filter((item) => {
    return item.status === 'inReview'
  }).map(item => {
    return (<div className='listItem'><Item name={item.name} status={item.status} /></div>)
  })
}



function Item(props) {
  console.log('Item props: ', props)
  return <div>{props.name} <br /><br />  {props.status}</div>
}

class ItemForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: null,
      weight: null,
      type: null,
      status: null
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
      [name]: value,
      status: 'assigned'
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Create Ticket</h1>
        <label className="labelClass">
          <input onChange={this.handleChange} type="text" name="name" placeholder="Name" />
        </label>
        <label>
          <input onChange={this.handleChange} type="text" name="weight" placeholder="Weight" />
        </label>
        <label>
          <select onChange={this.handleChange} name="type" placeholder="Type">
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
