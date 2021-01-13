import React, {Component} from 'react';

class PeopleInQueue extends Component {
  render() {
    return (
      <div>
        <ul className='order-list'>
          <h2>Next in the Queue</h2>
          <li>{this.props.first}</li>
          <li>{this.props.second}</li>
          <li>{this.props.third}</li>
          <li>{this.props.fourth}</li>
          <li>{this.props.fifth}</li>
        </ul>
      </div>
    )
  }
}

export default PeopleInQueue;