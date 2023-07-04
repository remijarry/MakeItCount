import React, { useContext } from 'react'
import {Stack, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { UserContext } from '../../contexts/userContext';

const menuItems = ['Persist', 'Pump', 'Minimalist', 'Pillars']

const TrackSelector = () => {
    const userSettings = useContext(UserContext);

    return (
        <Stack direction='row' justifyContent={'center'} sx={{
            marginTop: 1,
            marginBottom: 1
        }}>
            <ToggleButtonGroup
                sx={{
                    flex: 1
                }}
                value={userSettings.activeTrack}
                exclusive
                onChange={(e) => userSettings.changeActiveTrack(e.target.value)}
            >
                {menuItems.map((track: string, index: number) => (
                    <ToggleButton sx={{
                        borderRadius: 0,
                        flex: 1
                    }} value={track}>{track}
                    </ToggleButton>
                ))}
            </ToggleButtonGroup>
        </Stack>
    )
}

export default TrackSelector