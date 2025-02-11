# react-aria-keyshortcuts

**react-aria-keyshortcuts** is a lightweight library designed to simplify the implementation of keyboard shortcuts in your react web applications.

## Key Features

- **Accessibility Compliance:** Automatically adds aria-keyshortcuts attributes for screen reader compatibility.
- **TypeScript support:**
- **Visual Indicators:** Supports keycaps and tooltips as visual cues, which will be hidden on touch devices. Dynamically displays OS-specific key labels (e.g., Ctrl, Cmd, Super).
- **Global Shortcut Cheatsheets:** Enables the creation of global keyboard shortcut references for users. Allows end users to define and customize their own keyboard combinations.

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

```jsx
import { useShortcutKey, Kbd } from "react-aria-keyshortcuts";

const ref = useRef(null);
const action = () => {
  alert("Hello world");
};
const { keyCap } = useShortcutKey({ keys: "meta+.", action, ref });
return (
  <button ref={ref} onClick={action}>
    Delete <Kbd className="text-xs" keyCap={keyCap} />
  </button>
);
```

### Global hotkey

If no `ref` is provided, the action will be registered as a global hotkey, meaning it will trigger whenever the specified hotkeys are pressed

```jsx
import { useShortcutKey } from "react-aria-keyshortcuts";

const action = () => {
  alert("Hello world");
};
useShortcutKey({ keys: "meta+.", action, ref });
```

### Scopes

In many cases, you may need to reuse the same shortcuts in different contexts. For example, a hotkey like Ctrl+S could have one meaning in the default view (e.g., saving a document) and a different meaning when a modal is open. To support this, you can pass a `scope` prop. This ensures the action is only triggered when the current scope matches the specified scope.

By default, the scope is set to `global`. If no scope is provided, the shortcut will operate in the default global scope. To update the scope dynamically, use the **changeScope** from **useShortcutScope**

```jsx
import { useShortcutKey, Kbd } from "react-aria-keyshortcuts";

const ref = useRef(null);
const action = () => {
  alert("Hello world");
};
const { currentScope, changeScope } = useShortcutScope();
const { keyCap, changeScope } = useShortcutKey({
  keys: "ctrl+s",
  action,
  ref,
  scope: "saveModal",
});
return (
  // ctrl+s will only work when the modal is open
  <button
    ref={ref}
    onClick={() => {
      if (currentScope !== "saveModal") changeScope("saveModal");
      //   same as setting it as global
      else changeScope(null);
    }}
  >
    Open save modal
  </button>
);
```

### Visual cues

In addition to adding the `aria-keyshortcuts` attribute for screen reader compatibility, it’s equally important to provide visual indications for regular users. react-aria-keyshortcuts offers two ways to handle this: **Keycap Indicators**: Display keycaps directly on the trigger element to show the associated shortcut **Tooltip on Hover**: Show a tooltip with the shortcut information when the user hovers over the trigger element.

For a comprehensive user experience, you can also include a **cheat sheet** within your application. This allows users to view and, if supported, customize all global shortcut keys.

```jsx
import { useShortcutKey, Kbd } from "react-aria-keyshortcuts";

const ref = useRef(null);
const action = () => {
  alert("Hello world");
};
const { keyCap } = useShortcutKey({ keys: "meta+.", action, ref });
return (
  <TooltipTriger>
    <button ref={ref} onClick={action}>
      Delete <Kbd className="text-xs" keyCap={keyCap} />
    </button>
    <Tooltip shortcut={keyCap} description="Save the selected items" />
  </TooltipTriger>
);
```

## Contributing

Contributions are welcome! Whether it’s a bug fix, feature request, or documentation improvement, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](/LICENSE) file for details.
