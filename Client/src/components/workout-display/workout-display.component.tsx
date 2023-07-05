import React from 'react'
import { Box, Card, CardContent, Grid, Button, Stack, Container, Typography } from '@mui/material'
import { IExercise, IWorkout, IWorkoutItem } from '../../models/workout'
import AccordionSection from '../accordion/accordion-section.component'
import ExerciseAccordion from '../exercise-accordion/exercise-accordion.component'
import { useLocation, useNavigate } from 'react-router-dom';
import TrackSelector from '../track-selector/track-selector.component';

const WorkoutDisplay = () => {
  const coachsNotesIndex = 0; // we dont log any results for coachs notes
  const { state } = useLocation();
  const wod = state as IWorkout;
  const splitAndMapString = (str: string | null | undefined) => {
    if (!str) return (<span></span>);

    const splitStr = str.split('\n');
    return splitStr.map((line: string, id: number) => (
      <span key={id}>
        {line}
        <br />
      </span>
    ));
  }

  console.log('wod ', wod);
  console.log(wod.cooldownExercises);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container maxWidth="xl" sx={{
        padding: 0
      }}>
        <Box>
          <Card sx={{ minWidth: 275, textAlign: 'left' }}>
            <CardContent sx={{ paddingTop: 0 }}>
              <TrackSelector activeTrack={wod.trackName} />
              {wod?.warmupExercises && wod.warmupExercises?.length > 0 && (
                <AccordionSection title='Warmup' titleVariant='h6' content={splitAndMapString(wod?.warmupDescription)}>
                  {wod?.warmupExercises?.map((exercise: IExercise) => (
                    <ExerciseAccordion key={exercise.exerciseId} name={exercise.name} videoId={exercise.videoId ? exercise.videoId : ''} titleVariant='caption' />
                  ))}
                </AccordionSection>
              )}

              {wod?.workoutItems?.map((item: IWorkoutItem, index: number) => (
                <AccordionSection key={index} title={item.name} titleVariant='subtitle1' content={splitAndMapString(item.info)}>
                  {index > coachsNotesIndex && (
                    <Stack sx={{
                      marginBottom: 2,
                    }} justifyContent={'center'} spacing={5} direction="row">
                      <Button variant="text">Prepare</Button>
                      <Button variant="contained">Log Your Results</Button>
                    </Stack>
                  )}
                </AccordionSection>
              ))}

              {wod?.cooldownExercises && wod.cooldownExercises?.length > 0 && (
                <AccordionSection title='Cooldown' titleVariant='h6' content={splitAndMapString(wod?.cooldownDescription)}>
                  {wod?.cooldownExercises?.map((exercise: IExercise, index: number) => (
                    <ExerciseAccordion key={index} name={exercise.name} videoId={exercise.videoId ? exercise.videoId : ''} titleVariant='caption' />
                  ))}
                </AccordionSection>
              )}


            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  )
}

export default WorkoutDisplay