import React from 'react';
import ReactDOM from 'react-dom';
import App from './test/app';
import DialogProvider from './Dialog.Provider';
import useDialog from './useDialog';
import createDialogTheme from './lib/createDialogTheme';
import RGB from './lib/rgb';

if (
  !process.env.NODE_ENV ||
  (process.env.NODE_ENV === 'development' &&
    document.getElementById('easedialog-dev'))
) {
  ReactDOM.render(
    <DialogProvider>
      <App />
    </DialogProvider>,
    document.getElementById('root'),
  );
}

export { DialogProvider, useDialog, createDialogTheme, RGB };
