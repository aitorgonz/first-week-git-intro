# Git Flow Lab

A small web project for practicing Git Flow (feature branches, develop, main).

## Features

### Theme toggle

The page has a **Toggle theme** button. Clicking it switches the page between light and dark mode.

**How it works:**

- `script.js` listens for clicks on the button (`#theme-toggle`) and flips the `data-theme` attribute on `<body>` between `light` and `dark`.
- `styles.css` uses the `[data-theme="dark"]` selector to apply dark colors to the page, header, and button.

## Running locally

Open `index.html` in a browser (or use the VS Code Live Server extension).