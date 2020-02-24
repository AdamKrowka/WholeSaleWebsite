import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import Input from "@material-ui/core/Input";
import DialogContent from "@material-ui/core/DialogContent";
import FormControl from "@material-ui/core/FormControl";

export default function AddToCartDialog({ openDialog, handleClosing, data, sendProductToCart }) {
  const [open, setOpen] = React.useState(openDialog);
  const [inputValue, setInputValue] = React.useState(0);
  const [err, setErr] = React.useState(false);
  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  const handleSend = () => {
    if (inputValue) {
      sendProductToCart(data, inputValue);
      setOpen(false);
      handleClosing(false);
    } else setErr(true);
  };
  const handleClose = () => {
    setOpen(false);
    handleClosing(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{`Ile sztuk ${data.title} chcesz dodać do koszyka?`}</DialogTitle>
        <DialogContent>
          {err ? (
            <FormControl error>
              <Input id="component-error" type="number" onChange={handleInputChange} />
            </FormControl>
          ) : (
            <Input id="component-error" type="number" onChange={handleInputChange} />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Anuluj
          </Button>
          <Button onClick={handleSend} color="primary" autoFocus>
            Dodaj
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
