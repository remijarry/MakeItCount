import { createContext, useState } from 'react';

export const UserContext = createContext({
    activeTrack: 'Persist',
    changeActiveTrack: (track: string) => { }
});

export const UserProvider = ({ children }) => {
    const [activeTrack, setActiveTrack] = useState('Persist')

    const changeActiveTrack = (track: string) => {
        setActiveTrack(track);
    }

    //todo: useEffect on activeTrack to make an api call to get the track data


    const value = { activeTrack, changeActiveTrack };

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )

}

