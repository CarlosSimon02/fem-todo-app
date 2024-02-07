# ✅FEM To-Do App

Get things done effortlessly with my FEM To-Do App! Keep track of your tasks, set priorities, and stay organized. It's designed to be straightforward and intuitive, helping you accomplish your goals with ease. Start organizing your day and boosting productivity now!

## 📃Table of contents

- [Overview](#overview)
  - [Preface](#preface)
  - [Features](#features)
  - [To Add Features](#to-add-features)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## 👁️Overview

### 🖐️Preface

This is a solution to the [Todo app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

### ✨Features

- **Timer Modes:** Switch between Pomodoro, short break, and long break modes.

### 🖋️To Add Features

- **Automatic Timer Mode Switch Option:** Implement functionality to offer users the option to automatically switch between Pomodoro, short break, and long break modes

### 📸Screenshot

![](./preview/screenshot.png)

### 🔗Links

- Solution URL: ---> [LINK](https://www.frontendmentor.io/solutions/fem-pomodoro-app-using-html-css-and-vanilla-javascript-g8E78rx7dm)
- Live Site URL: ---> [LINK](https://fempomodoro.netlify.app/)

## 🚛My process

### ⚙️Technologies Used

- SASS/SCSS for efficient styling
- BEM (Block Element Modifier) Architecture for structured CSS
- MVC (Model-View-Controller) Architecture for organized code structure
- NPM (Node Package Manager) for package management
- Mobile-first Workflow for responsive design
- Webpack for module bundling and optimization
- HTML Semantic Tags for structured and meaningful markup

### 🧠What I learned

1. **:focus vs :focus-visible**

2. **Unnecessary use of useEffect()**

   You don't have to call `updateToDoItem()` on component mount

   Don't ❌

   ```js
   useEffect(() => {
     updateToDoItem({ ...toDoItem, isDone: isChecked });
   }, [isChecked]);

   const toggleCheckHandler = () => {
     setIsChecked(!isChecked);
   };
   ```

   I'm trying to understand why, when I delete an item, the `updateToDoItem()` inside the `useEffect()` works fine when I use `toDoItems` for showing my to-dos. But when I use `filteredToDoItems`, it seems to have an issue. My guess is that when I delete an item, `toDoItems` update first, causing the component to rerender before `filteredToDoItems` get updated. I'm trying to figure out the reason behind this behavior.

   Do ✅

   ```js
   const toggleCheckHandler = () => {
     const newIsChecked = !isChecked;
     setIsChecked(newIsChecked);
     updateToDoItem({ ...toDoItem, isDone: newIsChecked });
   };
   ```

   This happens to me alot. Maybe because I'm not knowledgable enough about how rendering works in react
