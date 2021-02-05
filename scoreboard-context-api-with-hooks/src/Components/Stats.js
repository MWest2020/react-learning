import React from 'react';

const Stats = () => {

  // const totalPlayers = players.length;
  // const totalPoints = players.reduce( (total, player) => {
  //   return total + player.score;
  // }, 0);

  return (
    <table className="stats">
      <tbody>
        <tr>
          <td>Players:</td>
          <td>0</td>
        </tr>
        <tr>
          <td>Total Points:</td>
          <td>0</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Stats;