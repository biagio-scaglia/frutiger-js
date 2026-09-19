# Contributing to Frutiger.js 💧

Thank you for your interest in contributing to **Frutiger.js**! We welcome contributions from developers, designers, accessibility advocates, and retro tech enthusiasts who share a passion for tactile, optimistic Web 2.0 design systems.

---

## 🧭 Code of Conduct

All contributors and maintainers are expected to adhere to our [Code of Conduct](CODE_OF_CONDUCT.md). Please be respectful, constructive, and welcoming to all participants.

---

## 🛠️ Development Setup

Frutiger.js is structured as an npm monorepo using npm workspaces:

```
frutiger-js/
├── packages/
│   ├── core/         # Pure CSS framework (@frutiger-js/core)
│   └── react/        # React component library (@frutiger-js/react)
├── examples/
│   └── playground/   # Interactive showcase (@frutiger-js/playground)
└── docs/             # Technical architecture and component guides
```

### Prerequisites

- **Node.js**: `v20.x` or `v22.x` (LTS recommended)
- **npm**: `v10.x` or higher

### Steps

1. Fork and clone the repository:
   ```bash
   git clone https://github.com/<your-username>/frutiger-js.git
   cd frutiger-js
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the interactive playground dev server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Quality Standards & Scripts

Before submitting a Pull Request, ensure that all validation checks pass cleanly:

```bash
# Run ESLint across TypeScript and React source files
npm run lint

# Check strict TypeScript types across all workspaces
npm run typecheck

# Run unit tests via Vitest & React Testing Library
npm test

# Verify Prettier code formatting
npm run format:check

# Run production build across all packages and playground
npm run build
```

---

## 🎨 Component Design Principles

When proposing or building new components for Frutiger.js:

1. **Authentic Aesthetic**: Embrace translucent acrylic glass (`backdrop-filter`), specular dome highlights, water drops, and nature daylight gradients. Avoid generic flat or dark-mode homogenization.
2. **Pure CSS Foundation**: Any new visual styles must first live in `@frutiger-js/core` within appropriate `@layer fj.*` cascade layers.
3. **Fluid-First Responsiveness**: Never design for desktop only. Ensure fluid scaling from 320px mobile up to 4K ultrawide with continuous clamp scaling and zero horizontal overflow.
4. **WCAG 2.1 AA Accessibility**: Minimum 44px touch targets on mobile, high-contrast text tokens, semantic HTML elements, visible focus rings, and full keyboard navigation.
5. **Zero CSS-in-JS Runtime**: `@frutiger-js/react` components wrap native DOM elements with strict TypeScript types and BEM class names without runtime CSS overhead.

---

## 📝 Commit Conventions

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat(component)`: A new user-facing component or feature
- `fix(core)`: A bug fix in CSS or React component
- `docs(components)`: Documentation updates or additions
- `style`: Formatting or whitespace adjustments
- `refactor`: Code refactoring without behavioral changes
- `test`: Adding or updating test suites
- `chore`: Build scripts, workflow, or dependency updates

---

## 🚀 Pull Request Guidelines

1. Create a descriptive branch from `master` (e.g. `feat/glass-dock` or `fix/slider-touch`).
2. Include unit tests for any new component or bug fix in `packages/react/src/components/<ComponentName>/<ComponentName>.test.tsx`.
3. Update relevant documentation in `docs/components.md` and include a demonstration in `examples/playground/src/App.tsx`.
4. Ensure `npm run lint`, `npm run typecheck`, `npm test`, and `npm run build` pass with zero errors.
5. Submit your PR with a clear summary of changes and visual screenshots or recordings.

Thank you for helping bring the blue sky back to the web! ☀️
