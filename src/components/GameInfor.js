import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const GameInfo = () => {
  const { games } = useContext(GlobalContext);

  return (
    <div>
      <h3>Game Information</h3>
      {games.map(game => (
        <div key={game.id}>
          <h4>Game ID: {game.id}</h4>
          <ul>
            {game.users.map((user, index) => (
              <li key={index}>
                <p>User {index + 1} Name: {user}</p>
              </li>
            ))}
          </ul>
          <p>Game Type: {game.gameType}</p>
          <p>Game Size: {game.gameSize}</p>
        </div>
      ))}
    </div>
  );
};

export default GameInfo;
