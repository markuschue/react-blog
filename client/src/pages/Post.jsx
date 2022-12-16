import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NoPage from './NoPage.jsx';
import axios from 'axios';
import { Box, Container } from '@mui/system';
import { Divider, Paper, Typography } from '@mui/material';
import { Grid } from '@mui/material';
import Chip from '@mui/material/Chip';
import PostActions from '../components/PostActions.jsx';
import Avatar from '@mui/material/Avatar';

function Post() {
  const [post, setPost] = React.useState(null);
  const { id } = useParams();
  
  useEffect(() => {
    axios.get('http://localhost:3000/posts/' + id)
      .then((res) => {
        if (res.data) {
          setPost(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  
  if (!post) {
    return <NoPage />;
  } else {
    return (
      <Container maxWidth='md'>
        <Paper sx={{ my: 4, p: 5 }} elevation={3}>
          <Grid container justifyContent="space-between" alignItems={'center'} mb={2}>
              <Avatar alt="Remy Sharp" />
              <Typography variant="h6" ml={2}>
                {post.author}
              </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <PostActions id={post._id} />
          </Grid>
          <Grid container spacing={2} alignItems={'center'} sx={{mb: 2}}>
            <Grid item>
              <Chip label={post.category} color='custom' variant='outlined'/>
            </Grid>
            <Grid item>
              <Typography variant="overline" sx={{ mb: 4 }}>
                {post.date}
              </Typography>
            </Grid>
          </Grid>
          <Divider variant='middle' light='true' />
          <Typography variant="h4" sx={{ my: 4 }}>
            <b>{post.title}</b>
          </Typography>
          <Typography color="#bdbdbd" variant="subtitle" sx={{ mb: 4 }}>
            {post.description}
          </Typography>
          <Box sx={{ my: 5 }}>
            <img src={'http://localhost:9000/' + post.headerImage} alt={post.title} width='100%' />
          </Box>
          <Typography variant="body1">
            {post.content}
          </Typography>
        </Paper>
      </Container>
    );
  }
}

export default Post;