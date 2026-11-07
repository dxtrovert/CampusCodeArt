# CampusCode Design System

## Brand foundations

- Background: `#F7F7F4`
- White: `#FFFFFF`
- Purple: `#7665FF`
- Lime: `#A8E62E`
- Secondary lime: `#82B91A`
- Black: `#111111`
- Border: `#DEDED8`
- Typography: Inter for interface text, Montserrat Black for the desktop hero headline, and DM Mono for labels and metadata.
- The three-stripe CampusCode mark is reused from `Assets/logo.png`. Existing assets and UI reference screenshots are preserved.

## Layout and components

- Desktop-first landing layout with responsive mobile adaptations.
- Shared sticky header changes contrast when a dark landing section is active.
- Landing sections alternate light and dark treatments; each section is an independent component.
- Rounded outlined panels, compact mono labels, oversized tight headlines, and lime/purple accents carry the visual identity.
- The hero pairs a dark curved image carousel with a separate grayscale foreground portrait, editorial support panels, and an integrated statistics strip.
- Existing screenshots in `ui/` are design references only; page backgrounds are implemented with React and CSS.

## Motion and accessibility

- On sufficiently large screens, sections after the hero use a clipped panel-to-scene transition with a scrubbed, pinned GSAP timeline. Smaller or reduced-motion layouts remain in normal flow.

- Framer Motion provides restrained entrance effects.
- Lenis supplies smooth scrolling unless the user prefers reduced motion.
- GSAP ScrollTrigger is used for section-heading reveals and scroll-driven hero pinning; motion is disabled for reduced-motion preferences.
- The hero image rail uses the React Bits FlexCarousel WebGL component with locally cached imagery, and progresses with scroll while the foreground portrait remains a separate layer.
- Interactive elements include visible focus states, semantic labels, and responsive navigation.

## Tokens

CSS custom properties are defined in `src/styles/index.css`; matching Tailwind color and font tokens are defined in `tailwind.config.js`.
