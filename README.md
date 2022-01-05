# EaseDialog

Use dialog in your program with ease.

and

HAPPY NEW YEAR !

# Built With

[Typescript](https://www.typescriptlang.org/)

[React](https://reactjs.org/)

[StyledComponents](https://styled-components.com/)

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

# Sub Options

## theme
You can customize your dialog theme using 'createDialogTheme' method.

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

## animation
this property will make your dialog much better.

```tsx
import React from 'react';
import { keyframes } from 'styled-components'; // function from styled-components, which is dependency of this package.
import { useDialog } from 'easedialog';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`; 

function App() {
  const { setDialog } = useDialog();

  return (
    <div>
      <button onClick={() => setDialog({
        ...
        animation: fadeIn, // this property will be reused as reversed when dialog is closing.
      })}>
        Click me
      </button>
    </div>
  )
}

// you can use TemplateStringsArray or just array. 
// i recommend to use the former. 
// there is a vsc extension for styled-components, so if you need help to write css, check it out.

```

## noHeader
this property will remove header from dialog.
you can make your own header or just make it clear.

## escExit 
this property will let you exit dialog by pressing esc.

## rawMode
you can build your dialog from scratch.

## position
For now, Only the center is available.

# Changelogs

## 2022/1/6
- custom animation is now available.

## 2022/1/1
- Some improvements.
- size-reduction while dialog-exiting is fixed.

## 2021/12/30
- some options added.
- litle improvement of dialog animation.
