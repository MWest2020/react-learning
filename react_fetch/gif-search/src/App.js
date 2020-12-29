import React, { Component } from 'react';
import './App.css';
import SearchForm from './Components/SearchForm';
import GifList from './Components/GifList';

export default class App extends Component {
  
  constructor() {
    super();
      this.state = {
        gif: []
      };
  } 
  QGx0HYKQgMVMrdvG8nly3aQfAAVUi7q7
  //add this function when component is added to the DOM 
  componentDidMount() {
    fetch('https://api.giphy.com/v1/gifs/trending?api_key=QGx0HYKQgMVMrdvG8nly3aQfAAVUi7q7&limit=25&rating=G')
      .then(response => response.json())
      .then(responseData => {
        this.setState( { gifs: responseData.data});
      })
      .catch((error) => {
      console.log('Error fetching and passing data', error)
      });
  }

  render() { 
    console.log(this.state.logs)
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">GifSearch</h1>
            <SearchForm />      
          </div>   
        </div>    
        <div className="main-content">
          <GifList />
        </div>
      </div>
    );
  }
}
