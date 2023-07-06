import { useContext, useState } from 'react';

import Container from '@mui/material/Container';
import { Box, Card, CardContent, Typography } from '@mui/material';
import TrackSelector from '../components/track-selector/track-selector.component';
import { IWorkout } from '../models/workout';
import { Link } from 'react-router-dom';
import { AppContext } from '../contexts/appContext';

/***
 * Component to detail ID token claims with a description for each claim. For more details on ID token claims, please check the following links:
 * ID token Claims: https://docs.microsoft.com/en-us/azure/active-directory/develop/id-tokens#claims-in-an-id-token
 * Optional Claims:  https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-optional-claims#v10-and-v20-optional-claims-set
 */


export const Home = () => {
    const appState = useContext(AppContext);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container maxWidth="xl" sx={{
                padding: 0
            }}>
                <Box>
                    <Card sx={{ minWidth: 275, textAlign: 'left' }}>
                        <CardContent sx={{ paddingTop: 0 }}>
                            <TrackSelector activeTrack={appState.activeTrack} changeActiveTrack={appState.changeActiveTrack} />
                            {appState.activeWorkouts?.map((workout: IWorkout) => (
                                <Link
                                    to={`/workout/${workout.workoutId}`}
                                    state={workout}
                                    key={workout.workoutId}>
                                    <Card key={workout.workoutId}
                                        raised={true} sx={{
                                            marginBottom: 2
                                        }}>
                                        <CardContent>
                                            <Typography variant="h5" component='div'>
                                                {workout.title}
                                            </Typography>
                                            <Typography variant="subtitle2" component='div'>
                                                <div dangerouslySetInnerHTML={{ __html: workout.shortDescription }}>

                                                </div>
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Link>
                            ))}
                        </CardContent>
                    </Card>
                </Box>
            </Container>
        </Box >
    );
};

export default Home;