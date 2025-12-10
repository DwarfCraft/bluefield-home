import { Container, Typography } from '@mui/material';

export default function Home() {
  return (
    <main>
      <Container maxWidth="md" sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to the Bluefield Neighborhood Watch
        </Typography>
        <Typography variant="body1" gutterBottom>
          This is a community platform for residents of the Bluefield neighborhood to connect, share information, and work together to keep our community safe.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Here you can:
        </Typography>
        <ul>
          <li>
            <Typography variant="body1">
              Engage in discussions with your neighbors in the <strong>Forum</strong>.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              Stay up-to-date on upcoming community <strong>Events</strong>.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              Find contact information for your neighbors in the <strong>Directory</strong>.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              Report and stay informed about <strong>Safety</strong> concerns.
            </Typography>
          </li>
        </ul>
      </Container>
    </main>
  );
}
