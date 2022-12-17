import PostCard from '../components/PostCard.jsx';
import * as React from 'react';
import { useEffect } from 'react';
import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import axios from 'axios';

function Home() {
  const [posts, setPosts] = React.useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/posts')
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container maxWidth='md'>
      <Grid 
        container 
        spacing={2} 
        sx={{my: 2}} 
        justifyContent='center' 
        alignItems='stretch' 
        direction='column'
      >
        {posts.map((post, index) => (
          <Grid item key={index}>
            <PostCard post={post} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Home;