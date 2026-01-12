# Card

Content container component with header, content, and footer sections.

## Import

```tsx
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui";
```

## Usage

### Basic Card

```tsx
<Card>
  <CardHeader>
    <h3>Card Title</h3>
  </CardHeader>
  <CardContent>
    <p>Card content goes here.</p>
  </CardContent>
</Card>
```

### Card with Footer

```tsx
<Card>
  <CardHeader>
    <h3>Profile Information</h3>
  </CardHeader>
  <CardContent>
    <p>View and edit your profile details.</p>
  </CardContent>
  <CardFooter>
    <Button variant="outline">Cancel</Button>
    <Button variant="primary">Save</Button>
  </CardFooter>
</Card>
```

### Card Variants

```tsx
<Card variant="default">Default Card</Card>
<Card variant="elevated">Elevated Card with Shadow</Card>
<Card variant="outlined">Outlined Card</Card>
```

## Components

### Card

Main container for card content.

### CardHeader

Header section, typically contains titles and descriptions. Has padding-bottom.

### CardContent

Main content area. Has padding-top: 0 to align with header.

### CardFooter

Footer section, typically contains actions. Flexbox container for buttons.

## Variants

### `variant`

- `default` - Standard card with subtle shadow and Light Gray border
- `elevated` - Enhanced shadow for visual emphasis
- `outlined` - Medium Gray border for stronger definition

## Props

### Card Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | `"default" \| "elevated" \| "outlined"` | `"default"` | Visual style variant |
| className | `string` | - | Additional CSS classes |
| children | `ReactNode` | - | Card content |

### CardHeader, CardContent, CardFooter Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | `string` | - | Additional CSS classes |
| children | `ReactNode` | - | Section content |

## Color Usage

- **Background**: White (#ffffff)
- **Border**: Light Gray (#f4f5f7) for default, Medium Gray (#a1aab8) for outlined
- **Text**: Dark Gray (#2c3e50)
- **Shadow**: Subtle shadow-sm for default, shadow-md for elevated

## Examples

### Skill Card

```tsx
<Card>
  <CardHeader>
    <Heading level="h3">JavaScript Expert</Heading>
    <Text variant="muted" size="sm">Verified Skill</Text>
  </CardHeader>
  <CardContent>
    <Badge variant="skill">Advanced</Badge>
    <Text className="mt-2">
      Demonstrated proficiency through 15+ projects and peer reviews.
    </Text>
  </CardContent>
  <CardFooter>
    <Button variant="outline" size="sm">View Evidence</Button>
  </CardFooter>
</Card>
```

### Profile Card

```tsx
<Card variant="elevated">
  <CardHeader className="flex flex-row items-center gap-4">
    <Avatar size="lg">
      <AvatarImage src="/profile.jpg" alt="Profile" />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
    <div>
      <Heading level="h4">Jane Developer</Heading>
      <Text variant="muted" size="sm">Full-Stack Engineer</Text>
    </div>
  </CardHeader>
  <CardContent>
    <div className="space-y-2">
      <Text size="sm">Skills: React, Node.js, TypeScript</Text>
      <Text size="sm">Projects: 23 completed</Text>
    </div>
  </CardContent>
</Card>
```

### Information Card with Actions

```tsx
<Card>
  <CardHeader>
    <Heading level="h3">Complete Your Profile</Heading>
  </CardHeader>
  <CardContent>
    <Text>
      Add your skills and project portfolio to get matched with
      opportunities that fit your expertise.
    </Text>
  </CardContent>
  <CardFooter className="justify-between">
    <Button variant="ghost" size="sm">Skip for now</Button>
    <Button variant="primary">Add Skills</Button>
  </CardFooter>
</Card>
```

### Stat Card

```tsx
<Card variant="outlined">
  <CardContent className="pt-6">
    <div className="text-center">
      <Heading level="h2" variant="primary">127</Heading>
      <Text variant="muted">Skills Verified</Text>
    </div>
  </CardContent>
</Card>
```

## Accessibility

- Semantic HTML structure
- Proper heading hierarchy within CardHeader
- Footer uses flexbox for proper button alignment
- All text maintains WCAG AA contrast ratios

## Layout Tips

- Use Grid component to create card grids:
  ```tsx
  <Grid cols={3} gap="lg">
    <Card>...</Card>
    <Card>...</Card>
    <Card>...</Card>
  </Grid>
  ```

- CardFooter automatically aligns items with flexbox
- Combine with Container for proper page width constraints
