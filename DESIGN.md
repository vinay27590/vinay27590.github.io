---
name: Vinay Chouhan
description: A Java full-stack portfolio drawn as a transit network; every system is a coloured line, its modules are stations, shared tech is the interchange.
colors:
  ink: "#15171c"
  paper: "#ffffff"
  platform: "#f1f1ee"
  line-laundryos: "#0a6fb8"
  line-flexpulse: "#d8262f"
  line-mihaan: "#009a5b"
  line-direction: "#f2a900"
  line-rockfort: "#8b8f94"
typography:
  display:
    fontFamily: "Overpass, system-ui, sans-serif"
    fontSize: "clamp(3.25rem, 9vw, 6.75rem)"
    fontWeight: 900
    lineHeight: 0.88
    letterSpacing: "-0.045em"
  headline:
    fontFamily: "Overpass, system-ui, sans-serif"
    fontSize: "3.75rem"
    fontWeight: 900
    lineHeight: 0.95
    letterSpacing: "-0.04em"
  title-line:
    fontFamily: "Overpass, system-ui, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Overpass, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 800
    lineHeight: 1.33
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Overpass, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
  label:
    fontFamily: "Overpass, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 800
    lineHeight: 1.43
    letterSpacing: "normal"
    fontFeature: "\"tnum\" 1"
rounded:
  plate-sm: "3px"
  plate: "4px"
  focus: "6px"
  disc: "9999px"
spacing:
  gutter-sm: "20px"
  gutter-md: "32px"
  gutter-lg: "40px"
  block: "40px"
  section-sm: "80px"
  section: "112px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.title}"
    rounded: "{rounded.plate}"
    padding: "14px 24px"
  button-outline:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    rounded: "{rounded.plate}"
    padding: "14px 24px"
  button-outline-hover:
    backgroundColor: "{colors.platform}"
  button-header:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.plate-sm}"
    padding: "6px 16px"
  filter-chip:
    backgroundColor: "{colors.platform}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.plate-sm}"
    padding: "6px 14px"
  filter-chip-pressed:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  status-plate:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.plate-sm}"
    padding: "4px 12px"
  station-panel:
    backgroundColor: "{colors.platform}"
    textColor: "{colors.ink}"
    rounded: "{rounded.plate}"
    padding: "32px"
  nav-bar:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    height: "56px"
---

# Design System: Vinay Chouhan

## Overview

**Creative North Star: "The Network Map"**

The site is a transit authority's signage system applied to a career. A white signage ground carries one ink, an enamel-plate black header bar, and a fixed set of line colours that each mean exactly one body of work. Every system Vinay built is a line; its clients and modules are stations; Spring Boot and PostgreSQL are the interchanges every line passes through. The map is the hero, and every later section reuses its parts: strip maps for projects, a timetable for career, an interchange index for skills, a terminus for contact.

The density is a station platform's: big, heavy, tightly tracked station-sign names, short legible lines of supporting text, generous air between sections, and heavy ink rules that open each board. The world is flat. Depth never comes from shadow; it comes from ink weight, line colour, and the difference between a filled track and a hollow one.

The world rejects the dark-navy split hero with a gradient name, the skill-chip grid, and rows of identical project cards.

**Key Characteristics:**
- One ink (#15171c) on white, with a single warm-grey platform surface for panels and chips.
- Five route colours, one meaning each; never decorative.
- Hollow-cased track and hollow bullets mean "under construction"; solid means shipped.
- Overpass for everything, heavy (800 to 900) and negatively tracked at display sizes, tabular figures for every number.
- Enamel-plate corners (3 to 4px) on rectangles; true circles reserved for stations, roundels, interchanges, bullets and track ends.
- One load animation (the map draws in), one interaction grammar (isolation: everything else dims to 0.12).

## Colors

A single ink on white signage, with route colours that are law rather than palette.

### Primary
- **Signage Ink** (ink): every piece of text, every rule, the header bar, primary buttons, pressed filters, station rings at termini and interchanges, the selected station disc, focus outlines and text selection. It is also the route colour for current independent work in the timetable, where it carries both in-progress lines.

### Secondary (route colours)
- **LaundryOS Blue** (line-laundryos): LaundryOS only. Track, station rings, roundel, list ticks, link underlines, filter bullet.
- **FlexPulse Red** (line-flexpulse): FlexPulse only, same roles.
- **Mihaan Green** (line-mihaan): Mihaan only, same roles; also its timetable route.
- **Direction Amber** (line-direction): Direction Software only, same roles. Text set on amber is always ink, never white.
- **Rockfort Grey** (line-rockfort): the Rockfort support role in the timetable, the one job with no line on the map.

### Neutral
- **Signage White** (paper): page ground, station disc fill, the hollow core of under-construction track, text on ink.
- **Platform Grey** (platform): the selected-station panel, unpressed filter chips, image wells, outline-button hover. The only tinted surface.
- **Ink tints**: secondary text at ink 85% (body), 80% (supporting), 70 to 75% (meta, captions, map status); hairline dividers at ink 10 to 15%; filter hover at ink 10%.

### Named Rules
**The One Meaning Rule.** Each route colour belongs to one body of work and appears only where that work is referenced. A new project gets a new line colour; no route colour is ever reused for decoration, status, emphasis or a UI accent.

**The Ink Carries Text Rule.** Running text, labels and numbers are set in ink or its tints. Route colours mark track, rings, ticks, bullets and underlines; the only coloured letterform is a roundel's initial.

**The Hollow Casing Rule.** Under construction is drawn as hollow track: the route colour as a casing around a white core (11px track with a 4.5px white core on the map; a 3px inset ring on HTML track; a 2.5px ring on bullets). Shipped work is solid. Never use dashes, fades or dates to signal in-progress work.

## Typography

**Display Font:** Overpass (with system-ui, sans-serif)
**Body Font:** Overpass (with system-ui, sans-serif)

**Character:** Overpass is a highway-signage face; one family does everything, and hierarchy comes from weight and tracking rather than a second face. Display sizes are black and tightly tracked like a station name; body copy stays regular and open.

### Hierarchy
- **Display** (900, clamp 3.25 to 6.75rem, 0.88, -0.045em): the station-sign name in the hero. One per page.
- **Headline** (900, 3rem mobile to 3.75rem, 0.95, -0.04em): section names on their station boards.
- **Title, line** (900, 1.875rem mobile to 2.25rem, 1, -0.03em): a line's name at the head of its project section.
- **Title** (800, 1.5rem, -0.02em): station panel names, the hero role line (to 1.75rem), the about lead (to 1.875rem).
- **Body** (400, 1.125rem, 1.625): ledes and prose in ink 85%, capped at 58 to 68ch.
- **Label** (800, 0.875rem, sentence case, normal tracking): list-group heads ("Built with", skill groups), status plates, filters, header résumé button. Never uppercase, never letter-spaced.
- **Map labels** (SVG): line names 800 at 19px (17px mobile), interchanges 800 at 15px, stations 600 at 14.5px (14px mobile), status 600 at 13px (12px mobile) in ink 70%.

### Named Rules
**The Tabular Figures Rule.** Every number that can be compared (periods, results, facts, statuses) is set with tabular figures; the body defaults to lining numerals.

**The Drawn Dot Rule.** Inline lists are separated by a drawn dot (a 0.24em circle in currentColor at 70% opacity, 0.5em either side, with a screen-reader comma), never the middle-dot glyph, which Overpass sets off-centre.

## Layout

A single centred column, max 1280px, with gutters of 20px, 32px from sm, 40px from lg. A fixed 56px ink bar sits on top; anchors scroll with a 3.5rem offset. Sections open 80px (112px from sm) below the previous one; blocks inside a section sit 40px apart.

The hero stacks the station-sign name, role line, stack line and summary on the left with the résumé and email actions in a column on the right (from lg), then the full-width network map below. Below lg the horizontal map is swapped for a vertical diagram: four parallel tracks through a shared interchange, each line peeling off with its stations listed beside it.

Project sections use a 12-column split from lg (7 for the strip map and station panel, 5 for the gallery and facts). Skills flow into 1, 2, then 3 newspaper columns. The timetable is a three-column grid (route, period, details) collapsing to two on mobile.

**The Station Board Rule.** A section opens with a 6px ink rule, then its headline; a list group opens with a 3px ink rule, then its label; rows inside are divided by ink 10 to 15% hairlines. Rules, not boxes, organise the page.

## Elevation & Depth

Flat. There are no drop shadows anywhere. `box-shadow` is used only as an inset ring, a stroke that hugs the radius (outline buttons, hollow track, hollow bullets, station rings, status plates, the gallery placeholder frame). Depth is conveyed by ink weight, the platform-grey surface, and isolation dimming.

**The Flat Signage Rule.** Nothing floats. If a surface needs separation, give it platform grey or an ink rule, never a shadow.

## Shapes

Two shape families, never mixed:

- **Enamel plates**: rectangles with barely softened corners. 3px for small plates (status plates, filter chips, header résumé button), 4px for large ones (primary and outline buttons, the station panel, images and the gallery frame). Focus outlines round to 6px.
- **Transit marks**: true circles and capsules. Station discs (white fill, route-colour ring; ink ring at the terminus), line roundels (filled or hollow with the initial), interchange capsules (white, 4px ink stroke, fully rounded), skill bullets, the logo disc, round-capped track and the timetable's station dots.

Track runs on 45-degree geometry with round joins and caps. On HTML surfaces track is a 10px fully rounded bar.

**The Enamel Plate Rule.** A rectangle is never a pill and a station is never a rounded square. Full rounding belongs only to transit marks.

## Components

### Buttons
Heavy, flat enamel plates.
- **Shape:** large plate (4px); header button small plate (3px).
- **Primary:** ink fill, white Overpass 800, 14px by 24px (12px by 20px mobile), with a leading download icon. Hover lightens to ink 85%.
- **Outline:** white with a 3px inset ink ring, same size; hover fills platform grey.
- **Header résumé:** white plate on the ink bar, ink 800 text at 0.875rem; hover white 85%.
- **Focus:** global 3px ink outline, 3px offset, 6px radius; white outline inside the header.

### Chips (skill filters)
- **Style:** small plate, platform grey, ink 800 label at 0.875rem, line bullet leading.
- **State:** pressed fills ink with white text (`aria-pressed`); unpressed hovers to ink 10%. Filtering dims non-matching skill rows to 0.25.

### Status plate
- **Shipped:** ink plate, white tabular label with drawn-dot separators.
- **Under construction:** white plate with a 2px inset route-colour ring, ink text, and a small solid route-colour dot.

### Cards / Containers (station panel)
- **Corner Style:** large plate (4px).
- **Background:** platform grey; no border, no shadow.
- **Internal Padding:** 24px, 32px from sm.
- **Contents:** title, ink 75% summary, points ticked with a 16 by 3px route-colour bar, results as a hairline-divided definition list with tabular 800 values.

### Navigation
- **Style:** fixed 56px ink bar, logo disc plus name in 800, links in 600 at 0.95rem in white 78%.
- **Hover / Active:** link goes full white and a 3px white underline bar (2px radius) scales in from the left; the active section is tracked by scroll position.
- **Mobile:** a menu button opens a stacked list under a white 15% rule, rows divided by white 10% hairlines, active row in 800; Escape closes it.

### Network map (signature)
- Hand-placed SVG in a 1200 by 430 viewBox. Line names and status sit left of the track; four stations per line, the terminus ringed in ink; two ink interchange capsules (Spring Boot, PostgreSQL) carry all four lines.
- Each line is a link with a 34px transparent hit path. Hover or focus isolates it: every other line drops to 0.12 opacity over 0.35s on cubic-bezier(0.16, 1, 0.3, 1). Focus underlines the line's labels instead of drawing an outline.
- The map draws in once on load with a left-to-right clip reveal (top-to-bottom on the vertical diagram), 1.6s on the same curve after 0.15s, only when motion is allowed. Nothing else on the page animates on entry.
- A legend beneath shows solid and hollow ink track as "Shipped" and "Under construction".

### Strip map (station tabs)
- The line's track runs behind four 36px station discs (horizontal from sm, vertical on mobile); discs are ARIA tabs with arrow, Home and End keys.
- **Unselected:** white disc with a 4px route-colour ring, name in 600 at ink 80%. Hover scales the disc to 1.1.
- **Selected:** ink disc with a white centre dot; name in 800 with a 3px route-colour underline at 6px offset.

### Line roundel
Circle with the line's initial in 900 at 48% of its size. Shipped: route-colour fill, white initial (ink on amber). Under construction: white fill, route-colour ring at a tenth of its size, route-colour initial.

### Gallery placeholder
A 4:3 large plate with a 3px inset route-colour frame and 135-degree route-colour hatching at 8% (14px bands), centred roundel and "Screenshots coming soon". Real screenshots replace it as 4:3 large plates on platform grey.

### Timetable
Each job is a station: a 24px white disc with a 4px ink ring on the route. The route below it is one 10px track per line worked on (solid or hollow, 4px apart), or a single track in the job's colour. Line links underline 2px in the route colour, thickening to 3px on hover.

### Terminus
All four tracks run left in parallel (7px apart) into a 12px ink buffer bar.

## Do's and Don'ts

### Do:
- **Do** give every body of work exactly one route colour and use it only for that work's track, rings, ticks, bullets and underlines.
- **Do** draw in-progress work as hollow-cased track (route-colour casing, white core) everywhere it appears: map, strip map, timetable, bullets, roundels, legend.
- **Do** set every number in tabular figures and every inline list with drawn separator dots.
- **Do** open sections with a 6px ink rule and list groups with a 3px ink rule.
- **Do** keep rectangles at 3px or 4px corners and reserve circles and capsules for stations, roundels, interchanges, bullets and track.
- **Do** isolate on hover or focus by dimming every other line to 0.12, and keep the single map reveal as the only entrance motion, gated on reduced-motion preference.
- **Do** use the 3px ink focus outline (3px offset, 6px radius), white inside the header, and ink-on-white selection.

### Don't:
- **Don't** use dashes, fades, or dates on track to mean "in progress"; dashes read as a broken or planned route. A fine dotted leader from a station to its label in the vertical diagram is the only dashed stroke.
- **Don't** set running text in a route colour, and never put white text on amber.
- **Don't** add drop shadows; box-shadow exists only as an inset ring.
- **Don't** use the middle-dot glyph as a separator.
- **Don't** use a second typeface, uppercase letter-spaced labels, or light display weights.
- **Don't** build a dark-navy split hero with a gradient name, a skill-chip grid, or rows of identical project cards.
- **Don't** round a rectangular control into a pill.
