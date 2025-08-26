# react-neumorphic

Modular React component library with neumorphic UI components. Easy local development with Vite, and lightweight npm package for use in Next.js and other React projects.

## Getting Started (Development)

1. Install dependencies:
  ```bash
  npm install
  ```
2. Start the local dev server:
  ```bash
  npm run dev
  ```
  This will launch a local server and open the demo page for live preview.

## Usage (as a library)

Install in your project:
```bash
npm install react-neumorphic
```

Import the component:
```jsx
import { NeumorphicToggle } from 'react-neumorphic';
// In the future, for individual components:
import { NeumorphicToggle } from 'react-neumorphic/toggle';
```

## Features

- Neumorphic design
- Modular exports (planned)
- Lightweight and tree-shakeable
- TypeScript support
- Ready for Next.js and other React frameworks

## Publishing

- Only the `dist` folder is published to npm.
- Demo/dev files are excluded from the published package.

## License

MIT

## Copyright

Copyright © 2025 Anas B. All rights reserved.

This project is proprietary and is not open source. Unauthorized use, distribution, or modification is strictly prohibited.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
