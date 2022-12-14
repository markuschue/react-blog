import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/system';
import { Tooltip, Typography } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import PublishIcon from '@mui/icons-material/Publish';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

function Compose() {
  let [title, setTitle] = React.useState('');
  let [headerImage, setHeaderImage] = React.useState('');
  let [content, setContent] = React.useState('');
  let [category, setCategory] = React.useState('');

  function handleInputChange(e, inputSet) {
    inputSet(e.target.value);
  }

  return (
    <Container maxWidth='md'>
      <Paper sx={{ my: 4 }} elevation={3}>
        <Grid p={5} container item justifyContent="center">
          <Grid container item justifyContent="center">
            <Typography variant="h4" color='#4E9F3D' sx={{ mb: 4 }}>
              <b>Compose your new post!</b>
            </Typography>
          </Grid>
          <Grid container item justifyContent="space-between" alignItems={'center'}>
            <Grid item xs={12} md={6}>
              <TextField
                label="Title"
                placeholder="Enter your title"
                variant="outlined"
                fullWidth
                onChange={(e) => handleInputChange(e, setTitle)}
                value={title}
                focused
              />
            </Grid>
            <Grid item xs={0} md={2} />
            <Grid item xs={1}>
              <Tooltip title="Upload image">
                <IconButton color="custom" aria-label="upload picture" component="label" sx={{mt: {xs: 2, md: 0}}}>
                  <input hidden accept="image/*" type="file"  
                    onChange={(e) => handleInputChange(e, setHeaderImage)}
                  />
                  <PhotoCamera />
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item xs={10} sm={11} md={3}>
              <TextField
                label="Header Image"
                placeholder="Upload or paste URL"
                variant="outlined"
                fullWidth
                sx={{ mt: {xs: 2, md: 0} }}
                onChange={(e) => handleInputChange(e, setHeaderImage)}
                value={headerImage}
                focused
              />
            </Grid>
          </Grid>
          <Grid container item justifyContent="center">
            <Grid item xs={12}>
              <TextField
                label="New Post"
                placeholder='Start writing!'
                multiline
                rows={8}
                fullWidth
                sx={{ my: 2}}
                variant="outlined"
                onChange={(e) => handleInputChange(e, setContent)}
                value={content}
                focused
              />
            </Grid>
          </Grid>
          <Grid container item justifyContent={"space-between"} alignItems={'center'}>
            <Grid item xs={6} md={4}>
              <TextField
                label="Category"
                placeholder="Enter your category"
                variant="outlined"
                color="success"
                fullWidth
                onChange={(e) => handleInputChange(e, setCategory)}
                value={category}
                focused
              />
            </Grid>
            <Grid item xs={1} md={4} />
            <Grid item xs={5} md={4}>
              <ButtonGroup color="success" size="large" fullWidth>
                <Tooltip title="Save as draft">
                  <Button>
                    <SaveAltIcon />
                  </Button>
                </Tooltip>
                <Button 
                  variant="contained" 
                  startIcon={<PublishIcon />}
                >
                  <Typography sx={{display: {xs: 'none', md: 'block'}}}>
                    Publish
                  </Typography>
                </Button>
              </ButtonGroup>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default Compose;