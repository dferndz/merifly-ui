# Merifly UI Component Library

A comprehensive, accessible UI component library built for the Merifly evidence-based hiring platform. All components follow the Merifly design system and are built using Class Variance Authority (CVA) for flexible, type-safe styling.

## Design System

The Merifly component library strictly adheres to our color palette:

### Primary Colors
- **Merifly Blue** (`#2b5daf`) - Main dark blue text, primary buttons, key interactive elements
- **Merifly Gradient Blue** (`#3bb0f3`) - Highlights, hover states, active states, data visualizations
- **Merifly Green** (`#6edc6b`) - Success messages, positive indicators, skill tags, achievement badges

### Secondary/Accent Colors
- **Teal Accent** (`#35c6b0`) - Interactive elements, badges, secondary CTAs, tooltips
- **Vibrant Accent/CTA** (`#ffb547`) - Primary calls-to-action, important buttons, notifications

### Neutral Colors
- **White/Background** (`#ffffff`) - Primary background color
- **Light Gray** (`#f4f5f7`) - Cards, surfaces, containers, subtle borders
- **Medium Gray** (`#a1aab8`) - Secondary text, hints, placeholders, disabled states
- **Dark Gray** (`#2c3e50`) - Body text, headers, high-contrast elements

### Status/Feedback Colors
- **Error Red** (`#e74c3c`) - Error messages, validation failures, destructive actions
- **Warning Yellow** (`#f1c40f`) - Warning messages, cautionary notices, attention alerts

## Installation

The component library is included in the project. Import components from `@/components/ui`:

```tsx
import { Button, Card, Input } from "@/components/ui";
```

## Component Categories

### Layout Components
- [Container](./Container.md) - Responsive container with max-width constraints
- [Grid](./Grid.md) - Responsive grid system
- [Col](./Col.md) - Grid column component

### Basic Components
- [Button](./Button.md) - Interactive button with multiple variants
- [Badge](./Badge.md) - Status indicators and labels
- [Spinner](./Spinner.md) - Loading indicator
- [Divider](./Divider.md) - Visual separator

### Card Components
- [Card](./Card.md) - Content container with header, content, and footer

### Form Components
- [Input](./Input.md) - Text input field
- [Textarea](./Textarea.md) - Multi-line text input
- [Select](./Select.md) - Dropdown selection
- [Checkbox](./Checkbox.md) - Boolean input
- [Radio](./Radio.md) - Single choice from multiple options
- [Label](./Label.md) - Form field label

### Navigation Components
- [Navbar](./Navbar.md) - Top navigation bar
- [Menu](./Menu.md) - Dropdown menu/context menu

### Feedback Components
- [Alert](./Alert.md) - Notification messages
- [Modal](./Modal.md) - Dialog overlay
- [Avatar](./Avatar.md) - User profile image

### Typography Components
- [Heading](./Heading.md) - Semantic headings (h1-h6)
- [Text](./Text.md) - Paragraph and text elements

## Design Principles

### Pure UI Components
All components are pure presentational components. They:
- Accept props and render accordingly
- Do not manage internal state for show/hide functionality
- Are fully controlled by parent components
- Focus on accessibility and keyboard navigation

### Class Variance Authority (CVA)
All styling is managed through CVA, which provides:
- Type-safe variant props
- Consistent styling patterns
- Easy theme customization
- No inline className strings in JSX

### Accessibility First
Every component includes:
- Proper ARIA labels and roles
- Keyboard navigation support
- Focus management
- Screen reader compatibility
- WCAG AA color contrast compliance

### Responsive Design
Components use mobile-first responsive design:
- Base styles for mobile
- Progressive enhancement for tablets and desktop
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px)

## Usage Example

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

## TypeScript Support

All components are fully typed with TypeScript. Import types alongside components:

```tsx
import { Button, type ButtonProps } from "@/components/ui";
```

## Contributing

When creating new components or modifying existing ones:

1. Use CVA for all variant styling
2. Strictly adhere to the Merifly color palette
3. Include proper accessibility attributes
4. Write comprehensive documentation
5. Add usage examples
6. Test across browsers and screen sizes
