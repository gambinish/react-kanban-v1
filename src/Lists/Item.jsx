import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// import { connect } from 'react-redux';

class Item extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.id,
      name: this.props.name,
      status: this.props.status
    }
    // console.log('props in item component', props)
  }

  handleClick = (e) => {
    e.preventDefault();
    this.props.sendData(this.state)
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

export default Item