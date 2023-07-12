import React from 'react'
import PageLayout from '../components/page-layout'
import WeekSelector from '../components/week-selector'
import TrackSelector from '../components/track-selector'

const ExercisePlan = () => {
    return (
        <PageLayout>
            <WeekSelector />
            <TrackSelector />
        </PageLayout>
    )
}

export default ExercisePlan