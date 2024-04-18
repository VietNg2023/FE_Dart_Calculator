import React, { useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import Score from './Score';

const ScoreList = () => {
  const { scores,resetScores } = useContext(GlobalContext);
  const {games} = useContext(GlobalContext);

//   const amounts = scores.map(score => score.amount);

//   const currentscore = amounts
//     .filter(item => item > 0)
//     .reduce((acc, item) => (acc += item), 0)
//     ;
  
//   // Reset remainscore to zero if it exceeds 501
//   if (currentscore > 501) {
//     resetScores();
//   }

  // const lastestScores = scores.slice(0,3);

  // Get the latest game
  const latestGame = games[games.length - 1] || { users: [] };

  // Filter scores by users in the latest game
  const scoresByUsers = latestGame.users.map(user => ({
      user,
      scores: scores.filter(score => score.user === user)
  }));

  return (
    <>
        <h3>History</h3>
        {scoresByUsers.map(({ user, scores }) => (
            <div key={user}>
                <h4>User: {user}</h4>
                <ul className="list">
                    {scores.map(score => (
                        <Score key={score.id} score={score} />
                    ))}
                </ul>
            </div>
        ))}
    </>
);
}

export default ScoreList