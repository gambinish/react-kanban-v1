import React, { Component } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './App.css';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';


///////////////// IMPORT COMPONENTS //////////////

import ItemForm from './Forms/ItemForm.jsx';
import AssignedList from './Lists/AssignedList.jsx';
import ActiveList from './Lists/ActiveList.jsx';
import ReviewList from './Lists/ReviewList.jsx';

import Item from './Lists/Item.jsx'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:8989/')
      .then(items => {
        // console.log("items", items)
        this.setState({ items: items.data })
        // console.log(this.state.items)
      })
      .catch(err => {
        console.log('err', err)
      })
  }

  addItemToInventory = (item) => {
    axios
      .post('http://localhost:8989/')
      .then(items => {
        this.setState(state => {
          return { items: [...state.items, item] }
        })
        // console.log('items: ', items)
      })
      .catch(err => {
        console.log('error: ', err)
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
            <header className="assignedColumn" id="assignedColId">
              <h1>Assigned</h1>
              <hr />
              <DragDropContext onDragEnd={this.onDragEnd}>
                <Droppable droppableId="droppable">
                  {(provided, snapshot) => (
                    <div ref={provided.innerRef}>
                      <AssignedList items={this.state.items} />
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
              {/* <AssignedList items={this.state.items} /> */}
            </header>
            <header className="activeColumn" id="activeColId">
              <h1>Active</h1>
              <hr />
              <DragDropContext onDragEnd={this.onDragEnd}>
                <Droppable droppableId="droppable">
                  {(provided, snapshot) => (
                    <div ref={provided.innerRef}>
                      <ActiveList items={this.state.items} />
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
              {/* <ActiveList items={this.state.items} /> */}
            </header>
            <header className="reviewColumn" id="reviewColId">
              <h1>In Review</h1>
              <hr />
              <DragDropContext onDragEnd={this.onDragEnd}>
                <Droppable droppableId="droppable">
                  {(provided, snapshot) => (
                    <div ref={provided.innerRef}>
                      <ReviewList items={this.state.items} />
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
              {/* <ReviewList items={this.state.items} /> */}
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

export default App;
