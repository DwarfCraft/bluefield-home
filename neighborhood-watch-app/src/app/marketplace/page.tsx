'use client';

import { Container, Typography, Grid, Card, CardContent, CardMedia, Button, Box } from '@mui/material';
import StorefrontIcon from '@mui/icons-material/Storefront';

export default function Marketplace() {
    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                <StorefrontIcon fontSize="large" color="primary" sx={{ mr: 2 }} />
                <Typography variant="h4" component="h1">
                    Marketplace
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
                <Button variant="contained" size="large">
                    Sell Item
                </Button>
            </Box>

            <Typography variant="h6" color="text.secondary" align="center" sx={{ mt: 8 }}>
                No items listed yet. Be the first to sell something!
            </Typography>
        </Container>
    );
}
