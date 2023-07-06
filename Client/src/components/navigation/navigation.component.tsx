import React from 'react';

import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';


import { navBarTopItems } from './navigation-items';
import WeekSelector from '../week-selector/week-selector';

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { loginWithRedirect, logout } = useAuth0();

  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const pathName = location.pathname;
  let navTitle = pathName.split('/')[1];

  //todo: extract component
  let navTitleComponent = <></>;
  if (navTitle === '') {
    navTitleComponent = <WeekSelector />
  } else {
    navTitleComponent = <Typography component="div"
      sx={{
        flexGrow: 1,
        fontSize: 24,
        letterSpacing: 1,
        textTransform: 'capitalize'
      }}>
      {navTitle}</Typography>
    navTitle = navTitle.charAt(0).toUpperCase() + navTitle.slice(1);
  }



  const handleNavItemClick = (route: string, title: string) => {
    // prevent default
    navigate(route);
    //  setNavTitle(title);
  }
  const handleLoginPopup = () => {
    console.log('login popup');
  };

  const handleLogoutPopup = () => {
    console.log('logout popup')
  };

  const handleLoginRedirect = () => {
    loginWithRedirect();
  };

  const toggleDrawer =
    (open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }

        setIsDrawerOpen(open);
      };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={() => setIsDrawerOpen(false)}
      onKeyDown={() => setIsDrawerOpen(false)}
    >
      <List>
        {navBarTopItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={() => handleNavItemClick(item.route, item.name)}>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton onClick={logout}>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary='Log Out' />
          </ListItemButton>
        </ListItem>
      </List >
    </Box>
  );

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => setIsDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {navTitle}
            </Typography> */}
            {navTitleComponent}
            <Button onClick={handleLoginRedirect} sx={{
              color: 'grey.50',
              textTransform: 'capitalize',
              letterSpacing: 1,
              fontSize: 24
            }}>Login</Button>

          </Toolbar>
        </AppBar>
      </Box>
      <Drawer
        anchor='left'
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
      >
        {
          list()
        }
      </Drawer>
      <Outlet />
    </>

  );
}
export default Navigation;