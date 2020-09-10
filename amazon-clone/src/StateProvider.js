import React, {createContext, useContext, useReducer} from 'react';

// PREPARES THE DAYA LAYER
export const StateContext = createContext();

// Wrap your app and provide your dataLayer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);