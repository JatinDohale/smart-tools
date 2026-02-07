# 🚀 Smart Tools — AI Tools Directory

Smart Tools is a modern, SEO-optimized **AI Tools Directory** built with **Next.js**.  
It helps users discover, compare, and explore **popular AI tools** — including free and paid options — with detailed tool pages, categories, and fast performance.

🌐 Live Demo: https://smart-tools-weld.vercel.app
📦 GitHub Repo: https://github.com/JatinDohale/smart-tools

---

## ✨ Features

- 🔍 Browse AI tools by category
- 📄 Detailed tool pages (pricing, category, website)
- ⭐ Popular & related tools sections
- 🌓 Dark / Light theme toggle
- ⚡ Lightning-fast performance (Next.js)
- 📈 SEO optimized (Meta tags, JSON-LD, Sitemap, Robots.txt)
- 🧩 Clean & reusable components
- 📱 Fully responsive UI

---

## 🛠️ Tech Stack

- **Framework:** Next.js
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Icons:** Lucide Icons
- **SEO:** Next Head, JSON-LD Schema,OpenGraph Metadata
- **Deployment:** Vercel

---

## 📂 Project Structure

smart-tools/
├─ components/ # Reusable UI components
├─ data/ # Tools dataset (JSON)
├─ lib/ # Data helpers & types
├─ pages/ # Pages (Home, Tools, Tool Detail)
├─ public/ # Static assets
├─ styles/ # Global styles
└─ README.md


---

## 📁 Dataset

Each AI tool contains:
```ts
{
  id: string
  name: string
  slug: string
  description: string
  category: string
  website: string
  logo: string
  pros: string[]
  cons: string[]
}

Author
Jatin Dohale
GitHub: https://github.com/JatinDohale
