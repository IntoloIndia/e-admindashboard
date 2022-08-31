import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { Typography, TextField, Box, Paper } from "@material-ui/core/";
import Autocomplete from "@material-ui/lab/Autocomplete";
const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
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
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
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

const Blogs = () => {
  const [open, setOpen] = useState(false);
  const [blogTitle, setBlogtitle] = useState("");
  const [subTitle, setSubtitle] = useState("");
  const [des, setDes] = useState("");
  const [inputFile, setInputFile] = useState("");
  const [value, setValue] = React.useState(null);

  const defaultProps = {
    options: top100Films,
    getOptionLabel: (option) => option.title,
  };

  const flatProps = {
    options: top100Films.map((option) => option.title),
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const submitBlog = (event) => {
    const blogdata = {
      blogTitle: blogTitle,
      subTitle: subTitle,
      des: des,
      inputFile: inputFile,
      value: value,
    };
    alert(JSON.stringify(blogdata));
  };

  const inputEvent = (event) => {
    // console.log(event.target.value)
    setBlogtitle(event.target.value);
  };

  return (
    <Box>
      <Button onClick={handleClickOpen}>Blog</Button>
      <Dialog open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Blogs
        </DialogTitle>
        <Paper elevation={10}>
          <DialogContent dividers>
            <Box component="form">
              <TextField
                placeholder="Title name"
                id="outlined-basic"
                label="Title name"
                variant="outlined"
                size="small"
                sx={{ padding: 1 }}
                onChange={inputEvent}
                Value={blogTitle}
                fullWidth
                style={{ marginBottom: 10 }}
              />
              <Autocomplete
                {...defaultProps}
                id="controlled-demo"
                value={value}
                style={{ marginBottom: 10 }}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => (
                  <TextField {...params} label="select categary"  variant='outlined' size="small"  />
                )}
              />
              <TextField
                placeholder="SubTitle"
                id="outlined-basic"
                label="SubTitle"
                variant="outlined"
                size="small"
                multiline
                rows={2}
                sx={{ padding: 1 }}
                onChange={(e) => {
                  setSubtitle(e.target.value);
                }}
                Value={subTitle}
                fullWidth
                style={{ marginBottom: 10 }}
              />
              <TextField
                label="Description"
                multiline
                rows={4}
                placeholder="Description..........."
                variant="outlined"
                fullWidth
                value={des}
                onChange={(e) => {
                  setDes(e.target.value);
                }}
                style={{ marginBottom: 10 }}
              />
              <TextField
                type="file"
                variant="outlined"
                size="small"
                sx={{ padding: 1 }}
                Value={inputFile}
                onChange={(e) => {
                  setInputFile(e.target.value);
                }}
                fullWidth
                style={{ marginBottom: 10 }}
              />
            </Box>
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                submitBlog();
              }}
            >
              Save
            </Button>
          </DialogActions>
        </Paper>
      </Dialog>
    </Box>
  );
};
export default Blogs;
const top100Films = [
  { title: "cricket"},
  { title: "Business"},
  { title: "city"},
  { title: "The Dark Knight"},
];
