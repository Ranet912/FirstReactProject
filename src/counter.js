import React, {Component} from 'react'
import './App.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { incrementCounter, decrementCounter } from './redux/modules/counter'

class Counter extends Component {
  constructor(props){
    super(props);
    this.state = {
      broj: 0
    }
  }

uvecaj = () => {
  this.props.incrementCounter()
}

smanji = () => {
  this.props.decrementCounter()
}

  render() {
    console.log('broj', this.props)
    return(
      <div>
        <p>{this.props.broj}</p>
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

const mapState = (state) => {
  return({
    broj: state.counter.broj
  })
}

const mainActions = {
  incrementCounter,
  decrementCounter
};

export default connect(mapState, dispatch => bindActionCreators(mainActions, dispatch))(Counter);
