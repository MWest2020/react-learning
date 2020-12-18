// import React, {PureComponent} from 'react';
// import PropTypes from 'prop-types';
// import Icon from './Icon';
// import Counter from './Counter';

// class Player extends PureComponent {
  
//   //chain isRequired to proptypes to display error in case none are given
//   static propTypes = {
//     changeScore: PropTypes.func.isRequired,
//     removePlayer: PropTypes.func,
//     name: PropTypes.string,
//     score: PropTypes.number,
//     id: PropTypes.number,
//     index: PropTypes.number,
//     isHighScore: PropTypes.bool
//   };
  
//   render(){
//       //destructering in class Components
//       const {name, id, score, index, removePlayer, changeScore} = this.props
      
//       return (
        
//         <div className="player">
//           <span className="player-name">
            
//             <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
            
//             <Icon isHighscore={this.props.isHighScore} />
            
//             { name }
            
            
//           </span>
    
//           <Counter score={score}
//           changeScore={changeScore}
//           index={index} 
//           />
//         </div>
//       );
//     }
//   }



  
// export default Player;

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';
import Icon from './Icon';

class Player extends PureComponent {

  static propTypes = {
    changeScore: PropTypes.func.isRequired,
    removePlayer: PropTypes.func.isRequired,
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
      removePlayer,
      changeScore
    } = this.props;

    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
          
          <Icon isHighScore={this.props.isHighScore} />
          { name }
        </span>
  
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