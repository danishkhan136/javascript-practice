# ⚡ JavaScript Practice & Learning Repository

![HTML5](https://img.shields.io/badge/HTML5-Structure-orange?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Styling-blue?style=for-the-badge&logo=css3&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-Responsive_UI-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-Logic-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Responsive-Design-success?style=for-the-badge)

A structured JavaScript learning and practice repository containing DOM manipulation exercises, event handling practice, array methods, state management, responsive UI design, and interactive front-end mini-projects[cite: 3].

This repository represents my hands-on journey of learning JavaScript by writing, testing, and improving code through practical examples and interactive web applications.

---

## 📌 About the Project

This repository was created as a practical learning environment while studying front-end web development and JavaScript programming[cite: 3].

Instead of keeping all practice code in one place, the repository is organized into a dedicated practice sandbox and separate project folders so that each concept and UI application can be studied, built, and tested separately[cite: 3].

The repository progresses from basic JavaScript syntax and DOM selection to more practical front-end concepts such as:
- DOM Manipulation
- Event Listeners (`input`, `click`, etc.)
- Array Filtering & Iteration (`.filter()`, `.forEach()`)
- Dynamic HTML Element Creation (`createElement`, `appendChild`)
- Real-Time Search & Data Filtering
- State Management & Theme Toggling[cite: 3]
- String Methods (`.startsWith()`)
- Responsive Flexbox Layouts
- Tailwind CSS Utility Styling
- Glassmorphism & Custom CSS Filters
- Error State Handling ("No User Found")

It also contains interactive mini-projects that apply the concepts learned throughout the practice sessions[cite: 3].

---

## 🎯 Purpose

The main purpose of this repository is to build a strong foundation in Vanilla JavaScript and front-end development through consistent coding practice and hands-on implementation[cite: 3].

The focus is not only on understanding JavaScript syntax, but also on learning how programming logic interacts with HTML and CSS to build real, user-friendly interfaces[cite: 3].

### Main Objectives
- Build strong Vanilla JavaScript fundamentals
- Practice DOM manipulation and event-driven programming
- Improve logical and problem-solving skills
- Understand real-time UI updates based on user input
- Learn modern responsive design using Flexbox and Tailwind CSS
- Practice dynamic rendering of data arrays into HTML cards
- Develop interactive front-end mini-projects[cite: 3]
- Maintain a structured record of JavaScript learning progress[cite: 3]

---

## 📚 Topics Covered

### 1. JavaScript Basics & Sandbox Practice
The practice directory focuses on core JavaScript concepts and testing logic, including[cite: 3]:
- Variables (`let`, `const`)
- Data types & Objects
- Arrays of objects
- Functions & Arrow functions
- Basic DOM selection

### 2. DOM Manipulation
Practice includes dynamically interacting with the Document Object Model (DOM).
Topics include:
- Selecting elements (`document.querySelector`)
- Creating elements in memory (`document.createElement`)
- Modifying classes (`classList.add`)
- Updating text and HTML (`textContent`, `innerHTML`)
- Appending elements to the page (`appendChild`)

**Example:**
```javascript
const card = document.createElement("div");
card.classList.add("card");
document.querySelector(".cards").appendChild(card);
```

### 3. Event Handling
The repository includes examples of capturing and responding to user actions in real time:
- `addEventListener`
- Input events (`input` for real-time search)
- Click events (for toggling themes and UI interactions)

**Example:**
```javascript
let inp = document.querySelector(".inp");
inp.addEventListener("input", function () {
    console.log(inp.value);
});
```

### 4. Array Methods & Data Filtering
JavaScript array methods are practiced through real-world UI rendering:
- Storing user data in arrays of objects
- Iterating through data using `.forEach()`
- Filtering data dynamically using `.filter()`
- Matching user search queries with `.startsWith()`

**Example:**
```javascript
let newUsers = users.filter((user) => {
    return user.name.startsWith(inp.value);
});
```

### 5. Conditional Logic & Error States
Conditional statements (`if` / `else`) are used to handle UI states smoothly:
- Checking if filtered arrays contain data (`if (newUsers.length)`)
- Rendering matching user cards when data exists
- Displaying a clean `"No User Found"` message when no matches are found

### 6. Responsive UI & Styling (CSS3 & Tailwind CSS)
Alongside JavaScript, this repository practices modern styling techniques:
- CSS Flexbox (`display: flex`, `flex-wrap`, `justify-center`)
- Managing viewport heights (`min-height: 100vh`)
- Controlling maximum row widths (`max-w-[1640px]`)
- Blurred background layers and CSS masks (`filter: blur(10px)`, `mask-image`)

---

## 🎮 Projects

The repository contains interactive front-end projects created to apply the concepts learned during JavaScript practice[cite: 3].

### 🔍 1. User Finder
A dynamic, responsive user directory and real-time search application[cite: 1, 2, 3].

**The program:**
- Stores a collection of user profiles (name, profile picture, and bio) in a JavaScript array
- Dynamically generates and renders styled profile cards on page load
- Listens to user typing in the search bar in real time
- Filters the user cards instantly based on the search input
- Displays a `"No User Found"` message if no user matches the search query
- Wraps cards neatly across rows (up to 7 cards per row on large screens) using Flexbox and Tailwind CSS

### 🎨 2. Theme Changer
An interactive UI project demonstrating state changes and dynamic styling[cite: 3].

**The program:**
- Captures user interaction via event listeners
- Dynamically updates CSS properties and classes on the DOM[cite: 3]
- Switches the visual theme of the webpage smoothly without reloading

### 🧪 3. Practice Sandbox
A dedicated workspace (`Practice/`) containing `index.html`, `style.css`, and `script.js` for experimenting with raw JavaScript logic, DOM methods, and UI snippets before implementing them into complete projects[cite: 3].

---

## 📁 Project Structure

```text
javascript-practice-main/
│
├── Practice/
│   ├── index.html
│   ├── script.js
│   └── style.css
│
├── Projects/
│   │
│   ├── theme changer/
│   │   ├── index.html
│   │   └── assets/
│   │       ├── script.js
│   │       └── style.css
│   │
│   └── user Finder/
│       ├── index.html
│       └── assets/
│           ├── script.js
│           └── style.css
│
└── README.md
```
[cite: 3]

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| **HTML5** | Main page structure and semantic layout[cite: 3] |
| **CSS3** | Custom styling, card dimensions, glassmorphism blur effects, and layout rules[cite: 3] |
| **Tailwind CSS (CDN)** | Utility-first styling, flexbox wrapping, spacing, and responsive design |
| **Vanilla JavaScript (ES6+)** | Core programming logic, DOM manipulation, event handling, and array filtering[cite: 3] |

No complex build tools, backend servers, or `npm` installations are required for the exercises and projects included in this repository.

---

## ⚙️ Getting Started

### Prerequisites
You only need a modern web browser (such as Google Chrome, Edge, or Firefox) and a code editor like **VS Code**.

### Clone the Repository
```bash
git clone [https://github.com/danishkhan136/javascript-practice-main.git](https://github.com/danishkhan136/javascript-practice-main.git)
```

Move into the project directory:
```bash
cd javascript-practice-main
```

---

## ▶️ Running the Programs

Because these are client-side front-end projects, you can run any project directly in your browser.

### Option 1: Open Directly
Navigate to any project folder and double-click the `index.html` file[cite: 3]:
- `Practice/index.html`[cite: 3]
- `Projects/user Finder/index.html`[cite: 3]
- `Projects/theme changer/index.html`[cite: 3]

### Option 2: Run with VS Code Live Server (Recommended)
1. Open the repository folder in **VS Code**.
2. Install the **Live Server** extension.
3. Right-click on any `index.html` file and select **Open with Live Server**[cite: 3].

---

## 📖 Recommended Learning Order

If you are exploring this repository to learn JavaScript for front-end development, the recommended order is:

```text
JavaScript Basics (Variables, Arrays, Objects)
      ↓
Functions & Arrow Functions
      ↓
DOM Selection (querySelector)
      ↓
Event Listeners (click, input)
      ↓
DOM Manipulation (createElement, classList, appendChild)
      ↓
Array Methods (.forEach, .filter)
      ↓
Practice Sandbox (Practice/)
      ↓
Mini Project 1: Theme Changer
      ↓
Mini Project 2: User Finder (Real-Time Search & Responsive UI)
```
[cite: 3]

This progression makes it easier to build knowledge step by step before combining DOM manipulation, array filtering, and responsive CSS into complete applications.

---

## 🧠 What I Learned

Working on this repository helped me develop a practical understanding of JavaScript and front-end development, including:
- Writing clean Vanilla JavaScript from scratch
- Structuring data using arrays of objects
- Selecting and modifying HTML elements dynamically via the DOM
- Creating multi-layered UI cards entirely through JavaScript (`createElement` & `appendChild`)
- Filtering data in real time as the user types (`input` event + `.filter()`)
- Handling empty states and displaying dynamic feedback (`"No User Found"`)
- Fixing layout overflow issues using `flex-wrap`, `min-height: 100vh`, and max-width constraints
- Combining custom CSS rules (like blurred image masks) with Tailwind CSS utilities
- Organizing multiple front-end projects cleanly inside a single repository[cite: 3]

---

## 🚀 Future Improvements

This repository will continue to grow as I progress in JavaScript and full-stack web development.

Planned improvements include:
- Case-insensitive search filtering (using `.toLowerCase()`)
- Fetching live user data from external REST APIs using `fetch()` and `async/await`
- Saving theme preferences in the browser using `localStorage`
- Adding smooth CSS transitions and animations when cards filter
- More DOM-based mini-projects (To-Do App, Weather App, Calculator, Quiz App)
- Exploring modern JavaScript frameworks (React.js)

---

## 📌 Project Status

**Status:** 🚧 *Continuously Learning & Improving*

This repository is an ongoing collection of JavaScript practice, DOM exercises, and front-end mini-projects[cite: 3]. New concepts and applications will be added as my JavaScript skills develop.

---

## 🎓 Learning Journey

This repository represents an important part of my web development journey.

Rather than focusing only on theory, I am using this repository to learn by writing code, fixing UI/CSS bugs, debugging JavaScript logic, and building interactive web projects[cite: 3].

Every practice script and mini-project represents another step toward becoming a stronger and more confident software developer[cite: 3].

---

## 👨‍💻 Author

**Danish Khan**  
Software Engineering Student | Frontend Developer

**GitHub:**  
https://github.com/danishkhan136

---

## ⭐ Support

If you find this repository useful or want to follow my JavaScript learning journey, feel free to star ⭐ the repository and explore the different practice files and projects[cite: 3].

---

## 📄 License

This repository is primarily created for learning, practice, and educational purposes.  
Feel free to explore the code and use the examples as references for your own learning.

---

### 💛 Built with JavaScript & Consistent Practice
**Learn → Practice → Build → Improve → Repeat**