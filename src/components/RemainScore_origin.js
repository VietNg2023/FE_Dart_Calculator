import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

const RemainScore = () => {
  const { scores } = useContext(GlobalContext);
  const { games } = useContext(GlobalContext);

  // Get the latest game
  const latestGame = games[games.length - 1] || { users: [] };
  console.log('Latest Game:', latestGame);

  // Filter out undefined users
  let validUsers = [];
  if (latestGame.users && latestGame.users.length > 0) {
  validUsers = latestGame.users.filter(user => user !== undefined);
  }
  console.log('Valid Users:', validUsers);
  // Initialize an object to store scores for each user
  const userScores = {};
  validUsers.forEach(user => {
    userScores[user] = 0;
  });

  // Calculate total scores for each user
  scores.forEach(score => {
    userScores[score.user] += score.amount;
  });

  // Calculate remaining score for each user
  const remainScores = {};
  Object.keys(userScores).forEach(user => {
    remainScores[user] = 501 - userScores[user];
    if (remainScores[user] < 0) {
      remainScores[user] = 0;
    }
  });
  //console.log('User Scores:', userScores);

  // const amounts = scores.map(score => score.amount);

  // const currentscore = amounts
  //   .filter(item => item > 0)
  //   .reduce((acc, item) => (acc += item), 0)
  //   ;
  
  // let remainscore = 501- currentscore;
  // // Reset remainscore to zero if it exceeds 501
  // if (remainscore < 0) {
  //   remainscore = 0;
  // }

  // const expense = (
  //   amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
  //   -1
  // );

//   return (
//     <div className="inc-exp-container">
//         <div>
//           <h4>Remain for Winnings</h4>
//           <p className="money plus">{remainscore}</p>
//         </div>
//         {/* <div>
//           <h4>Expense</h4>
//           <p className="money minus">{expense}</p>
//         </div> */}
//       </div>
//   )
// }
return (
  <div className="inc-exp-container">
    {Object.keys(userScores)
    .filter(user => userScores[user] !== undefined) // Filter out undefined users
    .map(user => (
      <div key={user}>
        <h4>{user}</h4>
        <p>Total Score: {userScores[user]}</p>
        <p>Remain for Winnings: {remainScores[user]}</p>
      </div>
    ))}
  </div>
);
}
export default RemainScore
