import React, { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';

import Item from './Item.jsx';

import { connect } from 'react-redux';

let styles = {
  backgroundColor: '#33cc33'
}

class AssignedList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: null,
      name: null,
      status: null,
      description: null,
      type: null
    }
  }

  handleDelete = (item) => {

    this.setState(state => {
      return item
    })

    this.props.sendData(this.state)

  }

  render() {

    return this.props.items
      .filter((item) => {
        return item.status === 'assigned'
      })
      .map((item, index) => {
        return (

          <Draggable key={item.id} draggableId={item.id} index={index} >
            {(provided, snapshot) => (
              <div ref={provided.innerRef} {...provided.draggableProps}{...provided.dragHandleProps}>
                <div style={styles} className='listItem'>
                  <Item sendData={this.handleDelete} key={item.id} id={item.id} name={item.name} status={item.status} description={item.description} type={item.type} />
                  {item.content}
                </div>
              </div>
            )}
          </Draggable>

        )
      })
  }
}

const mapStateToProps = state => {
  return {
    items: state,
  }
}

export default connect(mapStateToProps)(AssignedList)