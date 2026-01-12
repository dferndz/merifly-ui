import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["components/ui/index.ts"],
  format: ["cjs", "esm"],
  dts: {
    compilerOptions: {
      incremental: false,
    },
  },
  tsconfig: "tsconfig.build.json",
  splitting: false,
  sourcemap: true,
  clean: true,
  external: [
    "react",
    "react-dom",
    "@radix-ui/react-accordion",
    "@radix-ui/react-avatar",
    "@radix-ui/react-checkbox",
    "@radix-ui/react-dialog",
    "@radix-ui/react-dropdown-menu",
    "@radix-ui/react-label",
    "@radix-ui/react-popover",
    "@radix-ui/react-progress",
    "@radix-ui/react-radio-group",
    "@radix-ui/react-scroll-area",
    "@radix-ui/react-select",
    "@radix-ui/react-separator",
    "@radix-ui/react-slider",
    "@radix-ui/react-slot",
    "@radix-ui/react-switch",
    "@radix-ui/react-tabs",
    "@radix-ui/react-tooltip",
  ],
  treeshake: true,
  minify: false,
  onSuccess: async () => {
    const fs = await import("fs/promises");
    const path = await import("path");

    // Generate CSS variables file for consumers
    const cssContent = `/* Merifly UI Component Library Styles */
/* Import this file in your application along with Tailwind CSS */

@layer base {
  :root {
    /* Base colors */
    --background: #ffffff;
    --foreground: #0f172a;

    /* Card & Popover */
    --card: #ffffff;
    --card-foreground: #0f172a;
    --popover: #ffffff;
    --popover-foreground: #0f172a;

    /* Primary - Merifly Blue */
    --primary: #2563eb;
    --primary-foreground: #ffffff;

    /* Secondary */
    --secondary: #f1f5f9;
    --secondary-foreground: #0f172a;

    /* Muted */
    --muted: #f1f5f9;
    --muted-foreground: #64748b;

    /* Accent */
    --accent: #f1f5f9;
    --accent-foreground: #0f172a;

    /* Destructive */
    --destructive: #ef4444;
    --destructive-foreground: #ffffff;

    /* Success - Merifly Green */
    --success: #22c55e;
    --success-foreground: #ffffff;

    /* Warning */
    --warning: #f59e0b;
    --warning-foreground: #ffffff;

    /* Info */
    --info: #3b82f6;
    --info-foreground: #ffffff;

    /* Border, Input, Ring */
    --border: #e2e8f0;
    --input: #e2e8f0;
    --ring: #2563eb;

    /* Radius */
    --radius: 0.5rem;

    /* Merifly Brand Colors */
    --merifly-blue: #2563eb;
    --merifly-blue-light: #3b82f6;
    --merifly-blue-dark: #1d4ed8;
    --merifly-green: #22c55e;
    --merifly-green-light: #4ade80;
    --merifly-teal: #14b8a6;
    --merifly-amber: #f59e0b;
  }

  .dark {
    --background: #0a0a0a;
    --foreground: #fafafa;

    --card: #0a0a0a;
    --card-foreground: #fafafa;
    --popover: #0a0a0a;
    --popover-foreground: #fafafa;

    --primary: #3b82f6;
    --primary-foreground: #ffffff;

    --secondary: #262626;
    --secondary-foreground: #fafafa;

    --muted: #262626;
    --muted-foreground: #a1a1aa;

    --accent: #262626;
    --accent-foreground: #fafafa;

    --destructive: #ef4444;
    --destructive-foreground: #ffffff;

    --success: #22c55e;
    --success-foreground: #ffffff;

    --warning: #f59e0b;
    --warning-foreground: #ffffff;

    --info: #3b82f6;
    --info-foreground: #ffffff;

    --border: #262626;
    --input: #262626;
    --ring: #3b82f6;
  }
}
`;

    await fs.writeFile(path.join("dist", "styles.css"), cssContent);
    console.log("CSS file generated successfully");
  },
});
