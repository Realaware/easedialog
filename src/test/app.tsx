import React from 'react';
import useDialog from '../useDialog';
import Example from './dialogs/example';

function App() {
  const { setDialog } = useDialog();

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          setDialog({
            visible: true,
            body: Example(), // you should use jsx syntax when you render jsx component unless you returned string, number etc...
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
