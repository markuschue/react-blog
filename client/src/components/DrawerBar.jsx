import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import DraftsIcon from '@mui/icons-material/Drafts';
import CloseIcon from '@mui/icons-material/Close';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CreateIcon from '@mui/icons-material/Create';
import { Link } from 'react-router-dom';

/**
 * A custom drawer bar MUI component, which contains a button to open the drawer
 * and links to the Compose Page and the Drafts Page.
 * @returns {JSX.Element} The drawer bar component.
 */
function DrawerBar() {
  const [isDrawerOpen, setDrawerOpen] = React.useState(false);

  /**
   * A function to toggle the drawer open and closed.
   * @param {bool} open 
   * @returns 
   */
  const toggleDrawer = open => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const composeButton = (
    <Button variant='contained' startIcon={<CreateIcon />} color='success' sx={{width: '20ch'}}>
      <Link to='/compose' style={{color: 'white', textDecoration: 'none'}}>
        Compose
      </Link>
    </Button>
  );

  const draftsButton = (
    <Button variant='outlined' startIcon={<DraftsIcon />} color='success' sx={{width: '20ch'}}>
      <Link to='/drafts' style={{color: 'green', textDecoration: 'none'}}>
        Drafts
      </Link>
    </Button>
  );

  const drawerList = (
    <Box
      role='presentation'
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List sx={{backgroundColor: '#181D25'}}>
        <ListItem key={0}>
          <ListItemButton onClick={toggleDrawer(false)} sx={{
            justifyContent: 'center',
            height: '7ch'
          }} >
            <CloseIcon color='warning' />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        {[composeButton, draftsButton].map((button, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton sx = {{justifyContent: 'center'}}>
              <ListItemIcon>
                {button}
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <IconButton 
        onClick={toggleDrawer(true)}
        size='large'
        edge='start'
        color='custom'
        aria-label='open drawer'
        sx={{ ml: 2 }}
      >
        <MenuIcon color='custom'/>
      </IconButton>
      <SwipeableDrawer
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        anchor='right'
        variant='temporary'
        PaperProps={{ sx: { width: 250, backgroundColor: '#222831', color: '#EEEEEE' } }}
      >
        {drawerList}
      </SwipeableDrawer>
    </div>
  )
}

export default DrawerBar;