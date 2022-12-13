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

export default function DrawerBar() {
  const [isDrawerOpen, setDrawerOpen] = React.useState(false);

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
    <Button variant="contained" startIcon={<CreateIcon />} color="success" sx={{width: "20ch"}}>
      Compose
    </Button>
  );

  const draftsButton = (
    <Button variant="outlined" startIcon={<DraftsIcon />} color="success" sx={{width: "20ch"}}>
      Drafts
    </Button>
  );

  const drawerList = (
    <Box
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List sx={{ backgroundColor: "#10151C" }}>
        <ListItem>
          <ListItemButton onClick={toggleDrawer(false)} sx={{
            justifyContent: "center",
            height: "7ch"
          }} >
            <CloseIcon />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        {[composeButton, draftsButton].map((button) => (
          <ListItem disablePadding>
            <ListItemButton sx = {{justifyContent: "center", color: "#EEEEEE"}}>
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
    <IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="open drawer"
    >
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon sx={{ color: "#EEEEEE" }} />
      </Button>
      <SwipeableDrawer
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        anchor="right"
        variant='temporary'
        PaperProps={{ sx: { width: 250, backgroundColor: "#222831", color: "#EEEEEE" } }}
      >
        {drawerList}
      </SwipeableDrawer>
    </IconButton>
  )
}