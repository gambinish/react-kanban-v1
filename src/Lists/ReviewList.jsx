// import React from 'react';
import React, { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';

import Item from './Item.jsx';

let styles = {
  backgroundColor: 'orange'
}

class ReviewList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: null,
      name: null,
      status: null
    }
  }

  handleDelete = (item) => {
    // e.preventDefault();
    // this.setState({item.name} {item.status)
    this.state.status = item.status
    this.state.status = item.name
    this.state.id = item.id
    // console.log('ReviewList ID', this.props)
    // console.log('DELETE BUTTON: ', item)
    // console.log('this.state from ReviewList', this.state)
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
                  {/* <button onClick={this.handleDelete} className='deleteBtn'>AGAIN</button> */}
                </div>
              </div>
            )}
          </Draggable>

        )
      })
  }
}


export default ReviewList;