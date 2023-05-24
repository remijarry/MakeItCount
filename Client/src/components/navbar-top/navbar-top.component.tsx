import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useMsal } from '@azure/msal-react';
import { useNavigate } from 'react-router-dom';
import { navBarTopItems } from './navbar-top-items';

interface INavbarTopProps {
  title: string
}




const NavbarTop = ({ title }: INavbarTopProps) => {
  const [navTitle, setNavTitle] = React.useState(title);
  const { instance } = useMsal();
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const handleLogoutPopup = () => {
    instance.logoutPopup({
      mainWindowRedirectUri: '/', // redirects the top level app after logout
    });
  };

  const handleNavItemClick = (route: string, title: string) => {
    // prevent default
    navigate(route);
    setNavTitle(title);
  }


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
      </List >
    </Box>
  );

  return (
    <>

      <Box sx={{
        flexGrow: 1,
        width: '100%',
        position: 'absolute',
        top: 0,
      }}>
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
            <Button color="inherit">Login</Button>
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
    </>
  )
}
export default NavbarTop