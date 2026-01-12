# Input

Text input field component with support for different variants and validation states.

## Import

```tsx
import { Input, Label } from "@/components/ui";
```

## Usage

### Basic Input

```tsx
<Input type="text" placeholder="Enter your name" />
```

### With Label

```tsx
<div>
  <Label htmlFor="email">Email Address</Label>
  <Input id="email" type="email" placeholder="you@example.com" />
</div>
```

### Input Variants

```tsx
<Input variant="default" placeholder="Default input" />
<Input variant="error" placeholder="Error state" />
<Input variant="success" placeholder="Success state" />
```

### Input Sizes

```tsx
<Input inputSize="sm" placeholder="Small input" />
<Input inputSize="md" placeholder="Medium input (default)" />
<Input inputSize="lg" placeholder="Large input" />
```

### Disabled State

```tsx
<Input disabled placeholder="Disabled input" />
```

## Variants

### `variant`

- `default` - Standard input with Medium Gray border, Merifly Blue focus ring
- `error` - Error Red border and focus ring for validation errors
- `success` - Merifly Green border and focus ring for successful validation

### `inputSize`

- `sm` - Small input (h-8, text-xs)
- `md` (default) - Medium input (h-10, text-sm)
- `lg` - Large input (h-12, text-base)

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | `"default" \| "error" \| "success"` | `"default"` | Visual style variant |
| inputSize | `"sm" \| "md" \| "lg"` | `"md"` | Input size |
| type | `string` | `"text"` | HTML input type |
| placeholder | `string` | - | Placeholder text |
| disabled | `boolean` | `false` | Whether the input is disabled |
| className | `string` | - | Additional CSS classes |

Extends all standard HTML input attributes.

## Color Usage

- **Default Border**: Medium Gray (#a1aab8)
- **Default Focus Ring**: Merifly Blue (#2b5daf)
- **Error Border & Ring**: Error Red (#e74c3c)
- **Success Border & Ring**: Merifly Green (#6edc6b)
- **Placeholder**: Medium Gray (#a1aab8)
- **Text**: Dark Gray (#2c3e50)
- **Background**: White (#ffffff)
- **Disabled**: 50% opacity

## Accessibility

- Proper focus management with visible focus ring
- Placeholder text uses sufficient contrast
- Disabled state properly conveyed to screen readers
- Works with Label component for proper associations
- Keyboard navigable

## Examples

### Email Input with Validation

```tsx
function EmailField() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const isValid = email.includes("@");

  return (
    <div className="space-y-1">
      <Label htmlFor="email">Email</Label>
      <Input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        variant={error ? "error" : isValid ? "success" : "default"}
        placeholder="you@example.com"
      />
      {error && <Text variant="error" size="sm">{error}</Text>}
    </div>
  );
}
```

### Password Input

```tsx
<div className="space-y-1">
  <Label htmlFor="password">Password</Label>
  <Input
    id="password"
    type="password"
    placeholder="Enter your password"
  />
  <Text variant="muted" size="xs">
    Must be at least 8 characters
  </Text>
</div>
```

### Search Input

```tsx
<div className="relative">
  <Input
    type="search"
    placeholder="Search skills..."
    className="pl-10"
  />
  <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-[#a1aab8]" />
</div>
```

### Form Group

```tsx
<form className="space-y-4">
  <div>
    <Label htmlFor="firstName">First Name</Label>
    <Input id="firstName" placeholder="John" />
  </div>

  <div>
    <Label htmlFor="lastName">Last Name</Label>
    <Input id="lastName" placeholder="Doe" />
  </div>

  <div>
    <Label htmlFor="phone">Phone Number</Label>
    <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
  </div>

  <Button type="submit" variant="primary">Submit</Button>
</form>
```

### Controlled Input with Character Count

```tsx
function SkillInput() {
  const [skill, setSkill] = useState("");
  const maxLength = 50;

  return (
    <div className="space-y-1">
      <Label htmlFor="skill">Add a Skill</Label>
      <Input
        id="skill"
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
        maxLength={maxLength}
        placeholder="e.g., React, TypeScript, Node.js"
      />
      <Text variant="muted" size="xs">
        {skill.length}/{maxLength} characters
      </Text>
    </div>
  );
}
```

## Best Practices

- Always pair with a Label for accessibility
- Use appropriate input types (email, tel, url, number, etc.)
- Provide helpful placeholder text
- Show validation feedback with variant prop
- Include helper text for complex inputs
- Use appropriate sizes for your layout
