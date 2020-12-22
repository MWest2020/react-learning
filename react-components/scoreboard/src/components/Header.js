import React from 'react';
//modules
import Stats from './Stats';
import Stopwatch from './Stopwatch';


const Header = () => {
    
  return (
      <header>
        <Stats />
        <h1>Scoreboard</h1>
        <Stopwatch />
      </header>
      
    );
  }

  //Could omit the h2 header
  Header.defaultProps = {
    title: 'Scoreboard'
  }

export default Header;