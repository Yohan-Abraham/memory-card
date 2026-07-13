# Pokémon Memory Game

A responsive memory card game built with **React** that challenges players to select each Pokémon only once. The application fetches Pokémon data from an external API, dynamically renders cards, and shuffles them after every successful selection to increase the difficulty.

## Demo

**Live Demo:** [https://memory-card-three-theta.vercel.app/]

---

## Features

- Dynamic Pokémon data fetched from the **PokéAPI**
- Randomized card order after every successful selection
- Current score and best score tracking
- Duplicate click detection with game reset logic
- Responsive layout for desktop and mobile devices
- Component-based architecture using reusable React components

---

## Technologies

- React
- Vite
- JavaScript (ES6+)
- HTML5
- CSS3
- PokéAPI

---

## Key Concepts Demonstrated

- React Hooks (`useState`, `useEffect`)
- State management
- API integration using asynchronous JavaScript
- Component composition and props
- Event handling
- Conditional rendering
- Immutable state updates
- Dynamic list rendering

---

## Installation

```bash
git clone https://github.com/your-username/pokemon-memory-game.git

cd pokemon-memory-game

npm install

npm run dev
```

---

## Project Structure

```text
src/
├── api/
├── components/
├── styles/
├── App.jsx
└── main.jsx
```

---

## API

This project uses the **PokéAPI** to retrieve Pokémon data and official artwork.

https://pokeapi.co/
