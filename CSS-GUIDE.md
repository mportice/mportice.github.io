# CSS Documentation Guide

This document explains what everything in `styles.css` does and how to customize it.

## Table of Contents
1. [CSS Variables (Colors & Theme)](#css-variables)
2. [Navigation](#navigation)
3. [Page Layout](#page-layout)
4. [Homepage Hero Section](#homepage-hero)
5. [Buttons](#buttons)
6. [Projects](#projects)
7. [Blog](#blog)
8. [Contact](#contact)
9. [Responsive Design](#responsive)

---

## CSS Variables (Colors & Theme)

**Location:** Top of the file

```css
:root {
    --bg-primary: #fafafa;      /* Main page background */
    --bg-secondary: #ffffff;    /* Card backgrounds */
    --bg-hover: #fff5ee;        /* Hover states */
    --text-primary: #1a1a1a;    /* Main text color */
    --text-secondary: #666666;  /* Secondary text/descriptions */
    --accent: #ff7f27;          /* Orange brand color */
    --accent-dark: #e66b1a;     /* Darker orange for hovers */
    --accent-light: #ffb380;    /* Lighter orange */
    --border: #e8e8e8;          /* Border color for cards */
    --shadow: rgba(255, 127, 39, 0.2); /* Shadow color */
}
```

**How to change:**
- Want different colors? Just edit these values!
- Example: Change `--accent: #ff7f27;` to `--accent: #0066cc;` for blue
- All orange elements will automatically update

---

## Navigation

**What it controls:** Top nav bar with logo, brand name, and links

**Key sections:**
- `nav` - The main navigation bar (fixed at top)
- `.logo` - Your logo image
- `.brand-name` - "Lines and Layers" text with orange accent line
- `.nav-links` - The menu items (Home, Projects, Blog, Contact)

**Special features:**
- Nav bar is **thinner on project/blog detail pages** (`1rem` vs `1.5rem`)
- Brand name **hides on mobile** to save space
- Logo serves as favicon in browser tabs

**Customization:**
```css
/* Make nav bar even thinner */
nav {
    padding: 0.75rem 4rem; /* Reduce first value */
}

/* Change brand name color */
.brand-name {
    color: var(--accent); /* Use your accent color */
}
```

---

## Page Layout

**What it controls:** Overall page structure and spacing

**Key sections:**
- `body` - Sets font family and background
- `.page-content` - Main content area (below nav)
- Padding: `7rem` top (gives space for fixed nav)

**Why it matters:**
- Top padding must be larger than nav height
- Otherwise content gets hidden under the nav bar

---

## Homepage Hero Section

**What it controls:** The big landing section on homepage

**Structure:**
```
.hero
  ├── .hero-content (2-column grid on desktop)
      ├── .hero-text (left side)
      │   ├── h1 (title with "Design" in orange)
      │   ├── p (description)
      │   └── .cta-buttons (3 buttons)
      └── .hero-visual (right side)
          └── .hero-logo (your logo)
```

**Key features:**
- Responsive: 2 columns on desktop → 1 column on mobile
- `.accent-text` makes "Design" orange
- Logo scales to fit its container

**Customization:**
```css
/* Make hero section bigger */
.hero {
    padding: 6rem 0; /* Increase from 4rem */
}

/* Change title size */
.hero-text h1 {
    font-size: clamp(3rem, 7vw, 6rem); /* Make larger */
}
```

---

## Buttons

**What it controls:** All clickable buttons

**Types:**
1. `.btn-primary` - Orange filled buttons
2. `.btn-secondary` - Orange outline buttons

**Features:**
- Hover effects (lift up + shadow)
- Full width on mobile
- Smooth transitions

**Customization:**
```css
/* Rounder buttons */
.btn {
    border-radius: 8px;
}

/* Different hover effect */
.btn-primary:hover {
    transform: scale(1.05); /* Grow instead of lift */
}
```

---

## Projects

**Structure:**
```
.projects-container
  ├── .section-header (title + description)
  └── .projects-grid
      └── .project-card (each project)
          ├── .project-image (placeholder/image area)
          └── .project-info (title + description)
```

**Features:**
- Responsive grid (auto-adjusts columns)
- Cards lift on hover
- Orange border on hover

**Detail pages:**
- `.project-detail` - Container for full project page
- `.project-meta` - Year, Role, Tech info
- `.project-content` - Main article area
  - Images are **centered automatically**
  - Links are styled (orange + underline on hover)

**Customization:**
```css
/* More/fewer columns */
.projects-grid {
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    /* Change 350px to 400px for wider cards = fewer columns */
}

/* Change card hover effect */
.project-card:hover {
    transform: scale(1.02); /* Grow instead of lift */
}
```

---

## Blog

**Structure:**
```
.blog-container
  ├── .section-header
  └── .blog-grid
      └── .blog-post (each post)
          ├── .blog-date (orange date)
          ├── h3 (title)
          └── p (excerpt)
```

**Features:**
- Single column layout (full width posts)
- Date in orange using JetBrains Mono font
- Hover effects (lift + shadow + orange border)

**Detail pages:**
- `.blog-detail` - Container for full blog post
- `.blog-detail-content` - Article text
  - Images are **centered automatically**
  - Links are styled

**Customization:**
```css
/* Multi-column blog layout */
.blog-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
}

/* Change date color */
.blog-date {
    color: var(--text-primary); /* Black instead of orange */
}
```

---

## Contact

**Structure:**
```
.contact-container
  ├── .contact-header
  ├── .contact-grid (4 cards)
  │   └── .contact-card (Email, LinkedIn, GitHub, Twitter)
  │       ├── .contact-icon (SVG icon)
  │       ├── h3 (platform name)
  │       └── p (description)
  └── .contact-note (bottom message)
```

**Features:**
- Auto-adjusting grid (4 columns → 2 → 1)
- Icons in orange
- Cards lift on hover

**Customization:**
```css
/* Always 2 columns */
.contact-grid {
    grid-template-columns: 1fr 1fr;
}

/* Change icon color */
.contact-icon {
    color: var(--text-primary); /* Black instead of orange */
}
```

---

## Responsive Design

**Breakpoints:**
1. **Desktop:** Default (1024px+)
2. **Tablet:** `@media (max-width: 1024px)`
3. **Mobile:** `@media (max-width: 768px)`

**What changes:**

### Tablet (1024px)
- Nav padding: `1.25rem`
- Content padding: `5.5rem`
- Hero: Single column
- Projects: Narrower grid

### Mobile (768px)
- Nav padding: `1rem`
- Brand name: **Hidden**
- Content padding: `5rem`
- All grids: Single column
- Buttons: Full width
- Nav links: Smaller font

**Customization:**
```css
/* Add new breakpoint for larger tablets */
@media (max-width: 1200px) {
    /* Your custom styles */
}

/* Change mobile breakpoint */
@media (max-width: 600px) {
    /* Applies to smaller phones */
}
```

---

## Common Customizations

### Change Brand Color
```css
:root {
    --accent: #yourcolor;
    --accent-dark: #darkerversionofyourcolor;
}
```

### Change Fonts
Replace in HTML `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont&display=swap">
```

Then in CSS:
```css
body {
    font-family: 'YourFont', sans-serif;
}
```

### Adjust Spacing
```css
/* More space between sections */
.section-header {
    margin-bottom: 6rem; /* Increase from 4rem */
}

/* Tighter card grid */
.projects-grid {
    gap: 1.5rem; /* Decrease from 2rem */
}
```

### Change Animations
```css
/* Faster transitions */
.project-card {
    transition: all 0.2s ease; /* Decrease from 0.4s */
}

/* Remove hover lift effect */
.project-card:hover {
    transform: none; /* Remove translateY */
}
```

---

## Tips

1. **Always test changes on multiple screen sizes**
2. **Use browser DevTools** to preview before editing files
3. **Keep color variables consistent** - don't hardcode colors
4. **Back up before major changes**
5. **Comments are your friend** - add notes for future you!

---

## Need Help?

- **Color picker:** Use a browser extension or online tool
- **Font pairing:** Google Fonts has suggestions
- **Inspiration:** Look at other portfolios you like
- **Testing:** Use Chrome DevTools (F12) to experiment

Remember: Start small! Make one change at a time and test it.