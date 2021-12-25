/* eslint-disable @typescript-eslint/ban-ts-comment */
import react from 'react';
import { DialogTheme, ProviderContext } from './Dialog.Type';

// @ts-ignore
const DialogContext = react.createContext<ProviderContext>();

export default DialogContext;
