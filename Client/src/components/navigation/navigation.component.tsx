import React, { useEffect } from 'react';
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from '@azure/msal-react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { loginRequest } from '../../authConfig';


import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircle from '@mui/icons-material/AccountCircle'

import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { navBarTopItems } from './navigation-items';

const Navigation = () => {
  const location = useLocation();
  //const [navTitle, setNavTitle] = React.useState('Home');
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const { instance } = useMsal();
  const activeAccount = instance.getActiveAccount();
  const navigate = useNavigate();

  const pathName = location.pathname;
  let navTitle = pathName.split('/')[1];
  if (navTitle === '') {
    // navTitle = 'Home';
    navTitle = 'Week 1';
  } else {
    navTitle = navTitle.charAt(0).toUpperCase() + navTitle.slice(1);
  }



  const handleNavItemClick = (route: string, title: string) => {
    // prevent default
    navigate(route);
    //  setNavTitle(title);
  }
  const handleLoginPopup = () => {
    console.log('hi there')
    instance
      .loginPopup({
        ...loginRequest,
        redirectUri: '/redirect',
      })
      .catch((error) => console.log(error));
  };

  const handleLogoutPopup = () => {
    instance.logoutPopup({
      mainWindowRedirectUri: '/', // redirects the top level app after logout
    });
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
        <AuthenticatedTemplate>

          <ListItem disablePadding>
            <ListItemButton onClick={handleLogoutPopup}>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary='Log Out' />
            </ListItemButton>
          </ListItem>
        </AuthenticatedTemplate>
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
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {navTitle}
            </Typography>
            <UnauthenticatedTemplate>
              <Button onClick={handleLoginPopup} color="inherit">Login</Button>
            </UnauthenticatedTemplate>
            <AuthenticatedTemplate>
              <div>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <AccountCircle sx={{ width: '1.5em', height: '1.5em' }} />
                </IconButton>
              </div>
            </AuthenticatedTemplate>
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