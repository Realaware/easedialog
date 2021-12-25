import React, { useContext } from 'react';
import DialogContext from './Dialog.Context';
import {
  DialogContainer,
  DialogHeader,
  DialogBody,
  Right,
  Divider,
} from './Dialog.Components';
import IconButton from './lib/Icon.Button';
import { Close } from 'styled-icons/evil';
import useDialog from './useDialog';

function Dialog() {
  const { dialog, theme } = useContext(DialogContext);
  const { setDialog } = useDialog();

  return dialog && dialog.visible ? (
    <DialogContainer>
      <DialogHeader bg={theme.DIALOG_HEADER_BACKGROUND}>
        <h3>{dialog.title}</h3>

        <Right>
          <IconButton
            onClick={() => setDialog({ visible: false })}
            size={25}
            Icon={Close}
          />
        </Right>
      </DialogHeader>
      <Divider />
      <DialogBody
        hv={theme.DIALOG_BODY_HOVER_BACKGROUND}
        bg={theme.DIALOG_BODY_BACKGROUND}
      >
        {dialog.body}
      </DialogBody>
    </DialogContainer>
  ) : null;
}

export default Dialog;
