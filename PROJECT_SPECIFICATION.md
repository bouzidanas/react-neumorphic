
# react-neumorphic

## Project Specification

**A modular React component library featuring neumorphic UI components optimized for AI-assisted development.**

### 🎯 Project Overview

This is a TypeScript React component library that provides beautiful neumorphic (soft UI) components. The project is designed to be:
- **Modular**: Each component can be imported individually
- **Lightweight**: Minimal bundle size with tree-shaking support
- **Developer-friendly**: Easy local development with hot reloading
- **AI-optimized**: Clear structure and patterns for AI assistance

### 🏗️ Project Structure

```
src/
├── index.ts                     # Main library entry point
├── components/                  # All components
│   ├── toggle/                 # Toggle component
│   │   ├── NeumorphicToggle.tsx
│   │   ├── NeumorphicToggle.css
│   │   └── index.ts
│   └── [future-components]/
├── App.tsx                     # Demo application (dev only)
├── App.css                     # Demo styles (dev only)
└── main.tsx                    # Demo entry (dev only)
```

### 🎨 Design System

**Neumorphic Design Principles:**
- Soft shadows using `box-shadow` with light and dark variants
- Gradient borders using `border-image` for enhanced visual depth
- Smooth transitions with `cubic-bezier(0.4, 0, 0.2, 1)`
- Color variables for light/dark mode support
- Consistent sizing system (small, medium, large)

**CSS Architecture:**
- CSS custom properties (variables) for theming
- BEM-like class naming convention
- Component-scoped styles
- No external CSS dependencies

### 🚀 Development Workflow

#### Quick Start
```bash
npm install          # Install dependencies
npm run dev         # Start dev server at http://localhost:5173
npm run build       # Build for production
npm run lint        # Check code quality
```

#### Adding New Components
1. Create component folder under `src/components/[component-name]/`
2. Follow the pattern: `Component.tsx`, `Component.css`, `index.ts`
3. Export from main `src/index.ts`
4. Update `package.json` exports for modular access
5. Add demo to `App.tsx`

### 📦 Build & Publishing

**Build Configuration:**
- **Vite** for bundling and development
- **TypeScript** for type safety
- **ESM/CJS** dual format output
- **Tree-shaking** enabled for minimal bundles

**Package Structure:**
```json
{
  "main": "dist/index.cjs.js",
  "module": "dist/index.esm.js",
  "types": "dist/index.d.ts",
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.esm.js",
      "require": "./dist/index.cjs.js"
    },
    "./toggle": {
      "types": "./dist/toggle/index.d.ts",
      "import": "./dist/toggle/index.esm.js",
      "require": "./dist/toggle/index.cjs.js"
    }
  }
}
```

### 🧩 Component API Design

**Standard Props Pattern:**
```typescript
interface ComponentProps {
  // Core functionality
  value?: boolean;
  onChange?: (value: boolean) => void;
  
  // Appearance
  size?: number | string | 'small' | 'medium' | 'large';
  variant?: 'light' | 'dark' | 'auto';
  
  // State
  disabled?: boolean;
  loading?: boolean;
  
  // Accessibility
  'aria-label'?: string;
  'aria-describedby'?: string;
  
  // Styling
  className?: string;
  style?: React.CSSProperties;
}
```

**Sizing System:**
- `size` prop accepts:
  - `number`: Height in pixels (e.g., `48` = 48px height)
  - `string`: CSS height value (e.g., `"3rem"`, `"48px"`)
  - `'small' | 'medium' | 'large'`: Preset sizes (32px, 48px, 64px)
- **Aspect Ratio**: Fixed 3:1 ratio (width = height × 3)
- **Handle Circle**: Fills the height with even margin separation from pill edges
```

**Controlled/Uncontrolled Pattern:**
- Support both controlled and uncontrolled usage
- Use internal state when no `value` prop provided
- Always call `onChange` when provided

### 🎯 AI Development Guidelines

**For AI Assistants:**

1. **File Organization**: Components follow a consistent pattern - always create `.tsx`, `.css`, and `index.ts` files
2. **Naming Convention**: Use PascalCase for components, kebab-case for CSS classes with component prefix
3. **TypeScript**: Always export prop interfaces and use proper typing
4. **CSS Strategy**: Use CSS custom properties for theming, avoid inline styles
5. **Accessibility**: Include ARIA attributes and keyboard navigation
6. **Testing**: Component should work in both controlled and uncontrolled modes

**Code Patterns to Follow:**
- Use `React.FC<Props>` for component typing
- Implement proper focus management
- Use semantic HTML when possible
- Include hover, active, and focus states
- Support both light and dark themes

### 🔧 Current Components

#### NeumorphicToggle
**Location:** `src/components/toggle/`
**Purpose:** Theme/mode toggle switch with neumorphic styling
**Features:**
- Light/dark mode theming
- Flexible sizing system (pixels, CSS units, or presets)
- Fixed 3:1 aspect ratio (width = height × 3)
- Perfect circle handle that fills height with even margins
- Smooth animations
- Keyboard accessibility
- Icon integration (sun/moon)
- Gradient borders for enhanced depth

**Sizing Examples:**
```jsx
// Preset sizes
<NeumorphicToggle size="small" />   // 32px height, 96px width
<NeumorphicToggle size="medium" />  // 48px height, 144px width
<NeumorphicToggle size="large" />   // 64px height, 192px width

// Custom pixel size
<NeumorphicToggle size={40} />      // 40px height, 120px width

// CSS unit size
<NeumorphicToggle size="3rem" />    // 3rem height, 9rem width
```

**Usage:**
```jsx
import { NeumorphicToggle } from 'react-neumorphic';

// Uncontrolled
<NeumorphicToggle onChange={(isOn) => console.log(isOn)} />

// Controlled
<NeumorphicToggle isOn={isDark} onChange={setIsDark} size="large" />

// Individual import (future)
import { NeumorphicToggle } from 'react-neumorphic/toggle';
```

### 🎯 Future Roadmap

**Planned Components:**
- `NeumorphicButton` - Pressable buttons with neumorphic styling
- `NeumorphicSlider` - Range input with soft shadows
- `NeumorphicCard` - Container with inset/outset shadows
- `NeumorphicInput` - Text inputs with inner shadows
- `NeumorphicCheckbox` - Checkbox with neumorphic design

### 📋 Technical Requirements

**Dependencies:**
- React 16.8+ (hooks support)
- TypeScript 4.5+
- Modern browsers with CSS custom properties support

**Development Dependencies:**
- Vite for building and dev server
- ESLint for code quality
- TypeScript for type checking

### 🚀 Usage Examples

**Next.js Integration:**
```jsx
// pages/_app.js
import { NeumorphicToggle } from 'react-neumorphic';

export default function App({ Component, pageProps }) {
  const [isDark, setIsDark] = useState(false);
  
  return (
    <div className={isDark ? 'dark' : 'light'}>
      <NeumorphicToggle isOn={isDark} onChange={setIsDark} />
      <Component {...pageProps} />
    </div>
  );
}
```

**Vite/React Integration:**
```jsx
import { NeumorphicToggle } from 'react-neumorphic';
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState('light');
  
  return (
    <main data-theme={theme}>
      <NeumorphicToggle 
        isOn={theme === 'dark'}
        onChange={(isDark) => setTheme(isDark ? 'dark' : 'light')}
      />
    </main>
  );
}
```

### 📄 License

MIT - See LICENSE file for details.

---

*This specification is optimized for AI-assisted development. Follow the patterns and conventions outlined here for consistent, maintainable code.*
