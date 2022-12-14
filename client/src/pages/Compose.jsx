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
import { useNavigate, useParams } from 'react-router-dom';
import InputAdornment from '@mui/material/InputAdornment';
import axios from 'axios';

/**
 * The compose page for creating and editing posts.
 * @returns {JSX.Element} The compose page.
 */
function Compose() {
  let [title, setTitle] = React.useState('');
  let [description, setDescription] = React.useState('');
  let [headerImage, setHeaderImage] = React.useState('');
  let [content, setContent] = React.useState('');
  let [category, setCategory] = React.useState('');
  let [alerts, setAlerts] = React.useState({
    title: false,
    description: false,
    headerImage: false,
    content: false,
    category: false,
  });

  const navigate = useNavigate();
  const id = useParams().id;

  // Retrieve the header image from the server if the post is being edited so
  // that the user can see the current header image or send it back again.
  const setHeaderFromURL = async(fileName) => {
    const response = await axios.get(`http://localhost:9000/${fileName}`, {
      responseType: 'blob',
    });
    setHeaderImage(new File([response.data], fileName));
  }

  // Retrieve the post from the server if the post is being edited.
  React.useEffect(() => {
    if (id !== undefined) {
      axios
        .get(`http://localhost:9000/posts/${id}`)
        .then((res) => {
            setTitle(res.data.title);
            setDescription(res.data.description);
            setHeaderFromURL(res.data.headerImage);
            setContent(res.data.content);
            setCategory(res.data.category);
        })
        .catch((err) => {
          console.log(err);
          navigate('/404');
        });
    }
  }, [id]);

  function handleInputChange(e, inputSet) {
    inputSet(e.target.value);
    setAlerts({ ...alerts, [e.target.id]: false });
  }

  function handleFileChange(e) {
    setHeaderImage(e.target.files[0]);
  }

  // Check if all the inputs are filled in, if not, set up the alerts.
  function checkIsPublishable() {
    let isPublishable = true;
    let currentAlerts = {
      title: false,
      description: false,
      headerImage: false,
      content: false,
      category: false,
    };
    // Check if any of the inputs are empty in a loop
    [title, description, headerImage, content, category].forEach((input, index) => {
      if (input === '') {
        currentAlerts[Object.keys(currentAlerts)[index]] = true;
        isPublishable = false;
      }
    });
    setAlerts(currentAlerts);
    return isPublishable;
  }

  // Handle the publish and save buttons.
  async function handlePublish(publish) {
    if (checkIsPublishable()) {
      try {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('headerImage', headerImage);
        formData.append('author', 'Anonymous');
        formData.append('date', new Date().toLocaleString());
        formData.append('content', content);
        formData.append('category', category);
        formData.append('published', publish);
        if (id !== undefined) {
          // If the id is defined, then we are editing a post, so we use the PUT method
          await axios.put(`http://localhost:9000/posts/${id}`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            }
          });
        } else {
          await axios.post('http://localhost:9000/posts', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            }
          });
        }
        navigate('/');
      } catch (error) {
        console.log(error);
      }
    }
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
                id="title"
                label="Title"
                placeholder="Enter your title"
                variant="outlined"
                fullWidth
                onChange={(e) => handleInputChange(e, setTitle)}
                value={title}
                error={alerts.title}
                helperText={alerts.title ? 'Title cannot be empty' : ''}
                FormHelperTextProps={{ sx: { position: 'fixed', alignSelf: 'flex-end' } }}
              />
            </Grid>
            <Grid item xs={0} md={2} />
            <Grid item xs={12} md={4}>
              <TextField
                id="headerImage"
                placeholder='Select image'
                variant="outlined"
                fullWidth
                sx={{ mt: { xs: 2, md: 0 } }}
                value={headerImage.name}
                error={alerts.headerImage}
                helperText={alerts.headerImage ? 'Must select image' : ''}
                FormHelperTextProps={{ sx: { position: 'fixed', alignSelf: 'flex-end' } }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton
                        color="custom"
                        aria-label="upload picture"
                        component="label"
                      >
                        <input
                          hidden 
                          accept="image/*"
                          type="file"
                          onChange={handleFileChange}
                        />
                        <PhotoCamera />
                      </IconButton>
                    </InputAdornment>
                  ),
                  readOnly: true
                }}
              />
            </Grid>
          </Grid>
          <Grid container item justifyContent="center">
            <Grid item xs={12}>
              <TextField
                id="description"
                label="Description"
                placeholder='Provide a short description of your post'
                multiline
                rows={2}
                fullWidth
                sx={{ mt: 2 }}
                variant="outlined"
                onChange={(e) => handleInputChange(e, setDescription)}
                value={description}
                error={alerts.description}
                helperText={alerts.description ? 'Description cannot be empty' : ''}
                FormHelperTextProps={{ sx: { position: 'fixed', alignSelf: 'flex-end' } }}
              />
            </Grid>
          </Grid>
          <Grid container item justifyContent="center">
            <Grid item xs={12}>
              <TextField
                id="content"
                label="New Post"
                placeholder='Start writing!'
                multiline
                rows={8}
                fullWidth
                sx={{ my: 2 }}
                variant="outlined"
                onChange={(e) => handleInputChange(e, setContent)}
                value={content}
                error={alerts.content}
                helperText={alerts.content ? 'Content cannot be empty' : ''}
                FormHelperTextProps={{ sx: { position: 'fixed', alignSelf: 'flex-end' } }}
              />
            </Grid>
          </Grid>
          <Grid container item justifyContent={"space-between"} alignItems={'center'}>
            <Grid item xs={6} md={4}>
              <TextField
                id="category"
                label="Category"
                placeholder="Enter your category"
                variant="outlined"
                color="success"
                fullWidth
                onChange={(e) => handleInputChange(e, setCategory)}
                value={category}
                error={alerts.category}
                helperText={alerts.category ? 'Category cannot be empty' : ''}
                FormHelperTextProps={{ sx: { position: 'fixed', alignSelf: 'flex-end' } }}
              />
            </Grid>
            <Grid item xs={1} md={4} />
            <Grid item xs={5} md={4}>
              <ButtonGroup color="success" size="large" fullWidth>
                <Tooltip title="Save as draft">
                  <Button 
                    onClick={() => handlePublish(false)}
                  >
                    <SaveAltIcon />
                  </Button>
                </Tooltip>
                <Button
                  variant="contained"
                  startIcon={<PublishIcon />}
                  onClick={() => handlePublish(true)}
                >
                  <Typography sx={{ display: { xs: 'none', md: 'block' } }}>
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