import React, { Component } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import './App.css';
import axios from 'axios';

import Header from './Partials/Header.jsx';
import AssignedList from './Lists/AssignedList.jsx';
import ActiveList from './Lists/ActiveList.jsx';
import ReviewList from './Lists/ReviewList.jsx';
// import Footer from './Partials/Footer.jsx';
import ItemForm from './Forms/ItemForm.jsx';
import { getAllItems } from './actions/actions.js'
// import { itemReducer } from './reducers/reducers.js'

import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    // PRE REDUX:
    // axios
    //   .get('http://localhost:8989/')
    //   .then(items => {
    //     this.setState({ items: items.data })
    //     console.log(this.state)
    //   })
    //   .catch(err => {
    //     console.log('err', err)
    //   })

    // REDUX:
    console.log('this.props: ', this.props)
    this.props.dispatch(getAllItems())
    // this.props.dispatch({ type: 'HELLO' })
  }

  addItemToInventory = (item) => {

    axios
      .post('http://localhost:8989/', item)
      .then(item => {
        this.setState(state => {
          return { items: [...this.state.items, item] }
        })
      })
      .catch(err => {
        console.log('error: ', err)
      })

  }

  removeItemFromInventory = (item) => {

    axios
      .put('http://localhost:8989/delete', item)
      .then(item => {
        console.log('RMFI log', item)
      })
      .catch(err => {
        console.log('delete error: ', err)
      })

  }

  render() {

    return (

      <div className="App">
        <Header items={this.state.items} />
        <section className="content">
          <div className="columns">
            <header className="assignedColumn" id="assignedColId">
              <h1>Assigned</h1>
              <hr />
              <DragDropContext onDragEnd={this.onDragEnd}>
                <Droppable droppableId="droppable">
                  {(provided, snapshot) => (
                    <div ref={provided.innerRef}>
                      <AssignedList sendData={this.removeItemFromInventory} items={this.state.items} />
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
            </header>
            <header className="activeColumn" id="activeColId">
              <h1>Active</h1>
              <hr />
              <DragDropContext onDragEnd={this.onDragEnd}>
                <Droppable droppableId="droppable">
                  {(provided, snapshot) => (
                    <div ref={provided.innerRef}>
                      <ActiveList sendData={this.removeItemFromInventory} items={this.state.items} />
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
            </header>
            <header className="reviewColumn" id="reviewColId">
              <h1>In Review</h1>
              <hr />
              <DragDropContext onDragEnd={this.onDragEnd}>
                <Droppable droppableId="droppable">
                  {(provided, snapshot) => (
                    <div ref={provided.innerRef}>
                      <ReviewList sendData={this.removeItemFromInventory} items={this.state.items} />
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
            </header>
          </div>
        </section>
        {/* <Footer /> */}
        <ItemForm addItem={this.addItemToInventory} />
        {/* <Footer /> */}
      </div>
    )
  }
}


// connect()(App)

export default connect()(App);
