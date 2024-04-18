import React, { useState, useContext } from "react";
import { GlobalContext } from '../context/GlobalState';

export const AddGame = () => {
  const [userNames, setUserNames] = useState(['']);
  const [gameType, setgameType] = useState('301');
  const [gameSize, setgameSize] = useState(1)

  const { addGame} = useContext(GlobalContext);

  const handleUserNameChange = (index,value) => {
    const updateUserNames = [...userNames];
    updateUserNames[index] = value;
    setUserNames(updateUserNames);
  }

  const handleAddUser = () => {
    setUserNames([...userNames,'']);
  };

  const handleRemoveUser = (index) => {
    const updateUserNames = [...userNames];
    updateUserNames.splice(index,1);
    setUserNames(updateUserNames);
  }

  const onSubmit = e => {
    e.preventDefault();

    const newGame = {
      id: Math.floor(Math.random() * 100000000),
      users: userNames.filter((name) => name.trim() !== ''),
      gameType,
      gameSize: parseInt(gameSize)
    }

    addGame(newGame);
  }

  return (
    <>
      <h3>Add new Game</h3>
      <form onSubmit={onSubmit}>
        {/* <div className="form-control">
          <label htmlFor="userName">User Name</label>
          <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Enter user name..." />
        </div> */}
        {userNames.map((userName, index) => (
          <div className="form-control" key={index}>
            <label htmlFor={`userName-${index}`}>User {index + 1} Name</label>
            <input
              type="text"
              id={`userName-${index}`}
              value={userName}
              onChange={(e) => handleUserNameChange(index, e.target.value)}
              placeholder="Enter user name..."
            />
            {index > 0 && (
              <button type="button" onClick={() => handleRemoveUser(index)}>Remove</button>
            )}
          </div>
        ))}
        <button type="button" onClick={handleAddUser}>Add User</button>
        <div className="form-control">
          <label htmlFor="gameType">Game Type</label>
          <select value={gameType} onChange={(e) => setgameType(e.target.value)}>
            <option value="301">301</option>
            <option value="501">501</option>
          </select>
        </div>
        <div className="form-control">
          <label htmlFor="gameSize">GameSize</label>
          <input type="text" value={gameSize} onChange={(e) => setgameSize(e.target.value)} placeholder="Enter game size..." />
        </div>
        <button className="btn">Add game</button>
      </form>
    </>
  )
}

export default AddGame
