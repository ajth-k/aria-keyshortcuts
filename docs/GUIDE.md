# Things to consider

General guidelines for implementing keyboard shortcuts on your website.

## Do not override native shortcuts

Choose shortcut keys wisely. Nobody wants their native shortcuts hijacked. If your site pops up a modal when I hit `Control + P` instead of printing, yeah… I’d be annoyed too.

Instead of overriding them, try enhancing them. People expect `Control + C` to copy—so go with that, but maybe add something extra, like how **JetBrains** copies import statements along with the code.

## Avoid single letter shortcuts

Avoid using single-letter shortcuts, especially as global ones. Always pair them with a modifier like `Alt`, `Control`, `Meta` or `Shift`, to prevent accidental triggers.

## Keep your shortcuts explicit

If you’re using a library that handles `aria-keyshortcuts`, you’re covered—screen readers will announce them automatically. But most users aren’t using screen readers, so don’t leave them hanging. Add visual hints for shortcuts, and if your site is shortcut-heavy, throw in a cheat sheet to keep things user-friendly.

## Not every site needs keyboard shortcuts

If you’re building a productivity app, then yeah, shortcuts are a must. But if it’s just a landing page, maybe just leave it alone—no need to overcomplicate things.
