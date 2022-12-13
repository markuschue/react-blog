import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchBar from './SearchBar';
import DrawerBar from './DrawerBar';

function Header() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position='static' color='primary'>
        <Toolbar sx={{height: '10ch'}}>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{ ml: {xs: 0, sm: 15}, mr: 3}}
          >
            <a className="hvr-buzz-out" href='/' style={{color: 'white', textDecoration: 'none'}}>
              <img src='https://cdn-icons-png.flaticon.com/512/628/628283.png' alt='logo' style={{height: '51px', width: '51px'}} />
            </a>
          </Typography>
          <SearchBar />
          <Box sx={{ flexGrow: 1, display: {xs: 'none', sm: 'block' }}} />
          <DrawerBar />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;