'use client';

import { Container, Typography, Box, Button, List, ListItem, ListItemText, Divider, Paper } from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum';

const categories = [
  { name: 'General Discussion', count: 12 },
  { name: 'Safety Alerts', count: 5 },
  { name: 'Recommendations (Plumbers, etc)', count: 8 },
  { name: 'Gardening Club', count: 3 },
];

export default function Forum() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
        <ForumIcon fontSize="large" color="secondary" sx={{ mr: 2 }} />
        <Typography variant="h4" component="h1">
          Neighborhood Forum
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Button variant="contained" size="large">
          Start Discussion
        </Button>
      </Box>

      <Paper sx={{ borderRadius: 4, overflow: 'hidden' }}>
        <List>
          {categories.map((cat, index) => (
            <div key={cat.name}>
              <ListItem button sx={{ py: 3 }}>
                <ListItemText
                  primary={cat.name}
                  secondary={`${cat.count} active threads`}
                  primaryTypographyProps={{ fontWeight: 600, fontSize: '1.1rem' }}
                />
                <Button variant="outlined" size="small">View</Button>
              </ListItem>
              {index < categories.length - 1 && <Divider />}
            </div>
          ))}
        </List>
      </Paper>
    </Container>
  );
}
