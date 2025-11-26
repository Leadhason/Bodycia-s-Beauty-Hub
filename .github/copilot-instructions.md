# Bodycia's Beauty Hub - AI Coding Agent Instructions

## Architecture Overview

This is a **single-page React application** built with Vite and TypeScript for a beauty salon. The app uses a **component-first architecture** with all page sections as individual components imported into `App.tsx` in a specific order that creates a cohesive landing page flow.

### Key Structure Patterns
- **App.tsx**: Main container that orchestrates the page flow with 12+ section components
- **constants.ts**: Centralized data store for services, team, testimonials, and FAQ content
- **types.ts**: TypeScript interfaces defining the shape of all business data
- **components/**: Self-contained UI sections with consistent naming (Hero, Services, Team, etc.)

## Design System & Styling

### Custom Tailwind Configuration
The app uses **CDN Tailwind** with custom configuration defined in `index.html`:
```javascript
// Custom colors defined in tailwind.config
colors: {
  cream: '#FFF8F5',      // Background
  plum: '#4A192C',       // Primary text
  mauve: '#9E3865',      // Accent/highlights
  darkbg: '#18050E'      // Dark sections
}
```

### Typography System
- **Primary**: 'Tenor Sans' (sans-serif) for body text and UI
- **Display**: 'Playfair Display' (serif) for headings and emphasis
- **Pattern**: Large headings use `font-serif` with italic spans for stylistic contrast

### Component Patterns
- **Section structure**: Each component wraps content in `<section>` with consistent padding (`py-24 px-6 md:px-12`)
- **Layout grids**: Most components use responsive grid patterns with `grid-cols-1 md:grid-cols-2/3`
- **Hover effects**: Images use `group-hover:scale-105 transition-transform duration-700`
- **Interactive states**: Buttons use `hover:bg-plum/10` pattern with opacity-based states

## Data Management Patterns

### Service Data Structure
Services are organized in `constants.ts` as categories with items:
```typescript
ServiceCategory {
  title: string,
  icon: string,        // Lucide icon identifier
  items: ServiceItem[], // name, price, image
  count: number
}
```

### Icon System
Uses **Lucide React** with string-based icon mapping in components:
```typescript
const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'sparkles': return <Sparkles size={20} strokeWidth={1} />;
    // Pattern for consistent icon rendering
  }
};
```

## Development Workflows

### Local Development
```bash
npm install           # Install dependencies
npm run dev          # Start dev server on port 3000
```

### Environment Setup
- Requires `GEMINI_API_KEY` in `.env.local` (though not actively used in current components)
- Vite config exposes API keys via `process.env.GEMINI_API_KEY`

### Build & Deploy
```bash
npm run build        # Production build
npm run preview      # Preview production build
```

## Component Development Guidelines

### Adding New Sections
1. Create component in `components/` following PascalCase naming
2. Add import and placement in `App.tsx` main flow
3. Follow section wrapper pattern with consistent spacing
4. Add any new data structures to `constants.ts` and type definitions to `types.ts`

### Styling Conventions
- Use semantic color names (`text-plum`, `bg-cream`) over hex values
- Implement responsive design with mobile-first `md:` breakpoints
- Apply hover effects using `group` pattern for parent-child interactions
- Use custom border radius patterns like `rounded-tl-[4rem]` for unique designs

### Data Integration
- Business content lives in `constants.ts` arrays (SERVICES_DATA, TEAM_DATA, etc.)
- Components consume data via imports, not props
- Images use Unsplash URLs with consistent query parameters (`?q=80&w=800&auto=format&fit=crop`)

## AI Studio Integration

This app was generated for **AI Studio deployment** with special considerations:
- Uses import maps in `index.html` for React CDN loading
- Metadata defined in `metadata.json` for AI Studio context
- Optimized for single-page deployment without routing

When making changes, maintain the **elegant, luxury aesthetic** with soft animations, generous whitespace, and the sophisticated plum/cream color palette that reflects the beauty salon brand.