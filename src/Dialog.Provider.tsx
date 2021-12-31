/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react';
import Dialog from './Dialog.Body';
import DialogContext from './Dialog.Context';
import { DialogProps, ProviderContext, ProviderProps } from './Dialog.Type';
import createDialogTheme from './lib/createDialogTheme';

function DialogProdiver(props: ProviderProps) {
  const [dialog, setDialog] = useState<DialogProps>();

  const context: ProviderContext = {
    setDialog,
    dialog,
    theme: createDialogTheme(props.theme),
  };

  return (
    <DialogContext.Provider value={context}>
      {props.children}
      <Dialog />
    </DialogContext.Provider>
  );
}

export default DialogProdiver;
