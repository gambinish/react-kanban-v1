import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import Item from './Item.jsx';

const ActiveList = (props) => {

  let styles = {
    backgroundColor: '#627FEA'
  }

  return props.items
    .filter((item) => {
      return item.status === 'active'
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
                    <Link className="App-title" to="/active">Show</Link>
                    <Route path="/active" component={() => <ActiveList items={this.state.items} />} />
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

export default ActiveList;