import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import DeleteIcon  from '@mui/icons-material/Delete';
import ArchiveIcon  from '@mui/icons-material/Archive';
import PublishIcon from '@mui/icons-material/Publish';
import EditIcon  from '@mui/icons-material/Edit';
import AlertDialog from './AlertDialog.jsx';
import axios from 'axios';
import { useNavigate, useLocation } from "react-router-dom";

function PostActions({id, published}) {
  const [openDialog, setOpenDialog] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  
  function handleDelete() {
    axios.delete('http://localhost:9000/posts/' + id).then(() => {
      if (location.pathname === '/') {
        navigate(0);
      } else {
        navigate('/');
      }
    });
  }

  function handleArchive() {
    axios.patch('http://localhost:9000/posts/' + id, {published: false}).then(() => {
      if (location.pathname === '/') {
        navigate(0);
      } else {
        navigate('/');
      }
    });
  }

  function handlePublish() {
    axios.patch('http://localhost:9000/posts/' + id, {published: true}).then(() => {
      if (location.pathname === '/') {
        navigate(0);
      } else {
        navigate('/');
      }
    });
  }

  return(
    <div>
      <Tooltip title="Edit" aria-label="delete">
          <IconButton size="small" color="custom" alt = "Delete" onClick={() => navigate('/compose/' + id)}>
            <EditIcon />
          </IconButton>
        </Tooltip>
        {published ? (
        <Tooltip title='Archive' aria-label='archive'>
          <IconButton size='large' color='custom' onClick={handleArchive}>
            <ArchiveIcon />
          </IconButton>
        </Tooltip>) : (
        <Tooltip title='Publish' aria-label='publish'>
          <IconButton size='large' color='custom' onClick={handlePublish}>
            <PublishIcon />
          </IconButton>
        </Tooltip>)}
        <Tooltip title='Delete' aria-label='delete'>
          <IconButton size='small' color='custom' alt = 'Delete' onClick={handleClickOpenDialog}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
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
    </div>
  );
}

export default PostActions;