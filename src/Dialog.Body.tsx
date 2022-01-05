import React, { useContext, useEffect, useRef, useState } from 'react';
import DialogContext from './Dialog.Context';
import {
  DialogContainer,
  DialogHeader,
  DialogBody,
  Right,
  Divider,
  RawModeWrapper,
  DialogBackdrop,
  ExitButton,
} from './Dialog.Components';
import useDialog from './useDialog';
import { DialogHistory } from './Dialog.Type';

function Dialog() {
  const { dialog, theme } = useContext(DialogContext);
  const { setDialog } = useDialog();
  const [visible, setVisible] = useState(false);
  const ContainerRef = useRef<HTMLDivElement>(null);
  const dialogHistory = useRef<DialogHistory>({
    body: undefined,
    title: undefined,
    animation: undefined,
  });

  useEffect(() => {
    // implement dialog exit when escape pressed.
    const keyCallback = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && dialog?.escExit) {
        setDialog({ visible: false });
      }
    };

    window.addEventListener('keydown', keyCallback);

    return () => window.removeEventListener('keydown', keyCallback);
  });

  useEffect(() => {
    const container = ContainerRef.current;

    if (dialog) {
      if (dialog.visible === false && container) {
        // exit animation.
        container.style.animationName =
          dialogHistory.current.animation?.getName() || '';
        container.style.animationDirection = 'reverse';
        container.onanimationend = () => setVisible(false);
      } else if (dialog.visible === true) {
        // save lastest body and title to prevent size-reduction when exiting.
        dialogHistory.current = {
          body: dialog.body,
          title: dialog.title,
          animation: dialog.animation,
        };
        setVisible(true);
      }
    }
  }, [dialog]);

  return dialog && visible ? (
    dialog.rawMode ? (
      <RawModeWrapper>{dialog.body}</RawModeWrapper>
    ) : (
      <>
        {dialog.backdrop && <DialogBackdrop />}
        <DialogContainer
          colorset={theme}
          ref={ContainerRef}
          animation={dialog.animation}
        >
          {!dialog.noHeader && (
            <>
              <DialogHeader colorset={theme}>
                <h3>{dialog.title || dialogHistory.current.title}</h3>

                <Right>
                  <ExitButton onClick={() => setDialog({ visible: false })}>
                    ×
                  </ExitButton>
                </Right>
              </DialogHeader>
              <Divider colorset={theme} />
            </>
          )}

          <DialogBody
            className={dialog.noHoverEffect ? 'noHoverEffect' : undefined}
            colorset={theme}
          >
            {dialog.body || dialogHistory.current.body}
          </DialogBody>
        </DialogContainer>
      </>
    )
  ) : null;
}

export default Dialog;
