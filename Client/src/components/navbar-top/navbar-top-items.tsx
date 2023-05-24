import React from 'react';

import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';

import { ROUTES } from '../../routes/Routes';

export const navBarTopItems = [
    {
        id: 0,
        name: ROUTES.DASHBOARD.label,
        route: ROUTES.DASHBOARD.route,
        icon: <FormatListBulletedIcon />,
    },
    {
        id: 1,
        name: ROUTES.JOURNAL.label,
        route: ROUTES.JOURNAL.route,
        icon: <ImportContactsIcon />,
    },
    {
        id: 2,
        name: ROUTES.STRETCHINGS.label,
        route: ROUTES.STRETCHINGS.route,
        icon: <SportsGymnasticsIcon />,
    },
    {
        id: 3,
        name: ROUTES.PROFILE.label,
        route: ROUTES.PROFILE.route,
        icon: <AccountCircleIcon />,
    },
    {
        id: 4,
        name: ROUTES.ACCOUNT.label,
        route: ROUTES.ACCOUNT.route,
        icon: <SettingsIcon />,
    },

]