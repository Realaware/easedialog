import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
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
  DialogIn,
} from './Dialog.Components';
import useDialog from './useDialog';
import { DialogProps } from './Dialog.Type';

function Dialog() {
  const { dialog, theme } = useContext(DialogContext);
  const { setDialog } = useDialog();
  const [visible, setVisible] = useState(false);
  const ContainerRef = useRef<HTMLDivElement>(null);
  const dialogHistory = useRef<DialogProps>();
  const [style, setStyle] = useState<React.CSSProperties>({});

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
    const animation = getDialogProperty('animation');

    if (!dialog) return;

    if (dialog.visible === false && container) {
      setStyle({ animation: 'none' });

      // exit animation.
      setTimeout(() => {
        setStyle({
          animation: `${
            animation ? animation.getName() : DialogIn.getName()
          } 0.15s reverse`,
        });
      }, 10);

      container.onanimationend = () => {
        setVisible(false);
        setStyle({});
      };
    } else if (dialog.visible) {
      // save lastest body and title to prevent size-reduction when exiting.
      dialogHistory.current = dialog;
      setVisible(true);
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
          animation={getDialogProperty('animation') || DialogIn}
          style={style}
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
