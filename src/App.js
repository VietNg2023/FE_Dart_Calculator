import React from 'react'
import Header from './components/Header.js';
import Balance from './components/Balance.js';
import RemainScore from './components/RemainScore.js';
import ScoreList from './components/ScoreList.js';
import AddScore from './components/AddScore.js';
import AddGame from './components/AddGame.js';
import GameInfo from './components/GameInfor.js';

import { GlobalProvider } from './context/GlobalState.js';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container-left">
        <AddGame />
        <GameInfo />
      </div>
      <div className="container-right">
        <Balance />
        <RemainScore />
        <ScoreList />
        <AddScore />
      </div>
    </GlobalProvider>
  );
}

export default App;
