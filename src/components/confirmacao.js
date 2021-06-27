import React from 'react'
import {Button, Dialog, DialogActions, DialogContent, DialogContentText} from "@material-ui/core";

const Confirmacao = ({open, message, positive, negative, onClose, onAceept}) => {
  return (
    <Dialog open={open} >
      <DialogContent className="darkmode">
        <DialogContentText id="alert-dialog-description" className="darkmode">
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions className="darkmode">
        <Button onClick={onClose} className="BTdel">
          {negative}
        </Button>
        <Button onClick={onAceept} autoFocus className="BTcad">
          {positive}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default Confirmacao;