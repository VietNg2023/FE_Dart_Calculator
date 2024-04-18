import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer';

//Initial State
const initialState  = {
    scores: [
        //   { id: 1, text: 'Center', amount: 20 },
        //   { id: 2, text: 'Rear', amount: 30 },
        ],
    games : []
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions
    function deleteScore(id) {
        dispatch({
            type: 'DELETE_SCORE',
            payload: id
        });
    }

    function addScore(score) {
        dispatch({
            type: 'ADD_SCORE',
            payload: score
        });
    }

    //resetScores
    function resetScores() {
        dispatch({
            type: 'RESET_SCORES'
        });
    }
    //add Game
    function addGame(game) {
        dispatch({
            type: 'ADD_GAME',
            payload: game
        });
    }

    return(<GlobalContext.Provider value={{
        scores: state.scores,
        games: state.games,
        deleteScore,
        addScore,
        resetScores,
        addGame
    }}>
        {children}
    </GlobalContext.Provider>);
}