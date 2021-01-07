import React, { useState, useEffect} from 'react'
import '../App.css';
import axios from 'axios';

import SearchForm from './SearchForm';
import GifList from './GifList';

function App() {

  const [data, setData] = useState([]);
  const [query, setQuery] = useState('memes');
  const [isLoading, setLoading] = useState(true);

  const performSearch = (value) => setQuery(value);


  useEffect(() =>{
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=QGx0HYKQgMVMrdvG8nly3aQfAAVUi7q7&limit=24`)
    .then(res => setData(res.data.data))
    .catch(error => console.log('Error fetching data'), [query])
    .finally(() => setLoading(false));
  }, [query]);



  return (
    <>
      <div className="main-header">
        <div className="inner">
          <h1 className="main-title">GifSearch</h1>
          <SearchForm onSearch={performSearch}/>
        </div>
      </div>
      <div className="main-content">
        {
          isLoading
          ? <p>Loading...</p>
          : <GifList data={data}/>
        }
      </div>
    </>
  );
}

export default App
