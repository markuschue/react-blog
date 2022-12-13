import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { IconButton, CardActionArea, CardActions, Chip, Divider, Tooltip } from '@mui/material';
import DeleteIcon  from '@mui/icons-material/Delete';
import ArchiveIcon  from '@mui/icons-material/Archive';
import Box from '@mui/material/Box';

function Post({ post }) {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="248"
          image={post.imgURL}
        />
        <CardContent sx={{minHeight: '100px'}}>
          <Typography gutterBottom variant="h5" component="div">
            {post.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {post.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Divider variant='middle' light="true" />
      <CardActions>
        <Chip label={post.category} color="custom" variant='outlined' sx={{mx: 1}}/>
        <Box sx={{ flexGrow: 1 }} />
        <Typography variant="caption" color="text.secondary" sx={{mx: 1}}>
          {post.author}, {post.date}
        </Typography>
        <Tooltip title="Archive" aria-label="archive">
          <IconButton size="large" color="custom">
            <ArchiveIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete" aria-label="delete">
          <IconButton size="small" color="custom" alt = "Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
}

export default Post;