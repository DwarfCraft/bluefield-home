'use client';

import { Container, Typography, Box, Button, Card, CardContent, Grid } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';

export default function Events() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
        <EventIcon fontSize="large" color="primary" sx={{ mr: 2 }} />
        <Typography variant="h4" component="h1">
          Community Events
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Button variant="contained" size="large">
          Add Event
        </Button>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card sx={{ borderLeft: '6px solid #1565C0' }}>
            <CardContent>
              <Typography variant="overline" color="text.secondary">Upcoming</Typography>
              <Typography variant="h6">HOA Monthly Meeting</Typography>
              <Typography variant="body2" color="text.secondary">Friday, Oct 24th @ 7:00 PM</Typography>
              <Typography variant="body2">Community Center</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ borderLeft: '6px solid #E65100' }}>
            <CardContent>
              <Typography variant="overline" color="text.secondary">Social</Typography>
              <Typography variant="h6">Fun Friday Food Trucks</Typography>
              <Typography variant="body2" color="text.secondary">Friday, Oct 24th @ 5:00 PM</Typography>
              <Typography variant="body2">Central Park</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
