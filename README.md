<div align="center">

# Aleix Suero — Portfolio

**FullStack Developer · React · EmailJS · Custom Hooks**

[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en/docs/Web/JavaScript)
[![EmailJS](https://img.shields.io/badge/EmailJS-FF7043?style=for-the-badge&logo=gmail&logoColor=white)](https://www.emailjs.com/)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en/docs/Web/CSS)

</div>

---

## About the project

Personal portfolio website built with **React and Vite**. Originally developed as a vanilla HTML/CSS/JS project and fully migrated to React as a learning exercise — preserving the original layout and animations while rearchitecting the logic around hooks, context and component composition.

The project features scroll-based fixed positioning, intersection observer animations, a bilingual interface, and a fully functional contact form that delivers messages directly to email via EmailJS.

---

## Features

- **Scroll-based layout** — each section transitions between `absolute` and `fixed` positioning as the user scrolls, creating a layered parallax-style effect
- **Intersection Observer animations** — skill cards animate in from the left as they enter the viewport
- **Bilingual UI** — full EN/ES language switching via React Context, with preference persisted in `localStorage`
- **Contact form** — built with React Hook Form and EmailJS; sends a notification to the owner and an autoreply to the user simultaneously via `Promise.all`
- **CSS entry animations** — the home section uses keyframe animations on load for the layout retraction, profile image fade-in and text appearance
- **Responsive design** — adapted for desktop, tablet and mobile

---

## Tech stack

| Category       | Technology                           |
| -------------- | ------------------------------------ |
| Framework      | React 18 + Vite                      |
| Styling        | CSS3 (custom properties, keyframes)  |
| Form handling  | React Hook Form                      |
| Email delivery | EmailJS                              |
| State          | useState, useContext                 |
| Side effects   | useEffect, useRef                    |
| Custom hooks   | useFixedOnScroll, useShownOnScroll   |
| Persistence    | localStorage (language preference)   |
| Fonts          | Google Fonts (Poppins, Nunito, Sora) |

---

## Architecture — Core patterns

**Custom hooks for scroll logic** — scroll-based behavior is abstracted into two reusable hooks applied across all sections:

```javascript
// useFixedOnScroll — toggles position between absolute and fixed
const useFixedOnScroll = (ref, defaultClass, fixedClass) => {
  const [isFixed, setIsFixed] = useState(false)

  useEffect(() => {
    const initialOffsetTop = ref.current.offsetTop
    const handleScroll = () => setIsFixed(window.scrollY >= initialOffsetTop)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return isFixed
}

// useShownOnScroll — adds .show class when element enters the viewport
const useShownOnScroll = (refsArray) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('show')
      })
    })
    refsArray.current.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
```

**Language context** — a single context provides `currentLanguage` and `setLanguage` to all components, avoiding prop drilling across the section tree:

```javascript
export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('EN')

  useEffect(() => {
    const stored = localStorage.getItem('currentLanguage')
    if (stored) setCurrentLanguage(stored)
  }, [])

  const setLanguage = (language) => {
    localStorage.setItem('currentLanguage', language)
    setCurrentLanguage(language)
  }

  return (
    <languageContext.Provider value={{ currentLanguage, setLanguage }}>
      {children}
    </languageContext.Provider>
  )
}
```

**Dual email delivery** — the contact form triggers two EmailJS sends in parallel: one notification to the owner and one autoreply to the user:

```javascript
await Promise.all([
  emailjs.send(SERVICE_ID, TEMPLATE_CONTACT, data, PUBLIC_KEY),
  emailjs.send(SERVICE_ID, TEMPLATE_AUTOREPLY, data, PUBLIC_KEY)
])
```

---

## Project structure

```
src/
├── components/
│   └── UI/
│       ├── buttons/        # Reusable Button component
│       └── cards/          # SkillCard, ProjectCard
├── constants/
│   ├── arrays.js           # logoArrays, projectArray
│   ├── portfolioTextAndTitles.js  # EN/ES text strings
│   └── profileInfo.js      # User info, images
├── context/
│   └── languageContext.jsx # LanguageProvider + useLanguageContext
├── pages/
│   ├── Home/
│   ├── AboutMe/
│   ├── SkillsAndExp/
│   ├── MyWork/
│   └── ContactMe/
├── utils/
│   └── hooks/
│       ├── useFixedOnScroll.js
│       └── useShownOnScroll.js
├── App.jsx
├── main.jsx
└── index.css
```

---

## Local setup

### 1. Clone the repository

```bash
git clone https://github.com/AleixSu/portfolio.git
cd portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_CONTACT=your_template_id
VITE_EMAILJS_TEMPLATE_AUTOREPLY=your_autoreply_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### 4. Start the development server

```bash
npm run dev
```

### Other commands

```bash
npm run build    # Production build
npm run preview  # Build preview
```

---

## Environment variables

| Variable                          | Description                        |
| --------------------------------- | ---------------------------------- |
| `VITE_EMAILJS_SERVICE_ID`         | EmailJS service ID                 |
| `VITE_EMAILJS_TEMPLATE_CONTACT`   | Template ID for owner notification |
| `VITE_EMAILJS_TEMPLATE_AUTOREPLY` | Template ID for user autoreply     |
| `VITE_EMAILJS_PUBLIC_KEY`         | EmailJS public key                 |

> Never commit your `.env` file. Make sure it is listed in `.gitignore`.

---

## Author

**Aleix Suero**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-aleix--suero-0A66C2?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/aleix-suero/)
[![GitHub](https://img.shields.io/badge/GitHub-@AleixSu-181717?style=flat-square&logo=github)](https://github.com/AleixSu)

---

<div align="center">
  <sub>React · Vite · EmailJS · 2025</sub>
</div>
