import React from 'react';

const MyContext = React.createContext();

export const MyContextProvider = MyContext.Provider;
export const MyContextConsumer = MyContext.Consumer;