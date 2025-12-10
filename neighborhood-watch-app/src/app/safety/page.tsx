import { Container, Typography } from '@mui/material';

export default function SafetyPage() {
  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Safety
      </Typography>
      <Typography variant="body1">
        This is where the safety information will be listed.
      </Typography>
    </Container>
  );
}
