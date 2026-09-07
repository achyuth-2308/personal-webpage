# Home page visual redesign

## What will change
- Keep the opening introduction once and remove the repeated biography from the lower half of the page.
- Recompose the first screen around Achyuth's firmware identity, with an animated circuit-board and microcontroller visual behind the existing content.
- Replace the current generic expertise card with a clearer embedded-systems panel featuring Nordic, STM32, and ESP32 as technology signals.
- Turn the lower section into a concise profile snapshot: portrait, education, verified portfolio figures, technical focus areas, and personal interests—without repeating the opening copy.
- Improve entrance and scroll animations with staggered, restrained motion and reduced-motion support.
- Preserve the existing links, resume action, social links, theme, and factual career/education content.

## Interaction and layout
- Desktop: editorial two-column opening with the animated engineering visual as a supporting layer.
- Mobile: a compact single-column composition; background circuitry remains subtle and decorative, and all actions remain easy to reach.
- Animation will clarify hierarchy rather than continuously distract: a brief startup sequence, slow signal traces, and viewport-triggered reveals.

## Technical details
- Refactor `HomeSection` into small local presentation pieces for the circuit visual and profile snapshot.
- Use semantic project colors and the existing motion library; no external product imagery or brand-logo misuse.
- Validate the result at desktop and mobile widths, including text overflow, reduced-motion behavior, and navigation actions.
