import axios from 'axios';
import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext({
    activeTrack: 'Persist',
    changeActiveTrack: (track: string) => { },
    activeWeek: 1,
    changeActiveWeek: (week: number) => { },
    activeWorkouts: [],
});

export const UserProvider = ({ children }) => {
    const [activeTrack, setActiveTrack] = useState('Persist')
    const [activeWeek, setActiveWeek] = useState(1)
    const [activeWorkouts, setActiveWorkouts] = useState([])


    /**
     * The function "changeActiveTrack" takes a string parameter "track" and sets it as the active track.
     * @param {string} track - The `track` parameter is a string that represents the new active track.
     */
    const changeActiveTrack = (track: string) => {
        setActiveTrack(track);
    }

    /**
     * The function "changeActiveWeek" updates the active week to be displayed by setting it to the provided week number.
     * @param {number} week - The `week` parameter is a number that represents the week you want to set as
     * active.
     */
    const changeActiveWeek = (week: number) => {
        setActiveWeek(week);
    }

    //TODO: use helper/api.ts
    useEffect(() => {
        console.log('hello there, workouts are updating...')
        const baseURL = 'http://localhost:5139/';
        const resource = 'workouts'

        async function getWorkoutsByTrackAndWeek() {
            const response = await axios.get(`${baseURL}${resource}?track=${activeTrack.toLowerCase()}&week=${activeWeek}`);
            setActiveWorkouts(response.data);
        }

        getWorkoutsByTrackAndWeek();
    }, [activeTrack, activeWeek]);


    const value = { activeTrack, changeActiveTrack, activeWeek, changeActiveWeek, activeWorkouts };

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )

}

