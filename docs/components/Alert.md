# Alert

Notification message component for displaying feedback to users.

## Import

```tsx
import { Alert, AlertTitle, AlertDescription } from "@/components/ui";
```

## Usage

### Basic Alert

```tsx
<Alert>
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components to your app using the component library.
  </AlertDescription>
</Alert>
```

### Alert Variants

```tsx
<Alert variant="default">
  <AlertTitle>Information</AlertTitle>
  <AlertDescription>This is a default alert.</AlertDescription>
</Alert>

<Alert variant="success">
  <AlertTitle>Success</AlertTitle>
  <AlertDescription>Your changes have been saved successfully.</AlertDescription>
</Alert>

<Alert variant="warning">
  <AlertTitle>Warning</AlertTitle>
  <AlertDescription>Please review your information before submitting.</AlertDescription>
</Alert>

<Alert variant="error">
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>There was a problem processing your request.</AlertDescription>
</Alert>

<Alert variant="info">
  <AlertTitle>Info</AlertTitle>
  <AlertDescription>New features have been added to your dashboard.</AlertDescription>
</Alert>
```

### Simple Alert (Description Only)

```tsx
<Alert variant="success">
  <AlertDescription>Profile updated successfully!</AlertDescription>
</Alert>
```

### Alert with Icon

```tsx
<Alert variant="error">
  <AlertCircleIcon className="h-4 w-4" />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>
    Your session has expired. Please log in again.
  </AlertDescription>
</Alert>
```

## Variants

### `variant`

- `default` - Light Gray background, Dark Gray text
- `success` - Merifly Green accent, light green background
- `warning` - Warning Yellow accent, light yellow background
- `error` - Error Red accent, light red background
- `info` - Gradient Blue accent, light blue background

## Components

### Alert

Main alert container. Supports an optional icon as the first child.

### AlertTitle

Bold title text for the alert (h5 heading).

### AlertDescription

Description text content.

## Props

### Alert Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | `"default" \| "success" \| "warning" \| "error" \| "info"` | `"default"` | Visual style variant |
| className | `string` | - | Additional CSS classes |
| children | `ReactNode` | - | Alert content |

### AlertTitle & AlertDescription Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | `string` | - | Additional CSS classes |
| children | `ReactNode` | - | Text content |

## Color Usage

- **Default**: Light Gray (#f4f5f7) background, Dark Gray (#2c3e50) text
- **Success**: Merifly Green (#6edc6b) border/icon, 10% opacity background
- **Warning**: Warning Yellow (#f1c40f) border/icon, 10% opacity background
- **Error**: Error Red (#e74c3c) border/icon, 10% opacity background
- **Info**: Gradient Blue (#3bb0f3) border/icon, 10% opacity background

## Accessibility

- Uses `role="alert"` for screen reader announcements
- Proper heading hierarchy with AlertTitle
- Sufficient color contrast for all variants
- Icons are properly colored to match variant

## Examples

### Success Alert After Form Submission

```tsx
function ProfileForm() {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Save profile...
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
  };

  return (
    <>
      {showSuccess && (
        <Alert variant="success" className="mb-4">
          <CheckCircleIcon className="h-4 w-4" />
          <AlertTitle>Success!</AlertTitle>
          <AlertDescription>
            Your profile has been updated successfully.
          </AlertDescription>
        </Alert>
      )}
      <form onSubmit={handleSubmit}>
        {/* Form fields */}
      </form>
    </>
  );
}
```

### Error Alert for Validation

```tsx
function LoginForm() {
  const [error, setError] = useState("");

  return (
    <form>
      {error && (
        <Alert variant="error" className="mb-4">
          <AlertCircleIcon className="h-4 w-4" />
          <AlertTitle>Login Failed</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      {/* Form fields */}
    </form>
  );
}
```

### Info Alert with Dismissible Option

```tsx
function DashboardBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <Alert variant="info">
      <InfoIcon className="h-4 w-4" />
      <div className="flex-1">
        <AlertTitle>New Feature Available</AlertTitle>
        <AlertDescription>
          Check out the new skill verification system in your profile.
        </AlertDescription>
      </div>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsVisible(false)}
      >
        Dismiss
      </Button>
    </Alert>
  );
}
```

### Warning Alert for Action Confirmation

```tsx
<Alert variant="warning">
  <AlertTriangleIcon className="h-4 w-4" />
  <AlertTitle>Are you sure?</AlertTitle>
  <AlertDescription>
    Deleting this skill will remove all associated evidence and verifications.
    This action cannot be undone.
  </AlertDescription>
</Alert>
```

### Inline Alert in Form

```tsx
<div className="space-y-4">
  <div>
    <Label htmlFor="email">Email</Label>
    <Input id="email" type="email" variant="error" />
  </div>

  <Alert variant="error">
    <AlertDescription>
      Please enter a valid email address.
    </AlertDescription>
  </Alert>

  <Button type="submit">Continue</Button>
</div>
```

### Multiple Alerts

```tsx
<div className="space-y-3">
  <Alert variant="info">
    <AlertDescription>
      Your trial period ends in 7 days.
    </AlertDescription>
  </Alert>

  <Alert variant="success">
    <AlertDescription>
      2 new skill verifications received today.
    </AlertDescription>
  </Alert>
</div>
```

### Alert with Action Button

```tsx
<Alert variant="warning">
  <AlertTriangleIcon className="h-4 w-4" />
  <div className="flex-1">
    <AlertTitle>Incomplete Profile</AlertTitle>
    <AlertDescription>
      Complete your profile to increase your visibility to employers.
    </AlertDescription>
  </div>
  <Button variant="outline" size="sm">
    Complete Now
  </Button>
</Alert>
```

## Best Practices

- Use appropriate variants to match the message type
- Include both title and description for important alerts
- For simple messages, description alone is sufficient
- Add icons to improve scannability
- Position alerts near the relevant content or action
- Use auto-dismiss for temporary success messages
- Keep error alerts visible until resolved
- Avoid too many simultaneous alerts
- Make dismissible alerts when appropriate
