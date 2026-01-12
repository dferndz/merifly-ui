# Getting Started with Merifly UI Components

Quick start guide for using the Merifly component library.

## Installation

The components are already installed in this project. No additional setup required!

## Import Components

```tsx
import { Button, Card, Input, Label } from "@/components/ui";
```

## Your First Component

Create a simple card with a button:

```tsx
import { Card, CardHeader, CardContent, Button } from "@/components/ui";

export default function MyPage() {
  return (
    <Card>
      <CardHeader>
        <h3>Welcome!</h3>
      </CardHeader>
      <CardContent>
        <p>This is your first Merifly component.</p>
        <Button variant="primary">Get Started</Button>
      </CardContent>
    </Card>
  );
}
```

## Common Patterns

### Form Field

```tsx
<div className="space-y-2">
  <Label htmlFor="email">Email Address</Label>
  <Input
    id="email"
    type="email"
    placeholder="you@example.com"
  />
  <Text variant="muted" size="sm">
    We'll never share your email.
  </Text>
</div>
```

### Button Group

```tsx
<div className="flex gap-2">
  <Button variant="outline">Cancel</Button>
  <Button variant="primary">Save Changes</Button>
</div>
```

### Grid Layout

```tsx
<Grid cols={3} gap="lg">
  <Card>Content 1</Card>
  <Card>Content 2</Card>
  <Card>Content 3</Card>
</Grid>
```

### Alert Message

```tsx
<Alert variant="success">
  <AlertTitle>Success!</AlertTitle>
  <AlertDescription>
    Your profile has been updated.
  </AlertDescription>
</Alert>
```

### Modal Dialog

```tsx
function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>

      <Modal isOpen={isOpen}>
        <ModalHeader>
          <ModalTitle>Confirm Action</ModalTitle>
          <ModalDescription>
            Are you sure you want to continue?
          </ModalDescription>
        </ModalHeader>
        <ModalFooter>
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => setIsOpen(false)}>
            Confirm
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}
```

## Component Variants

### Buttons

```tsx
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Danger</Button>
```

### Badges

```tsx
<Badge variant="success">Active</Badge>
<Badge variant="warning">Pending</Badge>
<Badge variant="error">Failed</Badge>
<Badge variant="skill">Expert</Badge>
```

### Inputs

```tsx
<Input variant="default" />      // Normal state
<Input variant="error" />        // Error state
<Input variant="success" />      // Success state
```

### Cards

```tsx
<Card variant="default">Standard card</Card>
<Card variant="elevated">Emphasized card</Card>
<Card variant="outlined">Strong border</Card>
```

## Styling

### Using Tailwind Classes

All components accept a `className` prop for additional styling:

```tsx
<Button className="w-full mt-4">
  Full Width Button
</Button>

<Input className="max-w-sm" />
```

### Merifly Colors

Use these hex values for custom styling:

```tsx
// Primary
className="bg-[#2b5daf]"    // Merifly Blue
className="bg-[#3bb0f3]"    // Gradient Blue
className="bg-[#6edc6b]"    // Merifly Green

// Accent
className="bg-[#35c6b0]"    // Teal
className="bg-[#ffb547]"    // Vibrant

// Neutral
className="text-[#2c3e50]"  // Dark Gray
className="text-[#a1aab8]"  // Medium Gray
```

## Responsive Design

Components are mobile-first. Use Tailwind breakpoints:

```tsx
<Grid cols={1} className="md:grid-cols-2 lg:grid-cols-3">
  <Card>1</Card>
  <Card>2</Card>
  <Card>3</Card>
</Grid>

<Button size="sm" className="md:size-md lg:size-lg">
  Responsive Button
</Button>
```

## Accessibility

### Labels for Inputs

Always use labels:

```tsx
<Label htmlFor="username">Username</Label>
<Input id="username" />
```

### Semantic Headings

Use proper heading hierarchy:

```tsx
<Heading level="h1">Page Title</Heading>
<Heading level="h2">Section Title</Heading>
<Heading level="h3">Subsection</Heading>
```

### Alt Text for Avatars

```tsx
<Avatar>
  <AvatarImage src="/user.jpg" alt="User Name" />
  <AvatarFallback>UN</AvatarFallback>
</Avatar>
```

## Common Layouts

### Page Layout

```tsx
<Container size="xl" className="py-8">
  <Heading level="h1">Page Title</Heading>

  <Grid cols={3} gap="lg" className="mt-6">
    <Card>Content</Card>
    <Card>Content</Card>
    <Card>Content</Card>
  </Grid>
</Container>
```

### Sidebar Layout

```tsx
<Grid cols={12} gap="lg">
  <Col span={12} spanMd={8} spanLg={9}>
    {/* Main content */}
  </Col>
  <Col span={12} spanMd={4} spanLg={3}>
    {/* Sidebar */}
  </Col>
</Grid>
```

### Form Layout

```tsx
<form className="space-y-6">
  <Grid cols={2} gap="md">
    <div>
      <Label htmlFor="firstName">First Name</Label>
      <Input id="firstName" />
    </div>
    <div>
      <Label htmlFor="lastName">Last Name</Label>
      <Input id="lastName" />
    </div>
  </Grid>

  <div>
    <Label htmlFor="email">Email</Label>
    <Input id="email" type="email" />
  </div>

  <div>
    <Label htmlFor="bio">Bio</Label>
    <Textarea id="bio" />
  </div>

  <div className="flex justify-end gap-2">
    <Button variant="outline" type="button">Cancel</Button>
    <Button variant="primary" type="submit">Save</Button>
  </div>
</form>
```

## Next Steps

1. **View the Demo** - Visit `/components-demo` to see all components
2. **Read the Docs** - Check `/docs/components/` for detailed documentation
3. **Explore Examples** - Look at component-specific docs for usage patterns
4. **Build Your Feature** - Start creating with the component library!

## Need Help?

- **Component Reference**: `/docs/components/QuickReference.md`
- **Design System**: `/docs/components/README.md`
- **Full Documentation**: Individual component `.md` files in `/docs/components/`
- **Demo Page**: `/components-demo` route in the app

## TypeScript Tips

Import types for better IntelliSense:

```tsx
import { Button, type ButtonProps } from "@/components/ui";

// Use in your component props
interface MyComponentProps {
  buttonProps?: ButtonProps;
}
```

Get variant types:

```tsx
import type { VariantProps } from "class-variance-authority";
import { buttonVariants } from "@/components/ui";

type ButtonVariant = VariantProps<typeof buttonVariants>["variant"];
// "primary" | "secondary" | "outline" | "ghost" | "danger"
```

## Performance Tips

1. **Import only what you need** - Tree-shaking is automatic
2. **Use semantic HTML** - Components use appropriate elements
3. **Leverage Tailwind** - Classes are extracted at build time
4. **Memoize callbacks** - When passing to components

## Common Mistakes to Avoid

❌ **Don't use random colors**
```tsx
<Button className="bg-blue-500">Wrong</Button>
```

✅ **Use Merifly palette**
```tsx
<Button variant="primary">Correct</Button>
```

❌ **Don't forget labels**
```tsx
<Input id="email" />  // Bad: no label
```

✅ **Always use labels**
```tsx
<Label htmlFor="email">Email</Label>
<Input id="email" />
```

❌ **Don't nest modals**
```tsx
<Modal isOpen={modal1}>
  <Modal isOpen={modal2}>  // Bad: nested modals
  </Modal>
</Modal>
```

✅ **Use separate modals**
```tsx
<Modal isOpen={modal1}>...</Modal>
<Modal isOpen={modal2}>...</Modal>
```

## Happy Building!

You're ready to start building beautiful, accessible interfaces with Merifly UI components!
