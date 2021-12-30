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
} from './Dialog.Components';
import IconButton from './lib/Icon.Button';
import { Close } from 'styled-icons/evil';
import useDialog from './useDialog';

function Dialog() {
  const { dialog, theme } = useContext(DialogContext);
  const { setDialog } = useDialog();
  const [visible, setVisible] = useState(false);
  const ContainerRef = useRef<HTMLDivElement>(null);

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
        container.style.transform = 'translate(-50%, -50%) scale(0.2)';
        setTimeout(() => {
          setVisible(false);
        }, 150);
      } else if (dialog.visible === true) {
        setVisible(true);
      }
    }
  }, [dialog?.visible]);

  return dialog && visible ? (
    dialog.rawMode ? (
      <RawModeWrapper>{dialog.body}</RawModeWrapper>
    ) : (
      <>
        {dialog.backdrop && <DialogBackdrop />}
        <DialogContainer ref={ContainerRef}>
          {!dialog.noHeader && (
            <>
              <DialogHeader colorset={theme}>
                <h3>{dialog.title}</h3>

                <Right>
                  <IconButton
                    onClick={() => setDialog({ visible: false })}
                    size={25}
                    Icon={Close}
                  />
                </Right>
              </DialogHeader>
              <Divider colorset={theme} />
            </>
          )}

          <DialogBody
            className={dialog.noHoverEffect ? 'noHoverEffect' : undefined}
            colorset={theme}
          >
            {dialog.body}
          </DialogBody>
        </DialogContainer>
      </>
    )
  ) : null;
}

export default Dialog;
