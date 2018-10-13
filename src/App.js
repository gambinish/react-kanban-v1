import React, { Component } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }

  addItemToInventory = (item) => {
    // this.setState(state => {
    //   return { items: [...state.items, item] }
    // })
    axios
      .get('/tickets')
      .then(items => {
        this.setState(state => {
          return { items: [...state.items, item] }
        })
        console.log('items: ', items)
      })
      .catch(err => {
        console.log('error: ', err)
      })
  }

  // componentDidMount = () => {
  //   axios
  //     .get('/tickets')
  //     .then(items => {
  //       console.log('items: ', items)
  //       this.setState({ items: items.data })
  //     })
  //     .catch(err => {
  //       console.log('error: ', err)
  //     })
  // }

  componentDidMount() {
    axios
      .get('http://localhost:8989/tickets')
      .then(items => {
        console.log("items", items)
        this.setState({ items: items.data })
        console.log(this.state.items)
      })
      .catch(err => {
        console.log('err', err)
      })
  }

  // renderItemList() {
  //   if (this.state.hasItems) {
  //     return <AssignedList items={this.state.items} />
  //   } else {
  //     return null
  //   }
  // }

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
              <Router>
                <div>
                  <Link className="App-title" to="/assigned">Show</Link>
                  <Route path="/assigned" component={() => <AssignedList items={this.state.items} />} />
                </div>
              </Router>
              <hr />
              <AssignedList items={this.state.items} />
            </header>
            <header className="activeColumn">
              <h1>Active</h1>
              <Router>
                <div>
                  <Link className="App-title" to="/active">Show</Link>
                  <Route path="/active" component={() => <ActiveList items={this.state.items} />} />
                </div>
              </Router>
              <hr />
              <ActiveList items={this.state.items} />
            </header>
            <header className="reviewColumn">
              <h1>In Review</h1>
              <Router>
                <div>
                  <Link className="App-title" to="/review">Show</Link>
                  <Route path="/review" component={() => <ReviewList items={this.state.items} />} />
                </div>
              </Router>
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

  let styles = {
    backgroundColor: '#33cc33'
  }

  return props.items.filter((item) => {
    return item.status === 'assigned'
  }).map(item => {
    return (<div className='listItem' style={styles}><Item name={item.name} status={item.status} /></div>)
  })
}

function ActiveList(props) {

  let styles = {
    backgroundColor: '#627FEA'
  }

  return props.items.filter((item) => {
    return item.status === 'active'
  }).map(item => {
    return (<div className='listItem' style={styles}><Item name={item.name} status={item.status} /></div>)
  })
}

function ReviewList(props) {

  let styles = {
    backgroundColor: 'orange'
  }

  return props.items.filter((item) => {
    return item.status === 'inReview'
  }).map(item => {
    return (<div className='listItem' style={styles}><Item name={item.name} status={item.status} /></div>)
  })
}

function Item(props) {
  // console.log('Item props: ', props)
  return <div>{props.name} <br /><br />  {props.status}</div>
}

class ItemForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: null,
      weight: null,
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
    // const { name, value } = field.target
    // this.setState({
    //   [name]: value
    // })
    axios
      .post('http://localhost:8989/')
      .then(items => {
        console.log("items", items)
        // const { name, value } = field.target
        // this.setState({
        //   [name]: value
        // })
      })
      .catch(err => {
        console.log('err', err)
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
          <input onChange={this.handleChange} type="text" name="status" placeholder="Status" />
        </label>
        {/* <label>
          <select onChange={this.handleChange} name="status" placeholder="Type">
            <option value="assigned">Assigned</option>
            <option value="active">Active</option>
            <option value="inReview">In Review</option>
          </select>
        </label> */}
        <input type="submit" />
      </form>
    )
  }
}

export default App;
