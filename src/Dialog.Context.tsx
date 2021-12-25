import react from 'react';
import { DialogTheme, ProviderContext } from './Dialog.Type';

const DialogContext = react.createContext<ProviderContext>({
  setDialog: () => '',
  dialog: {},
  theme: DialogTheme,
});

export default DialogContext;
