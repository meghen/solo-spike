import React, {Component} from 'react';
import './App.css';
const Axios = require('axios');

class App extends Component {
  state = {
    movie: []
  }
  componentDidMount(){
    this.getMovies();
  }
  getMovies=()=>{
     console.log('hey');
     Axios.get('/movie').then((response) => {
       console.log('GET response', response.data.results);       
       this.setState({
        movie: response.data.results
       })
     }).catch ((error) => {
       console.log('client error', error);
     })
     
  }
  render(){
    return (
      <div className="App">
        {/* {JSON.stringify(this.state.movie)} */}
        {this.state.movie.map(movie => 
            <div className="moviesList" key={movie.id}>
              <div className="moviesListInner"><img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}/></div>
              <div className="moviesListInner"><b>{movie.title}</b> <br></br>{movie.overview}</div>
            </div>)}
      </div>
    );
  }
}

export default App;
