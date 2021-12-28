/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react';
import Dialog from './Dialog.Body';
import DialogContext from './Dialog.Context';
import {
  DialogProps,
  ProviderContext,
  ProviderProps,
  DialogDefaultTheme,
} from './Dialog.Type';
import { DialogBackdrop } from './Dialog.Components';

function DialogProdiver(props: ProviderProps) {
  const [dialog, setDialog] = useState<DialogProps>();

  const context: ProviderContext = {
    setDialog,
    dialog,
    theme: props.theme
      ? {
          ...DialogDefaultTheme,
          ...props.theme,
        }
      : DialogDefaultTheme,
  };

  return (
    <DialogContext.Provider value={context}>
      {props.children}
      <Dialog />
      {dialog && dialog.visible && dialog.backdrop && <DialogBackdrop />}
    </DialogContext.Provider>
  );
}

export default DialogProdiver;
