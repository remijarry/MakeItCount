import React, { useContext } from 'react'
import { FormControl } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { UserContext } from '../../contexts/userContext';

const menuItems = ['Persist', 'Pump', 'Minimalist', 'Pillars']

const TrackSelector = () => {
    const userSettings = useContext(UserContext);

    return (
        <FormControl fullWidth sx={{
            marginTop: 2,
            marginBottom: 1
        }}>

            <InputLabel id="track-select-label">Track</InputLabel>
            <Select
                sx={{
                    textAlign: 'left',

                }}
                labelId="track-select-label"
                id="track-select"
                value={userSettings.activeTrack}
                label="Track"
                onChange={e => userSettings.changeActiveTrack(e?.target.value as string)} //todo: make an api call to get the track data
            >
                {menuItems.map((track: string, index: number) => (
                    <MenuItem

                        key={index}
                        value={track}>{track}</MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export default TrackSelector