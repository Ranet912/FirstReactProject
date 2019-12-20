import React, {Component} from 'react'
import './App.css'

class Counter extends Component {
  constructor(props){
    super(props);
    this.state = {
      broj: 0
    }
  }

uvecaj = () => {
  this.setState({
    broj: this.state.broj + 1
  })
}

smanji = () => {
  this.setState({
    broj: this.state.broj - 1
  })
}

  render() {
    console.log('broj', this.state.broj)
    return(
      <div>
        <p>{this.state.broj}</p>
        <p>{this.props.ime}</p>
        <button
          onClick={() => this.uvecaj()}
        > + </button>
        <button
          onClick={() => this.smanji()}
        > - </button>
      </div>
    )
  }
}

export default Counter
