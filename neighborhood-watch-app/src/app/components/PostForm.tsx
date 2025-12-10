'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { TextField, Button, Box } from '@mui/material';

export default function PostForm() {
  const { data: session } = useSession();
  const [text, setText] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;

    await addDoc(collection(db, 'posts'), {
      text: text,
      timestamp: serverTimestamp(),
      author: {
        name: session?.user?.name,
        image: session?.user?.image,
      },
    });

    setText('');
  };

  if (!session) return null;

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1, mb: 2 }}>
      <TextField
        fullWidth
        multiline
        rows={3}
        variant="outlined"
        placeholder="What's on your mind?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        sx={{ mb: 1 }}
      />
      <Button type="submit" variant="contained" disabled={!text.trim()}>
        Post
      </Button>
    </Box>
  );
}
