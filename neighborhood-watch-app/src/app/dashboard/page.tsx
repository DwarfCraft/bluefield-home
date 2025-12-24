'use client';

import { Container, Typography, Box } from '@mui/material';
import PostFeed from '../components/PostFeed';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default function Dashboard() {
    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated() {
            redirect('/');
        },
    });

    if (status === "loading") {
        return <Typography>Loading...</Typography>;
    }

    return (
        <Container maxWidth="md">
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Community Dashboard
                </Typography>
                <Typography variant="body1" paragraph>
                    Welcome back, {session?.user?.name}! Here's what's happening in Bluefield.
                </Typography>

                <PostFeed />
            </Box>
        </Container>
    );
}
