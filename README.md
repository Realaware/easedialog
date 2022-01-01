# EaseDialog

Use dialog in your program with ease.

and

HAPPY NEW YEAR !

# Built With

[Typescript](https://www.typescriptlang.org/)

[React](https://reactjs.org/)

[StyledComponents](https://styled-components.com/)

[StyledIcons](https://github.com/styled-icons/styled-icons)

# Usage

1. Wrap your application or index file with DialogProvider.

```tsx
// index file where react dom is rendering your app.

import React from 'react';
import ReactDOM from 'react-dom';
import { DialogProvider } from 'easedialog';

ReactDOM.render(
  <DialogProvider>
    ...
  </DialogProvider>,
  document.getElementById('root'),
)


```

2. Load useDialog hook in which you want to use it.

```tsx
import React from 'react';
import { useDialog } from 'easedialog';

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

import { createDialogTheme, RGB } from 'easedialog';

const GreenTheme = createDialogTheme({
  DIALOG_HEADER_BACKGROUND: new RGB(50, 230, 50), // color value must be RGB object from library.
});

function App() {
  return <DialogProvider theme={GreenTheme}>...</DialogProvider>;
}
```

# Changelogs

## 2022/1/1
- Some improvements.
- size-reduction while dialog-exiting is fixed.

## 2021/12/30
- some options added.
- litle improvement of dialog animation.

## 2021/12/28
- Raw Mode Added.
- Some improvements.
