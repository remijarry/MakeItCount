import { createContext, useState } from 'react';

export const UserContext = createContext({
    activeTrack: 'Persist',
    changeActiveTrack: (track: string) => { },
    activeWeek: 1,
    changeActiveWeek: (week: number) => { }
});

export const UserProvider = ({ children }) => {
    const [activeTrack, setActiveTrack] = useState('Persist')
    const [activeWeek, setActiveWeek] = useState(1)
    const changeActiveTrack = (track: string) => {
        setActiveTrack(track);
    }

    const changeActiveWeek = (week: number) => {
        setActiveWeek(week);
    }

    //todo: useEffect on activeTrack to make an api call to get the track data


    const value = { activeTrack, changeActiveTrack, activeWeek, changeActiveWeek };

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )

}

