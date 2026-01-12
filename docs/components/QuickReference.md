# Component Quick Reference

Quick reference guide for all Merifly UI components.

## Layout Components

### Container
Responsive container with max-width constraints.
```tsx
<Container size="xl">{children}</Container>
```
Sizes: `sm`, `md`, `lg`, `xl`, `2xl`, `full`

### Grid
Responsive grid layout system.
```tsx
<Grid cols={3} gap="lg">{children}</Grid>
```
Cols: `1`, `2`, `3`, `4`, `6`, `12`
Gap: `none`, `sm`, `md`, `lg`, `xl`

### Col
Grid column component with responsive spans.
```tsx
<Col span={6} spanMd={4} spanLg={3}>{children}</Col>
```
Span: `1-12`, `full`

## Basic Components

### Badge
Status indicators and labels.
```tsx
<Badge variant="success">Active</Badge>
```
Variants: `default`, `success`, `warning`, `error`, `info`, `teal`, `outline`, `skill`

### Spinner
Loading indicator with multiple sizes.
```tsx
<Spinner size="md" variant="primary" />
```
Sizes: `sm`, `md`, `lg`, `xl`
Variants: `primary`, `secondary`, `success`, `error`, `white`

### Divider
Visual separator line.
```tsx
<Divider orientation="horizontal" />
```
Orientation: `horizontal`, `vertical`

## Form Components

### Label
Form field label.
```tsx
<Label htmlFor="field">Field Name</Label>
```

### Textarea
Multi-line text input.
```tsx
<Textarea variant="default" placeholder="Enter text..." />
```
Variants: `default`, `error`, `success`

### Select
Dropdown selection.
```tsx
<Select variant="default">
  <option>Option 1</option>
</Select>
```
Variants: `default`, `error`, `success`

### Checkbox
Boolean checkbox input.
```tsx
<Checkbox id="agree" />
```

### Radio
Radio button input.
```tsx
<Radio name="option" value="1" />
```

## Navigation Components

### Navbar
Top navigation bar.
```tsx
<Navbar variant="default" position="sticky">{children}</Navbar>
```
Variants: `default`, `solid`, `transparent`
Position: `static`, `fixed`, `sticky`

### Menu & MenuItem
Dropdown/context menu.
```tsx
<Menu>
  <MenuItem>Option 1</MenuItem>
  <MenuSeparator />
  <MenuItem>Option 2</MenuItem>
</Menu>
```

## Feedback Components

### Avatar
User profile image with fallback.
```tsx
<Avatar size="md">
  <AvatarImage src="/user.jpg" alt="User" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>
```
Sizes: `sm`, `md`, `lg`, `xl`

## Typography Components

### Heading
Semantic heading component.
```tsx
<Heading level="h2" variant="primary">Title</Heading>
```
Levels: `h1`, `h2`, `h3`, `h4`, `h5`, `h6`
Variants: `default`, `primary`, `secondary`, `muted`

### Text
Paragraph and text component.
```tsx
<Text size="base" variant="default" weight="normal">Content</Text>
```
Sizes: `xs`, `sm`, `base`, `lg`, `xl`
Variants: `default`, `muted`, `primary`, `secondary`, `success`, `warning`, `error`
Weights: `normal`, `medium`, `semibold`, `bold`

## Common Patterns

### Form Field
```tsx
<div className="space-y-1">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" />
  <Text variant="muted" size="sm">Helper text</Text>
</div>
```

### Card with Content
```tsx
<Card>
  <CardHeader>
    <Heading level="h3">Title</Heading>
  </CardHeader>
  <CardContent>
    <Text>Content</Text>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

### Loading Button
```tsx
<Button disabled>
  <Spinner size="sm" variant="white" />
  Loading...
</Button>
```

### Form with Validation
```tsx
<form className="space-y-4">
  <div>
    <Label htmlFor="field">Field</Label>
    <Input id="field" variant={error ? "error" : "default"} />
    {error && <Text variant="error" size="sm">{error}</Text>}
  </div>
  <Button type="submit">Submit</Button>
</form>
```

### Alert with Icon
```tsx
<Alert variant="success">
  <CheckIcon className="h-4 w-4" />
  <AlertTitle>Success</AlertTitle>
  <AlertDescription>Action completed</AlertDescription>
</Alert>
```

### Modal Dialog
```tsx
<Modal isOpen={isOpen}>
  <ModalHeader>
    <ModalTitle>Title</ModalTitle>
    <ModalDescription>Description</ModalDescription>
  </ModalHeader>
  <div className="py-4">Content</div>
  <ModalFooter>
    <Button variant="outline" onClick={onClose}>Cancel</Button>
    <Button onClick={onConfirm}>Confirm</Button>
  </ModalFooter>
</Modal>
```

### Navbar Layout
```tsx
<Navbar position="sticky">
  <div className="flex items-center gap-2">
    <Logo />
    <Text weight="bold">Merifly</Text>
  </div>
  <div className="flex items-center gap-4">
    <Button variant="ghost">Link</Button>
    <Avatar size="sm">
      <AvatarFallback>U</AvatarFallback>
    </Avatar>
  </div>
</Navbar>
```

## Color Reference

When customizing components, use these Merifly colors:

```tsx
// Primary Colors
className="bg-[#2b5daf]"      // Merifly Blue
className="bg-[#3bb0f3]"      // Gradient Blue
className="bg-[#6edc6b]"      // Merifly Green

// Accent Colors
className="bg-[#35c6b0]"      // Teal Accent
className="bg-[#ffb547]"      // Vibrant Accent

// Neutral Colors
className="bg-[#ffffff]"      // White
className="bg-[#f4f5f7]"      // Light Gray
className="text-[#a1aab8]"    // Medium Gray
className="text-[#2c3e50]"    // Dark Gray

// Status Colors
className="bg-[#e74c3c]"      // Error Red
className="bg-[#f1c40f]"      // Warning Yellow
```

## Responsive Breakpoints

Tailwind breakpoints used in components:

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## Spacing Scale

Standard spacing used in components:

- `gap-2`: 0.5rem (8px)
- `gap-4`: 1rem (16px)
- `gap-6`: 1.5rem (24px)
- `gap-8`: 2rem (32px)
- `p-4`: 1rem padding
- `p-6`: 1.5rem padding

## Import Pattern

All components can be imported from the barrel file:

```tsx
import {
  Button,
  Card,
  CardHeader,
  CardContent,
  Input,
  Label,
  // ... etc
} from "@/components/ui";
```

Or import individual components:

```tsx
import { Button } from "@/components/ui/Button";
```
