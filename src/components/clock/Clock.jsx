import React, { Component } from 'react'

export default class Clock extends Component {
  render() {
    return (
      <div>
       {new Date().toLocaleTimeString()}
      </div>
    )
  }
}
