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
declare const DialogDefaultTheme: {
    DIALOG_HEADER_BACKGROUND: RGB;
    DIALOG_BODY_BACKGROUND: RGB;
    DIALOG_DIVIDER_BACKGROUND: RGB;
    DIALOG_HEADER_TEXT_COLOR: RGB;
};
declare const DialogLightTheme: DialogThemeType;
declare type DialogThemeType = typeof DialogDefaultTheme;
export type { ProviderContext, ProviderProps, DialogProps, DialogPositions, DialogThemeType, };
export { DialogDefaultTheme, DialogLightTheme };
