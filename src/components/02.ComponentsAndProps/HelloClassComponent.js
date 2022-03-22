// "rce" short-hand for classcomponent snippet
import React, { Component } from 'react'

export class HelloClassComponent extends Component {
  render() {
    console.log(this.props)

    return (
        <div>
            <h1>Hello {this.props.nameItWhateverYouWant}, from class component</h1>
            {this.props.children}
        </div>
    )
  }
}

export default HelloClassComponent