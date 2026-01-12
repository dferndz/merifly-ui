# Button

Interactive button component with multiple variants and sizes.

## Import

```tsx
import { Button } from "@/components/ui";
```

## Usage

### Basic Button

```tsx
<Button>Click me</Button>
```

### Variants

```tsx
<Button variant="primary">Primary Action</Button>
<Button variant="secondary">Secondary Action</Button>
<Button variant="outline">Outlined Button</Button>
<Button variant="ghost">Ghost Button</Button>
<Button variant="danger">Delete</Button>
```

### Sizes

```tsx
<Button size="sm">Small</Button>
<Button size="md">Medium (Default)</Button>
<Button size="lg">Large</Button>
```

### Disabled State

```tsx
<Button disabled>Disabled Button</Button>
```

### With Icons

```tsx
<Button>
  <Icon name="plus" />
  Add Item
</Button>
```

## Variants

### `variant`

- `primary` (default) - Merifly Blue background for main actions
- `secondary` - Gradient Blue background for secondary actions
- `outline` - Outlined button with Merifly Blue border
- `ghost` - Transparent background, text-only
- `danger` - Error Red background for destructive actions

### `size`

- `sm` - Small button (h-8, px-3, text-xs)
- `md` (default) - Medium button (h-10, px-4, text-sm)
- `lg` - Large button (h-12, px-6, text-base)

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | `"primary" \| "secondary" \| "outline" \| "ghost" \| "danger"` | `"primary"` | Visual style variant |
| size | `"sm" \| "md" \| "lg"` | `"md"` | Button size |
| disabled | `boolean` | `false` | Whether the button is disabled |
| className | `string` | - | Additional CSS classes |
| children | `ReactNode` | - | Button content |

Extends all standard HTML button attributes.

## Color Usage

- **Primary**: Uses Merifly Blue (#2b5daf) for primary actions
- **Secondary**: Uses Merifly Gradient Blue (#3bb0f3) for secondary emphasis
- **Outline**: Merifly Blue border with transparent background
- **Ghost**: Transparent background, Merifly Blue text, Light Gray hover
- **Danger**: Error Red (#e74c3c) for destructive actions

## Accessibility

- Full keyboard navigation support
- Focus visible ring using focus-visible:ring-2
- Disabled state properly conveyed to screen readers
- `disabled:pointer-events-none` prevents interaction

## Examples

### Form Submit Button

```tsx
<form onSubmit={handleSubmit}>
  <Button type="submit" variant="primary" size="lg">
    Submit Application
  </Button>
</form>
```

### Loading State

```tsx
<Button disabled>
  <Spinner size="sm" variant="white" />
  Processing...
</Button>
```

### Button Group

```tsx
<div className="flex gap-2">
  <Button variant="outline">Cancel</Button>
  <Button variant="primary">Save Changes</Button>
</div>
```

### Call-to-Action

For primary CTAs that need maximum attention, combine with appropriate sizing:

```tsx
<Button variant="primary" size="lg" className="w-full md:w-auto">
  Get Started Today
</Button>
```

Note: For vibrant CTAs, you can override the background color while maintaining the component structure:

```tsx
<Button className="bg-[#ffb547] hover:bg-[#ff9f2e]">
  Start Your Journey
</Button>
```
