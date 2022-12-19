import PostCard from '../components/PostCard.jsx';
import * as React from 'react';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom'
import { Card, CardContent, Grid } from '@mui/material';
import { Container } from '@mui/system';
import axios from 'axios';
import { Typography } from '@mui/material';

function Home() {
  const [posts, setPosts] = React.useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get('q');

  useEffect(() => {
    axios.get('http://localhost:3000/posts')
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function filterPosts() {
    if (searchQuery) {
      console.log(searchQuery);
      return posts.filter((post) => {
        return (
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.category.toLowerCase().includes(searchQuery.toLowerCase())
        )
      });
    }
    return posts;
  }

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
        {searchQuery && (
          <Grid item mb={1}>
            <Typography variant='h4'>
              Search results for
              <Typography variant='h4' component='span' color='#4E9F3D'>
                {` ${searchQuery}`}
              </Typography>
            </Typography>
          </Grid>
        )}
        {filterPosts().length > 0 ? (
          filterPosts().map((post, index) => (
            <Grid item key={index}>
              <PostCard post={post} />
            </Grid>
          ))
        ) : searchQuery && (
          <Grid item>
            <Card sx={{ p: 2 }}>
              <CardContent sx={{minHeight: '100px'}}>
                <Typography variant='h3' color='#4E9F3D' align='center'>
                  No posts match that query
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        )}
      </Grid>
    </Container>
  );
}

export default Home;