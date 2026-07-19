# 🤖 Build Your Own Local AI Study Assistant — Interactive Guide

An animated, single-page walkthrough that teaches students how to build a **completely offline AI study assistant** using free tools — Ollama, the Gemma model, VS Code, and AnythingLLM.

Built with plain **HTML, CSS, and JavaScript** — no frameworks, no backend, no dependencies.

![status](https://img.shields.io/badge/status-active-brightgreen)
![license](https://img.shields.io/badge/license-MIT-blue)
![stack](https://img.shields.io/badge/stack-HTML%20%7C%20CSS%20%7C%20JS-orange)

---

## ✨ What this is

A lot of "how to build an AI project" guides are just walls of text. This one is interactive:

- A friendly animated **robot mascot** with blinking eyes and a glowing antenna narrates each step
- Click through **6 steps** of the build process — a progress bar fills in and the robot's speech bubble updates
- A **tools checklist** (Ollama, Gemma, VS Code, AnythingLLM) explains what each piece does
- A **laptop comparison table** shows real 2026 laptops under and around a ₹90,000 budget, suited to running local AI models

No sign-up, no build step — just open the file in a browser.

---

## 🖥️ Live demo

Open `index.html` directly in any browser, or host it on GitHub Pages (see below).

---

## 📁 Project structure

This repo includes two versions of the same project:

```
├── split/
│   ├── index.html      # page structure/markup only
│   ├── style.css        # all styling & animations
│   └── script.js         # all interactivity & data
│
└── combined/
    └── index.html         # everything in one file (CSS + JS inlined)
```

Use the **split version** for development — it's easier to read and edit.
Use the **combined version** for quick sharing — a single file with no external references.

---

## 🧠 What it teaches

The guide walks through building a private, offline study chatbot:

1. **Run an AI language model locally** — install Ollama, download the Gemma model
2. **Build your own chatbot interface** — set up VS Code with Python
3. **Add your lecture notes to the knowledge base** — import course material with AnythingLLM
4. **Connect the chatbot to those notes** — enable retrieval (RAG) so answers are grounded in your material
5. **Ask questions about your syllabus** — get answers from your own notes, not generic internet guesses
6. **Everything runs completely offline** — nothing leaves your laptop

---

## 🛠️ Tech notes

- Pure **SVG** is used for the robot mascot — no image assets
- Animations are done with **CSS keyframes** (`blink`, `glow`) and **CSS transitions** (progress bar, active-step highlight)
- All step content and laptop data live in plain JavaScript objects/arrays — easy to edit without touching the HTML
- Fully responsive down to mobile widths (~360px)

---

## 💻 Laptop recommendations

The guide includes a real, sourced comparison of 2026 laptops capable of running local LLMs smoothly, split into:
- **Under/around ₹90,000**: Lenovo LOQ, Asus TUF Gaming A15, Acer Nitro V
- **Stretch pick (above ₹90,000)**: Lenovo Legion 5 (2025) — stronger GPU, battery, and display for a higher price

> Laptop pricing and availability change frequently — treat these as a July 2026 snapshot and verify current pricing before buying.

---

## 🚀 Run it locally

No build tools needed.

```bash
git clone https://github.com/your-username/ai-study-assistant-guide.git
cd ai-study-assistant-guide/split
open index.html   # or just double-click the file
```

## 🌐 Deploy on GitHub Pages

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set source to the branch and folder containing `index.html` (e.g. `/combined` or `/split`)
4. Your guide will be live at `https://your-username.github.io/repo-name/`

---

## 🤝 Contributing

Ideas for extending this:
- Add more steps (e.g. deploying the chatbot as a desktop shortcut)
- Add a dark/light theme toggle
- Expand the laptop table with more budget tiers
- Add real screenshots of each tool (Ollama, AnythingLLM) mid-setup

Pull requests and forks welcome.

---

## 📄 License

MIT — free to use, modify, and share.

---

## 🙋 Why this exists

Most students don't realize you can run a real, private AI assistant on a normal laptop — no cloud subscription, no data leaving your machine. This project is meant to make that first step feel approachable instead of intimidating.
