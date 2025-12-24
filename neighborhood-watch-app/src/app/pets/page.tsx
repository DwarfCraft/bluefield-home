'use client';

import { Container, Typography, Box, Button, Alert } from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';

export default function Pets() {
    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                <PetsIcon fontSize="large" color="secondary" sx={{ mr: 2 }} />
                <Typography variant="h4" component="h1">
                    Lost & Found Pets
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
                <Button variant="contained" color="error" size="large">
                    Report Lost Pet
                </Button>
            </Box>

            <Alert severity="info" sx={{ mb: 4 }}>
                Use this page to quickly alert neighbors about lost or found pets. Alerts are pinned to the dashboard.
            </Alert>

            <Typography variant="h6" color="text.secondary" align="center" sx={{ mt: 8 }}>
                Good news! No lost pets reported currently.
            </Typography>
        </Container>
    );
}
