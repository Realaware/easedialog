# EaseDialog

Use dialog in your program with ease.

# Built With

[Typescript](https://www.typescriptlang.org/)

[React](https://reactjs.org/)

[StyledComponents](https://styled-components.com/)

[StyledIcons](https://github.com/styled-icons/styled-icons)

# Usage

1. Wrap your application or index file with DialogProvider.
2. Load useDialog hook in which you want to use it.

```tsx
import React from 'react';
import useDialog from 'easedialog/useDialog';

function App() {
  const { setDialog } = useDialog();

  return (
    <div>
      <button onClick={() => setDialog(/**... your methods.*/)}>
        Click Here to Open dialog.
      </button>
    </div>
  );
}
```

# Theme

You can customize your dialog theme using 'createDialogTheme' method.

## examples

```tsx
// somewhere you loaded dialog provider.

import createDialogTheme from 'easedialog/lib/createDialogTheme';
import RGB from 'easedialog/lib/rgb';

const GreenTheme = createDialogTheme({
  DIALOG_HEADER_BACKGROUND: new RGB(50, 230, 50), // color value must be RGB object from library.
});

function App() {
  return <DialogProvider theme={GreenTheme}>
    ...
  </DialogProvider>
}
```

# Changelogs

## 2021/12/26

* You can set your dialog theme using createDialogTheme method by putting its object into provider.
* Dialog light theme added.
* Fix weird position of backdrop.