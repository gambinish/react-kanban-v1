import React from 'react';
// import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Item = (props) => {

  let handleClick = (e) => {
    e.preventDefault();
    // console.log('DELETE BUTTON ITEM.jsx', props)
    props.sendData(props)

  }

  return (
    <div>
      {props.name} <br />
      {props.status} <br />
      <button onClick={handleClick} className='deleteBtn'>DELETE</button>
      <Router>
        <div>
          <Link className="App-title" to="/detail/:id">ticket details</Link>
          <Route path="/detail/:id" component={() => 'test component'} />
        </div>
      </Router>
    </div>
  )

}

export default Item