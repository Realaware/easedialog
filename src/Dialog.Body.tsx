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
import { DialogProps } from './Dialog.Type';

function Dialog() {
  const { dialog, theme } = useContext(DialogContext);
  const { setDialog } = useDialog();
  const [visible, setVisible] = useState(false);
  const ContainerRef = useRef<HTMLDivElement>(null);
  const dialogHistory = useRef<DialogProps>();

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
    const history = dialogHistory.current;

    if (dialog) {
      if (dialog.visible === false && container && history) {
        // exit animation.
        if (history.animation) {
          container.style.animationName = history.animation.getName();
          container.style.animationDirection = 'reverse';
          container.onanimationend = () => setVisible(false);
        } else {
          container.style.transform = 'translate(-50%, -50%) scale(0.2)';
          container.style.opacity = '0';
          setTimeout(() => setVisible(false), 150);
        }
      } else if (dialog.visible === true) {
        // save lastest body and title to prevent size-reduction when exiting.
        dialogHistory.current = dialog;
        setVisible(true);
      }
    }
  }, [dialog]);

  const getDialogProperty = (key: keyof DialogProps) => {
    const history = dialogHistory.current;
    return dialog && dialog[key]
      ? dialog[key]
      : history && history[key]
      ? history[key]
      : null;
  };

  return dialog && visible ? (
    getDialogProperty('rawMode') ? (
      <RawModeWrapper>{getDialogProperty('body')}</RawModeWrapper>
    ) : (
      <>
        {getDialogProperty('backdrop') && <DialogBackdrop />}
        <DialogContainer
          colorset={theme}
          ref={ContainerRef}
          animation={dialog.animation}
        >
          {!getDialogProperty('noHeader') && (
            <>
              <DialogHeader colorset={theme}>
                <h3>{getDialogProperty('title')}</h3>

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
            className={
              getDialogProperty('noHoverEffect') ? 'noHoverEffect' : undefined
            }
            colorset={theme}
          >
            {getDialogProperty('body')}
          </DialogBody>
        </DialogContainer>
      </>
    )
  ) : null;
}

export default Dialog;
