'use client';

import { useSession, signIn } from 'next-auth/react';
import { Button } from '@mui/material';
import Link from 'next/link';

export default function Login() {
  const { data: session } = useSession();

  if (session) {
    return (
        <Button color="inherit" component={Link} href="/profile">
          Profile
        </Button>
    );
  }
  return (
      <Button color="inherit" onClick={() => signIn()}>Sign in</Button>
  );
}
