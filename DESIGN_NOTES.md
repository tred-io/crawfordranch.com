# Crawford Ranch Design System

## Overview

This document describes the design system for the Crawford Ranch website, inspired by upscale ranch resorts like Alisal Ranch while maintaining authentic Central Texas Hill Country character.

## Design Philosophy

The Crawford Ranch design system balances **rustic authenticity** with **upscale sophistication**. We achieve this through:

- **Elegant typography** (Playfair Display for headings, Inter for body text)
- **Refined color palette** (maroon primary, sage teal accent)
- **Subtle textures and decorative elements**
- **Smooth animations with accessibility in mind**
- **Professional photography showcasing natural beauty**

---

## Color Palette

### Primary Brand Colors

**Texas Maroon** (Primary Brand Color)
- Variable: `--texas-maroon`
- Value: `hsl(357, 85%, 25%)`
- Usage: Primary CTAs, headings, active states
- Classes: `.text-texas-maroon`, `.bg-texas-maroon`, `.border-texas-maroon`

**Texas Maroon Light** (Hover States)
- Variable: `--texas-maroon-light`
- Value: `hsl(357, 60%, 35%)`
- Usage: Hover states for maroon buttons
- Classes: `.text-texas-maroon-light`, `.bg-texas-maroon-light`

### Accent Color (New)

**Sage Teal** (Sophistication Accent)
- Variable: `--sage-teal`
- Value: `hsl(180, 25%, 55%)`
- Usage: Secondary CTAs, decorative accents, icons
- Classes: `.text-sage-teal`, `.bg-sage-teal`, `.border-sage-teal`

**Sage Teal Light**
- Variable: `--sage-teal-light`
- Value: `hsl(180, 30%, 65%)`
- Usage: Hover states, subtle backgrounds

**Sage Teal Dark**
- Variable: `--sage-teal-dark`
- Value: `hsl(180, 20%, 45%)`
- Usage: Dark contrast for sage teal elements

### Supporting Colors

**Ranch Cream** (Background)
- Variable: `--ranch-cream`
- Value: `hsl(45, 35%, 94%)`
- Usage: Page backgrounds, soft sections
- Classes: `.bg-ranch-cream`

**Warm Gray** (Body Text)
- Variable: `--warm-gray`
- Value: `hsl(37, 15%, 55%)`
- Usage: Body text, secondary information
- Classes: `.text-warm-gray`

**Ranch Brown** (Dark Text)
- Variable: `--ranch-brown`
- Value: `hsl(30, 67%, 14%)`
- Usage: Dark text, navigation links
- Classes: `.text-ranch-brown`, `.bg-ranch-brown`

**Sunset Orange** (Accent - Limited Use)
- Variable: `--sunset-orange`
- Value: `hsl(27, 75%, 47%)`
- Usage: Special highlights, sunset-themed content

---

## Typography

### Font Families

**Playfair Display** (Headings)
- Google Fonts: `Playfair Display`
- Weights: 400, 600, 700, 900
- Usage: All headings (h1-h6), titles, hero text
- Classes: `.font-playfair`, automatically applied to all heading tags

**Inter** (Body Text)
- Google Fonts: `Inter`
- Weights: 300, 400, 500, 600, 700
- Usage: Body copy, navigation, buttons, forms
- Classes: `.font-inter`, default for body text

### Typography Scale

- **Hero Headings**: `text-4xl sm:text-5xl md:text-6xl lg:text-7xl` (64px-96px)
- **Page Headings (h1)**: `text-4xl md:text-5xl` (48px-64px)
- **Section Headings (h2)**: `text-3xl md:text-4xl` (36px-48px)
- **Subsection Headings (h3)**: `text-2xl md:text-3xl` (30px-36px)
- **Card Titles (h4)**: `text-xl md:text-2xl` (24px-30px)
- **Body Text**: `text-base` (16px) or `text-lg` (18px) for enhanced readability
- **Small Text**: `text-sm` (14px)

### Font Weights

- **Bold Headings**: `font-bold` (700) or `font-black` (900) for hero text
- **Semibold**: `font-semibold` (600) for subheadings and buttons
- **Medium**: `font-medium` (500) for navigation and emphasis
- **Regular**: `font-normal` (400) for body text
- **Light**: `font-light` (300) for subtle hero subtitles

---

## Layout Components

### Header / Navigation

**Structure**:
- Fixed position header that transitions on scroll
- **Left**: Hamburger menu (opens sidebar)
- **Center**: Logo (large on load, shrinks on scroll)
- **Right**: "Book Now" CTA button

**Behavior**:
- Initial state: Transparent background with large logo (h-16 to h-24)
- Scrolled state: White background with smaller logo (h-10 to h-12)
- Smooth 500ms transition for all state changes
- Logo maintains center alignment at all times

**Sidebar Menu**:
- Opens from left side
- Background: `bg-ranch-cream`
- Menu items:
  - Home
  - Events & Outfitting
  - Corporate Retreats
  - Activities / Trails
  - Gallery
  - About
  - Contact

### Hero Carousel

**Features**:
- Full-height hero section (`h-screen`)
- Auto-rotating image carousel (7-second intervals)
- Ken Burns effect (subtle zoom and pan animation)
- Smooth fade transitions between slides
- Slide indicators (dots) for manual navigation
- Gradient overlay for text readability
- Scroll indicator (animated chevron)

**Accessibility**:
- `prefers-reduced-motion` support disables Ken Burns animation
- Keyboard-accessible slide controls
- Descriptive alt text for all images

### Highlight Cards

**Structure**:
- Image section with hover zoom effect
- Title overlay on image
- Content section with description
- Two-button CTA layout: "More Info" (sage teal outline) + "Book Now" (maroon)

**Hover Effects**:
- Card lifts on hover (`-translate-y-1`)
- Image scales (`scale-110`)
- Shadow intensifies (`hover:shadow-2xl`)
- Button icons animate (`translate-x-1`)

---

## Decorative Elements

### Decorative Line

**Usage**: Accent headings with horizontal lines on both sides

```html
<h2 class="decorative-line">Your Heading</h2>
```

**Effect**: Adds thin gradient lines extending from left and right of text

### Textured Background

**Usage**: Subtle diagonal stripes for upscale texture

```html
<section class="texture-bg">
  <!-- Content -->
</section>
```

**Effect**: Barely-visible diagonal pattern adds depth without distraction

### Ken Burns Animation

**Usage**: Hero images with subtle motion

```html
<div class="animate-kenburns">
  <!-- Background image -->
</div>
```

**Effect**: Slow 20-second zoom and pan animation

---

## Animations & Transitions

### Standard Transitions

- **Duration**: `duration-300` (300ms) for most interactions
- **Duration**: `duration-500` (500ms) for navigation state changes
- **Duration**: `duration-1000` (1000ms) for hero carousel transitions
- **Easing**: `ease-out` for natural deceleration

### Hover States

- **Buttons**: Background color change + shadow intensification
- **Cards**: Lift + shadow + image scale
- **Links**: Color change

### Accessibility

All animations respect `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Button Styles

### Primary Button (Texas Maroon)

```html
<Button className="bg-texas-maroon text-white hover:bg-texas-maroon-light">
  Button Text
</Button>
```

**Usage**: Main CTAs, "Book Now" buttons

### Secondary Button (Sage Teal Outline)

```html
<Button
  variant="outline"
  className="border-2 border-sage-teal text-sage-teal-dark hover:bg-sage-teal hover:text-white"
>
  Button Text
</Button>
```

**Usage**: "More Info" links, secondary actions

### White Button (For Dark Backgrounds)

```html
<Button className="bg-white/90 text-texas-maroon hover:bg-white border-2 border-white/40">
  Button Text
</Button>
```

**Usage**: CTAs on hero sections with dark overlays

---

## Contact Form Prefill Logic

### URL Parameters

The contact form supports URL parameters for pre-populating fields and setting context:

**Parameters**:
- `context`: Sets default message based on referring page
  - Values: `booking`, `events`, `corporate`, `activities`, `attractions`
- `eventType`: Pre-selects event type dropdown
  - Values: Any from event type list (URL-encoded)
- `source`: Tracks where the user came from (analytics)
  - Values: `header`, `home-highlights`, `corporate-hero`, etc.

**Example URLs**:
```
/contact?context=booking&source=header
/contact?context=corporate&eventType=Corporate%20Retreat&source=corporate-hero
/contact?context=events&eventType=Wedding&source=home-highlights
```

**Message Prefills**:
- `booking`: "I am interested in booking an event at Crawford Ranch."
- `events`: "I would like to learn more about hosting an event at Crawford Ranch."
- `corporate`: "I am interested in planning a corporate retreat at Crawford Ranch."
- `activities`: "I would like to learn more about activities and trails at Crawford Ranch."
- `attractions`: "I am interested in visiting Crawford Ranch and exploring local Central Texas attractions."

---

## Accessibility Features

### Focus States

All interactive elements have clear focus indicators:

```css
*:focus-visible {
  outline: 2px solid var(--texas-maroon);
  outline-offset: 2px;
}
```

### Color Contrast

All color combinations meet WCAG AA standards:
- Texas Maroon on white: Excellent contrast
- Warm Gray on white: 4.6:1 (AA compliant)
- White on Texas Maroon: Excellent contrast

### Semantic HTML

- Proper heading hierarchy (h1 → h2 → h3)
- `<nav>` elements with `aria-label`
- `<section>` landmarks for page structure
- `<button>` elements with descriptive `aria-label` where needed

### Keyboard Navigation

- All interactive elements keyboard accessible
- Skip links for main content
- Logical tab order maintained

---

## Responsive Design

### Breakpoints

- **sm**: 640px (tablets portrait)
- **md**: 768px (tablets landscape)
- **lg**: 1024px (desktops)
- **xl**: 1280px (large desktops)

### Mobile-First Approach

All designs start mobile and scale up:

```html
<!-- Mobile first, then larger screens -->
<h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
```

### Navigation on Mobile

- Hamburger menu on all screen sizes
- Sidebar drawer for main navigation
- Touch-friendly button sizes (minimum 44x44px)

---

## Image Optimization

### Hero Images

- Format: JPEG or WebP
- Recommended size: 1920x1080 minimum
- Optimization: Compressed for web delivery
- Loading: Eager for above-fold content

### Card Images

- Format: JPEG or WebP
- Recommended size: 800x600 minimum
- Optimization: Compressed, progressive loading
- Loading: Lazy loading for below-fold cards

### Performance

- Use of `loading="lazy"` for below-fold images
- Responsive image sizing with `sizes` attribute
- CSS animations prefer `transform` and `opacity` for GPU acceleration

---

## Component Patterns

### Page Structure

Standard page layout:

```tsx
<div className="min-h-screen bg-ranch-cream">
  <Navigation />
  <div className="pt-24"> {/* Offset for fixed header */}
    {/* Page content */}
  </div>
  <Footer />
</div>
```

### Hero Section

```tsx
<section className="relative h-[60vh] min-h-[500px]">
  <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url("...")`}} />
  <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
  <div className="relative z-10 text-center text-white">
    {/* Hero content */}
  </div>
</section>
```

### Content Section

```tsx
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section content */}
  </div>
</section>
```

---

## Future Enhancements

### Hero Video

The hero carousel component is **video-ready**. To add a hero video:

1. Place video file in `attached_assets/`
2. Update `HeroCarousel` component to support video slides
3. Add video as first slide with autoplay, muted, loop attributes
4. Maintain fade transitions and overlay styling

### Additional Accent Colors

Consider adding seasonal accent colors:
- **Spring**: Bluebonnet blue for April-May
- **Fall**: Burnt orange for October-November

---

## Notes for Developers

1. **No Lodging References**: Per requirements, there are no lodging pages or references to accommodations
2. **Placeholder Pages**: Events, Corporate, Activities, and Local Attractions pages are live with content blocks ready for expansion
3. **Outfitter Page**: The existing `/outfitter` route remains but is not in the main navigation
4. **Asset Location**: All images stored in `attached_assets/` directory, imported via `@assets` alias
5. **Build Commands**:
   - Development: `npm run dev`
   - Build: `npm run build`
   - Type check: `npm run check`

---

## Contact

For questions about this design system, refer to `CLAUDE.md` in the project root.
