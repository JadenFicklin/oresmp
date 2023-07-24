import React, { useState } from 'react';

// Create a context
export const UserContext = React.createContext();

// Create a provider which holds the state and function to update it
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userUid, setUserUid] = useState(null);

    return (
        <UserContext.Provider value={{ user, setUser, userUid, setUserUid }}>
            {children}
        </UserContext.Provider>
    );
};
