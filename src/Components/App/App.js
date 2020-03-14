import React, {Component} from 'react';
import './App.css';
const Axios = require('axios');

class App extends Component {
  componentDidMount(){
    this.getMovies();
  }
  getMovies=()=>{
     console.log('hey');
     Axios.get('/movie').then((response) => {
       console.log('GET response', response);
     }).catch ((error) => {
       console.log('client error', error);
     })
     
  }
  render(){
    return (
      <div className="App">
        <h1>Hi yall</h1>
      </div>
    );
  }
}

export default App;
