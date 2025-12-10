'use client';

import { Card, CardContent, Typography, Avatar, Box } from '@mui/material';
import { Post } from '../types/Post';

type Props = {
  post: Post;
};

export default function PostCard({ post }: Props) {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Avatar src={post.author?.image} alt={post.author?.name} sx={{ mr: 1 }} />
          <Typography variant="subtitle2">{post.author?.name || 'Anonymous'}</Typography>
        </Box>
        <Typography variant="body1">{post.text}</Typography>
        {post.timestamp && (
          <Typography variant="caption" color="text.secondary">
            {new Date(post.timestamp?.toDate()).toLocaleString()}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}
