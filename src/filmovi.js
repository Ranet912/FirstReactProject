import React, {Component} from 'react'
import './App.css'

class Filmovi extends Component {
  constructor(props){
    super(props);
    this.state = {
      numberPerson: 1,
      data: {
        name: '',
        birth_year: '',
      },
      film: {
          title: ''
      }
    }
  }

  componentDidMount(){
    fetch('https://swapi.co/api/people/4')
      .then((response) => response.json())
      .then(jsonResponse => this.setState({
        data: jsonResponse
      }))
  }

  pozoviFilm = () => {
    const [prviFilm] = this.state.data.films
    fetch(prviFilm)
      .then((response) => response.json())
      .then(jsonResponse => this.setState({
        film: jsonResponse
      }))

    console.log(prviFilm)
  }

  pozoviDrugog = () => {
    const { numberPerson } = this.state
    this.setState(prevState => ({
      numberPerson: prevState.numberPerson + 1
    }))

    fetch(`https://swapi.co/api/people/${numberPerson}`)
      .then((response) => response.json())
      .then(jsonResponse => this.setState({
        data: jsonResponse
    }))
    console.log(this.state.numberPerson)
  }

  render() {
    return(
      <div>
        <table>
        <tr>
          <th>Ime</th>
          <th>Godina</th>
          <th>Films</th>
        </tr>
        <tr>
          <td>{this.state.data.name}</td>
          <td>{this.state.data.birth_year}</td>
          <td><button
            onClick={() => this.pozoviFilm()}
          >Prikazi</button></td>
          <td>{this.state.film.title}</td>
        </tr>
        </table>
        <button
          onClick={() => this.pozoviDrugog()}

        >Drugi Lik
        </button>
      </div>
    );
  }

}

export default Filmovi
