import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

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

export default AssignedList;