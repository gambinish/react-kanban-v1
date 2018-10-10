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
          <h1>Agile Kanban Board</h1>
        </header>
        <section className="content">
          <div className="columns">
            <header className="assignedColumn">
              <h1>Assigned</h1>
              <hr />
              <ItemList id='assigned' items={this.state.items} />
            </header>
            <header className="activeColumn">
              <h1>Active</h1>
              <hr />
              <ItemList id='active' items={this.state.items} />
            </header>
            <header className="reviewColumn">
              <h1>In Review</h1>
              <hr />
              <ItemList id='inReview' items={this.state.items} />
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
  console.log('ItemList Id: ', typeof props.id, props.id)
  console.log('ItemStatus: ', props.items.map(itemStatus => itemStatus.status))

  // return props.items.map(item => <div className="listItem"><Item name={item.name} status={item.status} /></div>)

  // props.items.forEach(function (element) {
  //   console.log('ticketStatus: ', element.status)
  // })

  props.items.forEach((ticket) => {
    console.log('ticket: ', ticket);
  });

  if (props.id === props.items[2].status) {
    console.log(true)
    return <div className="listItem"><Item name={props.items[2].name} status={props.items[2].status} /></div>
  } else {
    console.log(false)
    return null
  }

  // props.items.forEach((ticket) => {
  //   if (props.id === ticket.status) {
  //     console.log(true)
  //     return <div className="listItem"><Item name={ticket.name} status={ticket.status} /></div>
  //   } else {
  //     console.log(false)
  //     return null
  //   }
  // })

}

// class ItemList extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {

//     }
//   }

//   orderTickets = () => {

//   }

//   render() {
//     return (
//       this.props.items.map(item => <div className="listItem"><Item name={item.name} status={item.status} /></div>)
//     )
//   }
// }

function Item(props) {
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
