# 🧮 Next.js Counter App

A simple and responsive counter app built using **Next.js (App Router)**, **React**, and **Tailwind CSS**. The counter supports increment, decrement, and reset functionality, with dynamic styling based on the counter state.

---

## 📸 Features

- ➕ Increment & ➖ Decrement buttons
- 🔁 Reset to zero
- 🎨 Dynamic border color (red when counter is 0)
- 🧩 Clean UI using Tailwind CSS

---

## 🧠 Functionality Overview

- **Increase:** Increments the counter by 1
- **Decrease:** Decrements the counter by 1 (does not go below 0)
- **Reset:** Resets the counter to 0
- **Border Color:** Red if counter is 0, gray otherwise

---

## 🛠️ Tech Stack

- [Next.js 13+ (App Router)](https://nextjs.org/)
- [React 18+](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)

---

## 📁 Folder Structure

```plaintext
app/
├── layout.tsx        # Root layout with global styles
├── page.tsx          # Main counter page with logic
components/
└── ui/
    └── button.tsx    # (Assumed) Reusable Button component
styles/
└── globals.css       # Tailwind base styles
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/nextjs-counter-app.git
cd nextjs-counter-app
```

### 2. Install Dependencies

```bash
npm install
# or
yarn
```

### 3. Start the Development Server

```bash
npm run dev
# or
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📌 Notes

- The app uses a custom `Button` component with props like `variant` and `size`
- Tailwind CSS is configured via `globals.css` and `tailwind.config.js`

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

> Made with ❤️ using Next.js & Tailwind CSS
