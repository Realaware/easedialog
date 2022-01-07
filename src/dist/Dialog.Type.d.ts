import React from 'react';
import { Keyframes } from 'styled-components';
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
declare type ThemeBasedComponent<T = any> = T & {
    colorset: DialogThemeType;
};
declare type DialogPositions = 'center';
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
     * **visible**
     *
     * it determines your dialog visibility.
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
     * this options will allow you to make your own dialog from scratch.
     * if this options is enabled, dialog will use body as whole container.
     *
     * ** WARNING**
     *
     * if you use rawMode, dialog animation will disappear.
     */
    rawMode?: boolean;
    /**
     * exit dialog when esc pressed.
     */
    escExit?: boolean;
    /**
     * remove header from your dialog.
     */
    noHeader?: boolean;
    /**
     * used when dialog is generated.
     */
    animation?: Keyframes;
}
interface DialogThemeType {
    DIALOG_HEADER_BACKGROUND: RGB;
    DIALOG_BODY_BACKGROUND: RGB;
    DIALOG_DIVIDER_BACKGROUND: RGB;
    DIALOG_HEADER_TEXT_COLOR: RGB;
}
declare const DialogDefaultTheme: DialogThemeType;
declare const DialogLightTheme: DialogThemeType;
export type { ProviderContext, ProviderProps, DialogProps, DialogPositions, DialogThemeType, ThemeBasedComponent, };
export { DialogDefaultTheme, DialogLightTheme };
