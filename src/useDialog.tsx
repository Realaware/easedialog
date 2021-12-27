import { useContext } from 'react';
import DialogContext from './Dialog.Context';

function useDialog() {
  const { setDialog } = useContext(DialogContext);

  return {
    setDialog,
  };
}

export default useDialog;
