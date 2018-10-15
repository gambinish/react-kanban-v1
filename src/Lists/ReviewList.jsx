import React from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


import Item from './Item.jsx';

const ReviewList = (props) => {

  let styles = {
    backgroundColor: 'orange'
  }

  return props.items
    .filter((item) => {
      return item.status === 'inReview'
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
                {/* <Router>
                  <div>
                    <Link className="App-title" to="/assigned">Show</Link>
                    <Route path="/assigned" component={() => <ReviewList items={this.state.items} />} />
                  </div>
                </Router> */}
                <Item key={item.id} name={item.name} status={item.status} />
                {item.content}
                {/* <button className='deleteBtn'>DELETE</button> */}
              </div>
            </div>
          )}
        </Draggable>

      )
    })
}

export default ReviewList;

// .map((item, index) => (
//   <Draggable key={item.id} draggableId={item.id} index={index}>
//     {(provided, snapshot) => (
//       <div
//         ref={provided.innerRef}
//         {...provided.draggableProps}
//         {...provided.dragHandleProps}
//       >
//         <ReviewList items={this.state.items} />
//         {item.content}
//       </div>
//     )}
//   </Draggable>
// ))