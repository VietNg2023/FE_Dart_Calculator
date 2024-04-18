import React, { useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

const Balance = () => {
  const { scores } = useContext(GlobalContext);

  const amounts = scores.map(score => score.amount);

  //const total = amounts.reduce((acc, item) => (acc += item), 0);
  let total = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    ;

    if (total > 501) {
      total = 0;
    }

  return (
    <>
      <h4>Your Score</h4>
      <h1>{total}</h1>
    </>
  )
}

export default Balance
