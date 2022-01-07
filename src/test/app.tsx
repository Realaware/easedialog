import React from 'react';
import useDialog from '../useDialog';
import Purchase from './dialogs/purchase';
import { keyframes } from 'styled-components';

const DialogAnimation = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

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
          });
        }}
      >
        Click !
      </button>
    </div>
  );
}

export default App;
