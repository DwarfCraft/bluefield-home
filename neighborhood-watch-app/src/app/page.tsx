'use client';

import { Container, Typography, Box, Button, Grid, Card, CardContent, Stack } from '@mui/material';
import { useSession, signIn } from 'next-auth/react';
import Link from 'next/link';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PetsIcon from '@mui/icons-material/Pets';
import EventIcon from '@mui/icons-material/Event';
import ForumIcon from '@mui/icons-material/Forum';
import { Google, Apple } from '@mui/icons-material';

const features = [
  {
    title: 'Marketplace',
    description: 'Buy and sell locally with your neighbors.',
    icon: <StorefrontIcon fontSize="large" color="primary" />,
    href: '/marketplace'
  },
  {
    title: 'Lost & Found Pets',
    description: 'Quickly alert the community about missing pets.',
    icon: <PetsIcon fontSize="large" color="secondary" />,
    href: '/pets'
  },
  {
    title: 'Events',
    description: 'Stay updated on food trucks, meetings, and parties.',
    icon: <EventIcon fontSize="large" color="primary" />,
    href: '/events'
  },
  {
    title: 'Forum',
    description: 'Discuss neighborhood topics and share news.',
    icon: <ForumIcon fontSize="large" color="secondary" />,
    href: '/forum'
  }
];

export default function Home() {
  const { data: session } = useSession();

  return (
    <main>
      <Box sx={{
        bgcolor: 'primary.main',
        color: 'white',
        py: 8,
        textAlign: 'center',
        borderRadius: { xs: 0, md: '0 0 50px 50px' },
        mb: 6
      }}>
        <Container maxWidth="md">
          <Typography variant="h1" gutterBottom sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
            Bluefield Neighborhood
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
            Connect, Share, and Stay Safe in Your Community
          </Typography>

          {!session ? (
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
              <Button
                variant="contained"
                color="secondary"
                startIcon={<Google />}
                onClick={() => signIn('google')}
                sx={{ bgcolor: 'white', color: 'primary.main', '&:hover': { bgcolor: '#f5f5f5' } }}
              >
                Sign in with Google
              </Button>
              <Button
                variant="contained"
                color="secondary"
                startIcon={<Apple />}
                onClick={() => signIn('apple')}
                sx={{ bgcolor: 'black', color: 'white', '&:hover': { bgcolor: '#333' } }}
              >
                Sign in with Apple
              </Button>
            </Stack>
          ) : (
            <Button
              variant="contained"
              color="secondary"
              size="large"
              component={Link}
              href="/dashboard"
            >
              Go to Dashboard
            </Button>
          )}
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Grid container spacing={4}>
          {features.map((feature) => (
            <Grid item xs={12} sm={6} md={3} key={feature.title}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', textAlign: 'center', p: 2 }}>
                <Box sx={{ mb: 2 }}>
                  {feature.icon}
                </Box>
                <CardContent>
                  <Typography variant="h5" component="h2" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  );
}
