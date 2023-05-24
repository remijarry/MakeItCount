import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import Journal from '../pages/Journal'
import Stretchings from '../pages/Stretchings'
import Account from '../pages/Account'

const Routing = () => {
    return (
        <Routes>
            <Route path="*" element={<Home />}>
                <Route path="profile" element={<Profile />} />
                <Route path="journal" element={<Journal />} />
                <Route path="stretchings" element={<Stretchings />} />
                <Route path="account" element={<Account />} />
            </Route>
        </Routes>
    )
}

export default Routing