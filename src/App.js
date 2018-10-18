import React, { Component } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import './App.css';
import axios from 'axios';


///////////////// IMPORT COMPONENTS //////////////

import Header from './Partials/Header.jsx';
import AssignedList from './Lists/AssignedList.jsx';
import ActiveList from './Lists/ActiveList.jsx';
import ReviewList from './Lists/ReviewList.jsx';
// import Footer from './Partials/Footer.jsx';
import ItemForm from './Forms/ItemForm.jsx';

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
        this.setState({ items: items.data })
        // console.log('items.data', this.state)
        // console.log('App this.state.items: ', this.state.items)
      })
      .catch(err => {
        console.log('err', err)
      })
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
    console.log('removeItemFromInventory: ', item)
    // console.log('props ItemFromInventoryID: ')
    axios
      .put('http://localhost:8989/delete', item)
      .then(item => {
        console.log('RMFI log', item)
        // this.setState(state => {
        //   return { items: [...this.state.items] }
        //   // console.log('RMFI response: ', item)
        // })
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
                      <AssignedList items={this.state.items} />
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
                      <ActiveList items={this.state.items} />
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

export default App;
