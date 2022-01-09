import React from 'react';
import styled, { Keyframes, keyframes } from 'styled-components';
import useDialog from './useDialog';
import { ThemeBasedComponent } from './Dialog.Type';
import RGB from './lib/rgb';

const Right = styled.div`
  display: flex;
  flex: 1 0;
  justify-content: flex-end;
`;

const DialogIn = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(0.2);
  }

  100% {
    transform: translate(-50%, -50%) scale(1);
  }
`;

const BackdropIn = keyframes`
  0% {
    opacity: 0,
  }

  100% {
    opacity: 1
  }
`;

const DialogContainer = styled.div<
  ThemeBasedComponent<{ animation?: Keyframes }>
>`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  color: white;
  position: fixed;
  top: 50%;
  left: 50%;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  min-width: 250px;
  z-index: 1000;
  transition: 0.15s all;
  animation: ${(p) => p.animation} 0.15s;

  outline: 0.5px solid rgb(100, 100, 100);

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 20px;
  }
`;

const DialogHeader = styled.header<ThemeBasedComponent>`
  padding: 6px;
  background-color: ${(p) =>
    p.colorset.DIALOG_HEADER_BACKGROUND.getRgbString()};
  background-image: linear-gradient(
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.1)
  );
  border-radius: 5px 5px 0px 0px;
  border: none;
  display: flex;
  align-items: center;
  color: ${(p) => p.colorset.DIALOG_HEADER_TEXT_COLOR.getRgbString()};
`;

const DialogBody = styled.div<ThemeBasedComponent>`
  padding: 10px;
  background-color: ${(p) => p.colorset.DIALOG_BODY_BACKGROUND.getRgbString()};
  background-image: linear-gradient(
    rgba(255, 255, 255, 0.16),
    rgba(255, 255, 255, 0.16)
  );
  transition: all 0.3s;
  border-radius: 0px 0px 5px 5px;

  &:hover:not(.noHoverEffect) {
    background-color: ${(p) =>
      p.colorset.DIALOG_BODY_BACKGROUND.plus(
        new RGB(15, 15, 15),
      ).getRgbString()};
  }
`;

const DialogBackdropBase = styled.div`
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 999;

  &.fade {
    animation: ${BackdropIn} 2s;
  }
`;

function DialogBackdrop(props: React.HTMLAttributes<HTMLDivElement>) {
  const { setDialog } = useDialog();

  return (
    <DialogBackdropBase
      {...props}
      onClick={() => setDialog({ visible: false })}
    />
  );
}

const Divider = styled.div<ThemeBasedComponent>`
  width: 100%;
  height: 0.5px;
  background-color: ${(p) =>
    p.colorset.DIALOG_DIVIDER_BACKGROUND.getRgbString()};
`;

const RawModeWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
`;

const ExitButton = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  font-weight: bold;
  color: rgb(150, 150, 150);
  font-size: 15px;
`;

export {
  DialogBody,
  DialogContainer,
  DialogHeader,
  Right,
  DialogBackdrop,
  Divider,
  RawModeWrapper,
  ExitButton,
  DialogIn,
};
