import { Container, Typography } from '@mui/material';

export default function DirectoryPage() {
  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Directory
      </Typography>
      <Typography variant="body1">
        This is where the directory will be listed.
      </Typography>
    </Container>
  );
}
