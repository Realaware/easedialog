import React from 'react';
import useDialog from '../useDialog';

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
            body: <div>hi this is dialog owner !</div>,
            backdrop: true,
          });
        }}
      >
        Click !
      </button>
    </div>
  );
}

export default App;
