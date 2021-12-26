import React from 'react';
import { DialogThemeType } from './Dialog.Type';
declare const Right: import("styled-components").StyledComponent<"div", any, {}, never>;
declare const DialogContainer: import("styled-components").StyledComponent<"div", any, {}, never>;
declare const DialogHeader: import("styled-components").StyledComponent<"header", any, {
    colorset: DialogThemeType;
}, never>;
declare const DialogBody: import("styled-components").StyledComponent<"div", any, {
    colorset: DialogThemeType;
}, never>;
declare function DialogBackdrop(props: React.HTMLAttributes<HTMLDivElement>): JSX.Element;
declare const Divider: import("styled-components").StyledComponent<"div", any, {}, never>;
export { DialogBody, DialogContainer, DialogHeader, Right, DialogBackdrop, Divider, };
