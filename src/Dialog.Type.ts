import React from 'react';

interface ProviderContext {
  setDialog: React.Dispatch<React.SetStateAction<DialogProps | undefined>>;
  dialog: DialogProps | undefined;
  theme: DialogThemeType;
}

interface ProviderProps {
  children?: any;
}

type DialogPositions = 'center';

interface DialogProps {
  /**
   * **title**
   *
   * This property will apply to your dialog title.
   * If it is undefined, it will be blank.
   */
  title?: string;
  /**
   * Invoked when dialog body is closed.
   */
  onClose?: () => void;

  /**
   * **body**
   *
   * body is something shown when dialog is opened.
   */
  body?: any;

  /**
   * **position**
   *
   * it determines where the dialog is placed.
   */
  position?: DialogPositions;

  /**
   * **active**
   *
   * it determines your dialog visiblity.
   */
  visible?: boolean;
  /**
   * **backdrop**
   *
   * default: false
   */
  backdrop?: boolean;
}

const DialogTheme = {
  DIALOG_HEADER_BACKGROUND: `rgb(0, 0, 0)`,
  DIALOG_BODY_BACKGROUND: `rgb(10, 10, 10)`,
  DIALOG_BODY_HOVER_BACKGROUND: `rgb(25, 25, 25)`,
};

type DialogThemeType = typeof DialogTheme;

export type {
  ProviderContext,
  ProviderProps,
  DialogProps,
  DialogPositions,
  DialogThemeType,
};
export { DialogTheme };
