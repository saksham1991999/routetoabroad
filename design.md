# RouteToAbroad.com — Complete Design Specification

## Table of Contents

1. [Brand Foundation](#1-brand-foundation)
2. [Design System](#2-design-system)
3. [Global Components](#3-global-components)
4. [Page: Homepage](#4-page-homepage)
5. [Page: Education](#5-page-education)
6. [Page: Tourism](#6-page-tourism)
7. [Page: Trade](#7-page-trade)
8. [Page: About Us + Team](#8-page-about-us--team)
9. [Page: Blog/Resources Listing](#9-page-blogresources-listing)
10. [Page: Blog Post Detail](#10-page-blog-post-detail)
11. [Page: Testimonials/Success Stories](#11-page-testimonialssuccess-stories)
12. [Page: Contact](#12-page-contact)
13. [AI Chatbot Specification](#13-ai-chatbot-specification)
14. [Animation System](#14-animation-system)
15. [Technical Architecture](#15-technical-architecture)
16. [Anti-Slop Guidelines](#16-anti-slop-guidelines)

---

## 1. Brand Foundation

### 1.1 Brand Positioning

RouteToAbroad is a premium consultancy that serves as a bridge between India and East Asia (China focus). It is NOT a mass-market lead-gen funnel. The website must communicate: established expertise, personal relationships, real results, and cultural fluency across borders.

### 1.2 Color Palette

```
Primary Colors:
  --slate-950:     #0B1120    (Deep navy-black — primary text, headers)
  --slate-800:     #1E293B    (Secondary text)
  --slate-500:     #64748B    (Tertiary text, captions)
  --slate-200:     #E2E8F0    (Borders, dividers)
  --slate-50:      #F8FAFC    (Off-white backgrounds, alternating sections)
  --white:         #FFFFFF    (Primary background)

Accent — Vermilion Red:
  --accent-600:    #DC2626    (Primary accent — CTAs, active states)
  --accent-500:    #EF4444    (Hover states)
  --accent-100:    #FEE2E2    (Light accent backgrounds, badges)
  --accent-50:     #FEF2F2    (Subtle accent tint)

Secondary Accent — Gold:
  --gold-500:      #D97706    (Premium highlights, awards, special badges)
  --gold-100:      #FEF3C7    (Gold tint backgrounds)

Pillar-Specific Colors (used sparingly for visual coding):
  --education:     #2563EB    (Blue — knowledge, trust)
  --tourism:       #059669    (Emerald — exploration, nature)
  --trade:         #7C3AED    (Violet — commerce, ambition)

Utility:
  --success:       #16A34A
  --error:         #DC2626
  --warning:       #D97706
```

**Rationale:** Vermilion red is culturally significant in both India and China — it signals auspiciousness, energy, and authority. Paired with deep navy and generous white space, it creates a Stripe-like premium feel without being cold or corporate. The gold accent elevates premium moments (stats, awards) without being gaudy.

### 1.3 Typography System

```
Font Stack:
  --font-display:  "Inter", system-ui, -apple-system, sans-serif
  --font-body:     "Inter", system-ui, -apple-system, sans-serif
  --font-mono:     "JetBrains Mono", "Fira Code", monospace (stats/numbers only)

Type Scale (desktop / mobile):
  Display:         72px / 40px    — weight 700, letter-spacing -0.03em, line-height 1.05
  H1:              56px / 32px    — weight 700, letter-spacing -0.025em, line-height 1.1
  H2:              40px / 28px    — weight 600, letter-spacing -0.02em, line-height 1.15
  H3:              28px / 22px    — weight 600, letter-spacing -0.015em, line-height 1.25
  H4:              22px / 18px    — weight 600, letter-spacing -0.01em, line-height 1.3
  Body Large:      18px / 16px    — weight 400, line-height 1.7
  Body:            16px / 15px    — weight 400, line-height 1.7
  Body Small:      14px / 13px    — weight 400, line-height 1.6
  Caption:         12px / 12px    — weight 500, letter-spacing 0.05em, uppercase
  Stat Number:     64px / 36px    — weight 700, font-mono, tabular-nums, letter-spacing -0.02em

Special Treatment:
  - Section labels use Caption style in --accent-600, always uppercase, always with a small
    left-aligned bar (2px wide, 16px tall, accent color) preceding them
  - Pull quotes use H3 size at weight 400 italic with --slate-500 color
  - Stat numbers use font-variant-numeric: tabular-nums for alignment
```

**Loading strategy:** Use `<link rel="preload">` for Inter 400/600/700 weights. Use `font-display: swap` to prevent FOIT.

### 1.4 Logo Direction

The logo has NOT been designed yet. For development, use a text-based logomark:

```
Text: "RouteToAbroad"
Treatment: "Route" in --slate-950 weight 400, "To" in --slate-500 weight 400, "Abroad" in --accent-600 weight 700
Size: 20px in nav, 24px in footer
```

Alternatively, a minimal geometric mark: two overlapping circles (representing India and China/East Asia) connected by a subtle curved path. Use SVG. Colors: --slate-950 and --accent-600.

### 1.5 Iconography

- Use Lucide React icons (consistent stroke-width: 1.5px)
- For pillar-specific icons, use custom SVG illustrations in a single-line-art style (not filled, not emoji-like)
- Icon color follows text color of context (never random colors)
- Icon size: 20px inline, 24px in cards, 40px in feature blocks

### 1.6 Photography Direction

- All images are placeholder for now — use `placeholder.svg` components that render a colored rectangle with aspect ratio and label text
- Photography style when real images are added: warm, human-centric, slightly desaturated (not hyper-saturated stock), natural lighting
- Apply a subtle CSS treatment to all photos: `filter: contrast(1.02) saturate(0.95)` for visual cohesion
- Avoid: generic handshake photos, globe graphics, graduation-cap clip art

### 1.7 Texture and Visual Grain

To prevent the "flat AI slop" look, apply these subtle treatments:

```css
/* Subtle noise overlay on hero sections and CTA blocks */
.grain::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url('/textures/noise.svg');
  opacity: 0.03;
  pointer-events: none;
  mix-blend-mode: overlay;
}

/* Subtle gradient meshes on section backgrounds (not rainbow — monochromatic) */
.mesh-bg {
  background:
    radial-gradient(ellipse at 20% 50%, var(--accent-50) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 20%, var(--slate-50) 0%, transparent 50%);
}
```

---

## 2. Design System

### 2.1 Spacing Scale

```
4px   — xs (tight internal padding)
8px   — sm
12px  — md
16px  — base
24px  — lg
32px  — xl
48px  — 2xl
64px  — 3xl
96px  — 4xl
128px — 5xl (section vertical padding on desktop)
```

Section vertical padding: 128px top/bottom on desktop, 64px on mobile.
Max content width: 1280px, centered with `margin: 0 auto`.
Content gutters: 24px on mobile, 48px on tablet, auto-centered on desktop.

### 2.2 Grid System

- Use CSS Grid and Flexbox, not a framework grid
- Standard layouts: 12-column grid with 24px gap
- Common patterns:
  - Full bleed: edge to edge
  - Contained: max-width 1280px
  - Narrow: max-width 720px (for body text, blog posts)
  - Asymmetric split: 7col / 5col (intentional — NOT 6/6)

### 2.3 Border Radius

```
--radius-sm:   6px   (buttons, inputs, small cards)
--radius-md:   12px  (cards, modals)
--radius-lg:   16px  (large cards, image containers)
--radius-xl:   24px  (hero elements, feature blocks)
--radius-full: 9999px (pills, avatars)
```

### 2.4 Shadows

```
--shadow-sm:   0 1px 2px rgba(0,0,0,0.04)
--shadow-md:   0 4px 12px rgba(0,0,0,0.06)
--shadow-lg:   0 8px 30px rgba(0,0,0,0.08)
--shadow-xl:   0 20px 60px rgba(0,0,0,0.1)

/* Cards use shadow-sm by default, shadow-md on hover */
/* Never use drop-shadow on text */
```

### 2.5 Button System

```
Primary Button:
  bg: --accent-600, text: white, radius: --radius-sm
  hover: --accent-500, shadow-md, translateY(-1px)
  active: --accent-600, translateY(0)
  padding: 12px 28px
  font: 15px, weight 600
  transition: all 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94)

Secondary Button:
  bg: transparent, text: --slate-950, border: 1px solid --slate-200
  hover: bg --slate-50, border-color --slate-300
  padding: 12px 28px

Ghost Button:
  bg: transparent, text: --slate-800
  hover: bg --slate-50
  padding: 8px 16px

Link Button:
  text: --accent-600, no bg, no border
  hover: underline, text --accent-500
  has right arrow icon (→) that slides 4px right on hover

Pillar-Colored Buttons (used only on pillar pages):
  Education: --education as bg
  Tourism: --tourism as bg
  Trade: --trade as bg
```

### 2.6 Card System

```
Standard Card:
  bg: white, border: 1px solid --slate-200, radius: --radius-md
  padding: 24px
  hover: shadow-md, border-color --slate-300, translateY(-2px)
  transition: all 300ms ease

Feature Card:
  Same as standard but with a top color bar (4px tall, pillar color or accent)

Testimonial Card:
  bg: --slate-50, no border, radius: --radius-lg
  padding: 32px
  includes quotation mark SVG (large, --slate-200 color, positioned top-left)

Stat Card:
  bg: white, border: 1px solid --slate-200, radius: --radius-md
  number in --font-mono, H2 size
  label in Caption style below

Blog Card:
  Image top (radius-md top corners), content bottom
  Category pill badge (Caption style, --accent-100 bg, --accent-600 text)
  Title in H4
  Date + read time in Body Small --slate-500
```

### 2.7 Form Elements

```
Text Input:
  border: 1px solid --slate-200, radius: --radius-sm
  padding: 12px 16px
  font: Body size
  focus: border-color --accent-600, ring: 0 0 0 3px --accent-100
  placeholder: --slate-400
  label: Body Small, weight 600, --slate-800, 6px margin-bottom
  error: border-color --error, helper text in --error below

Textarea:
  Same as Text Input, min-height 120px

Select:
  Same as Text Input with custom chevron icon

Checkbox/Radio:
  Custom styled, accent-colored when checked
  16px size, --radius-sm for checkbox, full for radio

File Upload:
  Dashed border area, --slate-100 bg
  Icon + "Drop files here or click to upload" text
  Drag hover: border-color --accent-600, bg --accent-50
```

### 2.8 Responsive Breakpoints

```
sm:  640px   (mobile landscape)
md:  768px   (tablet portrait)
lg:  1024px  (tablet landscape / small desktop)
xl:  1280px  (desktop)
2xl: 1536px  (large desktop — max-width cap)
```

---

## 3. Global Components

### 3.1 Navigation (Header)

**Structure:**
```
[Logo]                    [Nav Links]                         [CTA Button]
RouteToAbroad             Education  Tourism  Trade  About  Blog  Contact    Get Started →
```

**Desktop behavior (xl+):**
- Fixed to top, height: 72px
- Background: white with `backdrop-filter: blur(12px)` and 95% opacity when scrolled
- Bottom border: 1px solid --slate-200 (appears on scroll, not at top)
- Max-width container centered
- Logo left-aligned
- Nav links centered or right-aligned with 32px gaps
- "Get Started" primary button far right
- Nav links: Body size, weight 500, --slate-800, hover --slate-950 with a subtle underline that slides in from left (width animation 0 to 100%, 200ms)
- Active page link: --accent-600 color, underline visible

**Mega dropdown for pillar links (Education, Tourism, Trade):**
- On hover/click, a dropdown panel slides down (not a tiny menu — a full-width contained panel)
- Panel: white bg, shadow-xl, radius-md bottom corners, max-height 400px
- Contains: brief pillar description (2 lines), 3-4 sub-links with icons, a small featured image or stat
- Closes on mouse leave (300ms delay) or click outside
- Transition: opacity + translateY(-8px to 0), 250ms ease

**Mobile behavior (below lg):**
- Height: 64px
- Hamburger icon (3-line, animated to X on open)
- Mobile menu: full-screen overlay, white bg, links stacked vertically
- Links at H3 size, 16px vertical gap
- CTA button full-width at bottom of mobile menu
- Menu animates in from right (translateX 100% to 0, 300ms)

**Scroll behavior:**
- Nav starts transparent on homepage hero (white text), becomes white bg after scrolling past hero
- On all other pages: always white bg
- Hides on scroll down (translateY -100%), shows on scroll up — use IntersectionObserver or scroll direction detection
- Transition: transform 300ms ease

### 3.2 Footer

**Layout:** 4-column grid on desktop, stacked on mobile. Dark treatment: --slate-950 bg, white/slate-300 text.

```
Column 1 (wider):                Column 2:         Column 3:         Column 4:
  Logo (white variant)            Education          Tourism            Trade
  2-line company description      Scholarships       Destinations       Import/Export
  info@routetoabroad.com          Universities       Tour Packages      Logistics
  +91 96330 61109                  Student Visa       Travel Visa        Consulting
                                   Apply Now          Inquire            Inquire
  [Social icons row]
  LinkedIn  Instagram  Twitter     About Us           Blog               Contact
  WhatsApp  YouTube               Our Team           Resources          Get in Touch
                                   Careers            Newsletter         Inquiry Form
```

**Bottom bar** (below columns, full width, border-top 1px --slate-800):
```
© 2026 RouteToAbroad. All rights reserved.          Privacy Policy  |  Terms of Service
```

**Visual details:**
- Section padding: 96px top, 48px bottom
- Column gap: 48px
- Link style: --slate-400, hover --white, transition 200ms
- Social icons: 20px, --slate-500, hover --white
- A subtle gradient mesh in the background (radial gradient of --slate-900 tones) to add depth without being distracting
- Newsletter mini-form: email input + submit button inline, --slate-800 bg input, --accent-600 submit button

### 3.3 Section Label Pattern

Every major section across the site uses a consistent label pattern above the heading:

```
[2px × 16px accent bar]  SECTION LABEL
Heading Goes Here in H2
Optional subtitle in Body Large, --slate-500, max-width 560px
```

This creates instant recognition and visual rhythm across all pages.

### 3.4 Page Transition

When navigating between pages:
- Current page content fades out (opacity 1 to 0, 150ms)
- New page content fades in (opacity 0 to 1, 250ms) with a subtle upward slide (translateY 12px to 0)
- Use React Router with Framer Motion's `AnimatePresence`

### 3.5 Scroll-to-Top Button

- Appears after scrolling 600px down
- Bottom-right, 48px circle, --slate-950 bg, white arrow icon
- Offset 24px from edges, 96px from bottom (above chatbot)
- Fade in/out, 200ms
- Smooth scroll to top on click

---

## 4. Page: Homepage

The homepage is the most critical page. It must accomplish three things: (1) immediately communicate what RouteToAbroad does, (2) establish premium credibility, (3) direct visitors to the right pillar. It should NOT feel like a generic "services" page — it should tell a story.

### 4.1 Hero Section

**Layout:** Full viewport height (100vh, min 700px). Asymmetric split — content takes ~55% left, visual takes ~45% right on desktop. On mobile, stacked (content on top, visual collapses to a background treatment).

**Content (left):**
```
[Caption label] YOUR BRIDGE TO EAST ASIA

[Display heading, 2 lines max]
Education. Tourism.
Trade. One Partner.

[Body Large, --slate-500, max-width 480px]
We connect India to China and East Asia — whether you're chasing
a scholarship, planning a journey, or building a supply chain.

[Two buttons, inline]
[Primary: "Explore Our Services →"]  [Secondary: "Talk to an Advisor"]

[Trust strip below buttons, 32px margin-top]
[3 inline items, separated by dots, Caption style, --slate-500]
● 500+ Students Placed  ● 12+ Years Experience  ● 3 Countries Served
```

**Visual (right):**
- NOT a generic stock photo. Instead: a geometric composition.
- Three overlapping rounded rectangles (radius-xl), slightly rotated (2deg, -1deg, 1deg), each containing a placeholder image representing one pillar:
  - Top: A Chinese university campus (blue tint overlay, --education at 10% opacity)
  - Middle: A scenic East Asian landscape (green tint, --tourism)
  - Bottom: A shipping port or trade scene (violet tint, --trade)
- The rectangles have subtle parallax — they shift slightly on mouse move (use a lightweight parallax hook, max 10px offset)
- On mobile: these become a horizontal scroll strip below the text

**Background:**
- White base with the mesh-bg gradient (see 1.7)
- Grain overlay at 0.03 opacity
- A very subtle large circle (600px diameter, --accent-50, blurred 100px) positioned behind the text at 20% from left, 40% from top — gives warmth without being a "blob"

**Animation on load:**
1. Heading fades in + slides up (from 24px below), 600ms, delay 100ms
2. Subtitle fades in + slides up, 600ms, delay 250ms
3. Buttons fade in + slides up, 600ms, delay 400ms
4. Trust strip fades in, 400ms, delay 600ms
5. Visual rectangles scale in (from 0.95 to 1) + fade in, staggered 150ms apart, starting at delay 300ms
6. Use `cubic-bezier(0.16, 1, 0.3, 1)` for all easing (smooth, slightly bouncy)

**Responsive:**
- Below lg: single column, text centered, visual becomes 3 small cards in a row
- Below sm: text left-aligned, cards stack or become a horizontal scroll

### 4.2 Pillar Navigator (Service Overview)

This section replaces the generic "Our Services" card grid. Instead, it is an interactive section where users choose their pillar.

**Layout:** Full-width contained section. Three horizontal tabs/panels.

**Structure:**
```
[Section label]  WHAT WE DO

[H2] Three pillars. One mission.
[Body Large] Every service we offer strengthens the bridge between India and East Asia.

[Three tabs — horizontal on desktop, stacked on mobile]
┌──────────────────┬──────────────────┬──────────────────┐
│   🎓 Education   │   🌏 Tourism     │   📦 Trade       │
│   (active tab)   │                  │                  │
└──────────────────┴──────────────────┴──────────────────┘

[Below tabs: expanded content panel]
┌─────────────────────────────────────────────────────────┐
│  [Left 7col]                    [Right 5col]            │
│  H3: Scholarships That         Placeholder image:       │
│      Change Lives              Student at Chinese       │
│                                university               │
│  Body: We've placed 500+                                │
│  Indian students in Chinese    [3 mini stats below      │
│  universities on full and       image in a row]          │
│  partial scholarships...        98% Visa Rate            │
│                                 ¥50K Avg Scholarship     │
│  [Bullet list, 4 items          200+ University Partners │
│   with check icons]                                      │
│  ✓ MBBS programs                                        │
│  ✓ Engineering degrees                                  │
│  ✓ Language programs                                    │
│  ✓ Full visa support                                    │
│                                                          │
│  [Link button] Learn more about Education →             │
│  [Primary button] Apply for a Scholarship               │
└─────────────────────────────────────────────────────────┘
```

**Tab behavior:**
- Tabs have pillar-colored bottom border when active (4px)
- Inactive tabs: --slate-500 text, no border
- Hover: --slate-950 text
- Content panel crossfades between pillars (opacity + slight translateX)
- Auto-rotate every 8 seconds (pause on hover or interaction)
- On mobile: tabs become an accordion (tap to expand/collapse)

**Content for each tab:**

Education:
- "Scholarships That Change Lives"
- Focus on Chinese university placement, MBBS, engineering, language
- Stats: 98% Visa Rate, ¥50K Avg Scholarship, 200+ Partners

Tourism:
- "East Asia, Without the Guesswork"
- Focus on curated travel to China, Japan, South Korea
- Stats: 50+ Itineraries, 4.9 Satisfaction Rating, 1000+ Travelers

Trade:
- "Your China Supply Chain, Simplified"
- Focus on import/export, sourcing, logistics, regulatory
- Stats: ¥100M+ Trade Facilitated, 50+ Product Categories, 98% On-Time

**Animation:** Content panel elements stagger-reveal on tab switch (heading, then body, then list, then image — 100ms stagger).

### 4.3 Social Proof Strip

A narrow, impactful section between major content blocks. NOT a "trusted by" logo bar (that feels generic). Instead, a scrolling ticker with real proof points.

**Layout:** Full-bleed, --slate-50 bg, 48px vertical padding. Single horizontal line of content, auto-scrolling left.

**Content (repeating ticker):**
```
"Placed at Tsinghua University" — Rahul M.  ●  "Full MBBS scholarship" — Priya S.  ●  "Sourced 40ft containers monthly" — TechTrade India  ●  "Best travel experience to Beijing" — The Sharma Family  ●  ...
```

- Each item: Body Small, --slate-600, with a small gold star icon before student/client names
- Scroll speed: 40px/second, pauses on hover
- Duplicated content for infinite scroll illusion
- Subtle fade masks on left and right edges (linear-gradient white to transparent, 80px wide)

**No section label** — this is a visual rhythm break, not a titled section.

### 4.4 The "Why RouteToAbroad" Section

NOT a generic "Why Choose Us" with icons. Instead, a single compelling narrative with data.

**Layout:** Contained, asymmetric — 5col left (sticky visual), 7col right (scrolling content).

**Left (sticky):**
- A large stat counter that changes as user scrolls through the right column:
  - Position 1: "12+" with label "Years of India-China expertise"
  - Position 2: "500+" with label "Students placed in Chinese universities"
  - Position 3: "3" with label "Countries. One seamless experience."
- Number rendered in Display size, --accent-600, font-mono
- Label in H4, --slate-500
- Transitions: number morphs (counter animation) as scroll position changes
- Background: a very subtle circular gradient (--accent-50) behind the number

**Right (scrolling narrative):**
```
[Section label] WHY US

[H2] Built on relationships, not transactions.

[Narrative blocks — each ~200px tall to create scroll rhythm]

Block 1:
[H4] We've lived on both sides.
[Body] Our team includes professionals who've studied, worked, and
built businesses across India, China, and Southeast Asia. This isn't
outsourced knowledge — it's firsthand.

Block 2:
[H4] One firm. Three capabilities.
[Body] Most consultancies do one thing. We handle education placement,
travel logistics, AND trade operations. That means when a student we
placed graduates and starts a sourcing business, we're already there.

Block 3:
[H4] The network is the product.
[Body] We've spent a decade building relationships with universities,
travel operators, manufacturers, and government offices across East
Asia. You get access to that network on day one.
```

**Animation:** Each narrative block fades in (opacity 0 to 1, translateY 20px to 0) as it enters the viewport. The left stat counter updates when each block crosses the viewport center.

**Responsive:** On mobile, the stat counter is not sticky — instead, each narrative block has its own stat rendered above it as a small accent-colored badge.

### 4.5 Featured Testimonial

NOT a carousel of 3 quotes. A single, high-impact testimonial with visual weight.

**Layout:** Full-bleed --slate-950 background (dark section — visual contrast break). Contained content, centered.

**Structure:**
```
[Centered]

[Large quotation mark SVG, --slate-800, 120px]
"

[H3, white, max-width 720px, text-center, font-weight 400, italic]
"RouteToAbroad didn't just help me get into Peking University — they
helped me navigate a new country, a new language, and a new life.
Three years later, I'm graduating top of my class."

[32px gap]

[Avatar circle, 56px]  [Name: "Ananya Krishnan" — Body, white, weight 600]
                        [Detail: "MBBS, Peking University '25" — Body Small, --slate-400]

[24px gap]

[Row of 5 small avatar circles, overlapping, --slate-700 border]
[Caption: "Join 500+ students who found their path" — Caption, --slate-400]
```

**Visual details:**
- Grain overlay on the dark bg (0.05 opacity, lighter)
- A subtle radial gradient of --accent-600 at 5% opacity behind the quote, centered
- The quotation mark has a very slow, subtle float animation (translateY 0 to -8px, 6s, infinite, ease-in-out)

**Animation:** Quote text fades in word-by-word (or line-by-line) on scroll into view. Avatar row slides in from bottom, 300ms delay after quote.

**Responsive:** Same layout, text becomes H4 size on mobile.

### 4.6 Stats Bar

A horizontal strip showing key numbers. Placed after the testimonial for maximum impact (the testimonial primes the reader emotionally, then the stats provide rational proof).

**Layout:** Contained, --slate-50 bg (or white), 4 stats in a row.

**Structure:**
```
┌──────────────┬──────────────┬──────────────┬──────────────┐
│     500+     │     12+      │     98%      │    3         │
│  Students    │  Years of    │  Visa        │  Countries   │
│  Placed      │  Experience  │  Success     │  Covered     │
│              │              │  Rate        │              │
└──────────────┴──────────────┴──────────────┴──────────────┘
```

**Visual:**
- Each stat: number in Stat Number style (--slate-950), label in Body Small (--slate-500)
- Vertical dividers between stats (1px --slate-200, 48px tall)
- On mobile: 2x2 grid, no dividers, horizontal divider between rows instead

**Animation:** Numbers count up from 0 when section enters viewport. Use `requestAnimationFrame` counter, ~1.5s duration, easeOutExpo curve. Numbers with "+" or "%" — the suffix appears immediately, number counts up.

### 4.7 Three Pillars Deep-Dive Cards

After the stats, present the three pillars as large, immersive cards (not small icon cards).

**Layout:** Three cards stacked vertically (NOT in a 3-column row — that's generic). Each card is a full-width contained block with alternating left/right image placement.

**Card 1 — Education:**
```
[Full-width card, white bg, --radius-lg, shadow-sm, overflow hidden]
┌────────────────────────────────────────────────────────────────┐
│  [Left 6col: Image area]        [Right 6col: Content]         │
│  Placeholder: Chinese           [Caption, --education]        │
│  university campus              EDUCATION                     │
│  with blue overlay              [H3] Your scholarship to      │
│  Aspect ratio: 4:3              China starts here.            │
│                                 [Body] Brief description...   │
│                                 [3 icon+label items, stacked] │
│                                  📋 University matching       │
│                                  📄 Application support       │
│                                  ✈️ Visa & travel prep        │
│                                 [Link button] Explore →       │
└────────────────────────────────────────────────────────────────┘
```

**Card 2 — Tourism:** Same structure, image RIGHT, content LEFT. Green treatment.

**Card 3 — Trade:** Same structure, image LEFT, content RIGHT. Violet treatment.

Each card has a top-left (or top-right, alternating) small pillar-color bar (4px wide, 64px tall) as an accent.

**Animation:** Each card slides in from its image side (Card 1 from left, Card 2 from right, Card 3 from left) as it enters viewport. 600ms, staggered.

**Hover:** Card lifts slightly (translateY -4px), shadow increases to shadow-lg.

**Responsive:** On mobile, all cards become stacked (image on top, content below), no alternating.

### 4.8 CTA Section ("Let's Start")

The final conversion section before the footer.

**Layout:** Full-bleed, --accent-600 bg (red), white text. Generous padding (128px vertical).

**Structure:**
```
[Centered, max-width 640px]

[H2, white] Ready to make your move?
[Body Large, white at 80% opacity]
Whether it's a scholarship application, a trip itinerary, or a
sourcing deal — we're ready when you are.

[Three buttons in a row, white bg, dark text — one for each pillar]
[Education Inquiry]  [Tourism Inquiry]  [Trade Inquiry]

[Below buttons]
[Body Small, white at 60% opacity]
Or call us directly: +91 96330 61109
```

**Visual:**
- Grain overlay at 0.04 opacity
- Subtle gradient: radial from center (slightly lighter red) to edges (slightly darker)
- No images — the color block IS the visual statement

**Animation:** Entire section fades in + slides up on scroll. Buttons stagger in (100ms apart).

**Responsive:** Buttons stack vertically on mobile with full width.

---

## 5. Page: Education

### 5.1 Hero

**Layout:** Similar to homepage hero but with education-specific treatment.

```
[Full-width, --education at 5% opacity tint bg, 80vh height]

[Contained, asymmetric 6/6 split]

[Left]
[Caption, --education] EDUCATION

[H1] Study in China.
     Change Everything.

[Body Large, --slate-500, max-width 440px]
Full and partial scholarships at China's top universities.
MBBS, engineering, language programs, and more — with complete
visa and relocation support.

[Primary button, --education as bg] Apply for a Scholarship
[Ghost button] Download University Guide (PDF)

[Right]
Placeholder image: Student on campus
Large rounded rectangle, --radius-xl
Overlaid with a floating stat card (absolute positioned, bottom-left):
  "98%" / "Visa success rate" — white bg, shadow-lg, --radius-md
```

**Animation:** Same as homepage hero — staggered content reveal.

### 5.2 How It Works (Process Timeline)

**Layout:** Contained, centered. Vertical timeline on desktop (NOT horizontal — horizontal timelines are hard to read and generic).

**Structure:**
```
[Section label] THE PROCESS
[H2] From inquiry to arrival. We handle every step.

[Vertical timeline — line is 2px, --slate-200, centered]

Step 1 ─── ● ─── [Card right]
           │     [H4] 1. Free Consultation
           │     [Body] Tell us your goals — field of study, budget,
           │     timeline. We'll match you with programs.
           │     [Caption] Duration: 30 min call
           │
Step 2 ─── ● ─── [Card left]  ← alternating sides
           │     [H4] 2. University Matching
           │     [Body] We shortlist universities based on your
           │     profile, scholarship eligibility, and preferences.
           │     [Caption] Duration: 3-5 business days
           │
Step 3 ─── ● ─── [Card right]
           │     [H4] 3. Application & Scholarship
           │     [Body] We prepare and submit your applications,
           │     including scholarship paperwork.
           │     [Caption] Duration: 1-3 weeks
           │
Step 4 ─── ● ─── [Card left]
           │     [H4] 4. Visa & Travel
           │     [Body] Visa application, flight booking, accommodation
           │     arrangement, and pre-departure briefing.
           │     [Caption] Duration: 2-4 weeks
           │
Step 5 ─── ● ─── [Card right]
                  [H4] 5. Arrival & Settlement
                  [Body] Airport pickup, university check-in, SIM card,
                  bank account — we're there when you land.
                  [Caption] Ongoing support
```

**Visual:**
- Timeline dots: 12px circles, --education fill, white border 3px, when active/in-view
- Inactive dots: --slate-300 fill
- Cards: white bg, shadow-sm, --radius-md, 24px padding, max-width 440px
- The active step (in viewport center) has a subtle blue glow: `box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1)`

**Animation:** As user scrolls, the timeline line "draws" downward (clip-path or height animation). Each card fades in from its side (left cards from left, right cards from right) as it enters viewport.

**Responsive:** On mobile, timeline is left-aligned (line on left edge), all cards on the right. Cards are full width.

### 5.3 Programs Offered

**Layout:** Contained, 3-column grid.

**Structure:**
```
[Section label] PROGRAMS
[H2] Programs we place students in.

[Grid of program cards]

Card: MBBS in China
  [Top color bar: --education]
  [Icon: medical cross, Lucide]
  [H4] MBBS Programs
  [Body] 6-year English-medium programs at recognized Chinese
  medical universities. WHO/NMC listed.
  [List] ● Peking University ● Fudan University ● Zhejiang University
  [Link button] Learn More →

Card: Engineering
  [Similar structure]

Card: Language Programs
  [Similar structure]

Card: Business & MBA
  [Similar structure]

Card: Undergraduate Programs
  [Similar structure]

Card: Research & PhD
  [Similar structure]
```

**Animation:** Cards stagger-reveal (3 at a time on desktop, 1 at a time on mobile), fade + slide up.

### 5.4 University Partners

**Layout:** Horizontal scroll carousel with peek (shows partial next card to hint scrollability).

**Structure:**
```
[Section label] OUR PARTNERS
[H2] Universities that trust us.

[Scrollable row of university cards]
Each card:
  [University logo placeholder, 80x80, grayscale, hover color]
  [H4] Peking University
  [Caption] Beijing, China
  [Body Small] Ranked #12 globally. 3 scholarship tiers available.
```

- Scroll arrows on desktop (left/right, at edges)
- Drag-to-scroll enabled
- On mobile: horizontal scroll with snap points

### 5.5 Scholarship Calculator / Quick Assessment

An interactive widget that makes the page feel like a tool, not a brochure.

**Layout:** Full-bleed --slate-50 bg. Contained content, centered, max-width 640px.

**Structure:**
```
[Section label] QUICK ASSESSMENT
[H2] Are you eligible for a Chinese scholarship?
[Body Large] Answer 4 quick questions. No sign-up required.

[Step 1 of 4]
[H4] What do you want to study?
[4 option buttons, pill-shaped, single-select]
  Medicine    Engineering    Business    Other

[Progress bar: 25% filled, --education color, 4px tall, full-width]

[Next → button]
```

After 4 steps (field of study, current education level, budget range, preferred intake), show a result:

```
[Result card, --education at 5% bg, --radius-lg, shadow-md]
[H3] You have a strong chance.
[Body] Based on your profile, you may qualify for partial to full
scholarships at 15+ universities in our network.

[Primary button] Book a Free Consultation
[Ghost button] See Scholarship Options
```

**This is NOT a real calculator** — it always returns an encouraging result and funnels to consultation. The value is engagement, not computation.

### 5.6 Education Inquiry Form

**Layout:** Full-bleed --slate-50 bg. Contained, asymmetric 7col form / 5col info.

**Left (form):**
```
[Section label] APPLY NOW
[H2] Start your education journey.
[Body] Fill out this form and we'll get back to you within 24 hours.

[Form fields]
Full Name *                    [text input]
Email Address *                [text input]
Phone Number *                 [text input with +91 prefix]
Current Education Level *      [select: 12th Pass / Undergraduate / Graduate / Other]
Field of Interest *            [select: MBBS / Engineering / Business / Language / Other]
Preferred Intake *             [select: Fall 2026 / Spring 2027 / Fall 2027 / Not Sure]
Budget Range                   [select: Full Scholarship / <$5000/yr / $5000-10000/yr / Flexible]
Additional Notes               [textarea]
Resume/Transcripts             [file upload, optional]

[Checkbox] I agree to the privacy policy and consent to being contacted.

[Primary button, --education bg, full-width] Submit Application →
```

**Right (info sidebar):**
```
[Card, white bg, shadow-sm, --radius-md, sticky]
[H4] What happens next?

[Timeline, mini, 3 steps]
1. We review your profile (24 hrs)
2. Free consultation call
3. University shortlist in 3-5 days

[Divider]

[H4] Talk to us directly
📞 +91 96330 61109
📧 info@routetoabroad.com
💬 WhatsApp

[Divider]

[Caption] Or chat with our AI assistant →
[Small chatbot icon that pulses, clicking opens the chatbot]
```

**Form validation:** Real-time inline validation. Errors appear below fields in --error color. Submit button disabled until required fields pass.

**Success state:** Form collapses and shows a success message:
```
[Centered in form area]
[Check circle icon, --success, 48px]
[H3] Application received!
[Body] We'll review your profile and reach out within 24 hours.
Check your email for a confirmation.
[Ghost button] Submit another inquiry
```

**Responsive:** On mobile, form is full width. Info sidebar moves below the form.

### 5.7 Education FAQ

**Layout:** Contained, narrow (max-width 720px), centered.

```
[Section label] FAQs
[H2] Common questions about studying in China.

[Accordion items]
Q: Is MBBS from China recognized in India?
A: [Expandable answer...]

Q: What scholarships are available?
Q: Do I need to know Chinese?
Q: What is the visa process?
Q: How long do programs typically take?
Q: What is the cost of living in China?
```

**Accordion behavior:**
- Only one open at a time
- Chevron icon rotates 180deg on open
- Content slides down with height animation (300ms ease)
- Open item has --accent-100 left border (3px)

---

## 6. Page: Tourism

### 6.1 Hero

**Layout:** Full-viewport-width image hero with overlay. Different from Education hero to avoid repetition.

```
[Full-bleed background image placeholder: scenic East Asian landscape]
[Dark gradient overlay: linear-gradient(to right, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.2) 100%)]

[Contained, content left-aligned, vertically centered]

[Caption, --tourism light variant (mint green on dark)] TOURISM

[H1, white] Discover East Asia.
             Your Way.

[Body Large, white at 85% opacity, max-width 440px]
Curated journeys through China, Japan, and South Korea —
from cultural immersions to business delegations.

[Two buttons]
[Primary, --tourism bg] Browse Destinations
[Secondary, white border, white text] Plan a Custom Trip
```

**Visual:** The background placeholder should indicate a dramatic landscape (Great Wall, Kyoto temples, Seoul skyline). The gradient overlay ensures text readability over any image.

**Animation:** Image has slow zoom (scale 1.0 to 1.05, 20s, infinite, alternate). Text content slides in from left.

### 6.2 Destination Showcase

Instead of a grid of destination cards, use a more editorial layout.

**Layout:** Full-bleed alternating sections, each destination gets a "spread."

**Structure for each destination (e.g., China):**
```
┌────────────────────────────────────────────────────────────────┐
│ [Full-bleed --slate-50 bg]                                     │
│                                                                │
│ [Contained, asymmetric 5col / 7col]                            │
│                                                                │
│ [Left 5col]                        [Right 7col]                │
│ [Caption, --tourism] CHINA         [2x2 image grid]            │
│                                    ┌────────┬────────┐         │
│ [H2] The Middle Kingdom,           │ Great  │Beijing │         │
│      Beyond the Headlines.         │ Wall   │ Night  │         │
│                                    ├────────┤        │         │
│ [Body] Ancient temples, neon       │Shanghai│────────┤         │
│ skylines, cuisines that vary       │        │Food    │         │
│ by the mile. China is not one      │        │Scene   │         │
│ destination — it's a hundred.      └────────┴────────┘         │
│                                    (Masonry-style grid with    │
│ [Popular itineraries list]          varying heights)            │
│ ● 7 Days: Beijing-Shanghai                                     │
│ ● 14 Days: Silk Road Explorer                                  │
│ ● 5 Days: Guangzhou Trade+Tour                                 │
│                                                                │
│ [Link button] View China Packages →                            │
└────────────────────────────────────────────────────────────────┘
```

**Repeat for Japan and South Korea** with different layouts:
- Japan: image left, content right, 7col/5col (reversed)
- South Korea: full-width image top, content below centered (different rhythm)

**Animation:** Image grid items stagger in (scale 0.95 to 1, opacity 0 to 1, 200ms stagger). Text content fades in from the text side.

### 6.3 Types of Travel

**Layout:** Contained, 3 large cards in a row (not small icon cards).

```
Card 1: Cultural Immersion
  [Tall card, aspect-ratio 3:4]
  [Full image placeholder top 60%]
  [Content bottom 40%, --slate-50 bg]
  [H4] Cultural Immersion
  [Body Small] Temples, tea ceremonies, calligraphy workshops,
  homestays, and local guides.
  [Link button] Learn More →

Card 2: Business Delegations
  [Same structure]

Card 3: Custom & Group Travel
  [Same structure]
```

**Hover:** Image scales slightly (1.0 to 1.05), content area slides up 8px revealing more text. Smooth transition 400ms.

### 6.4 What's Included

**Layout:** Contained, centered, max-width 960px. Icon grid.

```
[Section label] WHAT'S INCLUDED
[H2] Everything handled. You just show up.

[Grid: 3 cols × 2 rows of icon items]
✈️ Flight booking        🏨 Accommodation         🗺️ Detailed itinerary
📋 Visa assistance       🚐 Local transport        📞 24/7 support
```

Each item: Lucide icon (40px, --tourism), H4 label, Body Small description (1 line).

### 6.5 Tourism Inquiry Form

Same structural approach as Education form (section 5.6) but with tourism-specific fields:

```
Fields:
Full Name *
Email Address *
Phone Number *
Destination Interest *     [multi-select: China / Japan / South Korea / Multiple]
Travel Type *              [select: Cultural / Business / Custom / Group]
Number of Travelers *      [number input]
Preferred Travel Dates     [date range picker]
Budget Range per Person    [select: <₹50K / ₹50K-1L / ₹1L-2L / ₹2L+ / Flexible]
Special Requirements       [textarea]

[Primary button, --tourism bg] Submit Inquiry →
```

Sidebar: similar to education but with tourism-specific "What happens next" (itinerary proposal in 48 hrs, etc.)

### 6.6 Tourism FAQ

Same accordion pattern as Education FAQ (section 5.7), tourism-specific questions:
- Do I need a visa for China?
- What's the best time to visit?
- Can you arrange business meetings during the trip?
- What about food/dietary requirements?
- Is travel insurance included?

---

## 7. Page: Trade

### 7.1 Hero

**Layout:** Different from both Education and Tourism heroes — more corporate/serious tone.

```
[Contained, centered text, 70vh height]
[White bg with mesh-bg gradient]

[Caption, --trade] INDIA-CHINA TRADE

[H1, centered] Your supply chain
               doesn't need more complexity.

[Body Large, --slate-500, centered, max-width 560px]
End-to-end import-export facilitation between India and China.
Sourcing, logistics, customs, quality control — handled.

[Primary button, --trade bg, centered] Start a Trade Inquiry
[Below button: Caption, --slate-400] No minimum order. No commitment to start.
```

**Visual:** Behind the text, a very subtle, large SVG illustration of a simplified trade route map (India to China, dotted line, two points) in --slate-100. Not distracting — barely there. Purely atmospheric.

**Animation:** Text reveals line by line from center.

### 7.2 Services Grid

**Layout:** Contained, bento-style grid (NOT equal columns — intentional asymmetry).

```
[Section label] SERVICES
[H2] What we handle.

┌─────────────────────────┬────────────────────┐
│                         │                    │
│  Product Sourcing       │  Quality Control   │
│  (Large card, 2col)     │  (1col)            │
│  H3 + full description  │  H4 + brief desc   │
│  + icon                 │  + icon            │
│                         │                    │
├────────────────────┬────┴────────────────────┤
│                    │                         │
│  Customs &         │  Logistics &            │
│  Regulatory        │  Shipping               │
│  (1col)            │  (Large card, 2col)     │
│  H4 + brief desc   │  H3 + full description  │
│                    │  + icon                 │
│                    │                         │
├────────────────────┴─────────────────────────┤
│                                              │
│  Trade Consulting (Full width, shorter)      │
│  Market research, partner matching,          │
│  regulatory guidance                         │
│                                              │
└──────────────────────────────────────────────┘
```

**Visual:** Each card has --trade at 3% opacity as bg tint. Large cards have icons at 120px, --slate-100, positioned bottom-right as decorative (overflow hidden, partially cropped). Cards have 1px --slate-200 border.

### 7.3 How We Work (Trade Process)

**Layout:** Horizontal numbered steps (this page can use horizontal because there are fewer steps and they're more parallel than sequential).

```
[Section label] THE PROCESS
[H2] Simple steps to your first shipment.

[4 steps in a horizontal flow with connecting arrows]

[1]──→──[2]──→──[3]──→──[4]

1. Tell Us What        2. We Source &       3. Logistics &      4. Delivery &
   You Need               Verify               Customs              Support
   Brief + requirements    Factory visits,      Shipping,            Door-to-door
   discussion              samples, QC          paperwork,           tracking,
                           reports              insurance            ongoing partnership
```

**Responsive:** Steps stack vertically on mobile with vertical connecting lines.

### 7.4 Trade Categories

**Layout:** Contained, tag cloud or grid showing product categories.

```
[Section label] WHAT WE TRADE
[H2] Product categories we handle.

[Grid of pill-shaped tags, --slate-50 bg, --slate-800 text, --radius-full]
Electronics    Textiles    Machinery    Auto Parts    Consumer Goods
Chemicals      Raw Materials    Medical Equipment    Solar/Energy
Building Materials    Packaging    Industrial Tools    ...
```

**Hover:** Tag bg changes to --trade at 10%, text becomes --trade.

### 7.5 Trade Inquiry Form

Same structural approach, trade-specific fields:

```
Fields:
Full Name *
Company Name
Email Address *
Phone Number *
Trade Direction *          [select: Import from China / Export to China / Both]
Product Category *         [select from categories list]
Product Description *      [textarea]
Estimated Monthly Volume   [text input]
Current Stage *            [select: Just exploring / Have a supplier / Need new supplier / Scaling up]
Additional Notes           [textarea]

[Primary button, --trade bg] Submit Trade Inquiry →
```

### 7.6 Trade FAQ

Same accordion pattern, trade-specific questions:
- What is the minimum order quantity?
- How do you ensure product quality?
- What are the shipping timeframes?
- Do you handle customs clearance?
- What payment terms do you support?
- Can you source custom/OEM products?

---

## 8. Page: About Us + Team

### 8.1 Hero

**Layout:** Narrow, text-centric hero. No image — let the words do the work.

```
[Contained, centered, max-width 720px, 60vh min-height, vertically centered]

[Caption] ABOUT US

[H1] We don't just connect countries.
     We connect people.

[Body Large, --slate-500]
RouteToAbroad was founded on a simple belief: that the distance
between India and East Asia isn't geographic — it's informational.
We close that gap.
```

### 8.2 Our Story

**Layout:** Narrow reading column (max-width 720px), centered. Long-form text with pullout quotes.

```
[Section label] OUR STORY

[Body, multiple paragraphs — editorial style]
Founded in [year], RouteToAbroad began as...

[Mid-text pullout quote]
[Pull quote style — see typography system]
"We started with education because we saw Indian students being
underserved by existing consultancies."
— Mr. Minhaj Al Shukoor, CEO

[Continue body text]
As our student network in China grew, a natural opportunity emerged...

[Another pullout quote from Director]
"The same relationships that helped us place students opened doors
for trade and tourism. It was a natural evolution."
— Mr. Vijeesh Vijayan, Director
```

**Visual:** Pullout quotes are indented 32px from left, with a 3px --accent-600 left border. They break the text column visually without being disruptive.

### 8.3 Mission / Values

**Layout:** Full-bleed --slate-50 bg. Contained, 3 value cards in a row.

```
[Section label] WHAT DRIVES US
[H2] Principles, not platitudes.

Card 1: Relationships Over Transactions
  [Icon: Handshake, Lucide, --accent-600]
  [H4] Relationships Over Transactions
  [Body] We don't count leads. We count families we've helped,
  students we've placed, businesses we've built alongside.

Card 2: Both Sides of the Bridge
  [Icon: ArrowLeftRight]
  [H4] Both Sides of the Bridge
  [Body] We have presence, relationships, and local expertise on
  both the India side and the East Asia side.

Card 3: No Shortcuts
  [Icon: Shield]
  [H4] No Shortcuts
  [Body] Every application is reviewed personally. Every shipment
  is tracked. Every trip is planned with care.
```

### 8.4 Team Section

**Layout:** Contained. Leadership first (large cards), then team grid (smaller).

**Leadership:**
```
[Section label] LEADERSHIP
[H2] The people behind the bridge.

[Two large cards, side by side]

Card 1:
  [Photo placeholder, square, --radius-lg, 280px]
  [H3] Mr. Minhaj Al Shukoor
  [Caption, --accent-600] Chief Executive Officer
  [Body] [2-3 line bio placeholder about background, expertise,
  vision for the company]
  [Social links: LinkedIn icon]

Card 2:
  [Photo placeholder, square, --radius-lg, 280px]
  [H3] Mr. Vijeesh Vijayan
  [Caption, --accent-600] Director
  [Body] [2-3 line bio placeholder]
  [Social links: LinkedIn icon]
```

**Team Grid (if more members):**
```
[H3] Our Team
[Grid: 4 columns]
Each member:
  [Photo placeholder, square, --radius-md, 180px]
  [H4] Name
  [Caption] Title
```

**Animation:** Leadership cards slide in from opposite sides (left and right). Team grid staggered fade-in.

**Responsive:** Leadership cards stack on mobile (full width each). Team grid becomes 2 columns.

### 8.5 Contact CTA

Simple CTA section at the bottom (before footer).

```
[Contained, centered, --slate-50 bg, --radius-xl, padding 64px]
[H2] Let's talk.
[Body Large] Whatever your question, we'll get back to you within 24 hours.
[Two buttons] [Primary: Contact Us]  [Secondary: WhatsApp]
```

---

## 9. Page: Blog/Resources Listing

### 9.1 Hero

```
[Contained, narrow, centered, 40vh]
[Caption] BLOG & RESOURCES
[H1] Insights for the India-East Asia corridor.
[Body Large, --slate-500] Guides, market updates, student stories, and travel tips.
```

### 9.2 Featured Post

The latest or editorially-chosen post gets a large hero card at the top.

```
[Contained, full-width card, horizontal layout]
┌─────────────────────────────────────────────────────────┐
│ [Left 5col: Image placeholder, --radius-lg]             │
│                                                          │
│ [Right 7col: Content]                                    │
│ [Category pill: "Education Guide" in --education tint]   │
│ [H3] The Complete Guide to MBBS in China (2026)         │
│ [Body] Everything you need to know about studying        │
│ medicine in China — programs, costs, recognition...      │
│ [Caption, --slate-500] March 15, 2026  ·  12 min read   │
│ [Link button] Read Article →                             │
└─────────────────────────────────────────────────────────┘
```

### 9.3 Category Filter

```
[Horizontal row of filter pills, scrollable on mobile]
All  |  Education  |  Tourism  |  Trade  |  Guides  |  News  |  Student Stories

Active filter: filled bg (--accent-600 for "All", pillar color for pillar categories)
Inactive: --slate-50 bg, --slate-600 text
```

Filtering is client-side with fade transition on the grid.

### 9.4 Post Grid

```
[3-column grid of Blog Cards (see card system 2.6)]
Each card:
  [Image placeholder, aspect-ratio 16:9, --radius-md top corners]
  [24px padding content area]
  [Category pill]
  [H4] Post Title Here
  [Body Small, --slate-500, 2-line clamp] Excerpt...
  [Caption, --slate-400] Date  ·  Read time
```

**Pagination:** "Load More" button at bottom (not page numbers). Loads 6 more posts. Button becomes "No more posts" disabled state when exhausted.

**Animation:** Cards stagger-reveal on load and on "Load More" (3 at a time, 100ms stagger).

---

## 10. Page: Blog Post Detail

### 10.1 Layout

Single-column reading layout, max-width 720px, centered. Clean, distraction-free.

```
[Top: breadcrumb]
Blog  /  Education  /  Article Title

[Category pill]
[H1, --slate-950] The Complete Guide to MBBS in China (2026)
[Author row]
  [Avatar placeholder, 40px]  By RouteToAbroad Team  ·  March 15, 2026  ·  12 min read
[Share buttons row: Copy Link, Twitter, LinkedIn, WhatsApp]

[Hero image placeholder, full column width, --radius-lg, aspect-ratio 16:9]

[Article body — rendered markdown/rich text]
Styled with:
  - Body text at 18px, line-height 1.8, --slate-800 (slightly larger for readability)
  - H2 with 48px margin-top, 16px margin-bottom
  - H3 with 32px margin-top, 12px margin-bottom
  - Blockquotes: left border 3px --accent-600, --slate-50 bg, padding 24px, italic
  - Inline links: --accent-600, underline on hover
  - Images: full-width, --radius-md, caption below in Caption style
  - Lists: custom bullet (small --accent-600 circle), 8px gap between items
  - Code blocks: --slate-50 bg, --font-mono, --radius-sm, padding 24px

[End of article divider: thin line, --slate-200]

[Author card]
  [Larger avatar, 64px]  [Name + bio + link to about page]

[Related posts: 3 Blog Cards in a row]
[Section label] RELATED ARTICLES
```

### 10.2 Reading Progress Bar

A thin progress bar at the very top of the viewport (above nav), 3px tall, --accent-600, width proportional to scroll position through the article. Subtle but satisfying.

### 10.3 Table of Contents (Sidebar on desktop)

On desktop (xl+), a sticky sidebar (right side, outside the 720px column) showing H2 headings of the article. Active heading highlighted as user scrolls. Uses IntersectionObserver.

```
[Sticky, top: 96px, right gutter]
[Caption] IN THIS ARTICLE
[List of H2 links, Body Small]
  ● Introduction          ← --accent-600 when active
  ● Eligibility
  ● Top Universities
  ● Cost Breakdown
  ● Application Process
  ● FAQ
```

On mobile: hidden (not enough space).

---

## 11. Page: Testimonials/Success Stories

### 11.1 Hero

```
[Contained, centered, 40vh]
[Caption] SUCCESS STORIES
[H1] Real stories. Real results.
[Body Large, --slate-500] From scholarship recipients to trade partners —
hear from the people we've worked with.
```

### 11.2 Featured Story

One large, narrative-format success story at the top.

```
[Full-bleed --slate-950 bg, white text]
[Contained, asymmetric 5col / 7col]

[Left 5col]
  [Large photo placeholder, --radius-lg]
  [Below photo]
  [H4, white] Ananya Krishnan
  [Body Small, --slate-400] MBBS Student, Peking University
  [Caption, --gold-500] ★ Full Scholarship Recipient

[Right 7col]
  [Large quotation mark, --slate-800, 80px]
  [H3, white, weight 400, italic, line-height 1.5]
  "When I first heard about studying medicine in China, I was skeptical.
  My parents were worried. The internet was full of conflicting information.
  RouteToAbroad cut through all of that. They matched me with Peking
  University, handled my scholarship application, walked me through the
  visa process, and even arranged my airport pickup in Beijing."

  [Body, --slate-300]
  "Three years in, I'm graduating top of my class. My parents visit me
  every year — RouteToAbroad even helped plan their trips."

  [Link button, white] Read Ananya's Full Story →
```

### 11.3 Testimonials Grid

**Layout:** Masonry-style grid (not equal-height cards — masonry creates visual interest). 3 columns on desktop, 2 on tablet, 1 on mobile.

```
Each testimonial card:
  [Testimonial Card style — see 2.6]
  [Quotation mark SVG, decorative]
  [Body] "Quote text here..."
  [16px gap]
  [Avatar, 40px]  [Name, weight 600]  [Role/Detail, --slate-500]
  [Pillar pill: "Education" / "Tourism" / "Trade" in pillar color tint]
```

**Filtering:** Same pill filter as blog (All | Education | Tourism | Trade). Cards re-arrange with layout animation (Framer Motion `layout` prop or CSS `container-type`).

**Mix of lengths:** Some quotes are 2 lines, some are 5 lines. The masonry layout handles this naturally. This is intentional — uniform boxes look fake.

### 11.4 Stats CTA

After the grid, a stats section reinforcing credibility, then a CTA.

```
[Stats bar — same pattern as homepage 4.6 but with different numbers]
500+ Students  |  1000+ Travelers  |  ¥100M+ Trade  |  4.9 Rating

[CTA section]
[H2] Your story starts here.
[Three pillar buttons]
```

---

## 12. Page: Contact

### 12.1 Layout

**Split layout:** 7col form left, 5col contact info right.

**Left (form):**
```
[Section label] GET IN TOUCH
[H1] Let's start a conversation.
[Body Large, --slate-500]
Whether you have a question or are ready to get started,
we'd love to hear from you.

[Form fields]
Full Name *                [text input]
Email Address *            [text input]
Phone Number               [text input]
Subject *                  [select: Education Inquiry / Tourism Inquiry /
                            Trade Inquiry / Partnership / General / Other]
Message *                  [textarea, min-height 160px]

[Primary button] Send Message →

[Caption, --slate-400, below button]
We respond within 24 hours on business days.
```

**Right (info):**
```
[Sticky card, --slate-50 bg, --radius-lg, padding 32px]

[H3] Contact Information

[Info items with icons]
📧 Email
   info@routetoabroad.com

📞 Phone
   +91 96330 61109

💬 WhatsApp
   [Link] Chat on WhatsApp

📍 Office
   [Address placeholder]

[Divider]

[H4] Office Hours
Monday – Saturday: 9:00 AM – 6:00 PM IST
Sunday: Closed

[Divider]

[H4] Connect With Us
[Social icon row: LinkedIn, Instagram, Twitter, YouTube, WhatsApp]
```

### 12.2 Map (Optional)

Below the form section, a full-width embedded map (Google Maps or Mapbox) showing office location. Height: 400px. Grayscale filter to match the site aesthetic. Interactive.

If no physical office to show, skip this section entirely.

### 12.3 Quick Links

```
[Full-bleed --slate-50 bg]
[Contained, 3 cards in a row]

Card: Education Inquiry
  [--education accent bar]
  [H4] Education Inquiry
  [Body Small] Looking for scholarships or university placement?
  [Link button] Go to Education Form →

Card: Tourism Inquiry
  [--tourism accent bar]
  [Similar]

Card: Trade Inquiry
  [--trade accent bar]
  [Similar]
```

---

## 13. AI Chatbot Specification

### 13.1 Visual Design

**Trigger button:**
- Fixed position, bottom-right corner
- Offset: 24px from right, 24px from bottom
- Size: 56px circle
- Background: --accent-600
- Icon: chat bubble (Lucide MessageCircle), white, 24px
- Shadow: shadow-lg
- Hover: scale(1.05), shadow-xl
- Subtle pulse animation when idle (box-shadow pulse, --accent-600 at 20% opacity, expanding to 80px ring, 3s infinite) — stops once the chat is opened for the first time
- Badge: if there's an unread greeting, a small --gold-500 dot (10px) at top-right of button

**Chat window:**
- Opens above the trigger button
- Size: 400px wide, 560px tall (desktop). On mobile: full-screen overlay.
- Background: white
- Border-radius: --radius-lg (top corners and bottom-left; bottom-right is 0 because it connects to the trigger area)
- Shadow: shadow-xl
- Header: 56px tall, --slate-950 bg, white text. Shows "RouteToAbroad AI" + online status dot (green) + minimize button
- Open animation: scale(0.9) + opacity(0) to scale(1) + opacity(1), origin bottom-right, 250ms ease
- Close animation: reverse of open, 200ms

**Message area:**
- Scrollable, padding 16px
- Messages styled as chat bubbles:
  - Bot messages: --slate-50 bg, --slate-800 text, left-aligned, --radius-md (with sharp bottom-left corner)
  - User messages: --accent-600 bg, white text, right-aligned, --radius-md (with sharp bottom-right corner)
  - Max bubble width: 80% of chat window width
  - Timestamp: Caption style, --slate-400, below each message cluster (grouped by minute)
- Typing indicator: three dots bouncing animation in a bot bubble

**Input area:**
- Bottom of chat window, border-top 1px --slate-200
- Text input (no border, full width) + send button (--accent-600 icon)
- Placeholder: "Ask about our services..."
- Submit on Enter (Shift+Enter for newline)
- Send button appears only when input has text

### 13.2 Functionality

**Powered by:** Claude API (Anthropic). Backend proxy endpoint required (never expose API key client-side).

**System prompt for the AI:**
```
You are the AI assistant for RouteToAbroad, a premium consultancy
bridging India and East Asia. You help with:
- Education: Scholarships and university placement in China
- Tourism: Travel to China, Japan, South Korea
- Trade: Import-export facilitation between India and China

Be helpful, professional, and warm. Keep responses concise (2-3
sentences unless detail is requested). If you don't know something
specific, direct users to fill out the inquiry form or call
+91 96330 61109. Never make up specific scholarship amounts,
visa timelines, or pricing — direct to human advisors for specifics.

Key info:
- CEO: Mr. Minhaj Al Shukoor
- Director: Mr. Vijeesh Vijayan
- Email: info@routetoabroad.com
- Phone: +91 96330 61109
- Website: www.routetoabroad.com
```

**Greeting message (auto-sent on first open):**
"Hi! I'm RouteToAbroad's AI assistant. I can help with questions about studying in China, traveling to East Asia, or India-China trade. What are you interested in?"

**Quick reply buttons (shown after greeting):**
```
[Pill buttons below greeting message]
🎓 Education    🌏 Tourism    📦 Trade    💬 Something else
```

Clicking a quick reply sends it as a user message and triggers a relevant response.

**Conversation persistence:** Store conversation in localStorage for the session. Clear on explicit "New conversation" action (available in header menu).

### 13.3 Technical Implementation

```
Stack:
- Frontend: React component with local state
- API: POST /api/chat endpoint (Vite dev proxy or serverless function)
- Backend: Node.js handler that:
  1. Receives messages array
  2. Forwards to Claude API (claude-sonnet as model for speed/cost)
  3. Streams response back via SSE or chunked response
  4. Rate limiting: 20 messages per session, 5 per minute

Streaming: Render bot response token-by-token for real-time feel.
Error handling: "I'm having trouble connecting. Please try again
or reach us at info@routetoabroad.com" — shown as bot message.
```

---

## 14. Animation System

### 14.1 Philosophy

Animations serve three purposes: (1) guide attention, (2) communicate spatial relationships, (3) add polish. They must NEVER delay the user or feel sluggish. The guiding principle is: if you notice the animation, it's too much.

### 14.2 Scroll-Driven Reveal System

Use a single reusable `<Reveal>` wrapper component with variants:

```
Variants:
  fade:        opacity 0 → 1
  slide-up:    opacity 0 → 1, translateY(24px) → 0
  slide-left:  opacity 0 → 1, translateX(24px) → 0
  slide-right: opacity 0 → 1, translateX(-24px) → 0
  scale:       opacity 0 → 1, scale(0.95) → 1

Props:
  variant: string (default: "slide-up")
  delay: number in ms (default: 0)
  duration: number in ms (default: 600)
  threshold: number 0-1 (default: 0.15 — triggers when 15% visible)
  once: boolean (default: true — only animates once)

Easing: cubic-bezier(0.16, 1, 0.3, 1) for all reveals
```

Implementation: Use IntersectionObserver (not a heavy library). Apply CSS transitions triggered by adding a `.is-visible` class. Framer Motion is acceptable but not required for scroll reveals — native IntersectionObserver + CSS is lighter.

### 14.3 Stagger Pattern

For groups of elements (card grids, list items), use a `<StaggerGroup>` wrapper:

```
Props:
  stagger: number in ms (default: 100)
  variant: string (same as Reveal)

Children receive incrementing delay: child[0] = 0ms, child[1] = 100ms, child[2] = 200ms...
Max stagger delay cap: 500ms (so grids of 12 items don't take 1.2s)
```

### 14.4 Specific Animation Details

| Element | Animation | Trigger | Duration |
|---------|-----------|---------|----------|
| Nav dropdown | opacity + translateY(-8px→0) | hover/click | 250ms |
| Mobile menu | translateX(100%→0) | hamburger click | 300ms |
| Page transition | opacity + translateY(12px→0) | route change | 400ms |
| Hero content | staggered slide-up | page load | 600ms per element |
| Section labels | slide-up | scroll reveal | 400ms |
| Cards | slide-up, staggered | scroll reveal | 600ms |
| Stat numbers | count-up | scroll reveal | 1500ms |
| Testimonial quote | fade, line by line | scroll reveal | 800ms |
| Pillar tab content | opacity + translateX | tab switch | 400ms |
| Form success | scale(0.95→1) + opacity | submit | 400ms |
| Chat window | scale(0.9→1) + opacity | button click | 250ms |
| Scroll-to-top button | opacity | scroll threshold | 200ms |
| Timeline line draw | clip-path/height | scroll | continuous |
| Image hover zoom | scale(1→1.05) | hover | 400ms |
| Button hover lift | translateY(-1px) | hover | 200ms |
| Reading progress bar | width | scroll | continuous |

### 14.5 Parallax

Apply parallax ONLY to these elements (overuse kills performance):
- Homepage hero visual rectangles: 10px max movement on mouse move
- Background decorative elements (gradient blobs, circles): subtle vertical parallax on scroll (0.5x speed)
- Do NOT parallax text, cards, or any content the user needs to read

Implementation: Use `transform: translate3d()` for GPU acceleration. Throttle mouse/scroll handlers to 60fps with `requestAnimationFrame`.

### 14.6 Reduced Motion

Respect `prefers-reduced-motion: reduce` media query:
- Disable all transform animations
- Keep opacity transitions but make them instant (50ms)
- Disable parallax entirely
- Disable auto-scrolling ticker
- Keep functional animations (dropdowns, accordions) but remove decorative ones

---

## 15. Technical Architecture

### 15.1 Project Structure

```
routetoabroad/
├── public/
│   ├── favicon.svg
│   ├── og-image.png
│   └── textures/
│       └── noise.svg
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── index.css                    (Tailwind directives + CSS custom properties)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── PageLayout.tsx       (shared page wrapper with transitions)
│   │   │   └── Section.tsx          (reusable section with label pattern)
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Select.tsx
│   │   │   ├── Textarea.tsx
│   │   │   ├── FileUpload.tsx
│   │   │   ├── Accordion.tsx
│   │   │   ├── Badge.tsx            (category pills, status badges)
│   │   │   ├── StatCounter.tsx      (animated number counter)
│   │   │   ├── Placeholder.tsx      (placeholder image component)
│   │   │   └── Carousel.tsx         (horizontal scroll with snap)
│   │   ├── animation/
│   │   │   ├── Reveal.tsx
│   │   │   ├── StaggerGroup.tsx
│   │   │   └── useParallax.ts
│   │   ├── chatbot/
│   │   │   ├── ChatWidget.tsx       (main wrapper: trigger + window)
│   │   │   ├── ChatWindow.tsx
│   │   │   ├── ChatMessage.tsx
│   │   │   ├── ChatInput.tsx
│   │   │   └── useChatbot.ts        (hook: manages state, API calls, streaming)
│   │   ├── forms/
│   │   │   ├── EducationForm.tsx
│   │   │   ├── TourismForm.tsx
│   │   │   ├── TradeForm.tsx
│   │   │   └── ContactForm.tsx
│   │   └── home/                    (homepage-specific sections)
│   │       ├── Hero.tsx
│   │       ├── PillarNavigator.tsx
│   │       ├── SocialProofTicker.tsx
│   │       ├── WhyUs.tsx
│   │       ├── FeaturedTestimonial.tsx
│   │       ├── StatsBar.tsx
│   │       ├── PillarCards.tsx
│   │       └── CTASection.tsx
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── EducationPage.tsx
│   │   ├── TourismPage.tsx
│   │   ├── TradePage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── BlogListPage.tsx
│   │   ├── BlogPostPage.tsx
│   │   ├── TestimonialsPage.tsx
│   │   └── ContactPage.tsx
│   ├── hooks/
│   │   ├── useScrollReveal.ts       (IntersectionObserver hook)
│   │   ├── useCountUp.ts            (animated counter hook)
│   │   ├── useScrollDirection.ts    (for nav hide/show)
│   │   └── useMediaQuery.ts         (responsive breakpoint hook)
│   ├── lib/
│   │   ├── constants.ts             (company info, contact details, nav links)
│   │   ├── types.ts                 (shared TypeScript types)
│   │   └── utils.ts                 (classname merging, formatters)
│   ├── data/
│   │   ├── testimonials.ts          (placeholder testimonial data)
│   │   ├── blogPosts.ts             (placeholder blog data)
│   │   ├── universities.ts          (placeholder university data)
│   │   └── destinations.ts          (placeholder destination data)
│   └── styles/
│       └── typography.css           (if not fully handled by Tailwind)
├── api/                             (serverless functions or Express routes)
│   └── chat.ts                      (Claude API proxy)
├── tailwind.config.ts
├── vite.config.ts
├── tsconfig.json
├── package.json
└── design.md                        (this file)
```

### 15.2 Key Dependencies

```json
{
  "dependencies": {
    "react": "^19",
    "react-dom": "^19",
    "react-router-dom": "^7",
    "framer-motion": "^12",
    "lucide-react": "^0.400",
    "@anthropic-ai/sdk": "^0.30",
    "clsx": "^2",
    "tailwind-merge": "^2"
  },
  "devDependencies": {
    "vite": "^6",
    "@vitejs/plugin-react": "^4",
    "tailwindcss": "^4",
    "typescript": "^5",
    "@types/react": "^19",
    "@types/react-dom": "^19"
  }
}
```

### 15.3 Tailwind Configuration

Extend the default Tailwind config with the design system values:

```ts
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        accent: {
          50: '#FEF2F2',
          100: '#FEE2E2',
          500: '#EF4444',
          600: '#DC2626',
        },
        gold: {
          100: '#FEF3C7',
          500: '#D97706',
        },
        education: '#2563EB',
        tourism: '#059669',
        trade: '#7C3AED',
      },
      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      borderRadius: {
        sm: '6px',
        md: '12px',
        lg: '16px',
        xl: '24px',
      },
      boxShadow: {
        sm: '0 1px 2px rgba(0,0,0,0.04)',
        md: '0 4px 12px rgba(0,0,0,0.06)',
        lg: '0 8px 30px rgba(0,0,0,0.08)',
        xl: '0 20px 60px rgba(0,0,0,0.1)',
      },
      maxWidth: {
        content: '1280px',
        narrow: '720px',
      },
      spacing: {
        18: '4.5rem',
        88: '22rem',
        128: '32rem',
      },
    },
  },
}
```

### 15.4 SEO & Meta

Every page must have:
- Unique `<title>` tag (format: "Page Name | RouteToAbroad")
- `<meta name="description">` (unique, 150-160 chars)
- Open Graph tags (og:title, og:description, og:image, og:url)
- Twitter Card tags (twitter:card, twitter:title, twitter:description, twitter:image)
- Canonical URL
- Structured data (JSON-LD) for Organization on homepage, BreadcrumbList on inner pages

Use React Helmet (or equivalent) for head management.

### 15.5 Performance Targets

- Lighthouse Performance: 90+
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- Total bundle size: < 300KB gzipped (excluding images)
- Image strategy: Use WebP with JPEG fallback, lazy load below-fold images, use `loading="lazy"` and `decoding="async"`
- Font loading: preload critical weights, use `font-display: swap`
- Code splitting: route-based splitting with React.lazy + Suspense

### 15.6 Routing

```
/                    → HomePage
/education           → EducationPage
/tourism             → TourismPage
/trade               → TradePage
/about               → AboutPage
/blog                → BlogListPage
/blog/:slug          → BlogPostPage
/testimonials        → TestimonialsPage
/contact             → ContactPage
```

---

## 16. Anti-Slop Guidelines

These are rules to prevent the website from looking like generic AI-generated output. Follow them strictly.

### 16.1 Layout Rules
- **Never** use a 3-card centered grid as the primary layout for a section. If you must show 3 items, use asymmetric sizes, alternating layouts, or a single spotlight with supporting items.
- **Never** use equal-height columns when content naturally varies. Let cards breathe at their natural height (masonry > grid).
- **Always** use asymmetric splits (7/5 or 5/7) instead of 6/6 for content sections.
- **Always** alternate left/right content placement between consecutive sections.
- **Never** center-align body text in content sections (center-align is only for hero headings, CTAs, and stats).

### 16.2 Content Rules
- **Never** use generic headings like "Our Services", "Why Choose Us", "What We Offer". Use specific, opinionated headings that could only belong to this company.
- **Never** use filler text like "We are committed to excellence" or "Our team of experts". Say something specific or say nothing.
- **Never** use clip-art style illustrations. Use either real photos (later), geometric placeholders, or Lucide line icons.
- **Never** use more than 2 exclamation marks on the entire website.

### 16.3 Visual Rules
- **Always** include the grain texture overlay on hero sections and CTA blocks.
- **Always** use the section label pattern (bar + caption + heading) for consistency.
- **Never** use pure black (#000000) for text — use --slate-950 (#0B1120).
- **Never** use rainbow gradients or more than 2 colors in a gradient.
- **Never** use generic geometric blob backgrounds. Use the specific mesh-bg pattern defined in 1.7.
- **Always** apply the subtle photo filter (contrast + desaturation) to all images for cohesion.

### 16.4 Interaction Rules
- **Never** add animation for animation's sake. Every animation must serve reveal, feedback, or spatial orientation.
- **Never** exceed 600ms for any single animation (except counter count-up at 1500ms).
- **Always** use the same easing curve across the site: `cubic-bezier(0.16, 1, 0.3, 1)`.
- **Never** bounce, wiggle, or shake elements. Smooth, directional motion only.
- **Always** respect `prefers-reduced-motion`.

### 16.5 Typography Rules
- **Never** use more than 2 font weights in a single card/component (one for emphasis, one for body).
- **Never** go below 14px font size for any readable text (12px is allowed only for captions/labels).
- **Always** use negative letter-spacing for headings H2 and above.
- **Always** maintain generous line-height (1.7+) for body text.

---

## Company Information Reference

```
Company: RouteToAbroad
Website: www.routetoabroad.com
Email: info@routetoabroad.com
Phone: +91 96330 61109

Leadership:
  CEO: Mr. Minhaj Al Shukoor
  Director: Mr. Vijeesh Vijayan

Three Pillars:
  1. Education — Scholarships & university placement in China
  2. Tourism — Curated travel across East Asia (China, Japan, South Korea)
  3. Trade — Import-export facilitation between India and China

Social Media: [Placeholder — add actual URLs when available]
  LinkedIn, Instagram, Twitter/X, YouTube, WhatsApp Business
```
