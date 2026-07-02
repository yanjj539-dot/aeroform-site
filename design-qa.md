# Design QA

## Target

- Brand: AEROFORM
- Prototype URL: `http://127.0.0.1:3000/`
- Primary visual truth: `C:\Users\严\AppData\Local\Temp\codex-clipboard-623dd567-290f-4995-884a-61283747cd17.png`
- Added reference: `https://podium.global/`
- Podium visual capture: `C:\Users\严\Desktop\AI项目\Podium 网页\aeroform-site\tmp\reference\podium-desktop-ua.png`
- Podium mobile capture: `C:\Users\严\Desktop\AI项目\Podium 网页\aeroform-site\tmp\reference\podium-mobile.png`
- Note: `https://podium.global/` returned HTTP 200 and its HTML/CSS were inspected. The first plain Headless Chrome capture produced a browser error page at `C:\Users\严\Desktop\AI项目\Podium 网页\aeroform-site\tmp\reference\podium-desktop.png`; the later user-agent/certificate-tolerant capture succeeded and is used as the Podium visual reference.

## Reference Signals Used

- Podium uses a fixed transparent header, very large brand/display type, restrained black/white palette, global canvas/devoted motion layer, `work/about/contact` IA, availability/contact status language, large sports image/video assets, and project-list style metadata rows.
- The AEROFORM page should translate those signals into a performance product site, not copy Podium content or assets.

## Implementation Evidence

- Final desktop screenshot: `C:\Users\严\Desktop\AI项目\Podium 网页\aeroform-site\tmp\qa-podium\aero-after-desktop-final.png`
- Final desktop long screenshot: `C:\Users\严\Desktop\AI项目\Podium 网页\aeroform-site\tmp\qa-podium\aero-after-full-desktop.png`
- Final mobile screenshot: `C:\Users\严\Desktop\AI项目\Podium 网页\aeroform-site\tmp\qa-podium\aero-after-full-mobile-final2.png`
- Focused mobile materials crop: `C:\Users\严\Desktop\AI项目\Podium 网页\aeroform-site\tmp\qa-podium\aero-after-mobile-materials-crop.png`
- Full-view comparison evidence: `C:\Users\严\Desktop\AI项目\Podium 网页\aeroform-site\tmp\qa-podium\source-vs-final-desktop.png`
- Podium comparison evidence: `C:\Users\严\Desktop\AI项目\Podium 网页\aeroform-site\tmp\qa-podium\podium-vs-final-desktop.png`
- Screenshot server: temporary production server at `http://127.0.0.1:3001/` from the built `.next` output. It was stopped after capture; the live editable preview remains `http://127.0.0.1:3000/`.

## Viewports

- Desktop hero / comparison: 1440 x 2200
- Desktop full page: 1440 x 7200
- Mobile full page: 390 x 10000
- Focused mobile crop: bottom 390 x 1700 region

## Required Fidelity Surfaces

- Fonts and typography: large condensed uppercase system remains consistent; desktop Hero title was reduced after QA so `ENGINEERED FOR MOTION` is fully readable beside the media column. Mobile materials heading was reduced to prevent `ACTIVE SURFACE` clipping.
- Spacing and layout rhythm: page now has stronger Podium-like editorial rhythm through the status strip, field index, tighter product grid, technology manifesto, gallery sequence index, and clearer full-width bands.
- Colors and visual tokens: retained AEROFORM black/fog/lime palette while aligning more closely to Podium's minimal black/white sport editorial language.
- Image quality and asset fidelity: all visible assets are real project assets under `public/assets`; no placeholder drawings or fake visual stand-ins were introduced. Product and gallery images load in the long screenshots.
- Copy and content: copy remains AEROFORM-specific. Podium reference language was translated only structurally through availability/index/sequence concepts.

## Findings

- No actionable P0/P1/P2 findings remain.

## Patches Made Since Previous QA Pass

- Added `PerformanceIndex` as a Podium-inspired field/project index section.
- Refined Hero with availability status, proof-point grid, and real image stack using existing AEROFORM assets.
- Converted product grid to a tighter catalog system with one-pixel grid rhythm.
- Added a technology manifesto row and motion-gallery sequence index.
- Tuned GSAP row animation from horizontal to vertical movement to avoid mobile clipping.
- Reduced desktop Hero and mobile material heading sizes after screenshot QA found text collision/clipping risk.
- Disabled Next dev indicator in `next.config.ts` and restarted the dev server for a clean preview.
- Added explicit `height: auto` to logo images to clear Next/Image aspect-ratio warnings.

## Verification

- `npm run lint` passed.
- `npm run build` passed with `next build --webpack`.
- `http://127.0.0.1:3000/` returned HTTP 200 after dev-server restart.
- Temporary production screenshot server `http://127.0.0.1:3001/` returned HTTP 200 and was stopped after capture.
- Final desktop and mobile screenshots were reviewed.
- Focused material crop confirms the mobile `QUIET TEXTURE. ACTIVE SURFACE.` heading is no longer clipped.

## 2026-07-01 Scroll-driven Performance System Pass

### New Scope

- Rebuilt the page around the supplied `Scroll-driven Performance System Website` brief.
- Added Intro Loader, cinematic black Hero, light Philosophy split section, sticky Product System, merged Material Lab, parallax Motion Gallery, cinematic Footer, and cursor trail micro interaction.
- Removed the ordinary product card grid from the rendered homepage flow.

### New Evidence

- Desktop full screenshot: `C:\Users\严\Desktop\AI项目\Podium 网页\aeroform-site\tmp\qa-scroll-system\desktop-full-v2.png`
- Mobile full screenshot: `C:\Users\严\Desktop\AI项目\Podium 网页\aeroform-site\tmp\qa-scroll-system\mobile-full-final.png`
- Product anchor screenshot: `C:\Users\严\Desktop\AI项目\Podium 网页\aeroform-site\tmp\qa-scroll-system\desktop-products-final.png`
- Product mid-scroll CDP screenshot: `C:\Users\严\Desktop\AI项目\Podium 网页\aeroform-site\tmp\qa-scroll-system\desktop-product-scroll-cdp.png`
- Mobile product anchor screenshot: `C:\Users\严\Desktop\AI项目\Podium 网页\aeroform-site\tmp\qa-scroll-system\mobile-products-final.png`
- Material Lab screenshot: `C:\Users\严\Desktop\AI项目\Podium 网页\aeroform-site\tmp\qa-scroll-system\desktop-lab-final.png`
- Motion Gallery screenshot: `C:\Users\严\Desktop\AI项目\Podium 网页\aeroform-site\tmp\qa-scroll-system\desktop-gallery-final.png`

### New Verification

- `npm run lint` passed.
- `npm run build` passed with `next build --webpack`.
- `http://127.0.0.1:3000/` returned HTTP 200.
- Chrome DevTools Protocol scroll sample confirmed `.product-stage` computed `position: sticky`.
- Product mid-scroll sample at `scrollY=4781` showed product visual/detail opacities `[0, 0, 1, 0]`, confirming the sticky sequence switched to product `03 / 04`.
- Desktop overflow sample showed `bodyWidth=1425` and `viewportWidth=1440`, so no horizontal overflow at the tested desktop viewport.
- Screenshot QA found and fixed two issues: offscreen `gsap.from` tweens pre-hid later modules in full-page screenshots, and large Lab/Gallery titles collided with right-side content.
- Mobile product anchor screenshot confirms the fallback product flow is interleaved as text plus image. Full-page screenshots from the top can under-report lazy-loaded offscreen images, so anchor screenshots are used for image-loading proof.

## 2026-07-01 Motion Refinement + Art Direction Pass

### New Scope

- Refined the site as a cinematic high-end running brand page rather than adding more animation volume.
- Reworked Hero into a larger overlapping runner/title composition with a single thin lime anchor line and sequenced intro.
- Rebuilt Product System presentation around one dominant campaign product, scroll/click sequence switching, blur/scale image transitions, and a bottom numbered thumbnail index.
- Changed Material Lab from dark tech-card language to a light grey material laboratory with sticky title, fine lines, material imagery, and active numbered states.
- Loosened Motion Gallery into a more spacious image-flow layout with restrained hover: slight scale, brightness, caption, and a one-pixel lime line.
- Reduced cursor trail to 3 low-opacity dots and kept complex cursor/parallax behavior off mobile.

### New Evidence

- Source visual truth: `C:\Users\严\AppData\Local\Temp\codex-clipboard-623dd567-290f-4995-884a-61283747cd17.png`
- Full-view comparison evidence: `C:\Users\严\Desktop\AI项目\Podium 网页\aeroform-site\tmp\qa-art-direction\source-vs-art-direction.png`
- Desktop Hero screenshot: `C:\Users\严\Desktop\AI项目\Podium 网页\aeroform-site\tmp\qa-art-direction\desktop-hero-final.png`
- Desktop Product mid-scroll screenshot: `C:\Users\严\Desktop\AI项目\Podium 网页\aeroform-site\tmp\qa-art-direction\desktop-product-mid-final.png`
- Desktop Material Lab screenshot: `C:\Users\严\Desktop\AI项目\Podium 网页\aeroform-site\tmp\qa-art-direction\desktop-lab-final2.png`
- Desktop Gallery screenshot: `C:\Users\严\Desktop\AI项目\Podium 网页\aeroform-site\tmp\qa-art-direction\desktop-gallery.png`
- Warm desktop full-page screenshot: `C:\Users\严\Desktop\AI项目\Podium 网页\aeroform-site\tmp\qa-art-direction\desktop-full-warm.png`
- Warm mobile full-page screenshot: `C:\Users\严\Desktop\AI项目\Podium 网页\aeroform-site\tmp\qa-art-direction\mobile-full-warm.png`
- Mobile Product anchor screenshot: `C:\Users\严\Desktop\AI项目\Podium 网页\aeroform-site\tmp\qa-art-direction\mobile-products-final.png`

### Viewports

- Desktop module screenshots: 1440 x 1200
- Desktop Gallery screenshot: 1440 x 1400
- Desktop full-page screenshot: 1440 x 1200 viewport, warmed by scrolling before capture
- Mobile screenshots: 390 x 1200 viewport

### Required Fidelity Surfaces

- Fonts and typography: display type stays condensed, uppercase, and aggressive, but Lab/mobile headings were reduced to prevent word clipping and right-column collision.
- Spacing and layout rhythm: Hero now uses overlap and negative visual relation; Product has a stronger campaign stage; Lab and Gallery gained larger pauses and fewer card-like boundaries.
- Colors and visual tokens: lime is limited to labels, primary button, active numbers, hover/anchor lines, and logo accents. Lab moved to light grey to reduce cheap tech-site feel.
- Image quality and asset fidelity: all visible imagery uses real project assets from `public/assets`; source product, material, hero, and gallery images load in warmed/anchor screenshots.
- Copy and content: content remains AEROFORM-specific and avoids explanatory UI instructions; product copy reads as functional system/spec language.

### Findings

- No actionable P0/P1/P2 findings remain.

### Patches Made Since Previous QA Pass

- Replaced simultaneous Hero entry with a directed sequence: image, header/logo, anchor line, label, split title, copy, buttons, metadata.
- Replaced Product hard cuts with blur/scale/opacity image switching and text stagger.
- Added Product thumbnail index with click-to-scroll support and active opacity driven by the product timeline.
- Reworked Material Lab color, layout, line, image, and number animation treatment.
- Reworked Gallery spacing, tile dimensions, hover line, and per-tile entrance movement.
- Reduced cursor intensity and dot count.
- Fixed QA-found issues: Product mini index text truncation and Material Lab title collision with active number.

### New Verification

- `npm run lint` passed.
- `npm run build` passed with `next build --webpack`.
- `http://127.0.0.1:3000/` returned HTTP 200.
- Product mid-scroll sample at 58% through `.product-system` returned visual opacities `["0","0","0.9997","0"]` and detail opacities `["0","0","1","0"]`, confirming product `03 / 04` is active.
- Product thumbnail opacities at the same point were `["0.46","0.460001","0.999848","0.46"]`, confirming the active thumbnail follows the scroll state.
- Warm full-page screenshots were captured after scrolling through the page so lazy-loaded images are visible in QA evidence.

final result: passed

## 2026-07-02 Typography + Background + Layout Refinement Pass

### Scope

- Refined the existing AEROFORM prototype by subtraction: typography scale, background systems, spacing, fine lines, numbering, image crop, and visual hierarchy.
- Kept the page structure intact and avoided adding new feature blocks, decorative HUD elements, particles, strong glow, or generic tech styling.
- Used the current [Podium](https://podium.global/) site as a restraint reference for editorial pacing, sparse metadata, and image-led rhythm, while keeping AEROFORM's black/fog/lime running identity.

### Evidence

- Desktop Hero screenshot: `C:\Users\严\Desktop\AI项目\Podium 网页\aeroform-site\tmp\qa-typography-background\desktop-hero-final.png`
- Desktop Product mid-scroll screenshot: `C:\Users\严\Desktop\AI项目\Podium 网页\aeroform-site\tmp\qa-typography-background\desktop-product-mid-final.png`
- Desktop Material Lab screenshot: `C:\Users\严\Desktop\AI项目\Podium 网页\aeroform-site\tmp\qa-typography-background\desktop-lab-final.png`
- Desktop Gallery screenshot: `C:\Users\严\Desktop\AI项目\Podium 网页\aeroform-site\tmp\qa-typography-background\desktop-gallery-final.png`
- Mobile Product screenshot: `C:\Users\严\Desktop\AI项目\Podium 网页\aeroform-site\tmp\qa-typography-background\mobile-products-cli.png`
- Mobile Material Lab screenshot: `C:\Users\严\Desktop\AI项目\Podium 网页\aeroform-site\tmp\qa-typography-background\mobile-lab-cli.png`
- Mobile Gallery screenshot: `C:\Users\严\Desktop\AI项目\Podium 网页\aeroform-site\tmp\qa-typography-background\mobile-gallery-cli.png`

### Findings

- No actionable P0/P1/P2 findings remain.
- Full-page CLI screenshots were not used as final evidence because lazy images and scroll-triggered reveal states can show offscreen modules as black placeholders. Anchor screenshots are the reliable visual proof for this pass.

### Patches Made Since Previous QA Pass

- Standardized display typography around tighter uppercase scale, stronger negative tracking, and calmer 16px body copy.
- Converted Product System fully to a dark editorial stage: dark text tokens, fine white lines, huge low-opacity product numbers, non-card product crop, and dark thumbnail index.
- Rebuilt Material Lab as a light paper/fabric surface with faint lines, sticky left title, right-side numbered modules, and 16:10 material images.
- Reworked Gallery into a dark asymmetric image sequence with horizontal fine lines, low-opacity background typography, restrained captions, and subtle polygon crops.
- Aligned GSAP Hero image `clipPath` animation with the CSS polygon crop so runtime animation no longer overrides the designed crop back to `inset()`.
- Updated mobile Product/Lab/Gallery states so headings fit, dark product cards do not revert to light commerce styling, and anchor screenshots show loaded images.

### Verification

- `npm run lint` passed.
- `npm run build` passed with `next build --webpack`.
- `http://127.0.0.1:3000/` returned HTTP 200.
- Desktop screenshots were reviewed for Hero, Product, Material Lab, and Gallery at 1440px width.
- Mobile anchor screenshots were reviewed at 390px width for Product, Material Lab, and Gallery.

final result: passed

## 2026-07-02 Motion Lab Art Direction Upgrade Pass

### Scope

- Upgraded the current AEROFORM prototype into an `AEROFORM / MOTION LAB` direction: functional running brand, motion research, product scanning, and cinematic training imagery.
- Focused on art direction rather than adding more sections: motion trace, slanted image masks, material scan lines, product scanner specs, editorial typography, cinematic darkness, technical details, and controlled lime.
- Kept the Podium reference as a pacing and restraint benchmark, while preserving AEROFORM's own black/fog/lime running system.

### Evidence

- Desktop Hero screenshot: `C:\Users\严\Desktop\AI项目\Podium 网页\aeroform-site\tmp\qa-motion-lab-upgrade\desktop-hero.png`
- Desktop Product Scanner screenshot: `C:\Users\严\Desktop\AI项目\Podium 网页\aeroform-site\tmp\qa-motion-lab-upgrade\desktop-product.png`
- Desktop Material Archive screenshot: `C:\Users\严\Desktop\AI项目\Podium 网页\aeroform-site\tmp\qa-motion-lab-upgrade\desktop-lab.png`
- Desktop Motion Wall screenshot: `C:\Users\严\Desktop\AI项目\Podium 网页\aeroform-site\tmp\qa-motion-lab-upgrade\desktop-gallery.png`
- Desktop Footer screenshot: `C:\Users\严\Desktop\AI项目\Podium 网页\aeroform-site\tmp\qa-motion-lab-upgrade\desktop-footer.png`
- Mobile Hero screenshot: `C:\Users\严\Desktop\AI项目\Podium 网页\aeroform-site\tmp\qa-motion-lab-upgrade\mobile-hero.png`
- Mobile Product screenshot: `C:\Users\严\Desktop\AI项目\Podium 网页\aeroform-site\tmp\qa-motion-lab-upgrade\mobile-product.png`

### Findings

- No actionable P0/P1/P2 findings remain.
- A first mobile QA screenshot showed the Hero image pushing the title too far down. The mobile Hero image height, copy start point, lime trace, and Chinese subtitle scale were reduced so the image, `MOTION ENGINEERED`, and subtitle all appear within the first viewport.
- Desktop footer QA showed the Chinese footer line reading too much like a secondary headline. It was reduced to supporting copy weight and scale.

### Patches Made Since Previous QA Pass

- Added a Hero motion trace that ties the title block to the runner image and extends through scroll without becoming a glow effect.
- Reframed the Hero into `MOTION ENGINEERED` with a secondary Chinese subtitle and larger slanted runner crop.
- Converted Product System into `PRODUCT SCANNER` with live product metrics, scan line behavior, scan panel, and tighter capsule navigation.
- Reworked Technology into `MATERIAL ARCHIVE` with slanted material image masks and thin scan-line sweeps.
- Rebuilt Gallery into a cinematic overlapping motion wall with indexed tiles and a quiet background `MOTION` word.
- Added a stronger footer brand close with `AEROFORM`, `BUILT TO MOVE LIGHTER.`, and restrained Chinese support copy.
- Refined dark backgrounds, section typography, body opacity, fine lines, image contrast, and mobile Hero hierarchy.

### Verification

- `npm run lint` passed.
- `npm run build` passed with `next build --webpack`.
- `http://127.0.0.1:3000/` returned HTTP 200.
- Desktop screenshots were reviewed for Hero, Product Scanner, Material Archive, Motion Wall, and Footer.
- Mobile screenshots were reviewed for Hero and Product at 390px width.

final result: passed
