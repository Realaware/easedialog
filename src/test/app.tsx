import React from 'react';
import useDialog from '../useDialog';
import Purchase from './dialogs/purchase';

function App() {
  const { setDialog } = useDialog();

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          setDialog({
            title: `Purchase`,
            visible: true,
            body: <Purchase />,
            backdrop: true,
            escExit: true,
            noHoverEffect: true,
            noHeader: true,
          });
        }}
      >
        Click !
      </button>
    </div>
  );
}

export default App;
