import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Score = ({ score }) => {
    const { deleteScore } = useContext(GlobalContext);

    //const sign = score.amount < 0 ? '-' : '+';

    return (
    // <li className={score.amount < 0 ? 'minus' : 'plus'}>
    //       {score.text} <span>{sign}{Math.abs(score.amount)}</span><button onClick = {() => deleteScore(score.id)} className="delete-btn">x</button>
    //     </li>
    <li className={score.amount < 0 ? 'minus' : 'plus'}>
        {/* <span>User: {score.user}</span> */}
        <span>{score.text} {Math.abs(score.amount)}</span>
        <button onClick = {() => deleteScore(score.id)} className="delete-btn">x</button>
        </li>
  )
}

export default Score
