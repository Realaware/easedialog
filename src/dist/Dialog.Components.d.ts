import React from 'react';
import { Keyframes } from 'styled-components';
declare const Right: import("styled-components").StyledComponent<"div", any, {}, never>;
declare const DialogContainer: import("styled-components").StyledComponent<"div", any, {
    animation?: Keyframes;
} & {
    colorset: import("./Dialog.Type").DialogThemeType;
}, never>;
declare const DialogHeader: import("styled-components").StyledComponent<"header", any, any, never>;
declare const DialogBody: import("styled-components").StyledComponent<"div", any, any, never>;
declare function DialogBackdrop(props: React.HTMLAttributes<HTMLDivElement>): JSX.Element;
declare const Divider: import("styled-components").StyledComponent<"div", any, any, never>;
declare const RawModeWrapper: import("styled-components").StyledComponent<"div", any, {}, never>;
declare const ExitButton: import("styled-components").StyledComponent<"button", any, {}, never>;
export { DialogBody, DialogContainer, DialogHeader, Right, DialogBackdrop, Divider, RawModeWrapper, ExitButton, };
