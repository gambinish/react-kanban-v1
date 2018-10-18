// import React from 'react';
import React, { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';

import Item from './Item.jsx';

// const ReviewList = (props) => {

let styles = {
  backgroundColor: 'orange'
}

class ReviewList extends Component {
  constructor(props) {
    super(props)
  }



  handleDelete = (e) => {
    // e.preventDefault();
    console.log('DELETE BUTTON', this.props)

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
                  <Item sendData={this.handleDelete} key={item.id} name={item.name} status={item.status} />
                  {item.content}
                  <button onClick={this.handleDelete} className='deleteBtn'>DELETE</button>
                </div>
              </div>
            )}
          </Draggable>

        )
      })
  }








}
// }

// class ReviewList extends Component {
//   constructor(props) {
//     super(props)

//   }
// }

// this.handleDelete = this.handleDelete.bind(this);

// let handleDelete = (e) => {
//   // e.preventDefault();
//   console.log('DELETE BUTTON', this.props)

// }

// let styles = {
//   backgroundColor: 'orange'
// }

// render() {

// }


// render() {
//   return props.items
//     .filter((item) => {
//       return item.status === 'inReview'
//     })
//     .map((item, index) => {
//       return (

//         <Draggable key={item.id} draggableId={item.id} index={index} >
//           {(provided, snapshot) => (
//             <div ref={provided.innerRef} {...provided.draggableProps}{...provided.dragHandleProps}>
//               <div style={styles} className='listItem'>
//                 <Item sendData={handleDelete} key={item.id} name={item.name} status={item.status} />
//                 {item.content}
//                 <button onClick={handleDelete} className='deleteBtn'>DELETE</button>
//               </div>
//             </div>
//           )}
//         </Draggable>

//       )
//     })
// }



export default ReviewList;