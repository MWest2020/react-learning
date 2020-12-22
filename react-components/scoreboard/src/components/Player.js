import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './Context';
import Counter from './Counter';
import Icon from './Icon';

class Player extends PureComponent {

  static propTypes = {
    changeScore: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired
  };

  render() {
    
    const { 
      name,
      id,
      score,
      index,
      changeScore
    } = this.props;

    return (
      <div className="player">
        <Consumer>
          {context => (
            <span className="player-name">
          <button className="remove-player" onClick={() => context.actions.removePlayer(id)}>✖</button>
          
          <Icon isHighScore={this.props.isHighScore} />
          { name }
        </span>
          )}
        </Consumer>
  
        <Counter 
          score={score}
          index={index}
          changeScore={changeScore} 
        />
      </div>
    );
  }
}

export default Player;