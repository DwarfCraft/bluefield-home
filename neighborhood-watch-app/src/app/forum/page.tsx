import PostFeed from '../components/PostFeed';
import { Container, Typography } from '@mui/material';

export default function ForumPage() {
  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Forum
      </Typography>
      <PostFeed />
    </Container>
  );
}
