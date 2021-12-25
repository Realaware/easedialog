import React from 'react';
import styled, { keyframes } from 'styled-components';
import useDialog from './useDialog';

const Right = styled.div`
  display: flex;
  flex: 1 0;
  justify-content: flex-end;
`;

const DialogIn = keyframes`
0% {
  transform: translate(-50%, -50%) scale(0.3);
}

100% {
  transform: translate(-50%, -50%) scale(1);
}
`;

const DialogContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  color: white;
  animation: ${DialogIn} 0.2s;
  position: fixed;
  top: 50%;
  left: 50%;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  min-width: 250px;
  z-index: 1000;

  border: 1px solid rgb(120, 120, 120);

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 20px;
  }
`;

const DialogHeader = styled.header<{ bg: string }>`
  padding: 10px;
  background-color: ${(p) => p.bg};
  background-image: linear-gradient(
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.1)
  );
  border-radius: 5px 5px 0px 0px;
  border: none;
  display: flex;
  align-items: center;
`;

const DialogBody = styled.div<{ bg: string; hv: string }>`
  padding: 10px;
  background-color: ${(p) => p.bg};
  background-image: linear-gradient(
    rgba(255, 255, 255, 0.16),
    rgba(255, 255, 255, 0.16)
  );
  transition: all 0.3s;
  border-radius: 0px 0px 5px 5px;

  &:hover {
    background-color: ${(p) => p.hv};
  }
`;

const DialogBackdropBase = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 999;
`;

function DialogBackdrop() {
  const { setDialog } = useDialog();

  return <DialogBackdropBase onClick={() => setDialog({ visible: false })} />;
}

const Divider = styled.div`
  width: 100%;
  height: 2px;
  background-color: rgb(120, 120, 120);
`;

export {
  DialogBody,
  DialogContainer,
  DialogHeader,
  Right,
  DialogBackdrop,
  Divider,
};
