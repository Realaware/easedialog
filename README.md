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
        <button onClick={() => setDialog( /**... your methods.*/ )}>Click Here to Open dialog.</button>
      </div>
    )
  }
```

