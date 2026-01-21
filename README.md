# 💀 CRYPTO GRAVEYARD v3.0

> Where $500B+ went to die

## ✅ What's Included

### 💀 The Graveyard (60 Projects)
- All projects have **$100M+ in documented losses**
- Every card is **complete** with full writeups
- Sorted by loss amount (highest first)
- Each entry includes:
  - Full story of what happened
  - Cause of death
  - Key people involved
  - Lessons learned
  - Tags and categories

### 🏆 Hall of Shame (Top 10 Fraudsters)
Ranked by extraction amount with **photos** and **working YouTube videos**:

| Rank | Name | Project | Amount |
|------|------|---------|--------|
| #1 | Do Kwon | Terra/LUNA | $40B |
| #2 | Sam Bankman-Fried | FTX | $32B |
| #3 | Su Zhu & Kyle Davies | 3AC | $18B |
| #4 | Alex Mashinsky | Celsius | $12B |
| #5 | Richard Heart | HEX/Pulse | $12B |
| #6 | Ruja Ignatova | OneCoin | $4B |
| #7 | Africrypt Brothers | Africrypt | $3.6B |
| #8 | Satish Kumbhani | BitConnect | $3.5B |
| #9 | Faruk Özer | Thodex | $2B |
| #10 | Gerald Cotten | QuadrigaCX | $190M |

### 🕳️ The Trenches
Split into two tabs:

**🔥 Pump.fun Hall of Horrors**
- The Baby Incident
- Fire Guy
- Cereal Rugger
- School Classroom Launch
- Grandma Rugger
- Mando's Stunts

**🏴‍☠️ Trench Legends**
- Quant Kid ($2.4M crying teen)
- Hawk Tuah Token ($490M crash)
- Squid Game Token (honeypot)
- AnubisDAO (20-hour $60M rug)
- FaZe Save The Kids
- Ice Poseidon Confession
- Evil Ape

---

## 🚀 Deploy to Vercel

### Method 1: GitHub → Vercel (Recommended)

1. **Create GitHub repo**
   - Go to [github.com/new](https://github.com/new)
   - Name: `crypto-graveyard`
   - Keep Public, click Create

2. **Upload files**
   - Click "uploading an existing file"
   - Drag both files:
     - `index.html`
     - `crypto-data.js`
   - Click "Commit changes"

3. **Deploy on Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Connect GitHub if needed
   - Import `crypto-graveyard` repo
   - Click Deploy
   - Done! Get your URL

### Method 2: Vercel CLI

```bash
npm install -g vercel
cd /path/to/your/files
vercel
# Follow prompts
```

---

## 📁 File Structure

```
crypto-graveyard/
├── index.html      # Main React app (36KB)
├── crypto-data.js  # All data (66KB)
└── README.md       # This file
```

---

## 🎨 Features

- ☀️/🌙 Dark/Light mode toggle
- 🔍 Search functionality
- 📊 Filter by category
- 📱 Mobile responsive
- 🎬 Embedded YouTube videos
- 📸 Real photos in Hall of Shame
- 🏷️ Clear type badges (RUG PULL / HACKED / COLLAPSED)

---

## 📝 Adding New Content

### Add a Graveyard Project

In `crypto-data.js`, add to `cryptoCorpses` array:

```javascript
{
  id: 61,
  name: "Project Name",
  category: "DeFi",
  launchDate: "2024-01",
  deathDate: "2024-06", 
  amount: 100000000,
  description: "Short description for card.",
  fullDescription: "Full story of what happened.",
  causeOfDeath: "What specifically caused failure.",
  tags: ["hack", "flash-loan"],
  type: "hack", // "rug", "hack", or "collapse"
  severity: "major",
  investors: [
    { name: "Person", type: "Founder (Arrested)" }
  ],
  lessons: [
    "First lesson",
    "Second lesson"
  ]
}
```

### Add to Hall of Shame

```javascript
{
  rank: 11,
  id: 'unique-id',
  name: "Person Name",
  project: "Project",
  amount: 1000000000,
  year: "2024",
  status: "Arrested/Fugitive/etc",
  photoUrl: "https://...",
  viralQuote: "Their infamous quote",
  viralMoment: "What made them viral",
  story: "Full story paragraph",
  tags: ["tag1", "tag2"],
  viralityScore: 8,
  videoId: "YouTubeVideoID",
  videoType: "youtube"
}
```

---

## 🔧 Customization

### Change Colors
Edit CSS variables in `index.html`:
```css
:root {
  --accent-red: #ff2d55;
  --accent-orange: #ff9500;
  --accent-blue: #0a84ff;
  --accent-purple: #bf5af2;
}
```

---

## 📊 Stats (Auto-Calculated)

The header stats automatically calculate from the data:
- Total projects
- Total $ lost
- Rug pulls count
- Hacks count

---

**Total Documented: $500B+ in losses** 💀
