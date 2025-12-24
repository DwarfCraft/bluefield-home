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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/" passHref>
              <Button sx={{ color: 'white' }}>Bluefield</Button>
            </Link>
          </Typography>
          <Button color="inherit" component={Link} href="/dashboard">
            Dashboard
          </Button>
          <Button color="inherit" component={Link} href="/marketplace">
            Marketplace
          </Button>
          <Button color="inherit" component={Link} href="/pets">
            Pets
          </Button>
          <Button color="inherit" component={Link} href="/events">
            Events
          </Button>
          <Button color="inherit" component={Link} href="/forum">
            Forum
          </Button>
          <IconButton sx={{ ml: 1 }} onClick={toggleTheme} color="inherit">
            {muiTheme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          <Login />
        </Toolbar>
      </AppBar>
    </Box>
  );
}