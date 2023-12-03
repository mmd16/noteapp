"use client";
import { createContext, useContext, useState } from 'react';

const Context = createContext()

export const StateProvider = ({ children }) => {
    const [searchState, setSearchState] = useState(0);
    return (
        <Context.Provider value={{searchState, setSearchState}}>
            {children}
        </Context.Provider>
    )
}

export const StateProviderContext = () => useContext(Context);
