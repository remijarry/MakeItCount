import { useContext, useState } from 'react';

import { useMsal } from '@azure/msal-react';
import Container from '@mui/material/Container';

import { Box, Card, CardContent, Typography } from '@mui/material';
import TrackSelector from '../components/track-selector/track-selector.component';
import { IWorkout } from '../models/workout';
import { Link } from 'react-router-dom';
import { UserContext } from '../contexts/userContext';

/***
 * Component to detail ID token claims with a description for each claim. For more details on ID token claims, please check the following links:
 * ID token Claims: https://docs.microsoft.com/en-us/azure/active-directory/develop/id-tokens#claims-in-an-id-token
 * Optional Claims:  https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-optional-claims#v10-and-v20-optional-claims-set
 */

const workouts: IWorkout[] = [
    {
        id: 132580649,
        shortDescription: "A) Coach's Notes<br/>B) KB Prep - Hinge & Push Structural Balance Pre-Fatigue<br/>C) Speed Sets - Front Squat<br/>D) KB Squat and Pull Structural Balance<br/>E) GRINDER - 15min Time Domain (5x3)<br/>\n",
        title: "Persist Full - Week 1 Day 1",
        workoutItems: [
            {
                id: 629085621,
                name: "Coach's Notes",
                info: "Monday Training Design\n\nWelcome to the new cycle! Monday will start off with a full body split. We will keep the upper body volume a little lower since Tuesday will be an upper body intensive day. Look for a Front Squat build similar to our Back Squat speed squat build from over a month ago if you've been with us. The focus on these squat progressions is to build speed at lower loads. Teach your brain to move fast.\n\nIf you are short on time today then I would encourage you to only perform 2 sets of the KB prep work and pass on the warm up.",
                position: 1,
                selectedExercises: []
            },
            {
                id: 629085619,
                name: "KB Prep - Hinge & Push Structural Balance Pre-Fatigue",
                info: "2-3 Sets\n1. KB Single-Leg RDL; 30X1; 4-5/leg;\nrest 30sec\n2. Tall Kneeling Kettlebell Press; 2111; 4-6reps\nrest 30sec\n3. Tall Kneeling KB Hip to Halo; 10/side\nrest 60sec and back to 1",
                position: 2,
                selectedExercises: [
                    {
                        "id": "172947",
                        "name": "Single Leg Kettlebell Romanian Deadlift",
                        "videoUrl": "https://youtu.be/z1q6B0I6DjY"
                    },
                    {
                        "id": "315131",
                        "name": "Tall Kneeling Kettlebell Press",
                        "videoUrl": "https://youtu.be/RuMLGWN9WHs"
                    },
                    {
                        "id": "2796660",
                        "name": "Tall Kneeling KB Hip to Halo",
                        "videoUrl": "https://www.youtube.com/watch?v=4frRMFUlaFs"
                    }
                ]
            },
            {
                "id": 629085622,
                "name": "Speed Sets - Front Squat",
                "info": "00X1; 8,8,8,8; rest 2:00-2:30 between sets\n\nComing off a longer time under tension build in the Front Squat we are going to hit a series of speed squat sets similar to that of 2 cycles ago, when we did this with the Back Squat.\n\nWith the front rack position at these speeds you will have to fight for good torso position much more. \n\n*if by chance you have chains or you are confident to perform banded squats for these speed sets you can!",
                "position": 3,
                "selectedExercises": [
                    {
                        "id": "298939",
                        "name": "Front Squat",
                        "videoUrl": "https://youtu.be/-iPN3LLg3Yo"
                    }
                ]
            },
            {
                "id": 629085620,
                "name": "KB Squat and Pull Structural Balance",
                "info": "3 Sets\n1. KB Suitcase Rear Foot Elevated Split Squat; 30X0; 4-6/leg\nrest 60sec\n2. Wide Grip Strict Pull Ups; 11X1; 4-6reps;\nrest 60sec and back to 1\n\n*Load your Wide Grip Pull Ups if you feel very strong here. ",
                "position": 4,
                "selectedExercises": [
                    {
                        "id": "92489",
                        "name": "Wide Grip Strict Pull Up",
                        "videoUrl": "https://www.youtube.com/watch?v=dWB-hEfgMD4"
                    },
                    {
                        "id": "3231329",
                        "name": "KB Suitcase Rear Foot Elevated Split Squat",
                        "videoUrl": "https://youtu.be/8BLIcCExK4I"
                    }
                ]
            },
            {
                "id": 629085618,
                "name": "GRINDER - 15min Time Domain (5x3)",
                "info": "5mins\n10m Quadruped Crawl Forward\n10m Quadruped Crawl Backward\n10 Russian Swings 32 / 24kg\n\nrest 2mins\n\n5mins\n15sec Side Star Plank R\n20m KB Overhead Carry R 32 / 24kg\n15sec Side Star Plank L\n20m KB Overhead Carry L 32 / 24kg\n\nrest 2mins\n\n5mins\n10 KB Plank Pull Through \n5 Goblet Curtsy Squats R\n10 Pike Leg Lift Overs\n5 Goblet Curtsy Squats L",
                "position": 5,
                "selectedExercises": [
                    {
                        "id": "315597",
                        "name": "Star Plank"
                    },
                    {
                        "id": "287793",
                        "name": "Quadruped Crawl"
                    },
                    {
                        "id": "168423",
                        "name": "Reverse Quadruped Crawl",
                        "videoUrl": "https://youtu.be/yTDvSXmwH2k"
                    },
                    {
                        "id": "232251",
                        "name": "Russian Kettlebell Swing",
                        "videoUrl": "https://www.youtube.com/watch?v=KkYOW3jDhoM"
                    },
                    {
                        "id": "315144",
                        "name": "Single Arm Kettlebell Overhead Carry",
                        "videoUrl": "https://youtu.be/UTV5o4Oi2KM"
                    },
                    {
                        "id": "554090",
                        "name": "KB Plank Pull Through",
                        "videoUrl": "https://www.youtube.com/watch?v=fKbu_2L94x8"
                    },
                    {
                        "id": "254799",
                        "name": "Goblet Curtsy Squat",
                        "videoUrl": "https://youtu.be/xClhGjz7p0A"
                    },
                    {
                        "id": "3191673",
                        "name": "Pike Leg Lift Overs",
                        "videoUrl": "https://youtu.be/3eO9S15-x-Q"
                    }
                ]
            }
        ],
        "warmUpExercises": [
            {
                "id": 234483,
                "name": "Turkish Get Up",
                "videoUrl": "https://www.youtube.com/watch?v=LkqIu3YpRNo"
            },
            {
                "id": 287793,
                "name": "Quadruped Crawl"
            },
            {
                "id": 266833,
                "name": "Alternating Box Step Up",
                "videoUrl": "https://youtu.be/lUSmIRNqt9w"
            }
        ],
        "warmupDescription": "2-3 Sets \n2 Turkish Get Up R\n10m Quadruped Crawl\n2 Turkish Get Up L  \n10 Alternating Box Step Ups (tall box - focus on keeping torso tall throughout step)",
        "coolDownExercises": [
            {
                "id": 1323557,
                "name": "Low Dragon Stretch"
            },
            {
                "id": 1693918,
                "name": "Childs Pose with Lat Stretch",
                "videoUrl": "https://www.youtube.com/watch?v=2pkLUbN34GI"
            },
            {
                "id": 41669,
                "name": "Static back",
                "videoUrl": "https://youtu.be/WmZGZwEO34Q"
            }
        ],
        "cooldownDescription": "Hips, Legs and Lats 1\n\n3min Static Back\n90sec Low Dragon/side\n90sec Childs Pose with Lat Stretch/side",
        "filePosition": 5,
        "order": 2,
        "trackName": "persist",
        "isBeginningOfCycle": true
    },
    {
        id: 132580650,
        shortDescription: "A) Coach's Notes<br/>B) KB Prep - Hinge & Push Structural Balance Pre-Fatigue<br/>C) Speed Sets - Front Squat<br/>D) KB Squat and Pull Structural Balance<br/>E) GRINDER - 15min Time Domain (5x3)<br/>\n",
        title: "Persist Full - Week 1 Day 2",
        workoutItems: [
            {
                id: 629085621,
                name: "Coach's Notes",
                info: "Monday Training Design\n\nWelcome to the new cycle! Monday will start off with a full body split. We will keep the upper body volume a little lower since Tuesday will be an upper body intensive day. Look for a Front Squat build similar to our Back Squat speed squat build from over a month ago if you've been with us. The focus on these squat progressions is to build speed at lower loads. Teach your brain to move fast.\n\nIf you are short on time today then I would encourage you to only perform 2 sets of the KB prep work and pass on the warm up.",
                position: 1,
                selectedExercises: []
            },
            {
                id: 629085619,
                name: "KB Prep - Hinge & Push Structural Balance Pre-Fatigue",
                info: "2-3 Sets\n1. KB Single-Leg RDL; 30X1; 4-5/leg;\nrest 30sec\n2. Tall Kneeling Kettlebell Press; 2111; 4-6reps\nrest 30sec\n3. Tall Kneeling KB Hip to Halo; 10/side\nrest 60sec and back to 1",
                position: 2,
                selectedExercises: [
                    {
                        "id": "172947",
                        "name": "Single Leg Kettlebell Romanian Deadlift",
                        "videoUrl": "https://youtu.be/z1q6B0I6DjY"
                    },
                    {
                        "id": "315131",
                        "name": "Tall Kneeling Kettlebell Press",
                        "videoUrl": "https://youtu.be/RuMLGWN9WHs"
                    },
                    {
                        "id": "2796660",
                        "name": "Tall Kneeling KB Hip to Halo",
                        "videoUrl": "https://www.youtube.com/watch?v=4frRMFUlaFs"
                    }
                ]
            },
            {
                "id": 629085622,
                "name": "Speed Sets - Front Squat",
                "info": "00X1; 8,8,8,8; rest 2:00-2:30 between sets\n\nComing off a longer time under tension build in the Front Squat we are going to hit a series of speed squat sets similar to that of 2 cycles ago, when we did this with the Back Squat.\n\nWith the front rack position at these speeds you will have to fight for good torso position much more. \n\n*if by chance you have chains or you are confident to perform banded squats for these speed sets you can!",
                "position": 3,
                "selectedExercises": [
                    {
                        "id": "298939",
                        "name": "Front Squat",
                        "videoUrl": "https://youtu.be/-iPN3LLg3Yo"
                    }
                ]
            },
            {
                "id": 629085620,
                "name": "KB Squat and Pull Structural Balance",
                "info": "3 Sets\n1. KB Suitcase Rear Foot Elevated Split Squat; 30X0; 4-6/leg\nrest 60sec\n2. Wide Grip Strict Pull Ups; 11X1; 4-6reps;\nrest 60sec and back to 1\n\n*Load your Wide Grip Pull Ups if you feel very strong here. ",
                "position": 4,
                "selectedExercises": [
                    {
                        "id": "92489",
                        "name": "Wide Grip Strict Pull Up",
                        "videoUrl": "https://www.youtube.com/watch?v=dWB-hEfgMD4"
                    },
                    {
                        "id": "3231329",
                        "name": "KB Suitcase Rear Foot Elevated Split Squat",
                        "videoUrl": "https://youtu.be/8BLIcCExK4I"
                    }
                ]
            },
            {
                "id": 629085618,
                "name": "GRINDER - 15min Time Domain (5x3)",
                "info": "5mins\n10m Quadruped Crawl Forward\n10m Quadruped Crawl Backward\n10 Russian Swings 32 / 24kg\n\nrest 2mins\n\n5mins\n15sec Side Star Plank R\n20m KB Overhead Carry R 32 / 24kg\n15sec Side Star Plank L\n20m KB Overhead Carry L 32 / 24kg\n\nrest 2mins\n\n5mins\n10 KB Plank Pull Through \n5 Goblet Curtsy Squats R\n10 Pike Leg Lift Overs\n5 Goblet Curtsy Squats L",
                "position": 5,
                "selectedExercises": [
                    {
                        "id": "315597",
                        "name": "Star Plank"
                    },
                    {
                        "id": "287793",
                        "name": "Quadruped Crawl"
                    },
                    {
                        "id": "168423",
                        "name": "Reverse Quadruped Crawl",
                        "videoUrl": "https://youtu.be/yTDvSXmwH2k"
                    },
                    {
                        "id": "232251",
                        "name": "Russian Kettlebell Swing",
                        "videoUrl": "https://www.youtube.com/watch?v=KkYOW3jDhoM"
                    },
                    {
                        "id": "315144",
                        "name": "Single Arm Kettlebell Overhead Carry",
                        "videoUrl": "https://youtu.be/UTV5o4Oi2KM"
                    },
                    {
                        "id": "554090",
                        "name": "KB Plank Pull Through",
                        "videoUrl": "https://www.youtube.com/watch?v=fKbu_2L94x8"
                    },
                    {
                        "id": "254799",
                        "name": "Goblet Curtsy Squat",
                        "videoUrl": "https://youtu.be/xClhGjz7p0A"
                    },
                    {
                        "id": "3191673",
                        "name": "Pike Leg Lift Overs",
                        "videoUrl": "https://youtu.be/3eO9S15-x-Q"
                    }
                ]
            }
        ],
        "warmUpExercises": [
            {
                "id": 234483,
                "name": "Turkish Get Up",
                "videoUrl": "https://www.youtube.com/watch?v=LkqIu3YpRNo"
            },
            {
                "id": 287793,
                "name": "Quadruped Crawl"
            },
            {
                "id": 266833,
                "name": "Alternating Box Step Up",
                "videoUrl": "https://youtu.be/lUSmIRNqt9w"
            }
        ],
        "warmupDescription": "2-3 Sets \n2 Turkish Get Up R\n10m Quadruped Crawl\n2 Turkish Get Up L  \n10 Alternating Box Step Ups (tall box - focus on keeping torso tall throughout step)",
        "coolDownExercises": [
            {
                "id": 1323557,
                "name": "Low Dragon Stretch"
            },
            {
                "id": 1693918,
                "name": "Childs Pose with Lat Stretch",
                "videoUrl": "https://www.youtube.com/watch?v=2pkLUbN34GI"
            },
            {
                "id": 41669,
                "name": "Static back",
                "videoUrl": "https://youtu.be/WmZGZwEO34Q"
            }
        ],
        "cooldownDescription": "Hips, Legs and Lats 1\n\n3min Static Back\n90sec Low Dragon/side\n90sec Childs Pose with Lat Stretch/side",
        "filePosition": 5,
        "order": 2,
        "trackName": "persist",
        "isBeginningOfCycle": true
    },
    {
        id: 132580651,
        shortDescription: "A) Coach's Notes<br/>B) KB Prep - Hinge & Push Structural Balance Pre-Fatigue<br/>C) Speed Sets - Front Squat<br/>D) KB Squat and Pull Structural Balance<br/>E) GRINDER - 15min Time Domain (5x3)<br/>\n",
        title: "Persist Full - Week 1 Day 3",
        workoutItems: [
            {
                id: 629085621,
                name: "Coach's Notes",
                info: "Monday Training Design\n\nWelcome to the new cycle! Monday will start off with a full body split. We will keep the upper body volume a little lower since Tuesday will be an upper body intensive day. Look for a Front Squat build similar to our Back Squat speed squat build from over a month ago if you've been with us. The focus on these squat progressions is to build speed at lower loads. Teach your brain to move fast.\n\nIf you are short on time today then I would encourage you to only perform 2 sets of the KB prep work and pass on the warm up.",
                position: 1,
                selectedExercises: []
            },
            {
                id: 629085619,
                name: "KB Prep - Hinge & Push Structural Balance Pre-Fatigue",
                info: "2-3 Sets\n1. KB Single-Leg RDL; 30X1; 4-5/leg;\nrest 30sec\n2. Tall Kneeling Kettlebell Press; 2111; 4-6reps\nrest 30sec\n3. Tall Kneeling KB Hip to Halo; 10/side\nrest 60sec and back to 1",
                position: 2,
                selectedExercises: [
                    {
                        "id": "172947",
                        "name": "Single Leg Kettlebell Romanian Deadlift",
                        "videoUrl": "https://youtu.be/z1q6B0I6DjY"
                    },
                    {
                        "id": "315131",
                        "name": "Tall Kneeling Kettlebell Press",
                        "videoUrl": "https://youtu.be/RuMLGWN9WHs"
                    },
                    {
                        "id": "2796660",
                        "name": "Tall Kneeling KB Hip to Halo",
                        "videoUrl": "https://www.youtube.com/watch?v=4frRMFUlaFs"
                    }
                ]
            },
            {
                "id": 629085622,
                "name": "Speed Sets - Front Squat",
                "info": "00X1; 8,8,8,8; rest 2:00-2:30 between sets\n\nComing off a longer time under tension build in the Front Squat we are going to hit a series of speed squat sets similar to that of 2 cycles ago, when we did this with the Back Squat.\n\nWith the front rack position at these speeds you will have to fight for good torso position much more. \n\n*if by chance you have chains or you are confident to perform banded squats for these speed sets you can!",
                "position": 3,
                "selectedExercises": [
                    {
                        "id": "298939",
                        "name": "Front Squat",
                        "videoUrl": "https://youtu.be/-iPN3LLg3Yo"
                    }
                ]
            },
            {
                "id": 629085620,
                "name": "KB Squat and Pull Structural Balance",
                "info": "3 Sets\n1. KB Suitcase Rear Foot Elevated Split Squat; 30X0; 4-6/leg\nrest 60sec\n2. Wide Grip Strict Pull Ups; 11X1; 4-6reps;\nrest 60sec and back to 1\n\n*Load your Wide Grip Pull Ups if you feel very strong here. ",
                "position": 4,
                "selectedExercises": [
                    {
                        "id": "92489",
                        "name": "Wide Grip Strict Pull Up",
                        "videoUrl": "https://www.youtube.com/watch?v=dWB-hEfgMD4"
                    },
                    {
                        "id": "3231329",
                        "name": "KB Suitcase Rear Foot Elevated Split Squat",
                        "videoUrl": "https://youtu.be/8BLIcCExK4I"
                    }
                ]
            },
            {
                "id": 629085618,
                "name": "GRINDER - 15min Time Domain (5x3)",
                "info": "5mins\n10m Quadruped Crawl Forward\n10m Quadruped Crawl Backward\n10 Russian Swings 32 / 24kg\n\nrest 2mins\n\n5mins\n15sec Side Star Plank R\n20m KB Overhead Carry R 32 / 24kg\n15sec Side Star Plank L\n20m KB Overhead Carry L 32 / 24kg\n\nrest 2mins\n\n5mins\n10 KB Plank Pull Through \n5 Goblet Curtsy Squats R\n10 Pike Leg Lift Overs\n5 Goblet Curtsy Squats L",
                "position": 5,
                "selectedExercises": [
                    {
                        "id": "315597",
                        "name": "Star Plank"
                    },
                    {
                        "id": "287793",
                        "name": "Quadruped Crawl"
                    },
                    {
                        "id": "168423",
                        "name": "Reverse Quadruped Crawl",
                        "videoUrl": "https://youtu.be/yTDvSXmwH2k"
                    },
                    {
                        "id": "232251",
                        "name": "Russian Kettlebell Swing",
                        "videoUrl": "https://www.youtube.com/watch?v=KkYOW3jDhoM"
                    },
                    {
                        "id": "315144",
                        "name": "Single Arm Kettlebell Overhead Carry",
                        "videoUrl": "https://youtu.be/UTV5o4Oi2KM"
                    },
                    {
                        "id": "554090",
                        "name": "KB Plank Pull Through",
                        "videoUrl": "https://www.youtube.com/watch?v=fKbu_2L94x8"
                    },
                    {
                        "id": "254799",
                        "name": "Goblet Curtsy Squat",
                        "videoUrl": "https://youtu.be/xClhGjz7p0A"
                    },
                    {
                        "id": "3191673",
                        "name": "Pike Leg Lift Overs",
                        "videoUrl": "https://youtu.be/3eO9S15-x-Q"
                    }
                ]
            }
        ],
        "warmUpExercises": [
            {
                "id": 234483,
                "name": "Turkish Get Up",
                "videoUrl": "https://www.youtube.com/watch?v=LkqIu3YpRNo"
            },
            {
                "id": 287793,
                "name": "Quadruped Crawl"
            },
            {
                "id": 266833,
                "name": "Alternating Box Step Up",
                "videoUrl": "https://youtu.be/lUSmIRNqt9w"
            }
        ],
        "warmupDescription": "2-3 Sets \n2 Turkish Get Up R\n10m Quadruped Crawl\n2 Turkish Get Up L  \n10 Alternating Box Step Ups (tall box - focus on keeping torso tall throughout step)",
        "coolDownExercises": [
            {
                "id": 1323557,
                "name": "Low Dragon Stretch"
            },
            {
                "id": 1693918,
                "name": "Childs Pose with Lat Stretch",
                "videoUrl": "https://www.youtube.com/watch?v=2pkLUbN34GI"
            },
            {
                "id": 41669,
                "name": "Static back",
                "videoUrl": "https://youtu.be/WmZGZwEO34Q"
            }
        ],
        "cooldownDescription": "Hips, Legs and Lats 1\n\n3min Static Back\n90sec Low Dragon/side\n90sec Childs Pose with Lat Stretch/side",
        "filePosition": 5,
        "order": 2,
        "trackName": "persist",
        "isBeginningOfCycle": true
    },
    {
        id: 132580652,
        shortDescription: "A) Coach's Notes<br/>B) KB Prep - Hinge & Push Structural Balance Pre-Fatigue<br/>C) Speed Sets - Front Squat<br/>D) KB Squat and Pull Structural Balance<br/>E) GRINDER - 15min Time Domain (5x3)<br/>\n",
        title: "Persist Full - Week 1 Day 4",
        workoutItems: [
            {
                id: 629085621,
                name: "Coach's Notes",
                info: "Monday Training Design\n\nWelcome to the new cycle! Monday will start off with a full body split. We will keep the upper body volume a little lower since Tuesday will be an upper body intensive day. Look for a Front Squat build similar to our Back Squat speed squat build from over a month ago if you've been with us. The focus on these squat progressions is to build speed at lower loads. Teach your brain to move fast.\n\nIf you are short on time today then I would encourage you to only perform 2 sets of the KB prep work and pass on the warm up.",
                position: 1,
                selectedExercises: []
            },
            {
                id: 629085619,
                name: "KB Prep - Hinge & Push Structural Balance Pre-Fatigue",
                info: "2-3 Sets\n1. KB Single-Leg RDL; 30X1; 4-5/leg;\nrest 30sec\n2. Tall Kneeling Kettlebell Press; 2111; 4-6reps\nrest 30sec\n3. Tall Kneeling KB Hip to Halo; 10/side\nrest 60sec and back to 1",
                position: 2,
                selectedExercises: [
                    {
                        "id": "172947",
                        "name": "Single Leg Kettlebell Romanian Deadlift",
                        "videoUrl": "https://youtu.be/z1q6B0I6DjY"
                    },
                    {
                        "id": "315131",
                        "name": "Tall Kneeling Kettlebell Press",
                        "videoUrl": "https://youtu.be/RuMLGWN9WHs"
                    },
                    {
                        "id": "2796660",
                        "name": "Tall Kneeling KB Hip to Halo",
                        "videoUrl": "https://www.youtube.com/watch?v=4frRMFUlaFs"
                    }
                ]
            },
            {
                "id": 629085622,
                "name": "Speed Sets - Front Squat",
                "info": "00X1; 8,8,8,8; rest 2:00-2:30 between sets\n\nComing off a longer time under tension build in the Front Squat we are going to hit a series of speed squat sets similar to that of 2 cycles ago, when we did this with the Back Squat.\n\nWith the front rack position at these speeds you will have to fight for good torso position much more. \n\n*if by chance you have chains or you are confident to perform banded squats for these speed sets you can!",
                "position": 3,
                "selectedExercises": [
                    {
                        "id": "298939",
                        "name": "Front Squat",
                        "videoUrl": "https://youtu.be/-iPN3LLg3Yo"
                    }
                ]
            },
            {
                "id": 629085620,
                "name": "KB Squat and Pull Structural Balance",
                "info": "3 Sets\n1. KB Suitcase Rear Foot Elevated Split Squat; 30X0; 4-6/leg\nrest 60sec\n2. Wide Grip Strict Pull Ups; 11X1; 4-6reps;\nrest 60sec and back to 1\n\n*Load your Wide Grip Pull Ups if you feel very strong here. ",
                "position": 4,
                "selectedExercises": [
                    {
                        "id": "92489",
                        "name": "Wide Grip Strict Pull Up",
                        "videoUrl": "https://www.youtube.com/watch?v=dWB-hEfgMD4"
                    },
                    {
                        "id": "3231329",
                        "name": "KB Suitcase Rear Foot Elevated Split Squat",
                        "videoUrl": "https://youtu.be/8BLIcCExK4I"
                    }
                ]
            },
            {
                "id": 629085618,
                "name": "GRINDER - 15min Time Domain (5x3)",
                "info": "5mins\n10m Quadruped Crawl Forward\n10m Quadruped Crawl Backward\n10 Russian Swings 32 / 24kg\n\nrest 2mins\n\n5mins\n15sec Side Star Plank R\n20m KB Overhead Carry R 32 / 24kg\n15sec Side Star Plank L\n20m KB Overhead Carry L 32 / 24kg\n\nrest 2mins\n\n5mins\n10 KB Plank Pull Through \n5 Goblet Curtsy Squats R\n10 Pike Leg Lift Overs\n5 Goblet Curtsy Squats L",
                "position": 5,
                "selectedExercises": [
                    {
                        "id": "315597",
                        "name": "Star Plank"
                    },
                    {
                        "id": "287793",
                        "name": "Quadruped Crawl"
                    },
                    {
                        "id": "168423",
                        "name": "Reverse Quadruped Crawl",
                        "videoUrl": "https://youtu.be/yTDvSXmwH2k"
                    },
                    {
                        "id": "232251",
                        "name": "Russian Kettlebell Swing",
                        "videoUrl": "https://www.youtube.com/watch?v=KkYOW3jDhoM"
                    },
                    {
                        "id": "315144",
                        "name": "Single Arm Kettlebell Overhead Carry",
                        "videoUrl": "https://youtu.be/UTV5o4Oi2KM"
                    },
                    {
                        "id": "554090",
                        "name": "KB Plank Pull Through",
                        "videoUrl": "https://www.youtube.com/watch?v=fKbu_2L94x8"
                    },
                    {
                        "id": "254799",
                        "name": "Goblet Curtsy Squat",
                        "videoUrl": "https://youtu.be/xClhGjz7p0A"
                    },
                    {
                        "id": "3191673",
                        "name": "Pike Leg Lift Overs",
                        "videoUrl": "https://youtu.be/3eO9S15-x-Q"
                    }
                ]
            }
        ],
        "warmUpExercises": [
            {
                "id": 234483,
                "name": "Turkish Get Up",
                "videoUrl": "https://www.youtube.com/watch?v=LkqIu3YpRNo"
            },
            {
                "id": 287793,
                "name": "Quadruped Crawl"
            },
            {
                "id": 266833,
                "name": "Alternating Box Step Up",
                "videoUrl": "https://youtu.be/lUSmIRNqt9w"
            }
        ],
        "warmupDescription": "2-3 Sets \n2 Turkish Get Up R\n10m Quadruped Crawl\n2 Turkish Get Up L  \n10 Alternating Box Step Ups (tall box - focus on keeping torso tall throughout step)",
        "coolDownExercises": [
            {
                "id": 1323557,
                "name": "Low Dragon Stretch"
            },
            {
                "id": 1693918,
                "name": "Childs Pose with Lat Stretch",
                "videoUrl": "https://www.youtube.com/watch?v=2pkLUbN34GI"
            },
            {
                "id": 41669,
                "name": "Static back",
                "videoUrl": "https://youtu.be/WmZGZwEO34Q"
            }
        ],
        "cooldownDescription": "Hips, Legs and Lats 1\n\n3min Static Back\n90sec Low Dragon/side\n90sec Childs Pose with Lat Stretch/side",
        "filePosition": 5,
        "order": 2,
        "trackName": "persist",
        "isBeginningOfCycle": true
    },
    {
        id: 132580653,
        shortDescription: "A) Coach's Notes<br/>B) KB Prep - Hinge & Push Structural Balance Pre-Fatigue<br/>C) Speed Sets - Front Squat<br/>D) KB Squat and Pull Structural Balance<br/>E) GRINDER - 15min Time Domain (5x3)<br/>\n",
        title: "Persist Full - Week 1 Day 5",
        workoutItems: [
            {
                id: 629085621,
                name: "Coach's Notes",
                info: "Monday Training Design\n\nWelcome to the new cycle! Monday will start off with a full body split. We will keep the upper body volume a little lower since Tuesday will be an upper body intensive day. Look for a Front Squat build similar to our Back Squat speed squat build from over a month ago if you've been with us. The focus on these squat progressions is to build speed at lower loads. Teach your brain to move fast.\n\nIf you are short on time today then I would encourage you to only perform 2 sets of the KB prep work and pass on the warm up.",
                position: 1,
                selectedExercises: []
            },
            {
                id: 629085619,
                name: "KB Prep - Hinge & Push Structural Balance Pre-Fatigue",
                info: "2-3 Sets\n1. KB Single-Leg RDL; 30X1; 4-5/leg;\nrest 30sec\n2. Tall Kneeling Kettlebell Press; 2111; 4-6reps\nrest 30sec\n3. Tall Kneeling KB Hip to Halo; 10/side\nrest 60sec and back to 1",
                position: 2,
                selectedExercises: [
                    {
                        "id": "172947",
                        "name": "Single Leg Kettlebell Romanian Deadlift",
                        "videoUrl": "https://youtu.be/z1q6B0I6DjY"
                    },
                    {
                        "id": "315131",
                        "name": "Tall Kneeling Kettlebell Press",
                        "videoUrl": "https://youtu.be/RuMLGWN9WHs"
                    },
                    {
                        "id": "2796660",
                        "name": "Tall Kneeling KB Hip to Halo",
                        "videoUrl": "https://www.youtube.com/watch?v=4frRMFUlaFs"
                    }
                ]
            },
            {
                "id": 629085622,
                "name": "Speed Sets - Front Squat",
                "info": "00X1; 8,8,8,8; rest 2:00-2:30 between sets\n\nComing off a longer time under tension build in the Front Squat we are going to hit a series of speed squat sets similar to that of 2 cycles ago, when we did this with the Back Squat.\n\nWith the front rack position at these speeds you will have to fight for good torso position much more. \n\n*if by chance you have chains or you are confident to perform banded squats for these speed sets you can!",
                "position": 3,
                "selectedExercises": [
                    {
                        "id": "298939",
                        "name": "Front Squat",
                        "videoUrl": "https://youtu.be/-iPN3LLg3Yo"
                    }
                ]
            },
            {
                "id": 629085620,
                "name": "KB Squat and Pull Structural Balance",
                "info": "3 Sets\n1. KB Suitcase Rear Foot Elevated Split Squat; 30X0; 4-6/leg\nrest 60sec\n2. Wide Grip Strict Pull Ups; 11X1; 4-6reps;\nrest 60sec and back to 1\n\n*Load your Wide Grip Pull Ups if you feel very strong here. ",
                "position": 4,
                "selectedExercises": [
                    {
                        "id": "92489",
                        "name": "Wide Grip Strict Pull Up",
                        "videoUrl": "https://www.youtube.com/watch?v=dWB-hEfgMD4"
                    },
                    {
                        "id": "3231329",
                        "name": "KB Suitcase Rear Foot Elevated Split Squat",
                        "videoUrl": "https://youtu.be/8BLIcCExK4I"
                    }
                ]
            },
            {
                "id": 629085618,
                "name": "GRINDER - 15min Time Domain (5x3)",
                "info": "5mins\n10m Quadruped Crawl Forward\n10m Quadruped Crawl Backward\n10 Russian Swings 32 / 24kg\n\nrest 2mins\n\n5mins\n15sec Side Star Plank R\n20m KB Overhead Carry R 32 / 24kg\n15sec Side Star Plank L\n20m KB Overhead Carry L 32 / 24kg\n\nrest 2mins\n\n5mins\n10 KB Plank Pull Through \n5 Goblet Curtsy Squats R\n10 Pike Leg Lift Overs\n5 Goblet Curtsy Squats L",
                "position": 5,
                "selectedExercises": [
                    {
                        "id": "315597",
                        "name": "Star Plank"
                    },
                    {
                        "id": "287793",
                        "name": "Quadruped Crawl"
                    },
                    {
                        "id": "168423",
                        "name": "Reverse Quadruped Crawl",
                        "videoUrl": "https://youtu.be/yTDvSXmwH2k"
                    },
                    {
                        "id": "232251",
                        "name": "Russian Kettlebell Swing",
                        "videoUrl": "https://www.youtube.com/watch?v=KkYOW3jDhoM"
                    },
                    {
                        "id": "315144",
                        "name": "Single Arm Kettlebell Overhead Carry",
                        "videoUrl": "https://youtu.be/UTV5o4Oi2KM"
                    },
                    {
                        "id": "554090",
                        "name": "KB Plank Pull Through",
                        "videoUrl": "https://www.youtube.com/watch?v=fKbu_2L94x8"
                    },
                    {
                        "id": "254799",
                        "name": "Goblet Curtsy Squat",
                        "videoUrl": "https://youtu.be/xClhGjz7p0A"
                    },
                    {
                        "id": "3191673",
                        "name": "Pike Leg Lift Overs",
                        "videoUrl": "https://youtu.be/3eO9S15-x-Q"
                    }
                ]
            }
        ],
        "warmUpExercises": [
            {
                "id": 234483,
                "name": "Turkish Get Up",
                "videoUrl": "https://www.youtube.com/watch?v=LkqIu3YpRNo"
            },
            {
                "id": 287793,
                "name": "Quadruped Crawl"
            },
            {
                "id": 266833,
                "name": "Alternating Box Step Up",
                "videoUrl": "https://youtu.be/lUSmIRNqt9w"
            }
        ],
        "warmupDescription": "2-3 Sets \n2 Turkish Get Up R\n10m Quadruped Crawl\n2 Turkish Get Up L  \n10 Alternating Box Step Ups (tall box - focus on keeping torso tall throughout step)",
        "coolDownExercises": [
            {
                "id": 1323557,
                "name": "Low Dragon Stretch"
            },
            {
                "id": 1693918,
                "name": "Childs Pose with Lat Stretch",
                "videoUrl": "https://www.youtube.com/watch?v=2pkLUbN34GI"
            },
            {
                "id": 41669,
                "name": "Static back",
                "videoUrl": "https://youtu.be/WmZGZwEO34Q"
            }
        ],
        "cooldownDescription": "Hips, Legs and Lats 1\n\n3min Static Back\n90sec Low Dragon/side\n90sec Childs Pose with Lat Stretch/side",
        "filePosition": 5,
        "order": 2,
        "trackName": "persist",
        "isBeginningOfCycle": true
    },
]



export const Home = () => {
    const { instance } = useMsal();
    const activeAccount = instance.getActiveAccount();
    const userSettings = useContext(UserContext);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container maxWidth="xl" sx={{
                padding: 0
            }}>
                <Box>
                    <Card sx={{ minWidth: 275, textAlign: 'left' }}>
                        <CardContent sx={{ paddingTop: 0 }}>
                            <TrackSelector />
                            {userSettings.activeWorkouts?.map((workout: IWorkout) => (
                                <Link to={`/workout/${workout.id}`} key={workout.id}>
                                    <Card key={workout.id}
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