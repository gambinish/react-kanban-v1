import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { removeItem } from '../actions/actions.js'

class Item extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.id,
      name: this.props.name,
      status: this.props.status,
      type: this.props.type,
      description: this.props.description
    }
  }

  handleClick = (e) => {
    e.preventDefault();
    // dispatch action to remove item from redux store
    this.props.dispatch(removeItem(this.state))
  }


  render() {
    return (
      <div>
        {this.props.name} <br />
        {this.props.status} <br />
        {this.props.id} <br />
        <button onClick={this.handleClick} className='deleteBtn'>DELETE</button>
        <Router>
          <div>
            <Link className="App-title" to="/detail/:id">ticket details</Link>
            <Route path="/detail/:id" component={() => 'test component'} />
          </div>
        </Router>
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   return {
//     items: state,
//     lol: 'testing redux prop'
//   }
// }

// export default connect(mapStateToProps)(Item)

export default connect()(Item)

// export default Item