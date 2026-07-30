<div align="center">

# 🏆 World Cup 2026

### Every team, every stadium, every match — told in clay and data.

A scroll-driven data-storytelling site covering the 2026 FIFA World Cup: **48 nations**, **16 host cities**, **104 matches**, three countries, one tournament.

### 🌐 Live Site: [https://fifa-world-cup-2026-rosy.vercel.app/](https://fifa-world-cup-2026-rosy.vercel.app/)

[![Live Site](https://img.shields.io/badge/🌐_Live_Site-Visit_Website-E63946?style=for-the-badge)](https://fifa-world-cup-2026-rosy.vercel.app/)
[![Vercel](https://img.shields.io/badge/Vercel-Production-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://fifa-world-cup-2026-rosy.vercel.app/)

[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-Semantic-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)

![48 Nations](https://img.shields.io/badge/Nations-48-1D3557?style=flat-square)
![16 Host Cities](https://img.shields.io/badge/Host_Cities-16-1D3557?style=flat-square)
![104 Matches](https://img.shields.io/badge/Matches-104-1D3557?style=flat-square)
![39 Days](https://img.shields.io/badge/Days-39-1D3557?style=flat-square)

**[🌐 Live Site](https://fifa-world-cup-2026-rosy.vercel.app/) · [⚽ All Matches](https://fifa-world-cup-2026-rosy.vercel.app/matches.html) · [🏟 Stadiums](https://fifa-world-cup-2026-rosy.vercel.app/stadiums.html) · [👕 Teams](https://fifa-world-cup-2026-rosy.vercel.app/teams.html)**

</div>

---

## 📚 Table of Contents

- [📖 Overview](#-overview)
- [🌍 Tournament at a Glance](#-tournament-at-a-glance)
- [🗺 What's on the Site](#-whats-on-the-site)
- [🛠 Tech Stack](#-tech-stack)
- [🖼 Visual Preview](#-visual-preview)
- [🧭 Site Map](#-site-map)
- [📂 Project Structure](#-project-structure)
- [🚀 Getting Started](#-getting-started)
- [💬 Feedback](#-feedback)
- [👤 Author](#-author)

---

## 📖 Overview

**World Cup 2026** is a scroll-driven data story covering every nation, stadium, and match of the 2026 FIFA World Cup — the first edition of the tournament to feature 48 teams, hosted jointly across the **United States, Mexico, and Canada**.

It's built with plain **HTML and JavaScript** — no framework, no build step — and deployed on both **Vercel** and **GitHub Pages**. It's also part of the weekly **"Drop"** series from **[Saifis Works](https://saifis.works)**: *"Pop culture and sport, told in clay and data."*

---

## 🌍 Tournament at a Glance

| Stat | Detail |
|---|---|
| 🌍 Nations | 48 |
| 🏙 Host Cities | 16 |
| ⚽ Matches | 104 |
| 📅 Duration | 39 days (Jun 11 – Jul 19, 2026) |
| 🎬 Opening Match | Mexico v South Africa · Estadio Azteca |
| 🏆 Final | MetLife Stadium, East Rutherford, NJ |
| 👑 Defending Champions | Argentina |

---

## 🗺 What's on the Site

| Section | What You'll Find |
|---|---|
| 🏟 **Stadiums** | All 16 host venues across the US, Mexico & Canada |
| 👕 **Teams** | Profiles for all 48 qualified nations |
| 📅 **Matches** | The complete fixture list — all 104 matches |
| 📊 **Standings** | Group standings across all 12 groups |
| 🔴 **Live** | Real-time score updates as matches happen |
| ⭐ **The Goodbye Tour** | Likely-final World Cups for Ronaldo, Messi, Modrić, Mané & Ochoa |
| 🐐 **Mascots** | Maple (Canada), Zayu (Mexico) & Clutch (USA) |
| 🆕 **Debutants** | First-timers: Cabo Verde, Curaçao, Jordan & Uzbekistan |

---

## 🛠 Tech Stack

| Layer | Technology | Notes |
|---|---|---|
| **Structure** | HTML5 | Multi-page static site, no SPA framework |
| **Interactivity** | Vanilla JavaScript | Data rendering, live scores, mobile navigation |
| **Data** | `data.js` | Match, team & stadium data |
| **Assets** | WebP imagery | Stadiums, mascots, trophy & team artwork |
| **Fonts** | Google Fonts | Self-hosted locally |
| **Analytics** | Google Tag Manager | Self-hosted locally |
| **Hosting** | Vercel | Production deployment |
| **Hosting** | GitHub Pages | Secondary deployment |

---

## 🖼 Visual Preview

<div align="center">

<img src="https://fifa-world-cup-2026-rosy.vercel.app/trophy/cup-trophy.webp" width="220" alt="World Cup Trophy" />

**Host Stadiums**

<img src="https://fifa-world-cup-2026-rosy.vercel.app/stadiums/mexico-city-stadium.webp" width="46%" alt="Estadio Azteca, Mexico City" />
<img src="https://fifa-world-cup-2026-rosy.vercel.app/stadiums/new-york-new-jersey-stadium.webp" width="46%" alt="MetLife Stadium, New York/New Jersey" />

**Official Mascots — Maple · Zayu · Clutch**

<img src="https://fifa-world-cup-2026-rosy.vercel.app/mascots/maple.webp" width="30%" alt="Maple, Canada's mascot" />
<img src="https://fifa-world-cup-2026-rosy.vercel.app/mascots/zayu.webp" width="30%" alt="Zayu, Mexico's mascot" />
<img src="https://fifa-world-cup-2026-rosy.vercel.app/mascots/clutch.webp" width="30%" alt="Clutch, USA's mascot" />

</div>

---

## 🧭 Site Map

| Page | Path | Description |
|---|---|---|
| Home | `/` | Tournament overview & narrative highlights |
| Teams | `/teams.html` | All 48 qualified nations |
| Stadiums | `/stadiums.html` | All 16 host venues |
| Matches | `/matches.html` | Full fixture list — 104 matches |
| Standings | `/standings.html` | Live group standings |
| Live | `/live.html` | Real-time score updates |

---

## 📂 Project Structure

```text
FIFA-World-Cup-2026/
│
├── fonts.google.apis.com/            # Self-hosted Google Fonts
├── homes/                            # Team "home" artwork
├── icons/                            # Host-nation icons
├── mascots/                          # Maple, Zayu & Clutch artwork
├── players/                          # Player imagery
├── stadiums/                         # All 16 host stadium images
├── trophy/                           # Trophy artwork
├── www.googletag.manager.com/gtag/   # Self-hosted GTM script
│
├── data.js                           # Match, team & stadium data
├── funnel.js
├── hire.html
├── index.html                        # Home — tournament overview
├── live.html                         # Live score updates
├── matches.html                      # All 104 matches
├── mobile-nav.js                     # Mobile navigation
├── single-match.html                 # Match detail template
├── single-stadium.html               # Stadium detail template
├── single-team.html                  # Team detail template
├── stadium.html
├── stadiums.html                     # Stadiums overview
├── standings.html                    # Group standings
├── teams.html                        # Teams overview
└── wc-live.js                        # Powers live score updates
```

---

## 🚀 Getting Started

This is a static site — no build step, no dependencies to install.

### 1. Clone the Repository

```bash
git clone https://github.com/Saifali-80/FIFA-World-Cup-2026.git
cd FIFA-World-Cup-2026
```

### 2. Serve It Locally

```bash
npx serve .
```

Or just open `index.html` directly in your browser.

### Live Deployments

| Environment | URL |
|---|---|
| Production (Vercel) | [fifa-world-cup-2026-rosy.vercel.app](https://fifa-world-cup-2026-rosy.vercel.app/) |
| GitHub Pages | Also deployed — check the repo's **Settings → Pages** for the exact URL |

---

## 💬 Feedback

Spotted an outdated stat, a broken link, or a bug? Open an issue on the repo — corrections and suggestions are always welcome.

---

## 👤 Author

<div align="center">

### Saif Ali
**Full Stack Developer • Data Storyteller • Building [Saifis Works](https://saifis.works)**

[![GitHub](https://img.shields.io/badge/GitHub-Saifali--80-181717?style=flat-square&logo=github)](https://github.com/Saifali-80)
[![Live Site](https://img.shields.io/badge/Live_Site-World_Cup_2026-E63946?style=flat-square)](https://fifa-world-cup-2026-rosy.vercel.app/)

Part of the weekly **Drop** series — pop culture and sport, told in clay and data.

</div>
