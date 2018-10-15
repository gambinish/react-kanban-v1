import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import Item from './Item.jsx';

const AssignedList = (props) => {

  let styles = {
    backgroundColor: '#33cc33'
  }

  return props.items
    .filter((item) => {
      return item.status === 'assigned'
    })
    .map((item, index) => {
      console.log('props in inventory component', props)
      return (

        <Draggable key={item.id} draggableId={item.id} index={index} >
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <div
                style={styles}
                className='listItem'
              >
                <Router>
                  <div>
                    <Link className="App-title" to="/assigned">Show</Link>
                    <Route path="/assigned" component={() => <AssignedList items={this.state.items} />} />
                  </div>
                </Router>
                <Item key={item.id} name={item.name} status={item.status} />
                {item.content}
                <button className='deleteBtn'>DELETE</button>
              </div>
            </div>
          )}
        </Draggable>

      )
    })
}

export default AssignedList;