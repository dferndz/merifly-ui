# Modal

Dialog overlay component that displays content above the main page. This is a pure UI component - it accepts an `isOpen` prop and does not manage its own state.

## Import

```tsx
import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalDescription,
  ModalFooter
} from "@/components/ui";
```

## Usage

### Basic Modal

```tsx
function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>

      <Modal isOpen={isOpen}>
        <ModalHeader>
          <ModalTitle>Modal Title</ModalTitle>
          <ModalDescription>
            This is a description of the modal content.
          </ModalDescription>
        </ModalHeader>

        <div className="py-4">
          Modal content goes here.
        </div>

        <ModalFooter>
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => setIsOpen(false)}>
            Confirm
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}
```

### Confirmation Modal

```tsx
function DeleteConfirmation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = () => {
    // Perform delete action
    setIsOpen(false);
  };

  return (
    <Modal isOpen={isOpen}>
      <ModalHeader>
        <ModalTitle>Confirm Deletion</ModalTitle>
        <ModalDescription>
          Are you sure you want to delete this item? This action cannot be undone.
        </ModalDescription>
      </ModalHeader>

      <ModalFooter>
        <Button variant="ghost" onClick={() => setIsOpen(false)}>
          Cancel
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Delete
        </Button>
      </ModalFooter>
    </Modal>
  );
}
```

## Components

### Modal

Main modal container. Includes both overlay and content.

**Props:**
- `isOpen` (required): `boolean` - Controls visibility of the modal

### ModalOverlay

Background overlay (automatically included in Modal).

### ModalContent

Content container (automatically included in Modal).

### ModalHeader

Header section for title and description.

### ModalTitle

Modal title (h2 heading).

### ModalDescription

Modal description text.

### ModalFooter

Footer section for actions.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| isOpen | `boolean` | - | **Required**. Whether the modal is visible |
| children | `ReactNode` | - | Modal content |
| className | `string` | - | Additional CSS classes |

## Color Usage

- **Overlay**: Dark Gray (#2c3e50) at 80% opacity
- **Content Background**: White (#ffffff)
- **Content Border**: Light Gray (#f4f5f7)
- **Title**: Dark Gray (#2c3e50)
- **Description**: Medium Gray (#a1aab8)

## Accessibility

- `role="dialog"` on modal content
- `aria-modal="true"` for screen readers
- Focus trap (should be implemented by parent)
- Proper heading hierarchy with ModalTitle
- Overlay click to close (implement in parent)
- ESC key to close (implement in parent)

## Examples

### Form Modal

```tsx
function AddSkillModal({ isOpen, onClose }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    onClose();
  };

  return (
    <Modal isOpen={isOpen}>
      <form onSubmit={handleSubmit}>
        <ModalHeader>
          <ModalTitle>Add New Skill</ModalTitle>
          <ModalDescription>
            Enter the skill you want to add to your profile.
          </ModalDescription>
        </ModalHeader>

        <div className="space-y-4 py-4">
          <div>
            <Label htmlFor="skill">Skill Name</Label>
            <Input id="skill" placeholder="e.g., React" />
          </div>

          <div>
            <Label htmlFor="level">Proficiency Level</Label>
            <Select id="level">
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
              <option>Expert</option>
            </Select>
          </div>
        </div>

        <ModalFooter>
          <Button type="button" variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" variant="primary">
            Add Skill
          </Button>
        </ModalFooter>
      </form>
    </Modal>
  );
}
```

### Information Modal

```tsx
function WelcomeModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen}>
      <ModalHeader>
        <ModalTitle>Welcome to Merifly!</ModalTitle>
        <ModalDescription>
          Get started by completing your profile and showcasing your skills.
        </ModalDescription>
      </ModalHeader>

      <div className="py-4 space-y-3">
        <div className="flex items-start gap-3">
          <Badge variant="teal">1</Badge>
          <div>
            <Text weight="semibold">Complete Your Profile</Text>
            <Text variant="muted" size="sm">
              Add your basic information and contact details.
            </Text>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Badge variant="teal">2</Badge>
          <div>
            <Text weight="semibold">Add Your Skills</Text>
            <Text variant="muted" size="sm">
              List your technical and professional skills.
            </Text>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Badge variant="teal">3</Badge>
          <div>
            <Text weight="semibold">Showcase Projects</Text>
            <Text variant="muted" size="sm">
              Upload evidence of your work and achievements.
            </Text>
          </div>
        </div>
      </div>

      <ModalFooter>
        <Button variant="primary" onClick={onClose} className="w-full">
          Get Started
        </Button>
      </ModalFooter>
    </Modal>
  );
}
```

### Alert Modal

```tsx
function SuccessModal({ isOpen, onClose, message }) {
  return (
    <Modal isOpen={isOpen}>
      <div className="text-center py-6">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#6edc6b]/10 mb-4">
          <CheckIcon className="h-6 w-6 text-[#6edc6b]" />
        </div>

        <ModalHeader>
          <ModalTitle>Success!</ModalTitle>
          <ModalDescription>{message}</ModalDescription>
        </ModalHeader>

        <ModalFooter className="justify-center mt-6">
          <Button variant="primary" onClick={onClose}>
            Continue
          </Button>
        </ModalFooter>
      </div>
    </Modal>
  );
}
```

## Implementation Notes

### State Management

The Modal component is purely presentational. State management should be handled by the parent component:

```tsx
function ParentComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsModalOpen(true)}>Open</Button>
      <Modal isOpen={isModalOpen}>
        {/* Modal content */}
        <Button onClick={() => setIsModalOpen(false)}>Close</Button>
      </Modal>
    </>
  );
}
```

### Enhanced Modal with Features

For a production-ready modal, wrap this component with additional functionality:

```tsx
function EnhancedModal({ isOpen, onClose, children }) {
  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      return () => document.removeEventListener("keydown", handleEsc);
    }
  }, [isOpen, onClose]);

  // Close on overlay click
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div onClick={handleOverlayClick}>
      <Modal isOpen={isOpen}>{children}</Modal>
    </div>
  );
}
```

## Best Practices

- Always provide a way to close the modal (button, overlay click, ESC key)
- Use ModalTitle for proper heading hierarchy
- Include ModalDescription for context
- Put primary actions on the right in ModalFooter
- Consider focus management and focus trap
- Use appropriate button variants (outline for cancel, primary for confirm)
- Avoid nesting modals
- Keep modal content focused and concise
