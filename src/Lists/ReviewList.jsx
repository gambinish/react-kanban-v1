import React, { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';

import Item from './Item.jsx';

import { connect } from 'react-redux';

let styles = {
  backgroundColor: 'orange'
}

class ReviewList extends Component {
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

    // NEED TO REFACTOR TO: setState()
    this.setState(state => {
      return item
    })

    this.props.sendData(this.state)

  }

  render() {

    return this.props.items
      .filter((item) => {
        return item.status === 'inReview'
      })
      .map((item, index) => {
        return (

          <Draggable key={item.id} draggableId={item.id} index={index} >
            {(provided, snapshot) => (
              <div ref={provided.innerRef} {...provided.draggableProps}{...provided.dragHandleProps}>
                <div style={styles} className='listItem'>
                  <Item sendData={this.handleDelete} id={item.id} key={item.id} name={item.name} status={item.status} />
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
    items: state
  }
}

export default connect(mapStateToProps)(ReviewList)
