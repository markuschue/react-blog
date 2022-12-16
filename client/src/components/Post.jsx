import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { IconButton, CardActionArea, CardActions, Chip, Divider, Tooltip } from '@mui/material';
import DeleteIcon  from '@mui/icons-material/Delete';
import ArchiveIcon  from '@mui/icons-material/Archive';
import EditIcon  from '@mui/icons-material/Edit';
import Box from '@mui/material/Box';
import axios from 'axios';
import AlertDialog from './AlertDialog';

function Post({ post }) {
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  function handleDelete() {
    axios.delete('http://localhost:9000/posts/' + post._id).then(() => {
      window.location.reload(false);
    });
  }

  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component='img'
          height='248'
          image={'http://localhost:9000/' + post.headerImage}
        />
        <CardContent sx={{minHeight: '100px'}}>
          <Typography gutterBottom variant='h5' component='div'>
            {post.title}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {post.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Divider variant='middle' light='true' />
      <CardActions>
        <Chip label={post.category} color='custom' variant='outlined' sx={{mx: 1}}/>
        <Typography variant='caption' color='text.secondary' sx={{mx: 1}}>
          {post.author}, {post.date}
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Tooltip title="Edit" aria-label="delete">
          <IconButton size="small" color="custom" alt = "Delete">
            <EditIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title='Archive' aria-label='archive'>
          <IconButton size='large' color='custom'>
            <ArchiveIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title='Delete' aria-label='delete'>
          <IconButton size='small' color='custom' alt = 'Delete' onClick={handleClickOpenDialog}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </CardActions>
      <AlertDialog 
        open={openDialog}
        onClose={handleCloseDialog}
        title={"Are you sure you want to delete the post?"}
        content={"This action cannot be undone."}
        closeButton={"Cancel"}
        okayButton={"Delete"}
        handleOkay={handleDelete}
        handleCancel={handleCloseDialog}
      />
    </Card>
  );
}

export default Post;