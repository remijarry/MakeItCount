import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Profile from '../pages/Profile'
import Journal from '../pages/Journal'
import Stretchings from '../pages/Stretchings'
import Account from '../pages/Account'
import Navigation from '../components/navigation/navigation.component'
import Dashboard from '../pages/Dashboard'
import Home from '../pages/Home'
import WorkoutDisplay from '../components/workout-display/workout-display.component'

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path="workout/:id" element={<WorkoutDisplay />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="profile" element={<Profile />} />
                <Route path="journal" element={<Journal />} />
                <Route path="stretchings" element={<Stretchings />} />
                <Route path="account" element={<Account />} />
            </Route>
        </Routes>
    )
}

export default Routing;