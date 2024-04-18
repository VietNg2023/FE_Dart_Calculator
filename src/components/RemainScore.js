import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';

const RemainScore = () => {
  const { scores, games, resetScores } = useContext(GlobalContext);

  // Get the latest game
  const latestGame = games[games.length - 1] || { users: [] };

  // Filter out undefined users
  const validUsers = latestGame.users.filter(user => user !== undefined);

  // Initialize an object to store scores for each user
  const [userScores, setUserScores] = useState({});
  
  // Track previous scores
  const [prevScores, setPrevScores] = useState([]);

  // Calculate user scores and update winnings
  useEffect(() => {
    // Only update if scores have changed
    if (prevScores !== scores) {
      const newUserScores = {};
      validUsers.forEach(user => {
        newUserScores[user] = { totalScore: 0, winnings: userScores[user]?.winnings || 0 };
      });
      scores.forEach(score => {
        newUserScores[score.user].totalScore += score.amount;
        if (newUserScores[score.user].totalScore === parseInt(latestGame.gameType)) {
          newUserScores[score.user].winnings += 1;
        }
      });
      setUserScores(newUserScores);
      setPrevScores(scores);
    }
  }, [scores, validUsers, latestGame, userScores, prevScores]);

  return (
    <div className="inc-exp-container">
      {Object.keys(userScores).map(user => (
        <div key={user}>
          <h4>{user}</h4>
          <p>This Round Total Score: {userScores[user].totalScore}</p>
          <p>Total Winning: {userScores[user].winnings}</p>
        </div>
      ))}
    </div>
  );
};

export default RemainScore;
