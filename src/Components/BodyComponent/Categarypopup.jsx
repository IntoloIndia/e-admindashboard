import React,{useState,useEffect}from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import{ Typography,TextField,Box} from '@material-ui/core/';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

 const Categarypopup=()=> {
  const [open, setOpen] = useState(false);
  const [categary, setCategary] = useState('')


  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };



    const submit =(event)=>{
     const categarydata ={
      categary:categary,
     }
     alert(JSON.stringify(categarydata))

   }

const inputEvent=(event)=>{
  // console.log(event.target.value)
  setCategary(event.target.value)
}
 

  return (
    <div>
      <Button onClick={handleClickOpen}>
        Categary
      </Button>
      <Dialog open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Cateagry
        </DialogTitle>
        <DialogContent dividers>
          <Box component='form'>
            <TextField
              placeholder="Categary name"
              id="outlined-basic"
              label="Categarynames"
              variant="outlined"
              size="small"
              sx={{padding:1}}
              onChange={inputEvent}
              Value={categary}
             fullWidth
            />
          </Box>
        </DialogContent>
        <DialogActions>
        <Button  variant="contained" color="secondary" onClick={()=>{submit()}}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default Categarypopup;