import React, { Component } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
// import logo from './logo.svg';
import './App.css';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';


///////////////// IMPORT COMPONENTS //////////////

import ItemForm from './Forms/ItemForm.jsx';
import AssignedList from './Lists/AssignedList.jsx';
import ActiveList from './Lists/ActiveList.jsx';
import ReviewList from './Lists/ReviewList.jsx';

///////////////// DND /////////////////


// a little function to help us with reordering the result
// const reorder = (list, startIndex, endIndex) => {
//   const result = Array.from(list);
//   const [removed] = result.splice(startIndex, 1);
//   result.splice(endIndex, 0, removed);

//   return result;
// };

/**
 * Moves an item from one list to another list.
 */
// const move = (source, destination, droppableSource, droppableDestination) => {
//   const sourceClone = Array.from(source);
//   const destClone = Array.from(destination);
//   const [removed] = sourceClone.splice(droppableSource.index, 1);

//   destClone.splice(droppableDestination.index, 0, removed);

//   const result = {};
//   result[droppableSource.droppableId] = sourceClone;
//   result[droppableDestination.droppableId] = destClone;

//   return result;
// };

///////////////// DND /////////////////

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }

  // id2List = {
  //   droppable: 'items',
  //   droppable2: 'selected'
  // };

  // getList = id => this.state[this.id2List[id]];

  componentDidMount() {
    axios
      .get('http://localhost:8989/')
      .then(items => {
        // console.log("items", items)
        this.setState({ items: items.data })
        console.log(this.state.items)
      })
      .catch(err => {
        console.log('err', err)
      })
  }

  // onDragEnd = result => {
  //   const { source, destination } = result;

  //   // dropped outside the list
  //   if (!destination) {
  //     return;
  //   }

  //   if (source.droppableId === destination.droppableId) {
  //     const items = reorder(
  //       this.getList(source.droppableId),
  //       source.index,
  //       destination.index
  //     );

  //     let state = { items };

  //     if (source.droppableId === 'droppable2') {
  //       state = { selected: items };
  //     }

  //     this.setState(state);
  //   } else {
  //     const result = move(
  //       this.getList(source.droppableId),
  //       this.getList(destination.droppableId),
  //       source,
  //       destination
  //     );

  //     this.setState({
  //       items: result.droppable,
  //       selected: result.droppable2
  //     });
  //   }
  // };

  addItemToInventory = (item) => {
    axios
      .post('http://localhost:8989/')
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
              {/* <Router>
                <div>
                  <Link className="App-title" to="/assigned">Show</Link>
                  <Route path="/assigned" component={() => <AssignedList items={this.state.items} />} />
                </div>
              </Router> */}
              <hr />
              <DragDropContext onDragEnd={this.onDragEnd}>
                <Droppable droppableId="droppable">
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                    >
                      {this.state.items.map((item, index) => (
                        <Draggable key={item.id} draggableId={item.id} index={index}>
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <AssignedList items={this.state.items} />
                              {item.content}
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
              {/* <AssignedList items={this.state.items} /> */}
            </header>
            <header className="activeColumn" id="activeColId">
              <h1>Active</h1>
              {/* <Router>
                <div>
                  <Link className="App-title" to="/active">Show</Link>
                  <Route path="/active" component={() => <ActiveList items={this.state.items} />} />
                </div>
              </Router> */}
              <hr />
              <DragDropContext onDragEnd={this.onDragEnd}>
                <Droppable droppableId="droppable">
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                    >
                      {this.state.items.map((item, index) => (
                        <Draggable key={item.id} draggableId={item.id} index={index}>
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <ActiveList items={this.state.items} />
                              {item.content}
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
              {/* <ActiveList items={this.state.items} /> */}
            </header>
            <header className="reviewColumn" id="reviewColId">
              <h1>In Review</h1>
              {/* <Router>
                <div>
                  <Link className="App-title" to="/review">Show</Link>
                  <Route path="/review" component={() => <ReviewList items={this.state.items} />} />
                </div>
              </Router> */}
              <hr />
              <DragDropContext onDragEnd={this.onDragEnd}>
                <Droppable droppableId="droppable">
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                    >
                      {this.state.items.map((item, index) => (
                        <Draggable key={item.id} draggableId={item.id} index={index}>
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <ReviewList items={this.state.items} />
                              {item.content}
                            </div>
                          )}
                        </Draggable>
                      ))}
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
