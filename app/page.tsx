"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Alert,
  AlertDescription,
  AlertTitle,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Input,
  Label,
  Progress,
  RadioGroup,
  RadioGroupItem,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Separator,
  Skeleton,
  Slider,
  Spinner,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Textarea,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui";
import { CodeBlock } from "@/components/CodeBlock";

const sections = [
  { id: "installation", label: "Installation", group: "getting-started" },
  { id: "button", label: "Button", group: "components" },
  { id: "input", label: "Input", group: "components" },
  { id: "select", label: "Select", group: "components" },
  { id: "checkbox", label: "Checkbox", group: "components" },
  { id: "radio", label: "Radio Group", group: "components" },
  { id: "switch", label: "Switch", group: "components" },
  { id: "slider", label: "Slider", group: "components" },
  { id: "textarea", label: "Textarea", group: "components" },
  { id: "card", label: "Card", group: "components" },
  { id: "dialog", label: "Dialog", group: "components" },
  { id: "dropdown", label: "Dropdown Menu", group: "components" },
  { id: "tabs", label: "Tabs", group: "components" },
  { id: "accordion", label: "Accordion", group: "components" },
  { id: "alert", label: "Alert", group: "components" },
  { id: "badge", label: "Badge", group: "components" },
  { id: "avatar", label: "Avatar", group: "components" },
  { id: "progress", label: "Progress", group: "components" },
  { id: "skeleton", label: "Skeleton", group: "components" },
  { id: "table", label: "Table", group: "components" },
  { id: "tooltip", label: "Tooltip", group: "components" },
  { id: "separator", label: "Separator", group: "components" },
  { id: "spinner", label: "Spinner", group: "components" },
  { id: "colors", label: "Colors", group: "design" },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [progress, setProgress] = useState(33);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
    }
  };

  const filteredSections = sections.filter(
    (section) =>
      section.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
      section.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const gettingStarted = filteredSections.filter((s) => s.group === "getting-started");
  const components = filteredSections.filter((s) => s.group === "components");
  const design = filteredSections.filter((s) => s.group === "design");

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-14 items-center">
            <div className="flex items-center gap-2 mr-4">
              <div className="h-6 w-6 rounded bg-primary" />
              <span className="font-semibold">Merifly UI</span>
            </div>
            <nav className="flex items-center gap-6 text-sm">
              <button
                onClick={() => scrollToSection("installation")}
                className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                Docs
              </button>
              <button
                onClick={() => scrollToSection("button")}
                className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                Components
              </button>
              <button
                onClick={() => scrollToSection("colors")}
                className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                Colors
              </button>
            </nav>
            <div className="ml-auto flex items-center gap-2">
              <Badge variant="secondary">v1.0.0</Badge>
            </div>
          </div>
        </header>

        <div className="container flex-1 items-start md:grid md:grid-cols-[200px_minmax(0,1fr)] md:gap-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-12">
          {/* Sidebar */}
          <aside className="hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:top-14 md:block overflow-y-auto">
            <div className="h-full py-6 pr-4 lg:py-8">
              {/* Search */}
              <div className="mb-4">
                <Input
                  placeholder="Search docs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-8"
                />
              </div>

              <div className="space-y-6">
                {gettingStarted.length > 0 && (
                  <div>
                    <h4 className="mb-1 text-sm font-semibold">Getting Started</h4>
                    <div className="space-y-1">
                      {gettingStarted.map((section) => (
                        <button
                          key={section.id}
                          onClick={() => scrollToSection(section.id)}
                          className={`block w-full text-left px-2 py-1 text-sm rounded-md transition-colors cursor-pointer ${
                            activeSection === section.id
                              ? "bg-primary text-primary-foreground"
                              : "text-muted-foreground hover:text-foreground hover:bg-muted"
                          }`}
                        >
                          {section.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {components.length > 0 && (
                  <div>
                    <h4 className="mb-1 text-sm font-semibold">Components</h4>
                    <div className="space-y-1">
                      {components.map((section) => (
                        <button
                          key={section.id}
                          onClick={() => scrollToSection(section.id)}
                          className={`block w-full text-left px-2 py-1 text-sm rounded-md transition-colors cursor-pointer ${
                            activeSection === section.id
                              ? "bg-primary text-primary-foreground"
                              : "text-muted-foreground hover:text-foreground hover:bg-muted"
                          }`}
                        >
                          {section.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {design.length > 0 && (
                  <div>
                    <h4 className="mb-1 text-sm font-semibold">Design System</h4>
                    <div className="space-y-1">
                      {design.map((section) => (
                        <button
                          key={section.id}
                          onClick={() => scrollToSection(section.id)}
                          className={`block w-full text-left px-2 py-1 text-sm rounded-md transition-colors cursor-pointer ${
                            activeSection === section.id
                              ? "bg-primary text-primary-foreground"
                              : "text-muted-foreground hover:text-foreground hover:bg-muted"
                          }`}
                        >
                          {section.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {filteredSections.length === 0 && (
                  <p className="text-sm text-muted-foreground px-2">No results found</p>
                )}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="relative py-6 lg:gap-10 lg:py-8">
            <div className="mx-auto w-full min-w-0 space-y-12">
              {/* Hero */}
              <section className="space-y-4">
                <Badge className="mb-2">shadcn/ui + Merifly</Badge>
                <h1 className="text-4xl font-bold tracking-tight">Merifly UI Components</h1>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  A comprehensive component library built on shadcn/ui with the Merifly color
                  palette. Beautifully designed, accessible, and customizable.
                </p>
                <div className="flex gap-3">
                  <Button onClick={() => scrollToSection("installation")}>Get Started</Button>
                  <Button variant="outline" onClick={() => scrollToSection("button")}>
                    Browse Components
                  </Button>
                </div>
              </section>

              <Separator />

              {/* Installation */}
              <section id="installation" className="scroll-mt-20 space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">Installation</h2>
                <p className="text-muted-foreground">
                  Get started with Merifly UI in your React project.
                </p>

                <Card>
                  <CardHeader>
                    <CardTitle>Install the package</CardTitle>
                    <CardDescription>Using your preferred package manager</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CodeBlock code="pnpm add @merifly/ui" language="bash" />
                    <CodeBlock code="npm install @merifly/ui" language="bash" />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Import and use</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CodeBlock
                      code={`import { Button, Card, Input } from "@merifly/ui"

export function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome</CardTitle>
      </CardHeader>
      <CardContent>
        <Input placeholder="Enter your name" />
        <Button>Submit</Button>
      </CardContent>
    </Card>
  )
}`}
                      language="tsx"
                    />
                  </CardContent>
                </Card>
              </section>

              <Separator />

              {/* Button */}
              <section id="button" className="scroll-mt-20 space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">Button</h2>
                <p className="text-muted-foreground">
                  Displays a button or a component that looks like a button.
                </p>

                <Card>
                  <CardHeader>
                    <CardTitle>Variants</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      <Button>Default</Button>
                      <Button variant="secondary">Secondary</Button>
                      <Button variant="destructive">Destructive</Button>
                      <Button variant="outline">Outline</Button>
                      <Button variant="ghost">Ghost</Button>
                      <Button variant="link">Link</Button>
                    </div>
                    <CodeBlock
                      code={`<Button>Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>`}
                      language="tsx"
                    />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Sizes</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <Button size="sm">Small</Button>
                      <Button size="default">Default</Button>
                      <Button size="lg">Large</Button>
                      <Button size="icon">
                        <span className="h-4 w-4">+</span>
                      </Button>
                    </div>
                    <CodeBlock
                      code={`<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon">+</Button>`}
                      language="tsx"
                    />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>With Loading State</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex gap-2">
                      <Button disabled>
                        <Spinner size="sm" variant="white" className="mr-2" />
                        Loading...
                      </Button>
                    </div>
                    <CodeBlock
                      code={`<Button disabled>
  <Spinner size="sm" variant="white" className="mr-2" />
  Loading...
</Button>`}
                      language="tsx"
                    />
                  </CardContent>
                </Card>
              </section>

              <Separator />

              {/* Input */}
              <section id="input" className="scroll-mt-20 space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">Input</h2>
                <p className="text-muted-foreground">
                  Displays a form input field or a component that looks like an input field.
                </p>

                <Card>
                  <CardHeader>
                    <CardTitle>Examples</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-4 max-w-sm">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="you@example.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="disabled">Disabled</Label>
                        <Input id="disabled" disabled placeholder="Disabled input" />
                      </div>
                    </div>
                    <CodeBlock
                      code={`<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="you@example.com" />
</div>`}
                      language="tsx"
                    />
                  </CardContent>
                </Card>
              </section>

              <Separator />

              {/* Select */}
              <section id="select" className="scroll-mt-20 space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">Select</h2>
                <p className="text-muted-foreground">
                  Displays a list of options for the user to pick from.
                </p>

                <Card>
                  <CardHeader>
                    <CardTitle>Example</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="max-w-sm space-y-2">
                      <Label>Framework</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a framework" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="next">Next.js</SelectItem>
                          <SelectItem value="remix">Remix</SelectItem>
                          <SelectItem value="astro">Astro</SelectItem>
                          <SelectItem value="gatsby">Gatsby</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <CodeBlock
                      code={`<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select a framework" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="next">Next.js</SelectItem>
    <SelectItem value="remix">Remix</SelectItem>
    <SelectItem value="astro">Astro</SelectItem>
  </SelectContent>
</Select>`}
                      language="tsx"
                    />
                  </CardContent>
                </Card>
              </section>

              <Separator />

              {/* Checkbox */}
              <section id="checkbox" className="scroll-mt-20 space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">Checkbox</h2>
                <p className="text-muted-foreground">
                  A control that allows the user to toggle between checked and not checked.
                </p>

                <Card>
                  <CardHeader>
                    <CardTitle>Example</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="terms" />
                        <Label htmlFor="terms">Accept terms and conditions</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="newsletter" defaultChecked />
                        <Label htmlFor="newsletter">Subscribe to newsletter</Label>
                      </div>
                    </div>
                    <CodeBlock
                      code={`<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>`}
                      language="tsx"
                    />
                  </CardContent>
                </Card>
              </section>

              <Separator />

              {/* Radio Group */}
              <section id="radio" className="scroll-mt-20 space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">Radio Group</h2>
                <p className="text-muted-foreground">
                  A set of checkable buttons where only one can be checked at a time.
                </p>

                <Card>
                  <CardHeader>
                    <CardTitle>Example</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <RadioGroup defaultValue="comfortable">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="default" id="r1" />
                        <Label htmlFor="r1">Default</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="comfortable" id="r2" />
                        <Label htmlFor="r2">Comfortable</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="compact" id="r3" />
                        <Label htmlFor="r3">Compact</Label>
                      </div>
                    </RadioGroup>
                    <CodeBlock
                      code={`<RadioGroup defaultValue="comfortable">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="default" id="r1" />
    <Label htmlFor="r1">Default</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="comfortable" id="r2" />
    <Label htmlFor="r2">Comfortable</Label>
  </div>
</RadioGroup>`}
                      language="tsx"
                    />
                  </CardContent>
                </Card>
              </section>

              <Separator />

              {/* Switch */}
              <section id="switch" className="scroll-mt-20 space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">Switch</h2>
                <p className="text-muted-foreground">
                  A control that allows the user to toggle between two states.
                </p>

                <Card>
                  <CardHeader>
                    <CardTitle>Example</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Switch id="airplane-mode" />
                      <Label htmlFor="airplane-mode">Airplane Mode</Label>
                    </div>
                    <CodeBlock
                      code={`<div className="flex items-center space-x-2">
  <Switch id="airplane-mode" />
  <Label htmlFor="airplane-mode">Airplane Mode</Label>
</div>`}
                      language="tsx"
                    />
                  </CardContent>
                </Card>
              </section>

              <Separator />

              {/* Slider */}
              <section id="slider" className="scroll-mt-20 space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">Slider</h2>
                <p className="text-muted-foreground">
                  An input where the user selects a value from within a given range.
                </p>

                <Card>
                  <CardHeader>
                    <CardTitle>Example</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="max-w-sm space-y-4">
                      <Slider defaultValue={[50]} max={100} step={1} />
                      <Slider defaultValue={[25, 75]} max={100} step={1} />
                    </div>
                    <CodeBlock
                      code={`<Slider defaultValue={[50]} max={100} step={1} />
<Slider defaultValue={[25, 75]} max={100} step={1} />`}
                      language="tsx"
                    />
                  </CardContent>
                </Card>
              </section>

              <Separator />

              {/* Textarea */}
              <section id="textarea" className="scroll-mt-20 space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">Textarea</h2>
                <p className="text-muted-foreground">
                  Displays a form textarea or a component that looks like a textarea.
                </p>

                <Card>
                  <CardHeader>
                    <CardTitle>Example</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="max-w-sm space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" placeholder="Type your message here." />
                    </div>
                    <CodeBlock
                      code={`<div className="space-y-2">
  <Label htmlFor="message">Message</Label>
  <Textarea id="message" placeholder="Type your message here." />
</div>`}
                      language="tsx"
                    />
                  </CardContent>
                </Card>
              </section>

              <Separator />

              {/* Card */}
              <section id="card" className="scroll-mt-20 space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">Card</h2>
                <p className="text-muted-foreground">
                  Displays a card with header, content, and footer.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Card Title</CardTitle>
                      <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>Card Content</p>
                    </CardContent>
                    <CardFooter>
                      <Button>Action</Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Notifications</CardTitle>
                      <CardDescription>You have 3 unread messages.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        <span className="text-sm">New comment on your post</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        <span className="text-sm">Someone mentioned you</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        View all
                      </Button>
                    </CardFooter>
                  </Card>
                </div>

                <CodeBlock
                  code={`<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>`}
                  language="tsx"
                />
              </section>

              <Separator />

              {/* Dialog */}
              <section id="dialog" className="scroll-mt-20 space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">Dialog</h2>
                <p className="text-muted-foreground">
                  A modal dialog that interrupts the user with important content.
                </p>

                <Card>
                  <CardHeader>
                    <CardTitle>Example</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline">Open Dialog</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Are you sure?</DialogTitle>
                          <DialogDescription>
                            This action cannot be undone. This will permanently delete your
                            account and remove your data from our servers.
                          </DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                          <Button variant="outline">Cancel</Button>
                          <Button>Continue</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                    <CodeBlock
                      code={`<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button variant="outline">Cancel</Button>
      <Button>Continue</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
                      language="tsx"
                    />
                  </CardContent>
                </Card>
              </section>

              <Separator />

              {/* Dropdown Menu */}
              <section id="dropdown" className="scroll-mt-20 space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">Dropdown Menu</h2>
                <p className="text-muted-foreground">
                  Displays a menu to the user with a list of options.
                </p>

                <Card>
                  <CardHeader>
                    <CardTitle>Example</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline">Open Menu</Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Billing</DropdownMenuItem>
                        <DropdownMenuItem>Team</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Log out</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <CodeBlock
                      code={`<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Open Menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Log out</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`}
                      language="tsx"
                    />
                  </CardContent>
                </Card>
              </section>

              <Separator />

              {/* Tabs */}
              <section id="tabs" className="scroll-mt-20 space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">Tabs</h2>
                <p className="text-muted-foreground">
                  A set of layered sections of content that are displayed one at a time.
                </p>

                <Card>
                  <CardHeader>
                    <CardTitle>Example</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Tabs defaultValue="account" className="w-full">
                      <TabsList>
                        <TabsTrigger value="account">Account</TabsTrigger>
                        <TabsTrigger value="password">Password</TabsTrigger>
                        <TabsTrigger value="settings">Settings</TabsTrigger>
                      </TabsList>
                      <TabsContent value="account" className="space-y-2">
                        <p className="text-sm text-muted-foreground">
                          Make changes to your account here.
                        </p>
                        <Input placeholder="Name" />
                      </TabsContent>
                      <TabsContent value="password" className="space-y-2">
                        <p className="text-sm text-muted-foreground">
                          Change your password here.
                        </p>
                        <Input type="password" placeholder="Current password" />
                      </TabsContent>
                      <TabsContent value="settings" className="space-y-2">
                        <p className="text-sm text-muted-foreground">
                          Manage your settings here.
                        </p>
                      </TabsContent>
                    </Tabs>
                    <CodeBlock
                      code={`<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    Make changes to your account here.
  </TabsContent>
  <TabsContent value="password">
    Change your password here.
  </TabsContent>
</Tabs>`}
                      language="tsx"
                    />
                  </CardContent>
                </Card>
              </section>

              <Separator />

              {/* Accordion */}
              <section id="accordion" className="scroll-mt-20 space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">Accordion</h2>
                <p className="text-muted-foreground">
                  A vertically stacked set of interactive headings.
                </p>

                <Card>
                  <CardHeader>
                    <CardTitle>Example</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger>Is it accessible?</AccordionTrigger>
                        <AccordionContent>
                          Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger>Is it styled?</AccordionTrigger>
                        <AccordionContent>
                          Yes. It comes with default styles that match the other components.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                        <AccordionTrigger>Is it animated?</AccordionTrigger>
                        <AccordionContent>
                          Yes. It&apos;s animated by default, but you can disable it.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                    <CodeBlock
                      code={`<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
                      language="tsx"
                    />
                  </CardContent>
                </Card>
              </section>

              <Separator />

              {/* Alert */}
              <section id="alert" className="scroll-mt-20 space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">Alert</h2>
                <p className="text-muted-foreground">
                  Displays a callout for user attention.
                </p>

                <div className="space-y-4">
                  <Alert>
                    <AlertTitle>Heads up!</AlertTitle>
                    <AlertDescription>
                      You can add components to your app using the cli.
                    </AlertDescription>
                  </Alert>
                  <Alert variant="destructive">
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>
                      Your session has expired. Please log in again.
                    </AlertDescription>
                  </Alert>
                </div>

                <CodeBlock
                  code={`<Alert>
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components to your app using the cli.
  </AlertDescription>
</Alert>

<Alert variant="destructive">
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>
    Your session has expired. Please log in again.
  </AlertDescription>
</Alert>`}
                  language="tsx"
                />
              </section>

              <Separator />

              {/* Badge */}
              <section id="badge" className="scroll-mt-20 space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">Badge</h2>
                <p className="text-muted-foreground">
                  Displays a badge or a component that looks like a badge.
                </p>

                <Card>
                  <CardHeader>
                    <CardTitle>Variants</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      <Badge>Default</Badge>
                      <Badge variant="secondary">Secondary</Badge>
                      <Badge variant="destructive">Destructive</Badge>
                      <Badge variant="outline">Outline</Badge>
                    </div>
                    <CodeBlock
                      code={`<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>`}
                      language="tsx"
                    />
                  </CardContent>
                </Card>
              </section>

              <Separator />

              {/* Avatar */}
              <section id="avatar" className="scroll-mt-20 space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">Avatar</h2>
                <p className="text-muted-foreground">
                  An image element with a fallback for representing the user.
                </p>

                <Card>
                  <CardHeader>
                    <CardTitle>Example</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex gap-4">
                      <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <Avatar>
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <Avatar>
                        <AvatarFallback>AB</AvatarFallback>
                      </Avatar>
                    </div>
                    <CodeBlock
                      code={`<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`}
                      language="tsx"
                    />
                  </CardContent>
                </Card>
              </section>

              <Separator />

              {/* Progress */}
              <section id="progress" className="scroll-mt-20 space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">Progress</h2>
                <p className="text-muted-foreground">
                  Displays an indicator showing the completion progress of a task.
                </p>

                <Card>
                  <CardHeader>
                    <CardTitle>Example</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-4 max-w-md">
                      <Progress value={progress} />
                      <div className="flex gap-2">
                        <Button size="sm" onClick={() => setProgress(Math.max(0, progress - 10))}>
                          -10%
                        </Button>
                        <Button size="sm" onClick={() => setProgress(Math.min(100, progress + 10))}>
                          +10%
                        </Button>
                      </div>
                    </div>
                    <CodeBlock code={`<Progress value={33} />`} language="tsx" />
                  </CardContent>
                </Card>
              </section>

              <Separator />

              {/* Skeleton */}
              <section id="skeleton" className="scroll-mt-20 space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">Skeleton</h2>
                <p className="text-muted-foreground">
                  Use to show a placeholder while content is loading.
                </p>

                <Card>
                  <CardHeader>
                    <CardTitle>Example</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <Skeleton className="h-12 w-12 rounded-full" />
                      <div className="space-y-2">
                        <Skeleton className="h-4 w-[250px]" />
                        <Skeleton className="h-4 w-[200px]" />
                      </div>
                    </div>
                    <CodeBlock
                      code={`<div className="flex items-center space-x-4">
  <Skeleton className="h-12 w-12 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
  </div>
</div>`}
                      language="tsx"
                    />
                  </CardContent>
                </Card>
              </section>

              <Separator />

              {/* Table */}
              <section id="table" className="scroll-mt-20 space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">Table</h2>
                <p className="text-muted-foreground">A responsive table component.</p>

                <Card>
                  <CardHeader>
                    <CardTitle>Example</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Invoice</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Method</TableHead>
                          <TableHead className="text-right">Amount</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>INV001</TableCell>
                          <TableCell>Paid</TableCell>
                          <TableCell>Credit Card</TableCell>
                          <TableCell className="text-right">$250.00</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>INV002</TableCell>
                          <TableCell>Pending</TableCell>
                          <TableCell>PayPal</TableCell>
                          <TableCell className="text-right">$150.00</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>INV003</TableCell>
                          <TableCell>Unpaid</TableCell>
                          <TableCell>Bank Transfer</TableCell>
                          <TableCell className="text-right">$350.00</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                    <CodeBlock
                      code={`<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>INV001</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell className="text-right">$250.00</TableCell>
    </TableRow>
  </TableBody>
</Table>`}
                      language="tsx"
                    />
                  </CardContent>
                </Card>
              </section>

              <Separator />

              {/* Tooltip */}
              <section id="tooltip" className="scroll-mt-20 space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">Tooltip</h2>
                <p className="text-muted-foreground">
                  A popup that displays information related to an element.
                </p>

                <Card>
                  <CardHeader>
                    <CardTitle>Example</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline">Hover me</Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Add to library</p>
                      </TooltipContent>
                    </Tooltip>
                    <CodeBlock
                      code={`<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">Hover me</Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Add to library</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`}
                      language="tsx"
                    />
                  </CardContent>
                </Card>
              </section>

              <Separator />

              {/* Separator */}
              <section id="separator" className="scroll-mt-20 space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">Separator</h2>
                <p className="text-muted-foreground">Visually separates content.</p>

                <Card>
                  <CardHeader>
                    <CardTitle>Example</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="space-y-1">
                        <h4 className="text-sm font-medium">Merifly UI</h4>
                        <p className="text-sm text-muted-foreground">
                          An open-source UI component library.
                        </p>
                      </div>
                      <Separator className="my-4" />
                      <div className="flex h-5 items-center space-x-4 text-sm">
                        <div>Blog</div>
                        <Separator orientation="vertical" />
                        <div>Docs</div>
                        <Separator orientation="vertical" />
                        <div>Source</div>
                      </div>
                    </div>
                    <CodeBlock
                      code={`<Separator className="my-4" />

<div className="flex h-5 items-center space-x-4 text-sm">
  <div>Blog</div>
  <Separator orientation="vertical" />
  <div>Docs</div>
</div>`}
                      language="tsx"
                    />
                  </CardContent>
                </Card>
              </section>

              <Separator />

              {/* Spinner */}
              <section id="spinner" className="scroll-mt-20 space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">Spinner</h2>
                <p className="text-muted-foreground">
                  A loading indicator to show progress.
                </p>

                <Card>
                  <CardHeader>
                    <CardTitle>Sizes</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <Spinner size="sm" />
                        <p className="text-xs text-muted-foreground mt-2">sm</p>
                      </div>
                      <div className="text-center">
                        <Spinner size="md" />
                        <p className="text-xs text-muted-foreground mt-2">md</p>
                      </div>
                      <div className="text-center">
                        <Spinner size="lg" />
                        <p className="text-xs text-muted-foreground mt-2">lg</p>
                      </div>
                      <div className="text-center">
                        <Spinner size="xl" />
                        <p className="text-xs text-muted-foreground mt-2">xl</p>
                      </div>
                    </div>
                    <CodeBlock
                      code={`<Spinner size="sm" />
<Spinner size="md" />
<Spinner size="lg" />
<Spinner size="xl" />`}
                      language="tsx"
                    />
                  </CardContent>
                </Card>
              </section>

              <Separator />

              {/* Colors */}
              <section id="colors" className="scroll-mt-20 space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">Colors</h2>
                <p className="text-muted-foreground">
                  The Merifly color palette integrated with shadcn/ui.
                </p>

                <Card>
                  <CardHeader>
                    <CardTitle>Primary Colors</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div>
                        <div className="h-16 rounded-md bg-primary" />
                        <p className="text-sm font-medium mt-2">Primary</p>
                        <p className="text-xs text-muted-foreground">#2563eb</p>
                      </div>
                      <div>
                        <div className="h-16 rounded-md bg-merifly-blue-light" />
                        <p className="text-sm font-medium mt-2">Blue Light</p>
                        <p className="text-xs text-muted-foreground">#3b82f6</p>
                      </div>
                      <div>
                        <div className="h-16 rounded-md bg-merifly-green" />
                        <p className="text-sm font-medium mt-2">Green</p>
                        <p className="text-xs text-muted-foreground">#22c55e</p>
                      </div>
                      <div>
                        <div className="h-16 rounded-md bg-merifly-teal" />
                        <p className="text-sm font-medium mt-2">Teal</p>
                        <p className="text-xs text-muted-foreground">#14b8a6</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Semantic Colors</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div>
                        <div className="h-16 rounded-md bg-destructive" />
                        <p className="text-sm font-medium mt-2">Destructive</p>
                        <p className="text-xs text-muted-foreground">#ef4444</p>
                      </div>
                      <div>
                        <div className="h-16 rounded-md bg-warning" />
                        <p className="text-sm font-medium mt-2">Warning</p>
                        <p className="text-xs text-muted-foreground">#f59e0b</p>
                      </div>
                      <div>
                        <div className="h-16 rounded-md bg-success" />
                        <p className="text-sm font-medium mt-2">Success</p>
                        <p className="text-xs text-muted-foreground">#22c55e</p>
                      </div>
                      <div>
                        <div className="h-16 rounded-md bg-info" />
                        <p className="text-sm font-medium mt-2">Info</p>
                        <p className="text-xs text-muted-foreground">#3b82f6</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Neutral Colors</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                      <div>
                        <div className="h-16 rounded-md bg-background border" />
                        <p className="text-sm font-medium mt-2">Background</p>
                      </div>
                      <div>
                        <div className="h-16 rounded-md bg-muted" />
                        <p className="text-sm font-medium mt-2">Muted</p>
                      </div>
                      <div>
                        <div className="h-16 rounded-md bg-secondary" />
                        <p className="text-sm font-medium mt-2">Secondary</p>
                      </div>
                      <div>
                        <div className="h-16 rounded-md bg-border" />
                        <p className="text-sm font-medium mt-2">Border</p>
                      </div>
                      <div>
                        <div className="h-16 rounded-md bg-foreground" />
                        <p className="text-sm font-medium mt-2">Foreground</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Footer */}
              <section className="py-8 text-center space-y-4">
                <Separator />
                <div className="pt-4">
                  <Badge className="mb-4">shadcn/ui + Merifly</Badge>
                  <h3 className="text-lg font-semibold">Built with Merifly Design System</h3>
                  <p className="text-muted-foreground text-sm">
                    Powered by shadcn/ui, React, TypeScript, and Tailwind CSS
                  </p>
                  <div className="flex gap-2 justify-center mt-4 flex-wrap">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">TypeScript</Badge>
                    <Badge variant="secondary">Tailwind CSS</Badge>
                    <Badge variant="secondary">shadcn/ui</Badge>
                    <Badge variant="secondary">Radix UI</Badge>
                  </div>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </TooltipProvider>
  );
}
