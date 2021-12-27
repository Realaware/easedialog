import React from 'react';
import RGB from './lib/rgb';

interface ProviderContext {
  setDialog: React.Dispatch<React.SetStateAction<DialogProps | undefined>>;
  dialog: DialogProps | undefined;
  theme: DialogThemeType;
}

interface ProviderProps {
  children?: any;
  theme?: Partial<DialogThemeType>;
}

interface ThemeBasedComponent {
  colorset: DialogThemeType;
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
  /**
   * disable hover effect on dialog body.
   */
  noHoverEffect?: boolean;
  /**
   * backdrop fade effect
   *
   * **WARNING**
   *
   * only backdrop is enabled.
   */
  backdropFade?: boolean;
}

interface DialogThemeType {
  DIALOG_HEADER_BACKGROUND: RGB;
  DIALOG_BODY_BACKGROUND: RGB;
  DIALOG_DIVIDER_BACKGROUND: RGB;
  DIALOG_HEADER_TEXT_COLOR: RGB;
}

const DialogDefaultTheme: DialogThemeType = {
  DIALOG_HEADER_BACKGROUND: new RGB(0, 0, 0),
  DIALOG_BODY_BACKGROUND: new RGB(10, 10, 10),
  DIALOG_DIVIDER_BACKGROUND: new RGB(120, 120, 120),
  DIALOG_HEADER_TEXT_COLOR: new RGB(255, 255, 255),
};

const DialogLightTheme: DialogThemeType = {
  DIALOG_HEADER_BACKGROUND: new RGB(150, 150, 150),
  DIALOG_BODY_BACKGROUND: new RGB(160, 160, 160),
  DIALOG_DIVIDER_BACKGROUND: new RGB(120, 120, 120),
  DIALOG_HEADER_TEXT_COLOR: new RGB(255, 255, 255),
};

export type {
  ProviderContext,
  ProviderProps,
  DialogProps,
  DialogPositions,
  DialogThemeType,
  ThemeBasedComponent,
};
export { DialogDefaultTheme, DialogLightTheme };
