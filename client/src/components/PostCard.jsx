import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, Chip, Divider } from '@mui/material';
import Box from '@mui/material/Box';
import PostActions from './PostActions';
import { useNavigate } from 'react-router-dom';

function PostCard({ post }) {
  const navigate = useNavigate();

  return (
    <Card>
      <CardActionArea onClick={() => navigate('/posts/' + post._id)}>
        <CardMedia
          component='img'
          height='248'
          image={'http://localhost:9000/' + post.headerImage}
        />
        <CardContent sx={{minHeight: '100px'}}>
          {!post.published && (
          <Chip label = {'Unpublished'} color = 'warning' variant = 'outlined' size = 'small' /> )}
          <Typography gutterBottom variant='h5' component='div'>
            {post.title}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {post.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Divider variant='middle' light={true} />
      <CardActions>
        <Chip label={post.category} color='custom' variant='outlined' sx={{mx: 1}}/>
        <Typography variant='caption' color='text.secondary' sx={{mx: 1}}>
          {post.author} · {post.date}
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <PostActions id={post._id} published={post.published} />
      </CardActions>
    </Card>
  );
}

export default PostCard;