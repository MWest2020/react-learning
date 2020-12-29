import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import SearchForm from './Components/SearchForm';
import GifList from './Components/GifList';

export default class App extends Component {
  
  constructor() {
    super();
      this.state = {
        gifs: [],
        loading: true

      };
  } 
 
  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query = 'memes' ) => {
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=QGx0HYKQgMVMrdvG8nly3aQfAAVUi7q7&limit=24`)
  .then(response => {
    this.setState( { 
      gifs: response.data.data,
      loading: false
  });  
  })
  .catch((error) => {
    console.log('Error fetching and passing data', error)
    });
  }
  


  render() { 
    
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">GifSearch</h1>
            <SearchForm onSearch={this.performSearch}/>      
          </div>   
        </div>    
        <div className="main-content">
          {
            (this.state.loading)
            ? <p>Loading...</p>
            : <GifList data={this.state.gifs}/>

          }
          
        </div>
      </div>
    );
  }
}
