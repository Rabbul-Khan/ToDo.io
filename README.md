# ToDo.io 🚀

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Vanilla JS](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)](#)
[![Webpack](https://img.shields.io/badge/Webpack-5+-8DD6F9?logo=webpack&logoColor=black)](#)

ToDo.io is a premium, minimalist productivity dashboard and task manager built entirely with **Vanilla JavaScript (ES6+)** and **pure Vanilla CSS**. 

Inspired by modern publishing platforms and clean productivity tools, it leverages a professional, neutral-first color system, high-contrast typography, and breathing structural spacing to provide a distraction-free productivity workspace.

> **🌱 Origins & 2026 Update:** Originally an early milestone in my web development journey, this project was fully modernized in 2026. The codebase was refactored to feature an ES6+ modular architecture, and a completely redesigned UI—all while strictly maintaining a zero-dependency, pure Vanilla stack.

---

## 🛠️ Technology Stack

| Architecture | Technology | Details |
| :--- | :--- | :--- |
| **Core Logic** | Vanilla JS (ES6) | Reactive state updates, local storage serialization, dynamic DOM rendering. |
| **Styling** | Vanilla CSS | Custom properties, Flexbox, order shifting, WebKit pseudo-overrides. Zero CSS frameworks. |
| **Bundler** | Webpack 5+ | Modular entry points, CSS Minimizers, HTML-Web-Plugins, Mini-CSS-Extract-Plugins. |
| **Assets** | Material Icons | Standardized Google icon set for UI actions. |

**Typography System:**
* *Headlines:* **Hanken Grotesk** (crisp letter-spacing & sharp personality).
* *Body:* **Inter** (exceptional legibility).
* *Labels:* **Outfit** (precise, technical feel).

---

## 📂 Project Structure

```text
ToDo.io/
├── dist/                     # Compiled production assets
├── src/                      # Source development directory
│   ├── actions.js            # State mutations & actions
│   ├── index.js              # Event bindings & central coordinator
│   ├── main.css              # Custom Vanilla CSS design system
│   ├── render.js             # Dynamic DOM rendering engine
│   ├── template.html         # HTML5 dashboard template