export const calculateWinner = (userScores, gameSize, latestGame) => {
    let winners = [];
    let maxWinnings = 0;
  
    // Iterate over userScores to find the user(s) with the maximum winnings
    Object.keys(userScores).forEach(user => {
      const userWinnings = userScores[user].winnings;
      if (userWinnings > maxWinnings) {
        // Found a new leader, update maxWinnings and reset winners array
        maxWinnings = userWinnings;
        winners = [user];
      } else if (userWinnings === maxWinnings) {
        // Found another user with the same winnings as the current leader, add to winners array
        winners.push(user);
      }
    });
  
    // Check if any winner(s) reached the gameSize
    const gameSizeReached = maxWinnings >= gameSize;
  
    return { winners, gameSizeReached };
  };
  