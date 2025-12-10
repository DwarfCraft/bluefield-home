'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import { Button } from '@mui/material';

export default function Login() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <Button color="inherit" onClick={() => signOut()}>Sign out</Button>
      </>
    );
  }
  return (
    <>
      <Button color="inherit" onClick={() => signIn('google')}>Sign in with Google</Button>
    </>
  );
}
