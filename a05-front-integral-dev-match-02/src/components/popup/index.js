import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import styles from './styles';
import CancelPresentationTwoToneIcon from '@material-ui/icons/CancelPresentationTwoTone'

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6" >{children}</Typography>
      {onClose ? (
        <IconButton  aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CancelPresentationTwoToneIcon fontSize="large" color="secondary" />
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

export default function PopUp() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button className="btnChip" variant="outlined" color="primary" onClick={handleClickOpen}>
        adicionar
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Nova habilidade
        </DialogTitle>
        <DialogContent>

          <TextField
            autoFocus
            margin="dense"
            id="skill"
            label="Habilidade"
            type="dialog"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button className="btnDarkBlue" autoFocus onClick={handleClose} variant="contained" color="primary">
            adicionar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
