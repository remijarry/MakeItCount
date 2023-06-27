import React from 'react'
import { FormControl } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

interface ITrackSelector {
    activeTrack: string,
    changeTrack: (track: string) => void
}

const menuItems = ['Persist', 'Pump', 'Minimalist', 'Pillars']

const TrackSelector = ({ activeTrack, changeTrack }: ITrackSelector) => {
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
                value={activeTrack}
                label="Track"
                onChange={e => changeTrack(e?.target.value as string)}
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