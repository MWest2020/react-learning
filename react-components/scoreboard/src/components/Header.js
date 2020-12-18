//framework
import React from 'react';
//libraries
import PropTypes from 'prop-types';
//modules
import Stats from './Stats';
import Stopwatch from './Stopwatch';


const Header = ({ players, title }) => {
    
  // const { players, title} = props;
  // destructering like this would omit 'props' from e.g. props.players and players will suffice as a variable.

  // second method is to replace the props as argument and replace with {players, title} as function parameter (like I did above) 

  return (
      <header>
        <Stats players={ players }/>
        <h1>{ title }</h1>
        <Stopwatch />
      </header>
      
    );
  }


  Header.propTypes = {
    players: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string ,
    
  };

  //Could omit the h2 header
  Header.defaultProps = {
    title: 'Scoreboard'
  }

export default Header;