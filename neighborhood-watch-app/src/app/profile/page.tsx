'use client';

import { useSession, signOut } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { Container, Typography, Button } from '@mui/material';

export default function ProfilePage() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/api/auth/signin?callbackUrl=/profile');
    }
  })

  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Profile
      </Typography>
      {session?.user && (
        <>
          <Typography variant="h6">Name: {session.user.name}</Typography>
          <Typography variant="h6">Email: {session.user.email}</Typography>
          <Button variant="contained" color="primary" onClick={() => signOut()} sx={{ mt: 2 }}>
            Sign out
          </Button>
        </>
      )}
    </Container>
  );
}
