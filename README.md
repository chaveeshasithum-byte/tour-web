# Heritage Travels | Journeys Through Living History (Sri Lanka)

An editorial, luxury-grade travel company website crafted for **Heritage Travels**, specializing in cultural, heritage, nature, and adventure experiences across Sri Lanka.

---

## 🏛️ Project Overview

- **Business**: Heritage Travels (Private Journeys & Cultural Expeditions)
- **Tagline**: *Journeys Through Living History*
- **Brand Personality**: Refined, warm, authentic, timeless, storytelling-driven
- **Design Philosophy**: Luxury editorial aesthetic inspired by Conde Nast Traveler & Kinfolk
- **Palette**: Warm Ivory (`#FAF7F2`), Forest Emerald (`#1C3F34`), Antique Gold (`#C5A059`), Terracotta (`#C2634B`), Charcoal (`#22252A`)
- **Typography**: Cormorant Garamond & Playfair Display (Headings) + Inter / Lato (Body)

---

## 📂 File & Directory Structure

```
heritage-travels/
├── index.html            # 1. Home (Hero, Featured Destinations, Packages, Why Us, Gallery, Testimonials)
├── places.html           # 2. Places to Explore (8+ Destinations, Category Filters, Interactive Map, Detail View)
├── tours.html            # 3. Tour Packages (Day, Multi-day, Honeymoon, Family, Custom + Accordion Itinerary)
├── about.html            # 4. About Us (Story, Founder/Team, Values, Awards & Stats Counters)
├── gallery.html          # 5. Gallery (Masonry Photo Grid with Category Filters & Modal Lightbox)
├── blog.html             # 6. Blog / Travel Stories (Featured Story, Categorized Articles, Newsletter)
├── testimonials.html     # 7. Testimonials & Reviews (Verified Stories, Rating Breakdown, Country Flags)
├── faq.html              # 8. FAQ & Travel Info (Accordion Categories, Visa/Season Info Sidebar)
├── contact.html          # 9. Contact & Book (Multi-Field Enquiry Form, Interactive Info, WhatsApp)
├── css/
│   └── styles.css        # Full Design System, Animations, Variables, Typography & Responsive Media Queries
├── js/
│   └── main.js           # Navigation shrink, Currency Switcher (USD/EUR/GBP/LKR), Lightbox, Accordions, Search
└── images/
    ├── hero.jpg          # Sigiriya Rock Fortress at sunrise
    ├── kandy.jpg         # Temple of the Sacred Tooth Relic & Kandy Lake
    ├── ella.jpg          # Demodara Nine Arches Bridge & Tea Country
    ├── galle.jpg         # Dutch Fort & Lighthouse, Southern Province
    ├── yala.jpg          # Leopard safari & wilderness landscape
    ├── mirissa.jpg       # Coconut Tree Hill & palm-fringed coast
    ├── anuradhapura.jpg  # Ruwanwelisaya Stupa & sacred bodhi tree
    ├── colombo.jpg       # Street food culture & bustling markets
    └── adams-peak.jpg    # Sri Pada sacred peak at dawn
```

---

## 🌟 Interactive Features Built-In

1. **Header & Navigation**:
   - Sticky header with glassmorphism blur and smooth shrink effect on scroll.
   - Mobile responsive drawer menu with accessible touch toggles.
   - Global destination search dialog (`Ctrl + K` / Search icon).
   - Real-time Multi-Currency selector (**USD**, **EUR**, **GBP**, **LKR**) with instant recalculation across all pricing cards.

2. **Places & Tours**:
   - Category filter tabs with smooth transitions.
   - Interactive SVG map section of Sri Lanka linking directly to regional highlights.
   - Full day-by-day interactive itinerary accordions with inclusion badges and packing recommendations.

3. **Media & Gallery**:
   - Masonry photo grid with dynamic category switching.
   - Built-in full-screen keyboard-navigable Lightbox (Escape to close, Left/Right navigation).

4. **Floating Concierge**:
   - Floating WhatsApp button with pre-filled concierge greeting.
   - Back to top quick scroll indicator.

5. **SEO & Structured Data**:
   - Valid HTML5 semantic tags, Open Graph tags, Twitter cards.
   - Schema.org `TravelAgency` JSON-LD markup on every page.

---

## 🚀 How to Run Locally

### Option 1: Direct File Viewing
Simply double-click on any `.html` file (e.g., `index.html`) or open it in Google Chrome, Microsoft Edge, Safari, or Firefox:
```bash
# In Windows PowerShell:
Start-Process "index.html"
```

### Option 2: Local HTTP Server (Recommended)
Using Python or Node.js to enable all relative links and clean previews:

**Using Python:**
```bash
python -m http.server 8080
```
Then visit `http://localhost:8080`.

**Using Node.js / npx:**
```bash
npx serve .
```

---

## 🌐 Deployment Instructions

### Deploy to Netlify
1. Log in to [Netlify](https://www.netlify.com/).
2. Drag and drop the `heritage-travels` root folder directly into the Netlify Drop zone.
3. Your site will instantly be live with free SSL!

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel` or import via [vercel.com](https://vercel.com).
2. Run `vercel` in this directory and choose the default static deployment options.

### Deploy to GitHub Pages
1. Push this directory to a GitHub repository (e.g., `username/heritage-travels`).
2. Go to **Settings** > **Pages** > **Source**: Deploy from branch `main` / `root`.
3. Save to publish.

### Deploy to Shared Hosting (cPanel / Apache / Nginx)
1. Compress the contents of `heritage-travels` into a `.zip` archive.
2. Upload and extract to your server's `public_html` directory.
3. Works out of the box with zero build steps or server runtime requirements.
