import React, { useContext, useState } from 'react';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import './week-selector.css'
import { AppContext } from '../../contexts/appContext';

// interface WeekPickerProps {
//     currentWeekNumber: number;
//     selectedWeekNumber: number;
//     changeWeekNumber: (weekNumber: number) => void;
//     canPickWeek: boolean;
// }


const cycleStartWeeks = new Set([1, 7, 14, 20, 27, 33, 40, 46]);

const WeekSelector = () => {
    const userSettings = useContext(AppContext);
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const canPickWeek = true;
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (canPickWeek) {
            setAnchorEl(event.currentTarget);
        }
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <>
            <Typography variant="h4" className={'test'} component="div" align='center' sx={{ flexGrow: 1 }}>
                <Button onClick={handleClick} variant="text" endIcon={<PlayArrowIcon
                    sx={{ transform: 'rotate(90deg)' }} />} sx={{
                        color: 'grey.50',
                        textTransform: 'capitalize',
                        letterSpacing: 1,
                        fontSize: 24
                    }}>
                    Week {userSettings.activeWeek.toString()}
                </Button>
            </Typography>
            {canPickWeek && (
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                >
                    <Box sx={{
                        overflowX: 'hidden',
                        width: '320px',
                        height: '308px',
                        marginTop: '15px',
                        marginRight: '5px',
                        marginBottom: '0px',
                        marginLeft: '10px',
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        <Box sx={{ opacity: 1 }}>
                            <Grid container>
                                {[...Array(52)].map((e, i) => (
                                    <Grid key={i} item xs={12 / 7} onClick={() => { userSettings.changeActiveWeek(i + 1); handleClose() }}>
                                        <Typography
                                            variant='subtitle1'
                                            className={`number ${(i + 1) === userSettings.activeWeek ? 'selected' : ''}`}>
                                            {i + 1}
                                            {cycleStartWeeks.has(i + 1) && <span className='cycle-start'>*</span>}
                                        </Typography>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Box>
                </Popover>
            )}
        </>
    );
};

export default WeekSelector;