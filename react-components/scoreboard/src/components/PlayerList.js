import React from 'react';
import PropTypes from 'prop-types';
import {Consumer} from './Context';
import Player from './Player';

const PlayerList = (props) => {
  return (
    <Consumer>
      {context => (
        <React.Fragment>
      <div>
        {context.players.map((player, index) =>
          <Player
            {...player}
            key={player.id.toString()}
            index={index}
            changeScore={props.changeScore}
            isHighScore={props.getHighScore() === player.score}
	
          />
        )}
      </div>
      </React.Fragment>
      )}
    </Consumer>
  );
};

PlayerList.propTypes = {
  changeScore: PropTypes.func.isRequired,
  getHighScore: PropTypes.func.isRequired
}

export default PlayerList;
