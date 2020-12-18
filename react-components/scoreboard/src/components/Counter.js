import React from 'react';
import PropTypes from 'prop-types'; 

const Counter = ({ score, index, changeScore}) => {
    
  // Can be removed after destructering. since index = index and delcared in function parameter
  // let index = index;
  

  // function component = props.score / class component is this.score
  return (
      <div className="counter">
      
        <button className="counter-action decrement" onClick={() => changeScore(index, -1)}> - </button>
        <span className="counter-score">{ score }</span>
        <button className="counter-action increment" onClick={() => changeScore(index, +1)}> + </button>
      </div>
  );
  
  }

Counter.propTypes = {
  index: PropTypes.number,
  score: PropTypes.number ,
  changeScore: PropTypes.func
};


export default Counter;