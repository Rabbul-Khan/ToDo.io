---
name: Premium Productivity
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#444748'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#0051d5'
  on-secondary: '#ffffff'
  secondary-container: '#316bf3'
  on-secondary-container: '#fefcff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1c1b1a'
  on-tertiary-container: '#868382'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#dbe1ff'
  secondary-fixed-dim: '#b4c5ff'
  on-secondary-fixed: '#00174b'
  on-secondary-fixed-variant: '#003ea8'
  tertiary-fixed: '#e6e2df'
  tertiary-fixed-dim: '#cac6c4'
  on-tertiary-fixed: '#1c1b1a'
  on-tertiary-fixed-variant: '#484645'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Geist
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  container-max: 1200px
  gutter: 20px
---

## Brand & Style

The design system is centered on a **Premium Minimalist** aesthetic, prioritizing clarity, efficiency, and quiet sophistication. Inspired by the utility of developer tools and the elegance of modern publishing platforms, it targets power users who value a distraction-free environment.

The emotional response should be one of **calm focus**. By utilizing heavy whitespace, a monochromatic base, and high-precision typography, the interface recedes to let the user's content (tasks and projects) take center stage. The style avoids trendy gimmicks in favor of timeless "SaaS-classic" elements: subtle borders, intentional layering, and a restrained use of color to signal intent.

## Colors

The palette is rooted in a **neutral-first** philosophy. The primary "color" is actually a deep charcoal (#171717), used for high-contrast actions and text. A vibrant "Electric Blue" serves as the functional accent for interactive states, focus rings, and primary highlights.

The background uses pure white to maximize the "breathability" of the layout, while varying shades of cool gray (Slate/Neutral scales) define container boundaries and secondary UI elements. Semantic colors for priority (High/Mid/Low) should be desaturated to maintain the professional tone, using thin colored strokes rather than heavy solid fills.

## Typography

This design system employs a multi-font strategy to balance character with utility. **Hanken Grotesk** is used for headlines to provide a modern, sharp personality. **Inter** handles the heavy lifting for task descriptions and body text due to its exceptional legibility at small sizes. **Geist** is reserved for labels, metadata, and monospaced-adjacent UI elements, providing a technical, precise feel.

Tighten letter-spacing on larger headlines to achieve the "Linear" look, and ensure sufficient line-height for body text to prevent visual fatigue during long sessions.

## Layout & Spacing

The layout follows a **Fixed-Fluid Hybrid** model. The sidebar remains at a fixed width (240px) to provide a stable anchor, while the main task area expands to fill the available space up to a maximum container width of 1200px to maintain line-length legibility.

A strict 4px/8px grid system governs all internal spacing. Generous internal padding (24px) within cards and containers is essential to differentiate this design from the original, denser layout. On mobile devices, margins shrink to 16px and the sidebar transitions to a hidden drawer or bottom navigation bar.

## Elevation & Depth

Hierarchy is established through **Tonal Layering** supplemented by extremely soft, large-radius shadows. Rather than using multiple shadow levels, the system uses "elevation by containment":
1.  **Level 0 (Background):** Pure White (#FFFFFF).
2.  **Level 1 (Cards/Sidebar):** Very subtle background tint (#F9F9F9) or a 1px border (#E5E5E5).
3.  **Level 2 (Popovers/Active Modals):** White background with a "floating" shadow: `0px 10px 30px rgba(0,0,0,0.04)`.

Avoid heavy blurs or colorful glows. Use 1px internal strokes (inner shadows) to give buttons a slightly tactile, "pressed-into-the-page" feel.

## Shapes

The design system adopts a **Soft** shape language. A standard radius of 6px to 8px (0.375rem to 0.5rem) is used for inputs and small buttons, while larger containers like the task board or main card use a more pronounced 12px (0.75rem) radius. This creates a bridge between the clinical sharp edges of a developer tool and the approachability of a consumer app.

## Components

### Buttons
- **Primary:** Solid charcoal (#171717) with white text. High-contrast, sharp corners (6px).
- **Secondary:** White background with a subtle 1px border (#E5E5E5). On hover, a light gray tint (#F5F5F5).
- **Ghost:** No background or border. Used for low-priority actions like "Cancel."

### Input Fields
Replace the heavy blue fills with a "Notion-style" minimalist approach. Use a transparent or very light gray background with a 1px border that only darkens on focus. Use **Geist** for placeholder text to maintain the technical aesthetic.

### Task Items (Lists)
Individual tasks should not be boxed in heavy containers. Instead, use thin horizontal dividers or simple whitespace. Interactive states (hover) should trigger a subtle background change (#F9F9F9) and reveal hidden actions (e.g., Edit/Delete).

### Chips & Tags
Use a "pill" shape (rounded-xl) with desaturated background tints and high-contrast text. For example, a "High Priority" tag should use a very pale red background with a deep red text color, rather than a solid bright red block.

### Sidebar
The sidebar should feel integrated. Use active-state indicators that are subtle—perhaps a small vertical 2px line next to the "Inbox" label rather than a solid block fill.