# TruEntry, landing page

React + Vite. No UI or animation library. The only motion is a slow CSS float
on the product mockups, so the JS bundle is essentially React itself.

The page is set as a document rather than as a stack of marketing bands: a
cover sheet, a sticky contents rail in the left margin, numbered clauses on one
continuous paper ground, numbered figures with captions, and register tables
for the compliance and glossary sections. That is what separates it from the
other four TETFAIR pages, which share a banded, card-grid grammar.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # -> dist/
npm run preview
```

Vercel / Netlify: framework preset **Vite**, build `npm run build`, output `dist`.

## What's where

```
src/
  styles/tokens.css      every colour, size and spacing value
  styles/fonts.css       self-hosted Source Serif 4 + Source Sans 3
  styles/global.css      the document shell: .sheet, .doc, .clause,
                         .figure, .register, .annot, labels, pills, reveal
  hooks/
    useNavVisibility.js  pill nav: tuck on scroll, return on settle, tint swap
    useSectionSpy.js     active nav link
    useReveal.js         IntersectionObserver fade-up
  components/
    Rail.jsx             the contents index in the left margin
    Nav / Hero / Roles / Decisions / Records / Trust / Terms / Closing / Footer
    FloatingShot.jsx     3D float for the mockups: tilt, parallax, sheen, shadow
    Icons.jsx            the icon set, audited at 18 / 22 / 40px
```

## Typography

Display is **Source Serif 4** and body is **Source Sans 3**. The serif is what
gives the page its official, printed voice; the sans keeps anything that
behaves like interface legible. Radii are 4 / 6 / 8px, because documents are
not rounded.

## The role switcher

The four desks are file-folder tabs opening onto a panel. Below 620px they
drop to a plain two-up chooser, because four tabs cannot share a row there and
a wrapped folder tab reads as a mistake.

`src/components/Roles.jsx` holds the four desks in one `DESKS` array: name,
one-line summary, the numbered list of what that role does, and the screenshot
to show. Adding or editing a role is one entry in that array; the tabs, the
panel and the image all read from it.

Each desk gets its own screen rather than reusing one image. The supplied
`yoo_00799.png` contains two laptops side by side, so it was split into
`shot-jamb` (the audit report) and `shot-sysadmin` (the admin dashboard), each
cleaned with a largest-connected-component pass to drop the sliver of the
other laptop at the crop edge.

## Palette

Sampled from the shield:

| token | value | from |
|---|---|---|
| `--blue-800` | `#012F87` | "Tru" in the wordmark |
| `--blue-600` | `#0059E7` | "Entry" and the door |
| `--ink-900` | `#0C1830` | the inset Records panel |

Green, amber and red appear only as application status (`.pill--ok`,
`.pill--wait`, `.pill--no`), matching the product's own vocabulary.

## House rules carried over

- No em dashes in the copy.
- Counts are plain digits, never `01`-style.
- No glowing radial blobs and no pulsing colour animations anywhere.
- The nav bar is close to opaque so it never reads as a smudge, and it
  re-tints over the dark inset panel (the mark swaps to its light variant
  there). Its active link is marked with a rule rather than a filled lozenge.
- Everything respects `prefers-reduced-motion`.
- Partner logos sit on a plate and keep their own brand colours.
- The stubbed JAMB integration is stated once, plainly, in Records.

## The team section

`src/components/Team.jsx` sits just before the closing block and is set as
clause 6 of the document, with the photograph as Fig. 6. The photograph is `src/assets/team.webp`, 1700px wide, cropped with
`aspect-ratio` plus `object-position` so all three faces survive the crop at
every width. No names are printed yet; add them to the component when you
have them.
