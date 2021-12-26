import {
  DialogThemeType,
  DialogDefaultTheme,
  DialogLightTheme,
} from '../Dialog.Type';

interface Options {
  /**
   * use light theme as base theme rather than dark theme.
   */
  lighttheme?: boolean;
}

/**
 * This function will create you a theme for your dialog.
 *
 * **WARNING**
 *
 * you should use RGB method.
 *
 * @param theme
 * @param options
 * @returns theme
 */
export default function createDialogTheme(
  theme: Partial<DialogThemeType>,
  options?: Options,
) {
  return {
    ...(options && options.lighttheme ? DialogLightTheme : DialogDefaultTheme),
    ...theme,
  };
}
