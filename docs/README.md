# React-aria-keyshortcuts

A lightweight library designed to simplify the implementation of keyboard shortcuts in your react web applications.

## Using Aria-keyshortcuts

### Installation

```bash
npm install react-aria-keyshortcuts
# or
yarn add react-aria-keyshortcuts
# or
pnpm add react-aria-keyshortcuts
```

### Adding hotKey to a trigger

To trigger an action when a specific hotkey is pressed and the associated element is in focus, pass the element's `ref`, the `hotkey`, and the `action` to the **useKeyboardShortcut** hook.

```javascript
import Kbd from "react-aria-keyshortcuts/components/Kbd";
import useKeyShortcut from "react-aria-keyshortcuts/hooks/useKeyShortcut";

const ref = useRef(null);
const action = () => {
  const { keyCap } = useKeyShortcut({
    key: "Enter",
    action: ()=>{
      alert("Deleted");
    },
    options: {
      ref,
    },
  });
return (
   <button ref={ref} onClick={action}>
    Delete <Kbd className="text-xs" keyCap={keyCap} />
  </button>
);
```

### Global hotkey

If no `ref` is provided, the action will be registered as a global hotkey, meaning it will trigger whenever the specified hotkeys are pressed

```javascript
import { useShortcutKey } from "react-aria-keyshortcuts";

const action = () => {
  alert("Hello world");
};
useShortcutKey({ keys: "meta+.", action, ref });
```

### Scopes

In many cases, you may need to reuse the same shortcuts in different contexts. For example, a hotkey like `Ctrl+S` could have one meaning in the default view (e.g., saving a document) and a different meaning when a modal is open. To support this, you can pass a scope prop. This ensures the action is only triggered when the current scope matches the specified scope.
By default, the scope is set to global. If no scope is provided, the shortcut will operate in the default global scope. To update the scope dynamically, use the **ShortcutScope** component.

```javascript
import Kbd from "react-aria-keyshortcuts/components/Kbd";
import useKeyShortcut from "react-aria-keyshortcuts/hooks/useKeyShortcut";


const DeleteButton = ()=>{
    const ref = useRef(null);
    const action = () => {
      alert("Hello world");
    };

    const { keyCap, changeScope } = useShortcutKey({
      keys: "Control+s",
      action,
      options:{
        ref,
        scopes: ["saveModal"],
      }
    });
    return (
      <button ref={ref}>
        Open save modal
      </button>
    );
}


<ShortcutScope scopes=["saveModal"]>
  <DeleteButton/>
</ShortcutScope>

```

### Visual cues

In addition to adding the `aria-keyshortcuts` attribute for screen reader compatibility, it’s equally important to provide visual indications for visual users. `Keycap Indicators`: Display keycaps directly on the trigger element to show the associated shortcut
For a comprehensive user experience, you can also include a cheat sheet within your application. This allows users to view and, if supported, customize all global shortcut keys.

```javascript
import Kbd from "react-aria-keyshortcuts/components/Kbd";
import useKeyShortcut from "react-aria-keyshortcuts/hooks/useKeyShortcut";


const ref = useRef(null);
const action = () => {
  const { keyCap } = useKeyShortcut({
    key: "Enter",
    action: ()=>{
      alert("Deleted");
    },
    options: {
      ref,
    },
  });
return (
  <button ref={ref} onClick={action}>
    Delete <Kbd className="text-xs" keyCap={keyCap} />
  </button>
);
```

## Contributing

Contributions are welcome! Whether it’s a bug fix, feature request, or documentation improvement, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](/LICENSE) file for details.
