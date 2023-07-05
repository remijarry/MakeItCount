import React, { useContext } from 'react'
import { Stack, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { AppContext } from '../../contexts/appContext';

const menuItems = ['persist', 'pump', 'minimalist', 'pillars']

interface ITrackSelectorProps {
    activeTrack?: string;
    changeActiveTrack?: (track: string) => void;
}

const TrackSelector = ({ activeTrack, changeActiveTrack }: ITrackSelectorProps) => {
    return (
        <Stack direction='row' justifyContent={'center'} sx={{
            marginTop: 1,
            marginBottom: 1
        }}>
            <ToggleButtonGroup
                sx={{
                    flex: 1
                }}
                value={activeTrack}
                exclusive
                onChange={(e) => {
                    if (changeActiveTrack) {
                        changeActiveTrack(e.target.value);
                    }
                }}
            >
                {menuItems.map((track: string) => (
                    <ToggleButton sx={{
                        key: { track },
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