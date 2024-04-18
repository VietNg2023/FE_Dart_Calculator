import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

const RemainScore = () => {
  // const { scores, games, resetScores } = useContext(GlobalContext);
  const { scores, games } = useContext(GlobalContext);


  // Get the latest game
  const latestGame = games[games.length - 1] || { users: [] };

  // Filter out undefined users
  let validUsers = [];
  if (latestGame.users && latestGame.users.length > 0) {
  validUsers = latestGame.users.filter(user => user !== undefined);
  }

  // Initialize an object to store scores for each user
  const userScores = {};
  validUsers.forEach(user => {
    userScores[user] = { totalScore: 0, winnings: 0};
  });

  const gameTypeInt = parseInt(latestGame.gameType);
  // Initialize remainScores before using it
  // const remainScores = {};

  // Calculate total scores for each user
  scores.forEach(score => {
    //const user = score.user;
    userScores[score.user].totalScore += score.amount;
    if (userScores[score.user].totalScore === gameTypeInt) {
      userScores[score.user].winnings += 1;
      // remainScores[user] = gameTypeInt;
      userScores[score.user].totalScore = 0;
      score=[];
    }
  });
  
  // Calculate remaining score for each user
  // Object.keys(userScores).forEach(user => {
  //   remainScores[user] = gameTypeInt - userScores[user].totalScore;
  //   if (remainScores[user] < 0) {
  //     remainScores[user] = gameTypeInt;
  //   }
  // });

return (
  <div className="inc-exp-container">
    {Object.keys(userScores)
    //.filter(user => userScores[user] !== undefined) // Filter out undefined users
    .map(user => (
      <div key={user}>
        <h4>{user}</h4>
      {/* <p>Last Round Total Score: {userScores[user].oldtotalScore}</p> */}
        <p>This Round Total Score: {userScores[user].totalScore}</p>
        {/* <p>Remain for Winnings: {remainScores[user]}</p> */}
        <p>Total Winning: {userScores[user].winnings}</p>
      </div>
    ))}
  </div>
);
}
export default RemainScore
