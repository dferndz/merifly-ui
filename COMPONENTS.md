# Merifly UI Component Library

A comprehensive, production-ready UI component library for the Merifly evidence-based hiring platform.

## Overview

This component library provides a complete set of accessible, responsive, and type-safe React components built with:

- **Class Variance Authority (CVA)** - Type-safe variant styling
- **Tailwind CSS v4** - Utility-first styling
- **TypeScript** - Full type safety
- **React 19** - Latest React features
- **Next.js 16** - App Router compatible

## Design System Compliance

All components strictly adhere to the Merifly color palette and design guidelines:

### Color Palette

**Primary Colors:**
- Merifly Blue: `#2b5daf`
- Merifly Gradient Blue: `#3bb0f3`
- Merifly Green: `#6edc6b`

**Secondary/Accent Colors:**
- Teal Accent: `#35c6b0`
- Vibrant Accent: `#ffb547`

**Neutral Colors:**
- White: `#ffffff`
- Light Gray: `#f4f5f7`
- Medium Gray: `#a1aab8`
- Dark Gray: `#2c3e50`

**Status Colors:**
- Error Red: `#e74c3c`
- Warning Yellow: `#f1c40f`

## Component Inventory

### Layout Components (3)
- **Container** - Responsive container with max-width constraints
- **Grid** - Responsive grid system (1-12 columns)
- **Col** - Grid column with responsive spans

### Basic Components (4)
- **Button** - 5 variants (primary, secondary, outline, ghost, danger) × 3 sizes
- **Badge** - 8 variants for status indicators
- **Spinner** - Loading indicator with 4 sizes and 5 color variants
- **Divider** - Horizontal/vertical separator

### Card Components (4)
- **Card** - Main card container with 3 variants
- **CardHeader** - Card header section
- **CardContent** - Card content section
- **CardFooter** - Card footer section

### Form Components (6)
- **Input** - Text input with 3 variants and 3 sizes
- **Textarea** - Multi-line text input with 3 variants
- **Select** - Dropdown selection with 3 variants
- **Checkbox** - Boolean checkbox input
- **Radio** - Radio button input
- **Label** - Form field label

### Navigation Components (4)
- **Navbar** - Top navigation bar with 3 variants and 3 positions
- **Menu** - Dropdown/context menu container
- **MenuItem** - Individual menu item
- **MenuSeparator** - Menu divider

### Feedback Components (10)
- **Alert** - 5 variants (default, success, warning, error, info)
- **AlertTitle** - Alert heading
- **AlertDescription** - Alert content
- **Modal** - Dialog overlay (pure UI, controlled)
- **ModalHeader**, **ModalTitle**, **ModalDescription**, **ModalFooter** - Modal sections
- **Avatar** - User profile image with fallback
- **AvatarImage**, **AvatarFallback** - Avatar components

### Typography Components (2)
- **Heading** - Semantic headings (h1-h6) with 4 variants
- **Text** - Paragraph/text with 5 sizes, 7 variants, 4 weights

**Total: 23 components + 14 sub-components = 37 exportable components**

## Installation & Setup

### Dependencies Installed
```bash
pnpm add class-variance-authority clsx tailwind-merge
```

### File Structure
```
src/
├── components/
│   └── ui/
│       ├── Alert.tsx
│       ├── Avatar.tsx
│       ├── Badge.tsx
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Checkbox.tsx
│       ├── Col.tsx
│       ├── Container.tsx
│       ├── Divider.tsx
│       ├── Grid.tsx
│       ├── Heading.tsx
│       ├── Input.tsx
│       ├── Label.tsx
│       ├── Menu.tsx
│       ├── Modal.tsx
│       ├── Navbar.tsx
│       ├── Radio.tsx
│       ├── Select.tsx
│       ├── Spinner.tsx
│       ├── Text.tsx
│       ├── Textarea.tsx
│       └── index.ts (barrel exports)
└── lib/
    └── utils.ts (cn helper)
```

## Usage

### Basic Import

```tsx
import { Button, Card, Input } from "@/components/ui";
```

### Example: Login Form

```tsx
import { Button, Card, CardHeader, CardContent, Input, Label } from "@/components/ui";

function LoginForm() {
  return (
    <Card>
      <CardHeader>
        <h2>Welcome to Merifly</h2>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@example.com" />
          </div>
          <Button variant="primary" size="lg" className="w-full">
            Sign In
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
```

## Demo Page

A comprehensive demo showcasing all components is available at:

**Route:** `/components-demo`

The demo includes:
- All component variants
- Interactive examples
- Form controls
- Layout demonstrations
- Typography samples
- Color palette showcase

To view the demo:
```bash
pnpm run dev
# Navigate to http://localhost:3000/components-demo
```

## Documentation

Comprehensive documentation is available in the `/docs/components` directory:

- **README.md** - Overview and design system guidelines
- **Button.md** - Button component documentation with examples
- **Card.md** - Card component documentation with examples
- **Input.md** - Input component documentation with examples
- **Modal.md** - Modal component documentation with examples
- **Alert.md** - Alert component documentation with examples
- **QuickReference.md** - Quick reference for all components

## Key Features

### Pure UI Components
- All components are presentational and stateless
- No internal state management for show/hide
- Fully controlled by parent components
- Composable and flexible

### CVA-Based Styling
- All variants managed through CVA
- Type-safe props
- No inline className strings in component JSX
- Consistent API across all components

### Accessibility First
- WCAG AA compliant color contrast
- Proper ARIA labels and roles
- Keyboard navigation support
- Screen reader compatible
- Focus management
- Semantic HTML

### Responsive Design
- Mobile-first approach
- Responsive variants for grid and layout
- Breakpoint-aware components
- Works on all screen sizes

### TypeScript Support
- Fully typed components
- Exported prop types
- IntelliSense support
- Type-safe variants

## Color Usage Guidelines

1. **Never deviate from the palette** - Use only approved colors
2. **Maintain contrast ratios** - Ensure WCAG AA compliance
3. **Be intentional** - Each color has semantic meaning
4. **Layer thoughtfully** - Neutral for structure, primary for brand, accent for emphasis
5. **Consider state changes** - Hover, active, focus states use palette variations

## Best Practices

### Component Selection
- Use Button variants to convey action importance
- Use Badge variants to match status type
- Use Alert variants to match message severity
- Use Card variants based on visual hierarchy needs

### Form Design
- Always pair Input with Label
- Use appropriate input types
- Show validation with variant props
- Include helper text for complex inputs

### Layout
- Use Container for page-width constraints
- Use Grid for responsive layouts
- Use Col for flexible column spans
- Combine with gap utilities for spacing

### Accessibility
- Provide alt text for images
- Use semantic headings (h1-h6)
- Include ARIA labels where needed
- Test keyboard navigation
- Verify screen reader compatibility

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Components are tree-shakeable
- Minimal runtime overhead
- Optimized for Next.js App Router
- Static extraction of styles

## Future Enhancements

Potential additions (not yet implemented):
- Toast/Notification system
- Tooltip component
- Tabs component
- Accordion component
- Progress bar
- Breadcrumb navigation
- Pagination
- Table component
- Form validation utilities
- Animation utilities

## Contributing

When adding new components:

1. Use CVA for all variant styling
2. Strictly follow Merifly color palette
3. Include proper accessibility attributes
4. Write comprehensive documentation
5. Add usage examples
6. Test across browsers
7. Ensure TypeScript types are exported
8. Add to barrel export file

## Build & Test

```bash
# Install dependencies
pnpm install

# Development server
pnpm run dev

# Build for production
pnpm run build

# Type check
pnpm run build
```

## License

Internal use only for Merifly platform.

---

**Version:** 1.0.0
**Last Updated:** January 2025
**Maintainer:** Merifly Frontend Team
