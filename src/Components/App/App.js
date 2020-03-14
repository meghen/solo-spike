import React, {Component} from 'react';
import './App.css';
const Axios = require('axios');

class App extends Component {
  componentDidMount(){
    this.getMovies();
  }
  getMovies=()=>{
     console.log('hey');
     Axios({
       method: 'GET',
       url: '/movie'
     }).then((response) => {
       console.log('response.data', response.data);
     }).catch ((error) => {
       console.log('error', error);
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
