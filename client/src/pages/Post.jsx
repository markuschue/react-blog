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
              <Grid item ml={2}>
                <Typography variant="subtitle2" ml={1}>
                  {post.author}
                </Typography>
                <Chip label={post.category} color='custom' variant='outlined' size='small' />
                <Typography variant="overline" sx={{ ml: 1 }}>
                  {post.date}
                </Typography>
              </Grid>
            <Box sx={{ flexGrow: 1 }} />
            <PostActions id={post._id} published={post.published} />
          </Grid>
          <Divider light = {true} />
          {!post.published && (
          <Chip label = {'Unpublished'} color = 'warning' variant = 'outlined' size = 'small' sx={{mt: 2}} /> )}
          <Typography variant="h4" sx={{ my: 2 }}>
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