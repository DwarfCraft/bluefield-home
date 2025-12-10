'use client';

import * as React from 'react';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme as useMuiTheme } from '@mui/material/styles';
import { useTheme } from '../ThemeRegistry';
import Login from './Login';

export default function Header() {
  const muiTheme = useMuiTheme();
  const { toggleTheme } = useTheme();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              Bluefield Neighborhood
            </Link>
          </Typography>
          <Box sx={{ ml: 2 }}>
            <Link href="/forum" passHref>
              <Button color="inherit">Forum</Button>
            </Link>
            <Link href="/events" passHref>
              <Button color="inherit">Events</Button>
            </Link>
            <Link href="/directory" passHref>
              <Button color="inherit">Directory</Button>
            </Link>
            <Link href="/safety" passHref>
              <Button color="inherit">Safety</Button>
            </Link>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton sx={{ ml: 1 }} onClick={toggleTheme} color="inherit">
            {muiTheme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          <Login />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
