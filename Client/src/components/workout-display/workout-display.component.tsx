import React from 'react'
import { Box, Card, Typography, CardContent, Grid, Button } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IExercise, IWorkoutItem } from '../../models/workout'
import AccordionSection from '../accordion/accordion-section.component'
import ExerciseAccordion from '../exercise-accordion/exercise-accordion.component'
import { useNavigate } from 'react-router-dom';

const wod = {
  "id": 225577916,
  "shortDescription": "A) Coach's Notes<br/>B) Aerobic Bodybuidlling - Pre-Fatigue<br/>C) SuperSet #1 <br/>D) SuperSet #2<br/>E) Ascending Fatigued Triplet<br/>\n",
  "title": "Pump Week 1 - Day 1",
  "workoutItems": [
    {
      "id": 1108333198,
      "name": "Coach's Notes",
      "info": "PUMP Mondays\n\nWelcome to the beginning of the next 6-week PUMP training cycle. I'm excited to be bringing you some powerful CORE SUPERSET MOVEMENTS over the next 6 weeks.\n\nIf you are new to FBB, be sure to check out https://functional-bodybuilding.com/getting-started-with-persist/ and familiarize yourself with tempo, choosing loads, reading workouts, and the training concepts you'll see here. You'll also find your bonus ebooks in the Account - Documents section in TrueCoach - we'll send more info out soon about the Practical Protein Challenge starting Monday, Jan 10!\n\nWe will be experimenting with increasing your volume and intensity every 2 weeks by reducing the amount of rest you get and also increasing the number of sets you are asked to perform in certain SuperSets.\n\nThe first two weeks should fit nicely inside the 60min time frame per session. As we increase sets in later weeks, you might find the time frame gets slightly longer. Be sure to reference the SHORT ON TIME notes for our suggestions on how to stay inside 75mins.\n\nMondays are an upper-body pulling day and will focus predominantly on the upper back and biceps.\n\nSHORT ON TIME NOTES\nWarm-Ups - 2 Rounds only\nB - Pre Fatigue - 9-12mins Only\nC- SuperSet #2 - Consider only 2 Sets",
      "position": 1,
      "selectedExercises": [
        {
          "id": "6403006",
          "name": "What Is Tempo",
          "videoId": "sAv4TWd-Wz4"
        }
      ]
    },
    {
      "id": 1108333178,
      "name": "Aerobic Bodybuidlling - Pre-Fatigue",
      "info": "Bike 12-15mins @ Easy Pace\n*every 3mins get off the bike and perform\n8 Ring Rows\n10sec Ring Row Hold at top of last rep\n12 Band Pull Aparts",
      "position": 2,
      "selectedExercises": [
        {
          "id": "867937",
          "name": "Band Pull Apart",
          "videoId": "MnDpmNYUjbc"
        },
        {
          "id": "231373",
          "name": "Ring Row",
          "videoId": "EN6ubEkzMC0&index=40&list=PLtzeqj0zQWd_QHAZbdKYqhYW4O3t16abN"
        },
        {
          "id": "254796",
          "name": "Ring Row Hold",
          "videoId": "xG8vvYKaNfw"
        }
      ]
    },
    {
      "id": 1108333204,
      "name": "SuperSet #1 ",
      "info": "3 Sets\n1. T Bar Row; 31X1; 6-8 reps\nrest 30sec\n2. Banded KB Pull-Over; 3010; 10-12 reps\nrest 90-120sec and back to 1",
      "position": 3,
      "selectedExercises": [
        {
          "id": "598107",
          "name": "T Bar Row",
          "videoId": "-4DgImN_G7o"
        },
        {
          "id": "2701549",
          "name": "Banded KB Pull-Over",
          "videoId": "9RKYQ19jXdc"
        },
        {
          "id": "6800772",
          "name": "Banded KB Pull Over Set Up Explanation",
          "videoId": "_P-SOhIpPFA"
        },
        {
          "id": "6403006",
          "name": "What Is Tempo",
          "videoId": "sAv4TWd-Wz4"
        }
      ]
    },
    {
      "id": 1108333211,
      "name": "SuperSet #2",
      "info": "3 Sets\n1. Incline Bench Dumbbell Bicep Curl; 20X0; 8-10 reps\nrest 60sec\n2. Tripod Elbowing Row; 2011; 8-10/arm\nrest 60sec and back to 1",
      "position": 4,
      "selectedExercises": [
        {
          "id": "1141754",
          "name": "Incline Bench Dumbbell Bicep Curl",
          "videoId": "wSA84j9ZG4c"
        },
        {
          "id": "5910360",
          "name": "Tripod Dumbbell Elbowing Row",
          "videoId": "qgyR571mwsY"
        }
      ]
    },
    {
      "id": 1108333173,
      "name": "Ascending Fatigued Triplet",
      "info": "10mins Continuous Effort\n2-4-6-8-10-12...\nKB Gorilla Row 32 / 24kg\nHand Release Push Up\nCalorie Bike\n\nCliff - Round of 12, 70# KB (did rows L+R = 1), C2 bike",
      "position": 5,
      "selectedExercises": [
        {
          "id": "763704",
          "name": "KB Gorilla Row",
          "videoId": "Ln1j7lm6SrE"
        },
        {
          "id": "367426",
          "name": "Hand Release Push Ups",
          "videoId": "zPrcw-WIdZs"
        }
      ]
    }
  ],
  "warmUpExercises": [
    {
      "id": "6487806",
      "name": "Shoulder Extension Bridge",
      "videoId": "vXIzTJf1uZI"
    },
    {
      "id": "898003",
      "name": "Scapular Pull Ups",
      "videoId": "pE8PJsWEV7k"
    },
    {
      "id": "1381791",
      "name": "Yoga Push Up",
      "videoId": "_AOxb-7uwEE"
    },
    {
      "id": "368189",
      "name": "Kettlebell Windmill",
      "videoId": "3rtUK_jUv4s"
    },
    {
      "id": "6061112",
      "name": "KB Burpee",
      "videoId": "6K1oEALbmxE"
    }
  ],
  "warmupDescription": "FBB Upper 3.0\n\nCardio of Choice x 3-5 minutes\n+ \n2-3 Rounds \n1. Scapular Pull-ups x 5reps\n*Keep elbows straight. Initiate the movement by retracing the shoulder blades.\n2. Shoulder Extension Bridge x 5reps\n*Keep your shoulder blades down and back (chest up) during this entire movement. \n3. Yoga Pushup x 5reps\n*Press into the floor to stay active through the shoulder blades. \n4. Kettlebell Windmill x 5/side \n*Reach up toward the ceiling and allow the shoulder to rotate naturally. \n5. KB Burpee x 10reps\n*Control lowering and allow the shoulders to move into a deep extension position. \n\n*Intention: Prep the scapula and thoracic spine in preparation for upper body pressing and pulling.  \n",
  "coolDownExercises": [
    {
      "id": "2356927",
      "name": "Passive Hang",
      "videoId": "XwryUTVQNIU"
    },
    {
      "id": "628561",
      "name": "Supinated Passive Hang",
      "videoId": "Xz9R2YSJbL8"
    },
    {
      "id": "5888676",
      "name": "Seated Barbell Shoulder Extension Stretch",
      "videoId": "8CI6XWlhOmg"
    },
    {
      "id": "6487792",
      "name": "Prayer Stretch",
      "videoId": "OA27FMUQ2Ns"
    },
    {
      "id": "6487788",
      "name": "Shoulder Extension Stretch on Floor",
      "videoId": "-fMizPggZKE"
    }
  ],
  "cooldownDescription": "FBB Shoulder Cooldown\n\nOn all stretches. FOCUS, breathe deep, exhale slowly and sink into the stretch. I am sure the 30-60 sec of the stretch will require some fidgeting, but once you find a good spot relax deeply. \n\n1. Passive Hang x 1 minute \n*Support the feet to take load off of the shoulders. You may also use lifting straps to make it easier on your grip and you can fully relax into the stretch. \n\n2. Supianted Passive Hang x 1 minute\n*Support the feet to take load off of the shoulders. You may also use lifting straps to make it easier on your grip and you can fully relax into the stretch. \n\n3. Seated Shoulder Extension with Barbell OR Shoulder Extension on Floor x 2 minutes\n*Find a comfortable positions for the shoulders. Keep your shoulders down and back during the stretch. \n\n4. Prayer Stretch x 2 min or 1 min/side\n*Perform on the bench as demonstrated, or put one elbow against the wall and lean into it. ",
  "order": 4,
  "trackName": "pump"
}



const WorkoutDisplay = () => {
  const navigate = useNavigate();
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

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Card sx={{ minWidth: 275, marginTop: 2 }}>
        <Grid container>
          <Grid item xs={5}>
            <Typography variant='h4' sx={{ textAlign: 'left', marginLeft: '3%', marginTop: '2px' }}>
              <Button
                variant="text"
                startIcon={<ArrowBackIcon />}
                onClick={() => { navigate(-1) }}
                sx={{
                  color: 'black',
                  textTransform: 'capitalize',
                  fontSize: 16,
                }}>
                Back
              </Button>
            </Typography>
          </Grid>
          <Grid item xs={7}>
            <Typography sx={{ fontSize: 14, textAlign: 'left', marginTop: 2 }} color="text.secondary" gutterBottom>
              {wod?.title}
            </Typography>
          </Grid>
        </Grid>
        <CardContent sx={{ paddingTop: 0 }}>
          {wod && wod.warmUpExercises && wod.warmUpExercises?.length > 0 && (
            <AccordionSection title='Warmup' titleVariant='h6' content={splitAndMapString(wod?.warmupDescription)}>
              {wod?.warmUpExercises?.map((exercise: IExercise) => (
                <ExerciseAccordion key={exercise.id} name={exercise.name} videoId={exercise.videoId ? exercise.videoId : exercise.videoUrl} titleVariant='caption' />
              ))}
            </AccordionSection>
          )}
          {wod?.workoutItems?.map((item: IWorkoutItem, index: number) => (
            <AccordionSection key={index} title={item.name} titleVariant='subtitle1' content={splitAndMapString(item.info)}>
              {item.selectedExercises?.map((exercise: IExercise, index: number) => (
                <ExerciseAccordion key={index} name={exercise.name} videoId={exercise.videoId ? exercise.videoId : exercise.videoUrl} titleVariant='caption' />
              ))}
            </AccordionSection>
          ))}
          {wod && wod.coolDownExercises && wod.coolDownExercises?.length > 0 && (
            <AccordionSection title='Cooldown' titleVariant='h6' content={splitAndMapString(wod?.cooldownDescription)}>
              {wod?.coolDownExercises?.map((exercise: IExercise, index: number) => (
                <ExerciseAccordion key={index} name={exercise.name} videoId={exercise.videoId ? exercise.videoId : exercise.videoUrl} titleVariant='caption' />
              ))}
            </AccordionSection>
          )}
        </CardContent>
      </Card>
      {/* {showLogResults && <LogResults isOpen={showLogResults} handleCloseShowResult={handleCloseShowResult} />} */}
    </Box >
  )
}

export default WorkoutDisplay