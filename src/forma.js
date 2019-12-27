import React, { Component } from 'react'
import Input from './input.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { onSubmit } from './redux/modules/formaRedux'

class Forma extends Component {
    state = {
      text: '',
      mail: '',
      prezime: '',
      password: ''
  }

  changeHandler = (e, field) => {
    this.setState({[`${field}`]: e.target.value})
  }

  onSubmit = () => {
    this.props.onSubmit(this.state)
    console.log(this.state.text, this.state.mail, this.state.prezime, this.state.password)
  }

  render() {
    return(
      <div>
      {this.state.text}
        <Input
          onChange = {(e) => this.changeHandler(e, 'text')}
          value = {this.state.text}
          label = 'Text'
          type='text'
        />
         <Input
           onChange = {(e) => this.changeHandler(e, 'mail')}
           value = {this.state.mail}
           label = 'Mail'
           type='text'
         />
          <Input
            onChange = {(e) => this.changeHandler(e, 'prezime')}
            value = {this.state.prezime}
            label = 'Prezime'
            type='text'
          />
          <Input
            onChange = {(e) => this.changeHandler(e, 'password')}
            value = {this.state.password}
            label = 'Password'
            type='password'
          />
          <div
            onClick={this.onSubmit}
            style={{
              padding: 10,
              borderRadius: 5,
              borderWidth: 1,
              border: 'solid',
              borderColor: 'blue',
              backgroundColor: 'blue',
              width: 200,
              height: 30,
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white',
              display: 'flex',
              fontSize: 18,
              fontWeight: 'bold',
              marginTop: 20,
              cursor: 'pointer'
            }}
          >
            <div>Click</div>
          </div>
      </div>
    )
  }
}

const mapState = (state) => {
  return({
    data: state.formRedux.data
  })
}

const mainActions = {
  onSubmit
}

export default connect(mapState, dispatch => bindActionCreators(mainActions, dispatch))(Forma);
