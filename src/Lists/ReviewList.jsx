import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

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
      return (

        <Draggable key={item.id} draggableId={item.id} index={index} >
          {(provided, snapshot) => (
            <div ref={provided.innerRef} {...provided.draggableProps}{...provided.dragHandleProps}>
              <div style={styles} className='listItem'>
                <Item key={item.id} name={item.name} status={item.status} />
                {item.content}
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