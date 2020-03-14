import React, {Component} from 'react';
import './App.css';

class App extends Component {
  componentDidMount(){
    this.getMovies();
  }
  getMovies=()=>{
     console.log('hey');
     
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
