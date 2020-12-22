import React, {Component} from 'react';
import { Provider} from './components/Context';
import Header from './components/Header';
import PlayerList from './components/PlayerList';
import AddPlayerForm from './components/AddPlayerForm';


class App extends Component {
  state = {
    players: [
      {
        name: "Guil",
        score: 0,
        id: 1
      },
      {
        name: "Treasure",
        score: 0,
        id: 2
      },
      {
        name: "Ashley",
        score: 0,
        id: 3
      },
      {
        name: "James",
        score: 0,
        id: 4
      }
    ]
  };

  handleScoreChange = (index, delta) => {
    
    this.setState( prevState => ({
      score: prevState.players[index].score += delta
    }));
  }
  
  getHighScore = () => {
    const scores = this.state.players.map( p => p.score );
    const highScore = Math.max(...scores);
    if (highScore) {
      return highScore;
    } 
    return null;
  }

  // player id counter //4
  prevPlayerId = 4; 

  handleAddPlayer = (name) => {
      //update state with (prevState) => { return [update logic]}
  
    this.setState( prevState => { 
      return {
      players: [
        //needs to update the state, along with new player
        ...prevState.players,
        {
          name, 
          score: 0,
          id: this.prevPlayerId += 1
        }

      ]

    }});
  }

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  render() {

    return (
      <Provider value={this.state.players}>
        <div className="scoreboard">
          <Header 
            title="Scoreboard" 
            players={this.state.players}
          />
          
          <PlayerList
            players={this.state.players}
            changeScore={this.handleScoreChange}
            removePlayer={this.handleRemovePlayer}
            getHighScore={this.getHighScore}        
          />
        
          <AddPlayerForm 
            addPlayer={this.handleAddPlayer} 
          />
        </div>
      </Provider>
    );
  }
}

export default App;
