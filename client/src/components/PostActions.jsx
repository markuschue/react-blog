import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import DeleteIcon  from '@mui/icons-material/Delete';
import ArchiveIcon  from '@mui/icons-material/Archive';
import EditIcon  from '@mui/icons-material/Edit';
import AlertDialog from './AlertDialog.jsx';
import axios from 'axios';
import { useNavigate, useLocation } from "react-router-dom";

function PostActions({id}) {
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

  return(
    <div>
      <Tooltip title="Edit" aria-label="delete">
          <IconButton size="small" color="custom" alt = "Delete" onClick={() => navigate('/compose/' + id)}>
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