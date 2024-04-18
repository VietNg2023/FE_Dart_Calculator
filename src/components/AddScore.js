import React, { useState, useContext } from "react";
import { GlobalContext } from '../context/GlobalState';


export const AddScore = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const [selectedUser, setSelectedUser] = useState('');
  const {addScore, games} = useContext(GlobalContext);

  // const { addScore} = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newScore = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
      user: selectedUser
    }

    addScore(newScore);
  }

  return (
    <>
      <h3>Add new score</h3>
      <form onSubmit={onSubmit}>
      <div className="form-control">
          <label htmlFor="user">User</label>
          <select value={selectedUser} onChange={(e) => setSelectedUser(e.target.value)}>
            <option value="">Select user...</option>
            {/* Map over the users from the latest game to populate the select options */}
            {games.length > 0 && games[games.length - 1].users.map(user => (
              <option key={user} value={user}>{user}</option>
            ))}
          </select>
        </div>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Score <br />
            </label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter score..." />
        </div>
        <button className="btn">Add score</button>
      </form>
    </>
  )
}

export default AddScore
