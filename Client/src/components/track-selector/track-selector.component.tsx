import React from 'react'
import { FormControl } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const TrackSelector = () => {
    return (
        <FormControl fullWidth sx={{
            marginTop: 2,
            marginBottom: 1
        }}>

            <InputLabel id="demo-simple-select-label">Track</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value='Persist'
                label="Track"
            //onChange={e => changeTrack(e?.target.value as string)}
            >
                <MenuItem value={'Persist'}>Persist</MenuItem>
                <MenuItem value={'Pump'}>Pump</MenuItem>
                <MenuItem value={'Minimalist'}>Minimalist</MenuItem>
                <MenuItem value={'Pillars'}>Pillars</MenuItem>
            </Select>
        </FormControl>
    )
}

export default TrackSelector