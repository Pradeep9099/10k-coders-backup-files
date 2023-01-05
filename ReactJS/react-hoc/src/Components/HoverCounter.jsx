import React, { Component } from 'react'
import HOComponent from './HOComponent'

class HoverCounter extends Component {

  render() {
    return (
      <div>
        <h2 onMouseOver={this.props.handleIncrement}>Hover on Me </h2>
        <h2>You Hovered {this.props.count} times</h2>
      </div>
    )
  }
}

export default HOComponent(HoverCounter)