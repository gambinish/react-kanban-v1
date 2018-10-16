import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

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

export default ActiveList;