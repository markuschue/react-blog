import Post from '../components/Post.jsx';
import * as React from 'react';
import { Grid } from '@mui/material';
import { Container } from '@mui/system';

function Home() {
  let posts = [{
    title: 'hello',
    description: 'i like lizzards',
    author: 'me',
    date: '13/12/2022',
    imgURL: 'https://static.inaturalist.org/photos/95742200/medium.jpeg',
    category: 'lizzards',
  },
  {
    title: 'ayo',
    description: 'the pizza here',
    author: 'yopopopo',
    date: '13/12/2022',
    imgURL: 'https://i.ytimg.com/vi/dRCy-jGKIJ4/maxresdefault.jpg',
    category: 'pizza',
  }];
  return (
    <Container maxWidth='md'>
      <Grid container spacing={2} sx={{my: 2}} justifyContent='center' alignItems='stretch' direction='column'>
        {posts.map((post) => (
          <Grid item>
            <Post post={post} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Home;