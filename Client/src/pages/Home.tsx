import { useMsal } from '@azure/msal-react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent'
import AccordionSection from '../components/accordion/accordion-section.component';
import ExerciseAccordion from '../components/exercise-accordion/exercise-accordion.component';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { FormControl } from '@mui/material';

/***
 * Component to detail ID token claims with a description for each claim. For more details on ID token claims, please check the following links:
 * ID token Claims: https://docs.microsoft.com/en-us/azure/active-directory/develop/id-tokens#claims-in-an-id-token
 * Optional Claims:  https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-optional-claims#v10-and-v20-optional-claims-set
 */

const menuItems = ['Persist', 'Pump', 'Minimalist', 'Pillars']

export const Home = () => {
    const { instance } = useMsal();
    const activeAccount = instance.getActiveAccount();

    return (

        <Container maxWidth="xl" sx={{
            padding: 0
        }}>

            <Box sx={{ flexGrow: 1 }}>
                <FormControl fullWidth sx={{
                    marginTop: 2,
                    marginBottom: 1
                }}>

                    <InputLabel id="demo-simple-select-label">Track</InputLabel>
                    <Select
                        sx={{
                            textAlign: 'left',
                            paddingLeft: '16px'
                        }}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={'Persist'}
                        label="Track"
                    // onChange={e => changeTrack(e?.target.value as string)}
                    >
                        {menuItems.map((track: string, index: number) => (
                            <MenuItem
                                sx={{
                                    paddingLeft: '32px'
                                }}
                                key={index}
                                value={track}>{track}</MenuItem>
                        ))}
                        {/* <MenuItem value={'Pump'}>Pump</MenuItem>
                        <MenuItem value={'Minimalist'}>Minimalist</MenuItem>
                        <MenuItem value={'Pillars'}>Pillars</MenuItem> */}
                    </Select>
                </FormControl>
                <Card sx={{ minWidth: 275, marginTop: 2 }}>
                    <Typography sx={{ fontSize: 14, textAlign: 'center', marginTop: 2 }} color="text.secondary" gutterBottom>
                        Wod Title
                    </Typography>
                    <CardContent sx={{ paddingTop: 0 }}>
                        <AccordionSection title='Warmup' titleVariant='h6' content={'warm up descrition'}>
                            <ExerciseAccordion key={1} name={'exercise.name'} videoId={'exercise.videoId'} titleVariant='caption' />
                        </AccordionSection>
                        <AccordionSection title='Coach Notes' titleVariant='h6' content={'warm up descrition'}>
                            <ExerciseAccordion key={1} name={'exercise.name'} videoId={'exercise.videoId'} titleVariant='caption' />
                        </AccordionSection>
                        <AccordionSection title='Strength Balance' titleVariant='h6' content={'warm up descrition'}>
                            <ExerciseAccordion key={1} name={'exercise.name'} videoId={'exercise.videoId'} titleVariant='caption' />
                        </AccordionSection>
                        <AccordionSection title='Speed Strength' titleVariant='h6' content={'warm up descrition'}>
                            <ExerciseAccordion key={1} name={'exercise.name'} videoId={'exercise.videoId'} titleVariant='caption' />
                        </AccordionSection>
                        <AccordionSection title='Functional Pump conditioning' titleVariant='h6' content={'warm up descrition'}>
                            <ExerciseAccordion key={1} name={'exercise.name'} videoId={'exercise.videoId'} titleVariant='caption' />
                        </AccordionSection>
                    </CardContent>
                </Card>
                {/* {showLogResults && <LogResults isOpen={showLogResults} handleCloseShowResult={handleCloseShowResult} />} */}
            </Box >
        </Container>

    );
};

export default Home;