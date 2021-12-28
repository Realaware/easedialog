import React, { useContext } from 'react';
import DialogContext from './Dialog.Context';
import {
  DialogContainer,
  DialogHeader,
  DialogBody,
  Right,
  Divider,
  RawModeWrapper,
} from './Dialog.Components';
import IconButton from './lib/Icon.Button';
import { Close } from 'styled-icons/evil';
import useDialog from './useDialog';

function Dialog() {
  const { dialog, theme } = useContext(DialogContext);
  const { setDialog } = useDialog();

  return dialog && dialog.visible ? (
    dialog.rawMode ? (
      <RawModeWrapper>{dialog.body}</RawModeWrapper>
    ) : (
      <DialogContainer>
        <DialogHeader colorset={theme}>
          <h3>{dialog.title}</h3>

          <Right>
            <IconButton
              onClick={() => setDialog({ visible: false })}
              size={25}
              Icon={Close}
            />
          </Right>
        </DialogHeader>
        <Divider colorset={theme} />
        <DialogBody
          className={dialog.noHoverEffect ? 'noHoverEffect' : undefined}
          colorset={theme}
        >
          {dialog.body}
        </DialogBody>
      </DialogContainer>
    )
  ) : null;
}

export default Dialog;
