# FC Samartex 1996 website concept

A responsive Next.js App Router homepage concept based on the public club website and the FC Samartex foundation brand guide.

## Run locally

- `npm install`
- `npm run dev` (development server at http://localhost:3000)
- `npm run typecheck`
- `npm run build`
- `npm run start -- --port 3001` (serve the production build at http://localhost:3001)

## Current scope

The homepage includes brand-led hero, official fixture snapshot, editorial links to club news and media, men’s and women’s team links, club background and shop/contact routes. It is a frontend concept; match/news data is not connected to a CMS or live feed.

## Source and accuracy notes

- Crest and editorial photos are cached from media URLs embedded in the public FC Samartex website (https://www.fcsamartex.com/). Confirm club usage rights and obtain approved high-resolution/vector artwork before production.
- The match panel reflects the official men's fixture listing captured on 25 September 2026: Swedru All Blacks United FC, 26 September 2026 at 3:00 pm, Swedru Sports Stadium. Reconfirm before publishing; no live fixture feed is connected.
- The official site uses FC Samartex 1996 in its name, while its About page identifies 1995 as the founding year. Confirm the preferred year convention with the club.
- News cards link to official pages rather than inventing dated article headlines.
- Type pairing (Barlow Condensed + DM Sans) is a recommendation; the Google Fonts stylesheet is used with system fallbacks.

- The Webara footer mark is sourced from the Webara Studio website (`https://www.webarastudio.com/W.webp`); the consuming-project derivative removes only the surrounding white background so the circular icon sits cleanly on the dark footer. The attribution links to `https://webarastudio.com`.
- The live Vercel deployment is https://fc-samartex-site.vercel.app/ (direct CLI deployment under the Webara Vercel team; Git-provider auto-deployment is not connected).

## Production work still required

Confirm club approval/rights for media and crest, preferred founding-year convention, current fixture/news data source, social links, privacy/cookie needs and final page/features. The concept is deployed but is not connected to the club’s CMS or a live fixture/news feed.
