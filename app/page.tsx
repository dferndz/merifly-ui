"use client";

import { useState } from "react";
import {
  Button,
  Badge,
  Spinner,
  Divider,
  Container,
  Grid,
  Col,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Input,
  Textarea,
  Select,
  Checkbox,
  Radio,
  Label,
  Navbar,
  Menu,
  MenuItem,
  MenuSeparator,
  Alert,
  AlertTitle,
  AlertDescription,
  Modal,
  ModalHeader,
  ModalTitle,
  ModalDescription,
  ModalFooter,
  Avatar,
  AvatarImage,
  AvatarFallback,
  Heading,
  Text,
} from "@/components/ui";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState("option1");
  const [activeSection, setActiveSection] = useState("");

  const sections = [
    { id: "typography", label: "Typography" },
    { id: "buttons", label: "Buttons" },
    { id: "badges", label: "Badges" },
    { id: "alerts", label: "Alerts" },
    { id: "forms", label: "Form Components" },
    { id: "cards", label: "Cards" },
    { id: "avatars", label: "Avatars" },
    { id: "modal", label: "Modal" },
    { id: "spinners", label: "Spinners" },
    { id: "menu", label: "Menu" },
    { id: "grid", label: "Grid System" },
    { id: "dividers", label: "Dividers" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f5f7]">
      {/* Navigation Bar */}
      <Navbar variant="solid" position="sticky">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#3bb0f3] to-[#4a90e2] rounded-lg" />
            <Heading level="h5" className="text-white">
              Merifly
            </Heading>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            className="text-white hover:bg-white/10"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Documentation
          </Button>
          <Button
            variant="ghost"
            className="text-white hover:bg-white/10"
            onClick={() => scrollToSection("colors")}
          >
            Colors
          </Button>
          <Avatar size="sm">
            <AvatarFallback>UI</AvatarFallback>
          </Avatar>
        </div>
      </Navbar>

      <Container size="2xl" className="py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar Navigation */}
          <aside className="lg:col-span-3 lg:sticky lg:top-24 lg:h-fit">
            <Card>
              <CardHeader>
                <Heading level="h5">Components</Heading>
              </CardHeader>
              <CardContent className="pt-0">
                <nav className="space-y-1">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                        activeSection === section.id
                          ? "bg-[#4a90e2] text-white"
                          : "text-[#2c3e50] hover:bg-[#f4f5f7]"
                      }`}
                    >
                      {section.label}
                    </button>
                  ))}
                </nav>
              </CardContent>
            </Card>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-9">
            <div className="space-y-16">
              {/* Hero Section */}
              <section className="text-center space-y-6 py-8">
                <div className="inline-flex items-center gap-2 bg-[#6edc6b]/10 px-4 py-2 rounded-full border border-[#6edc6b]/20">
                  <Badge variant="skill">v1.0.0</Badge>
                  <Text size="sm" className="text-[#2c3e50]">
                    Component Library
                  </Text>
                </div>
                <Heading level="h1" className="text-4xl lg:text-5xl">
                  Merifly UI Components
                </Heading>
                <Text variant="muted" size="lg" className="max-w-2xl mx-auto">
                  A comprehensive, accessible component library built with React,
                  TypeScript, and Tailwind CSS. Designed to showcase real skills
                  and talent through beautiful, functional interfaces.
                </Text>
                <div className="flex gap-4 justify-center flex-wrap">
                  <Button
                    size="lg"
                    onClick={() => scrollToSection("typography")}
                  >
                    Get Started
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => scrollToSection("colors")}
                  >
                    View Colors
                  </Button>
                </div>
              </section>

              <Divider />

              {/* Design System Colors */}
              <section id="colors" className="scroll-mt-24">
                <div className="space-y-6">
                  <div>
                    <Heading level="h2" className="mb-2">
                      Design System Colors
                    </Heading>
                    <Text variant="muted">
                      Our carefully crafted color palette ensures consistency,
                      accessibility, and brand identity across all components.
                    </Text>
                  </div>

                  <Card>
                    <CardHeader>
                      <Heading level="h4">Primary Colors</Heading>
                      <Text variant="muted" size="sm">
                        Core brand colors inspired by the Merifly logo
                      </Text>
                    </CardHeader>
                    <CardContent>
                      <Grid cols={3} gap="md">
                        <div>
                          <div className="w-full h-24 bg-[#4a90e2] rounded-lg shadow-sm mb-3" />
                          <Text weight="bold" size="sm">
                            Merifly Blue
                          </Text>
                          <Text variant="muted" size="xs">
                            #4A90E2
                          </Text>
                          <Text size="xs" className="mt-1">
                            Primary buttons, dark text
                          </Text>
                        </div>
                        <div>
                          <div className="w-full h-24 bg-[#3bb0f3] rounded-lg shadow-sm mb-3" />
                          <Text weight="bold" size="sm">
                            Gradient Blue
                          </Text>
                          <Text variant="muted" size="xs">
                            #3BB0F3
                          </Text>
                          <Text size="xs" className="mt-1">
                            Highlights, hover states
                          </Text>
                        </div>
                        <div>
                          <div className="w-full h-24 bg-[#6edc6b] rounded-lg shadow-sm mb-3" />
                          <Text weight="bold" size="sm">
                            Merifly Green
                          </Text>
                          <Text variant="muted" size="xs">
                            #6EDC6B
                          </Text>
                          <Text size="xs" className="mt-1">
                            Success, skill tags
                          </Text>
                        </div>
                      </Grid>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Heading level="h4">Accent Colors</Heading>
                      <Text variant="muted" size="sm">
                        Secondary colors for interactive elements and CTAs
                      </Text>
                    </CardHeader>
                    <CardContent>
                      <Grid cols={2} gap="md">
                        <div>
                          <div className="w-full h-24 bg-[#35c6b0] rounded-lg shadow-sm mb-3" />
                          <Text weight="bold" size="sm">
                            Teal Accent
                          </Text>
                          <Text variant="muted" size="xs">
                            #35C6B0
                          </Text>
                          <Text size="xs" className="mt-1">
                            Interactive elements, badges
                          </Text>
                        </div>
                        <div>
                          <div className="w-full h-24 bg-[#ffb547] rounded-lg shadow-sm mb-3" />
                          <Text weight="bold" size="sm">
                            Vibrant Accent
                          </Text>
                          <Text variant="muted" size="xs">
                            #FFB547
                          </Text>
                          <Text size="xs" className="mt-1">
                            Primary CTAs, notifications
                          </Text>
                        </div>
                      </Grid>
                    </CardContent>
                  </Card>

                  <Grid cols={2} gap="md">
                    <Card>
                      <CardHeader>
                        <Heading level="h4">Neutral Colors</Heading>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-[#ffffff] rounded border border-[#a1aab8]/20 flex-shrink-0" />
                            <div>
                              <Text size="sm" weight="bold">
                                White
                              </Text>
                              <Text size="xs" variant="muted">
                                #FFFFFF
                              </Text>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-[#f4f5f7] rounded flex-shrink-0" />
                            <div>
                              <Text size="sm" weight="bold">
                                Light Gray
                              </Text>
                              <Text size="xs" variant="muted">
                                #F4F5F7
                              </Text>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-[#a1aab8] rounded flex-shrink-0" />
                            <div>
                              <Text size="sm" weight="bold">
                                Medium Gray
                              </Text>
                              <Text size="xs" variant="muted">
                                #A1AAB8
                              </Text>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-[#2c3e50] rounded flex-shrink-0" />
                            <div>
                              <Text size="sm" weight="bold">
                                Dark Gray
                              </Text>
                              <Text size="xs" variant="muted">
                                #2C3E50
                              </Text>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <Heading level="h4">Status Colors</Heading>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-[#e74c3c] rounded flex-shrink-0" />
                            <div>
                              <Text size="sm" weight="bold">
                                Error Red
                              </Text>
                              <Text size="xs" variant="muted">
                                #E74C3C
                              </Text>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-[#f1c40f] rounded flex-shrink-0" />
                            <div>
                              <Text size="sm" weight="bold">
                                Warning Yellow
                              </Text>
                              <Text size="xs" variant="muted">
                                #F1C40F
                              </Text>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Grid>
                </div>
              </section>

              <Divider />

              {/* Typography */}
              <section id="typography" className="scroll-mt-24">
                <div className="space-y-6">
                  <div>
                    <Heading level="h2" className="mb-2">
                      Typography
                    </Heading>
                    <Text variant="muted">
                      Semantic heading components and text variants for consistent
                      typography across your application.
                    </Text>
                  </div>

                  <Card>
                    <CardHeader>
                      <Heading level="h4">Heading Levels</Heading>
                      <Text variant="muted" size="sm">
                        Six levels of headings following semantic HTML hierarchy
                      </Text>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <Heading level="h1">Heading 1</Heading>
                        <Heading level="h2">Heading 2</Heading>
                        <Heading level="h3">Heading 3</Heading>
                        <Heading level="h4">Heading 4</Heading>
                        <Heading level="h5">Heading 5</Heading>
                        <Heading level="h6">Heading 6</Heading>
                      </div>
                    </CardContent>
                  </Card>

                  <Grid cols={2} gap="md">
                    <Card>
                      <CardHeader>
                        <Heading level="h4">Text Sizes</Heading>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <Text size="xl">Extra Large Text</Text>
                          <Text size="lg">Large Text</Text>
                          <Text size="base">Base Text (Default)</Text>
                          <Text size="sm">Small Text</Text>
                          <Text size="xs">Extra Small Text</Text>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <Heading level="h4">Text Variants</Heading>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <Text variant="default">Default</Text>
                          <Text variant="muted">Muted</Text>
                          <Text variant="primary">Primary</Text>
                          <Text variant="secondary">Secondary</Text>
                          <Text variant="success">Success</Text>
                          <Text variant="warning">Warning</Text>
                          <Text variant="error">Error</Text>
                        </div>
                      </CardContent>
                    </Card>
                  </Grid>

                  <Card>
                    <CardHeader>
                      <Heading level="h4">Props</Heading>
                    </CardHeader>
                    <CardContent>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead className="border-b border-[#f4f5f7]">
                            <tr>
                              <th className="text-left py-2 pr-4 font-semibold">
                                Prop
                              </th>
                              <th className="text-left py-2 pr-4 font-semibold">
                                Type
                              </th>
                              <th className="text-left py-2 font-semibold">
                                Default
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[#f4f5f7]">
                            <tr>
                              <td className="py-2 pr-4">
                                <code className="text-[#4a90e2] bg-[#f4f5f7] px-2 py-1 rounded">
                                  level
                                </code>
                              </td>
                              <td className="py-2 pr-4 text-[#a1aab8]">
                                h1 | h2 | h3 | h4 | h5 | h6
                              </td>
                              <td className="py-2">h1</td>
                            </tr>
                            <tr>
                              <td className="py-2 pr-4">
                                <code className="text-[#4a90e2] bg-[#f4f5f7] px-2 py-1 rounded">
                                  size
                                </code>
                              </td>
                              <td className="py-2 pr-4 text-[#a1aab8]">
                                xs | sm | base | lg | xl
                              </td>
                              <td className="py-2">base</td>
                            </tr>
                            <tr>
                              <td className="py-2 pr-4">
                                <code className="text-[#4a90e2] bg-[#f4f5f7] px-2 py-1 rounded">
                                  variant
                                </code>
                              </td>
                              <td className="py-2 pr-4 text-[#a1aab8]">
                                default | muted | primary | secondary | success |
                                warning | error
                              </td>
                              <td className="py-2">default</td>
                            </tr>
                            <tr>
                              <td className="py-2 pr-4">
                                <code className="text-[#4a90e2] bg-[#f4f5f7] px-2 py-1 rounded">
                                  weight
                                </code>
                              </td>
                              <td className="py-2 pr-4 text-[#a1aab8]">
                                normal | medium | bold
                              </td>
                              <td className="py-2">normal</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Buttons */}
              <section id="buttons" className="scroll-mt-24">
                <div className="space-y-6">
                  <div>
                    <Heading level="h2" className="mb-2">
                      Buttons
                    </Heading>
                    <Text variant="muted">
                      Interactive button components with multiple variants, sizes,
                      and states for all user actions.
                    </Text>
                  </div>

                  <Card>
                    <CardHeader>
                      <Heading level="h4">Button Variants</Heading>
                      <Text variant="muted" size="sm">
                        Five distinct variants for different use cases
                      </Text>
                    </CardHeader>
                    <CardContent>
                      <div className="flex gap-3 flex-wrap">
                        <Button variant="primary">Primary</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="outline">Outline</Button>
                        <Button variant="ghost">Ghost</Button>
                        <Button variant="danger">Danger</Button>
                        <Button disabled>Disabled</Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Grid cols={2} gap="md">
                    <Card>
                      <CardHeader>
                        <Heading level="h4">Button Sizes</Heading>
                      </CardHeader>
                      <CardContent>
                        <div className="flex gap-3 items-center flex-wrap">
                          <Button size="sm">Small</Button>
                          <Button size="md">Medium</Button>
                          <Button size="lg">Large</Button>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <Heading level="h4">With Icons</Heading>
                      </CardHeader>
                      <CardContent>
                        <Button disabled>
                          <Spinner size="sm" variant="white" />
                          Loading...
                        </Button>
                      </CardContent>
                    </Card>
                  </Grid>

                  <Card>
                    <CardHeader>
                      <Heading level="h4">Props</Heading>
                    </CardHeader>
                    <CardContent>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead className="border-b border-[#f4f5f7]">
                            <tr>
                              <th className="text-left py-2 pr-4 font-semibold">
                                Prop
                              </th>
                              <th className="text-left py-2 pr-4 font-semibold">
                                Type
                              </th>
                              <th className="text-left py-2 font-semibold">
                                Default
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[#f4f5f7]">
                            <tr>
                              <td className="py-2 pr-4">
                                <code className="text-[#4a90e2] bg-[#f4f5f7] px-2 py-1 rounded">
                                  variant
                                </code>
                              </td>
                              <td className="py-2 pr-4 text-[#a1aab8]">
                                primary | secondary | outline | ghost | danger
                              </td>
                              <td className="py-2">primary</td>
                            </tr>
                            <tr>
                              <td className="py-2 pr-4">
                                <code className="text-[#4a90e2] bg-[#f4f5f7] px-2 py-1 rounded">
                                  size
                                </code>
                              </td>
                              <td className="py-2 pr-4 text-[#a1aab8]">
                                sm | md | lg
                              </td>
                              <td className="py-2">md</td>
                            </tr>
                            <tr>
                              <td className="py-2 pr-4">
                                <code className="text-[#4a90e2] bg-[#f4f5f7] px-2 py-1 rounded">
                                  disabled
                                </code>
                              </td>
                              <td className="py-2 pr-4 text-[#a1aab8]">
                                boolean
                              </td>
                              <td className="py-2">false</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Badges */}
              <section id="badges" className="scroll-mt-24">
                <div className="space-y-6">
                  <div>
                    <Heading level="h2" className="mb-2">
                      Badges
                    </Heading>
                    <Text variant="muted">
                      Small status indicators and labels for categorization and
                      highlighting important information.
                    </Text>
                  </div>

                  <Card>
                    <CardHeader>
                      <Heading level="h4">Badge Variants</Heading>
                      <Text variant="muted" size="sm">
                        Eight variants for different semantic meanings
                      </Text>
                    </CardHeader>
                    <CardContent>
                      <div className="flex gap-2 flex-wrap">
                        <Badge variant="default">Default</Badge>
                        <Badge variant="success">Success</Badge>
                        <Badge variant="warning">Warning</Badge>
                        <Badge variant="error">Error</Badge>
                        <Badge variant="info">Info</Badge>
                        <Badge variant="teal">Teal</Badge>
                        <Badge variant="outline">Outline</Badge>
                        <Badge variant="skill">Skill</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Heading level="h4">Usage Examples</Heading>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <Text>Status:</Text>
                          <Badge variant="success">Active</Badge>
                        </div>
                        <div className="flex items-center gap-3">
                          <Text>Skills:</Text>
                          <Badge variant="skill">React</Badge>
                          <Badge variant="skill">TypeScript</Badge>
                          <Badge variant="skill">Tailwind CSS</Badge>
                        </div>
                        <div className="flex items-center gap-3">
                          <Text>Notifications:</Text>
                          <Badge variant="error">3 Errors</Badge>
                          <Badge variant="warning">2 Warnings</Badge>
                          <Badge variant="info">5 Info</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Alerts */}
              <section id="alerts" className="scroll-mt-24">
                <div className="space-y-6">
                  <div>
                    <Heading level="h2" className="mb-2">
                      Alerts
                    </Heading>
                    <Text variant="muted">
                      Contextual feedback messages for user actions and system
                      notifications.
                    </Text>
                  </div>

                  <div className="space-y-4">
                    <Alert variant="default">
                      <AlertTitle>Default Alert</AlertTitle>
                      <AlertDescription>
                        This is a default alert message for general information.
                      </AlertDescription>
                    </Alert>

                    <Alert variant="success">
                      <AlertTitle>Success</AlertTitle>
                      <AlertDescription>
                        Your profile has been updated successfully.
                      </AlertDescription>
                    </Alert>

                    <Alert variant="warning">
                      <AlertTitle>Warning</AlertTitle>
                      <AlertDescription>
                        Please verify your email address to continue.
                      </AlertDescription>
                    </Alert>

                    <Alert variant="error">
                      <AlertTitle>Error</AlertTitle>
                      <AlertDescription>
                        There was a problem processing your request. Please try
                        again.
                      </AlertDescription>
                    </Alert>

                    <Alert variant="info">
                      <AlertTitle>Information</AlertTitle>
                      <AlertDescription>
                        New features have been added to your dashboard. Check them
                        out!
                      </AlertDescription>
                    </Alert>
                  </div>

                  <Card>
                    <CardHeader>
                      <Heading level="h4">Props</Heading>
                    </CardHeader>
                    <CardContent>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead className="border-b border-[#f4f5f7]">
                            <tr>
                              <th className="text-left py-2 pr-4 font-semibold">
                                Prop
                              </th>
                              <th className="text-left py-2 pr-4 font-semibold">
                                Type
                              </th>
                              <th className="text-left py-2 font-semibold">
                                Default
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[#f4f5f7]">
                            <tr>
                              <td className="py-2 pr-4">
                                <code className="text-[#4a90e2] bg-[#f4f5f7] px-2 py-1 rounded">
                                  variant
                                </code>
                              </td>
                              <td className="py-2 pr-4 text-[#a1aab8]">
                                default | success | warning | error | info
                              </td>
                              <td className="py-2">default</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Form Components */}
              <section id="forms" className="scroll-mt-24">
                <div className="space-y-6">
                  <div>
                    <Heading level="h2" className="mb-2">
                      Form Components
                    </Heading>
                    <Text variant="muted">
                      Comprehensive form inputs with built-in validation states and
                      accessibility features.
                    </Text>
                  </div>

                  <Card>
                    <CardHeader>
                      <Heading level="h4">Text Inputs</Heading>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" placeholder="John Doe" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="you@example.com"
                        />
                      </div>

                      <Grid cols={3} gap="md">
                        <div className="space-y-2">
                          <Label htmlFor="input-sm">Small</Label>
                          <Input
                            id="input-sm"
                            inputSize="sm"
                            placeholder="Small input"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="input-md">Medium</Label>
                          <Input
                            id="input-md"
                            inputSize="md"
                            placeholder="Medium input"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="input-lg">Large</Label>
                          <Input
                            id="input-lg"
                            inputSize="lg"
                            placeholder="Large input"
                          />
                        </div>
                      </Grid>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Heading level="h4">Input States</Heading>
                    </CardHeader>
                    <CardContent>
                      <Grid cols={3} gap="md">
                        <div className="space-y-2">
                          <Label htmlFor="input-default">Default</Label>
                          <Input
                            id="input-default"
                            variant="default"
                            placeholder="Default state"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="input-success">Success</Label>
                          <Input
                            id="input-success"
                            variant="success"
                            placeholder="Success state"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="input-error">Error</Label>
                          <Input
                            id="input-error"
                            variant="error"
                            placeholder="Error state"
                          />
                        </div>
                      </Grid>
                    </CardContent>
                  </Card>

                  <Grid cols={2} gap="md">
                    <Card>
                      <CardHeader>
                        <Heading level="h4">Textarea</Heading>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <Label htmlFor="bio">Biography</Label>
                          <Textarea
                            id="bio"
                            placeholder="Tell us about yourself..."
                            rows={4}
                          />
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <Heading level="h4">Select</Heading>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <Label htmlFor="role">Role</Label>
                          <Select id="role">
                            <option>Select a role</option>
                            <option>Frontend Developer</option>
                            <option>Backend Developer</option>
                            <option>Full Stack Developer</option>
                            <option>Designer</option>
                            <option>Product Manager</option>
                          </Select>
                        </div>
                      </CardContent>
                    </Card>
                  </Grid>

                  <Grid cols={2} gap="md">
                    <Card>
                      <CardHeader>
                        <Heading level="h4">Checkboxes</Heading>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <Checkbox id="terms" />
                            <Label htmlFor="terms" className="font-normal">
                              I agree to the terms and conditions
                            </Label>
                          </div>
                          <div className="flex items-center gap-2">
                            <Checkbox id="newsletter" />
                            <Label htmlFor="newsletter" className="font-normal">
                              Subscribe to newsletter
                            </Label>
                          </div>
                          <div className="flex items-center gap-2">
                            <Checkbox id="updates" />
                            <Label htmlFor="updates" className="font-normal">
                              Receive product updates
                            </Label>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <Heading level="h4">Radio Buttons</Heading>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <Radio
                              name="option"
                              value="option1"
                              checked={selectedRadio === "option1"}
                              onChange={(e) => setSelectedRadio(e.target.value)}
                            />
                            <Label className="font-normal">Option 1</Label>
                          </div>
                          <div className="flex items-center gap-2">
                            <Radio
                              name="option"
                              value="option2"
                              checked={selectedRadio === "option2"}
                              onChange={(e) => setSelectedRadio(e.target.value)}
                            />
                            <Label className="font-normal">Option 2</Label>
                          </div>
                          <div className="flex items-center gap-2">
                            <Radio
                              name="option"
                              value="option3"
                              checked={selectedRadio === "option3"}
                              onChange={(e) => setSelectedRadio(e.target.value)}
                            />
                            <Label className="font-normal">Option 3</Label>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Grid>
                </div>
              </section>

              {/* Cards */}
              <section id="cards" className="scroll-mt-24">
                <div className="space-y-6">
                  <div>
                    <Heading level="h2" className="mb-2">
                      Cards
                    </Heading>
                    <Text variant="muted">
                      Flexible container components for grouping related content
                      with optional headers and footers.
                    </Text>
                  </div>

                  <Grid cols={3} gap="lg">
                    <Card variant="default">
                      <CardHeader>
                        <Heading level="h4">Default Card</Heading>
                        <Text variant="muted" size="sm">
                          Standard card variant
                        </Text>
                      </CardHeader>
                      <CardContent>
                        <Text>
                          This is a default card with subtle shadow and border.
                        </Text>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" size="sm">
                          Learn More
                        </Button>
                      </CardFooter>
                    </Card>

                    <Card variant="elevated">
                      <CardHeader>
                        <Heading level="h4">Elevated Card</Heading>
                        <Text variant="muted" size="sm">
                          Enhanced shadow variant
                        </Text>
                      </CardHeader>
                      <CardContent>
                        <Text>
                          This card has enhanced shadow for visual emphasis.
                        </Text>
                      </CardContent>
                      <CardFooter>
                        <Button variant="primary" size="sm">
                          Get Started
                        </Button>
                      </CardFooter>
                    </Card>

                    <Card variant="outlined">
                      <CardHeader>
                        <Heading level="h4">Outlined Card</Heading>
                        <Text variant="muted" size="sm">
                          Strong border variant
                        </Text>
                      </CardHeader>
                      <CardContent>
                        <Text>This card has a stronger border for definition.</Text>
                      </CardContent>
                      <CardFooter>
                        <Button variant="secondary" size="sm">
                          View Details
                        </Button>
                      </CardFooter>
                    </Card>
                  </Grid>

                  <Card>
                    <CardHeader>
                      <Heading level="h4">Card Composition</Heading>
                    </CardHeader>
                    <CardContent>
                      <Text variant="muted" className="mb-4">
                        Cards are composed of three optional sub-components:
                      </Text>
                      <ul className="space-y-2 ml-6">
                        <li className="flex items-start gap-2">
                          <Badge variant="info" className="mt-1">
                            1
                          </Badge>
                          <div>
                            <Text weight="bold">CardHeader</Text>
                            <Text size="sm" variant="muted">
                              Optional header with title and description
                            </Text>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <Badge variant="info" className="mt-1">
                            2
                          </Badge>
                          <div>
                            <Text weight="bold">CardContent</Text>
                            <Text size="sm" variant="muted">
                              Main content area with appropriate padding
                            </Text>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <Badge variant="info" className="mt-1">
                            3
                          </Badge>
                          <div>
                            <Text weight="bold">CardFooter</Text>
                            <Text size="sm" variant="muted">
                              Optional footer for actions or metadata
                            </Text>
                          </div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Avatars */}
              <section id="avatars" className="scroll-mt-24">
                <div className="space-y-6">
                  <div>
                    <Heading level="h2" className="mb-2">
                      Avatars
                    </Heading>
                    <Text variant="muted">
                      User profile images with fallback initials in multiple sizes.
                    </Text>
                  </div>

                  <Card>
                    <CardHeader>
                      <Heading level="h4">Avatar Sizes</Heading>
                      <Text variant="muted" size="sm">
                        Four size variants from small to extra large
                      </Text>
                    </CardHeader>
                    <CardContent>
                      <div className="flex gap-6 items-center flex-wrap">
                        <div className="text-center">
                          <Avatar size="sm">
                            <AvatarFallback>SM</AvatarFallback>
                          </Avatar>
                          <Text size="xs" variant="muted" className="mt-2">
                            Small
                          </Text>
                        </div>
                        <div className="text-center">
                          <Avatar size="md">
                            <AvatarFallback>MD</AvatarFallback>
                          </Avatar>
                          <Text size="xs" variant="muted" className="mt-2">
                            Medium
                          </Text>
                        </div>
                        <div className="text-center">
                          <Avatar size="lg">
                            <AvatarFallback>LG</AvatarFallback>
                          </Avatar>
                          <Text size="xs" variant="muted" className="mt-2">
                            Large
                          </Text>
                        </div>
                        <div className="text-center">
                          <Avatar size="xl">
                            <AvatarFallback>XL</AvatarFallback>
                          </Avatar>
                          <Text size="xs" variant="muted" className="mt-2">
                            Extra Large
                          </Text>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Heading level="h4">Usage Examples</Heading>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <Avatar size="md">
                            <AvatarFallback>JD</AvatarFallback>
                          </Avatar>
                          <div>
                            <Text weight="bold">John Doe</Text>
                            <Text size="sm" variant="muted">
                              Frontend Developer
                            </Text>
                          </div>
                        </div>
                        <Divider />
                        <div className="flex items-center gap-3">
                          <Avatar size="md">
                            <AvatarFallback>SA</AvatarFallback>
                          </Avatar>
                          <div>
                            <Text weight="bold">Sarah Anderson</Text>
                            <Text size="sm" variant="muted">
                              UX Designer
                            </Text>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Modal */}
              <section id="modal" className="scroll-mt-24">
                <div className="space-y-6">
                  <div>
                    <Heading level="h2" className="mb-2">
                      Modal
                    </Heading>
                    <Text variant="muted">
                      Dialog overlays for displaying content that requires user
                      attention or interaction.
                    </Text>
                  </div>

                  <Card>
                    <CardHeader>
                      <Heading level="h4">Modal Example</Heading>
                      <Text variant="muted" size="sm">
                        Click the button to see the modal in action
                      </Text>
                    </CardHeader>
                    <CardContent>
                      <Button onClick={() => setIsModalOpen(true)}>
                        Open Modal
                      </Button>

                      <Modal isOpen={isModalOpen}>
                        <ModalHeader>
                          <ModalTitle>Example Modal</ModalTitle>
                          <ModalDescription>
                            This is a modal dialog that can display important
                            information or forms that require user attention.
                          </ModalDescription>
                        </ModalHeader>

                        <div className="py-4">
                          <Text className="mb-4">
                            Modals are useful for:
                          </Text>
                          <ul className="space-y-2 ml-6">
                            <li className="flex items-start gap-2">
                              <Text className="text-[#6edc6b]">✓</Text>
                              <Text size="sm">
                                Confirming destructive actions
                              </Text>
                            </li>
                            <li className="flex items-start gap-2">
                              <Text className="text-[#6edc6b]">✓</Text>
                              <Text size="sm">Collecting focused input</Text>
                            </li>
                            <li className="flex items-start gap-2">
                              <Text className="text-[#6edc6b]">✓</Text>
                              <Text size="sm">
                                Displaying important notifications
                              </Text>
                            </li>
                            <li className="flex items-start gap-2">
                              <Text className="text-[#6edc6b]">✓</Text>
                              <Text size="sm">
                                Breaking complex workflows into steps
                              </Text>
                            </li>
                          </ul>
                        </div>

                        <ModalFooter>
                          <Button
                            variant="outline"
                            onClick={() => setIsModalOpen(false)}
                          >
                            Cancel
                          </Button>
                          <Button
                            variant="primary"
                            onClick={() => setIsModalOpen(false)}
                          >
                            Confirm
                          </Button>
                        </ModalFooter>
                      </Modal>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Heading level="h4">Modal Composition</Heading>
                    </CardHeader>
                    <CardContent>
                      <Text variant="muted" className="mb-4">
                        Modals are composed of three main sub-components:
                      </Text>
                      <ul className="space-y-2 ml-6">
                        <li className="flex items-start gap-2">
                          <Badge variant="info" className="mt-1">
                            1
                          </Badge>
                          <div>
                            <Text weight="bold">ModalHeader</Text>
                            <Text size="sm" variant="muted">
                              Contains ModalTitle and optional ModalDescription
                            </Text>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <Badge variant="info" className="mt-1">
                            2
                          </Badge>
                          <div>
                            <Text weight="bold">Modal Content</Text>
                            <Text size="sm" variant="muted">
                              Main content area (not a specific component)
                            </Text>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <Badge variant="info" className="mt-1">
                            3
                          </Badge>
                          <div>
                            <Text weight="bold">ModalFooter</Text>
                            <Text size="sm" variant="muted">
                              Action buttons aligned to the right
                            </Text>
                          </div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Spinners */}
              <section id="spinners" className="scroll-mt-24">
                <div className="space-y-6">
                  <div>
                    <Heading level="h2" className="mb-2">
                      Spinners
                    </Heading>
                    <Text variant="muted">
                      Loading indicators with multiple sizes and color variants.
                    </Text>
                  </div>

                  <Card>
                    <CardHeader>
                      <Heading level="h4">Spinner Sizes</Heading>
                      <Text variant="muted" size="sm">
                        Four size options for different contexts
                      </Text>
                    </CardHeader>
                    <CardContent>
                      <div className="flex gap-8 items-center flex-wrap">
                        <div className="text-center">
                          <Spinner size="sm" variant="primary" />
                          <Text size="xs" variant="muted" className="mt-2">
                            Small
                          </Text>
                        </div>
                        <div className="text-center">
                          <Spinner size="md" variant="secondary" />
                          <Text size="xs" variant="muted" className="mt-2">
                            Medium
                          </Text>
                        </div>
                        <div className="text-center">
                          <Spinner size="lg" variant="success" />
                          <Text size="xs" variant="muted" className="mt-2">
                            Large
                          </Text>
                        </div>
                        <div className="text-center">
                          <Spinner size="xl" variant="error" />
                          <Text size="xs" variant="muted" className="mt-2">
                            Extra Large
                          </Text>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Heading level="h4">Color Variants</Heading>
                    </CardHeader>
                    <CardContent>
                      <div className="flex gap-6 items-center flex-wrap">
                        <div className="text-center">
                          <Spinner size="lg" variant="primary" />
                          <Text size="xs" variant="muted" className="mt-2">
                            Primary
                          </Text>
                        </div>
                        <div className="text-center">
                          <Spinner size="lg" variant="secondary" />
                          <Text size="xs" variant="muted" className="mt-2">
                            Secondary
                          </Text>
                        </div>
                        <div className="text-center">
                          <Spinner size="lg" variant="success" />
                          <Text size="xs" variant="muted" className="mt-2">
                            Success
                          </Text>
                        </div>
                        <div className="text-center">
                          <Spinner size="lg" variant="error" />
                          <Text size="xs" variant="muted" className="mt-2">
                            Error
                          </Text>
                        </div>
                        <div className="text-center bg-[#4a90e2] rounded p-4">
                          <Spinner size="lg" variant="white" />
                          <Text size="xs" className="mt-2 text-white">
                            White
                          </Text>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Menu */}
              <section id="menu" className="scroll-mt-24">
                <div className="space-y-6">
                  <div>
                    <Heading level="h2" className="mb-2">
                      Menu
                    </Heading>
                    <Text variant="muted">
                      Navigation menus with separators and disabled states for
                      dropdown and sidebar navigation.
                    </Text>
                  </div>

                  <Grid cols={2} gap="md">
                    <Card>
                      <CardHeader>
                        <Heading level="h4">Basic Menu</Heading>
                      </CardHeader>
                      <CardContent>
                        <Menu>
                          <MenuItem>Profile Settings</MenuItem>
                          <MenuItem>Account</MenuItem>
                          <MenuSeparator />
                          <MenuItem>Help</MenuItem>
                          <MenuItem>Documentation</MenuItem>
                          <MenuSeparator />
                          <MenuItem disabled>Disabled Item</MenuItem>
                          <MenuItem>Logout</MenuItem>
                        </Menu>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <Heading level="h4">Menu Features</Heading>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 ml-6">
                          <li className="flex items-start gap-2">
                            <Text className="text-[#6edc6b]">✓</Text>
                            <Text size="sm">Hover states for interactivity</Text>
                          </li>
                          <li className="flex items-start gap-2">
                            <Text className="text-[#6edc6b]">✓</Text>
                            <Text size="sm">Separators for grouping</Text>
                          </li>
                          <li className="flex items-start gap-2">
                            <Text className="text-[#6edc6b]">✓</Text>
                            <Text size="sm">Disabled state support</Text>
                          </li>
                          <li className="flex items-start gap-2">
                            <Text className="text-[#6edc6b]">✓</Text>
                            <Text size="sm">Keyboard navigation ready</Text>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </Grid>
                </div>
              </section>

              {/* Grid System */}
              <section id="grid" className="scroll-mt-24">
                <div className="space-y-6">
                  <div>
                    <Heading level="h2" className="mb-2">
                      Grid System
                    </Heading>
                    <Text variant="muted">
                      Flexible grid layout system with responsive column spans and
                      customizable gaps.
                    </Text>
                  </div>

                  <Card>
                    <CardHeader>
                      <Heading level="h4">2 Column Grid</Heading>
                    </CardHeader>
                    <CardContent>
                      <Grid cols={2} gap="md">
                        <div className="bg-[#4a90e2] text-white p-6 rounded-lg text-center">
                          <Text className="text-white">Column 1</Text>
                        </div>
                        <div className="bg-[#3bb0f3] text-white p-6 rounded-lg text-center">
                          <Text className="text-white">Column 2</Text>
                        </div>
                      </Grid>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Heading level="h4">3 Column Grid</Heading>
                    </CardHeader>
                    <CardContent>
                      <Grid cols={3} gap="lg">
                        <div className="bg-[#6edc6b] text-[#2c3e50] p-6 rounded-lg text-center">
                          <Text>Column 1</Text>
                        </div>
                        <div className="bg-[#35c6b0] text-white p-6 rounded-lg text-center">
                          <Text className="text-white">Column 2</Text>
                        </div>
                        <div className="bg-[#ffb547] text-[#2c3e50] p-6 rounded-lg text-center">
                          <Text>Column 3</Text>
                        </div>
                      </Grid>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Heading level="h4">Responsive Column Spans</Heading>
                      <Text variant="muted" size="sm">
                        Using the Col component for custom responsive layouts
                      </Text>
                    </CardHeader>
                    <CardContent>
                      <Grid cols={12} gap="md">
                        <Col span={12} spanMd={8} spanLg={9}>
                          <div className="bg-[#4a90e2] text-white p-6 rounded-lg">
                            <Text className="text-white">
                              Main Content (9 cols on lg, 8 on md, 12 on sm)
                            </Text>
                          </div>
                        </Col>
                        <Col span={12} spanMd={4} spanLg={3}>
                          <div className="bg-[#a1aab8] text-white p-6 rounded-lg">
                            <Text className="text-white">
                              Sidebar (3 cols on lg, 4 on md, 12 on sm)
                            </Text>
                          </div>
                        </Col>
                      </Grid>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Heading level="h4">Gap Options</Heading>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div>
                          <Text size="sm" variant="muted" className="mb-2">
                            Small Gap
                          </Text>
                          <Grid cols={4} gap="sm">
                            <div className="bg-[#f4f5f7] p-3 rounded text-center">
                              <Text size="sm">1</Text>
                            </div>
                            <div className="bg-[#f4f5f7] p-3 rounded text-center">
                              <Text size="sm">2</Text>
                            </div>
                            <div className="bg-[#f4f5f7] p-3 rounded text-center">
                              <Text size="sm">3</Text>
                            </div>
                            <div className="bg-[#f4f5f7] p-3 rounded text-center">
                              <Text size="sm">4</Text>
                            </div>
                          </Grid>
                        </div>
                        <div>
                          <Text size="sm" variant="muted" className="mb-2">
                            Medium Gap
                          </Text>
                          <Grid cols={4} gap="md">
                            <div className="bg-[#f4f5f7] p-3 rounded text-center">
                              <Text size="sm">1</Text>
                            </div>
                            <div className="bg-[#f4f5f7] p-3 rounded text-center">
                              <Text size="sm">2</Text>
                            </div>
                            <div className="bg-[#f4f5f7] p-3 rounded text-center">
                              <Text size="sm">3</Text>
                            </div>
                            <div className="bg-[#f4f5f7] p-3 rounded text-center">
                              <Text size="sm">4</Text>
                            </div>
                          </Grid>
                        </div>
                        <div>
                          <Text size="sm" variant="muted" className="mb-2">
                            Large Gap
                          </Text>
                          <Grid cols={4} gap="lg">
                            <div className="bg-[#f4f5f7] p-3 rounded text-center">
                              <Text size="sm">1</Text>
                            </div>
                            <div className="bg-[#f4f5f7] p-3 rounded text-center">
                              <Text size="sm">2</Text>
                            </div>
                            <div className="bg-[#f4f5f7] p-3 rounded text-center">
                              <Text size="sm">3</Text>
                            </div>
                            <div className="bg-[#f4f5f7] p-3 rounded text-center">
                              <Text size="sm">4</Text>
                            </div>
                          </Grid>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Dividers */}
              <section id="dividers" className="scroll-mt-24">
                <div className="space-y-6">
                  <div>
                    <Heading level="h2" className="mb-2">
                      Dividers
                    </Heading>
                    <Text variant="muted">
                      Horizontal and vertical separators for organizing content
                      sections.
                    </Text>
                  </div>

                  <Card>
                    <CardHeader>
                      <Heading level="h4">Horizontal Divider</Heading>
                    </CardHeader>
                    <CardContent>
                      <Text>Content before divider</Text>
                      <Divider orientation="horizontal" className="my-4" />
                      <Text>Content after divider</Text>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Heading level="h4">Vertical Divider</Heading>
                    </CardHeader>
                    <CardContent>
                      <div className="flex gap-4 items-center h-20">
                        <Text>Left Content</Text>
                        <Divider orientation="vertical" />
                        <Text>Middle Content</Text>
                        <Divider orientation="vertical" />
                        <Text>Right Content</Text>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Footer */}
              <section className="text-center py-12 space-y-4">
                <Divider />
                <div className="pt-8">
                  <Badge variant="skill" className="mb-4">
                    Design System
                  </Badge>
                  <Heading level="h3" className="mb-2">
                    Built with Merifly Design System
                  </Heading>
                  <Text variant="muted">
                    Powered by React, TypeScript, Tailwind CSS, and Class
                    Variance Authority
                  </Text>
                  <Text variant="muted" size="sm" className="mt-2">
                    Components built to showcase real skills and talent
                  </Text>
                  <div className="flex gap-2 justify-center mt-6 flex-wrap">
                    <Badge variant="skill">React</Badge>
                    <Badge variant="skill">TypeScript</Badge>
                    <Badge variant="skill">Tailwind CSS</Badge>
                    <Badge variant="skill">CVA</Badge>
                    <Badge variant="skill">Next.js</Badge>
                  </div>
                </div>
              </section>
            </div>
          </main>
        </div>
      </Container>
    </div>
  );
}
