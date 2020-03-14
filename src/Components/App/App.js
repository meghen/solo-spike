import React, {Component} from 'react';
import './App.css';
const Axios = require('axios');

class App extends Component {
  state = {
    movie: ''
  }
  componentDidMount(){
    this.getMovies();
  }
  getMovies=()=>{
     console.log('hey');
     Axios.get('/movie').then((response) => {
       console.log('GET response', response);
       this.setState({
        movie: response
       })
     }).catch ((error) => {
       console.log('client error', error);
     })
     
  }
  render(){
    return (
      <div className="App">
        {JSON.stringify(this.state.movie)}
      </div>
    );
  }
}

export default App;
