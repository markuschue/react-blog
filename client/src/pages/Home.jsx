import Post from '../components/Post.jsx';
import * as React from 'react';
import { useEffect } from 'react';
import { Grid } from '@mui/material';
import { Container } from '@mui/system';

function Home() {
  const [posts, setPosts] = React.useState([]);

  useEffect(() => {
    fetch('http://localhost:9000/posts/').then(res => res.json()).then(fetched => {
      setPosts(fetched);
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