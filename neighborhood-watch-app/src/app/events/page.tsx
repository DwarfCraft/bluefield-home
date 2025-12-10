import { Container, Typography } from '@mui/material';

export default function EventsPage() {
  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Events
      </Typography>
      <Typography variant="body1">
        This is where the events will be listed.
      </Typography>
    </Container>
  );
}
