# ✅FEM To-Do App

Get things done effortlessly with my FEM To-Do App! Keep track of your tasks, set priorities, and stay organized. It's designed to be straightforward and intuitive, helping you accomplish your goals with ease. Start organizing your day and boosting productivity now!

## 📃Table of contents

<!-- - [Overview](#overview)
  - [Preface](#preface)
  - [Features](#features)
  - [To Add Features](#to-add-features)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned) -->

## 👁️Overview

### 🖐️Preface

This is a solution to the [Todo app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

### ✨Features

- **Timer Modes:** Switch between Pomodoro, short break, and long break modes.

### 🖋️To Add Features

- **Automatic Timer Mode Switch Option:** Implement functionality to offer users the option to automatically switch between Pomodoro, short break, and long break modes

### 📸Screenshot

<!-- ![](./preview/screenshot.png) -->

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

#### **1.) TypeScript**

Handling unpredictable behaviors in JavaScript, such as uncertainties about function input/output and dealing with `undefined` or `null` types, can be challenging. That's why I turned to TypeScript. With TypeScript, I gain clarity on expected values, making coding easier. Additionally, the built-in intellisense in code editors provides helpful hints, reducing the need to constantly refer to my codebase for information.

These are the resources that I use:

- <https://react.dev/learn/typescript>
- <https://www.typescriptlang.org/docs/handbook/react.html>

---

#### **2.) `:focus` vs `:focus-visible`**

`:focus`

Selects and styles an element when it receives focus, regardless of how focus is triggered (keyboard, mouse, touch).

`:focus-visible`

Style when element gets focus from navigation (keyboard) but not mouse clicks or taps except for `input` elements (Not sure why);

I use this for accessibility purposes

---

#### **3.) Unnecessary use of useEffect()**

I don't have to call `updateToDoItem()` on component mount

Don't ❌

```js
useEffect(() => {
  updateToDoItem({ ...toDoItem, isCompleted: isChecked });
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
  updateToDoItem({ ...toDoItem, isCompleted: newIsChecked });
};
```

This happens to me alot. Maybe because I'm not knowledgable enough about how rendering works in react

---

#### **4.) `as` keyword in Typescript**

Pretty much the same as type casting in other languages like C++.

C++:

```c++
bool myBool = true;
int myInt = static_cast<int>(myBool);
```

TypeScript:

```typescript
let myBool: boolean = true;
let myInt: number = myBool as unknown as number;
```

---

#### **5.) Syling hidden `input[type='radio']`**

I don't know how many times I came accross with this problem before but now that I use react, it's even worse.

Don't ❌

```html
<input class="sr-only" name="fruit" id="apple" /> <label for="apple">Apple</label>
```

There's this weird thing happening when I click. The check mark ends up in the wrong place, not where I clicked.

Do ✅

```html
<label>
  <input class="sr-only" name="fruit" id="apple" />
  <p>Apple</p>
</label>
```

I found a fix that works for me. I just apply styles to the label when the `input` is hidden using the `:checked + p` selector. This gets rid of that strange behavior I mentioned earlier.

#### **6.) Do not return the same reference to the updater function in useState() IDIOT!!!**

Don't ❌

```typescript
setToDoItems((prevToDoItems) => {
  prevToDoItems[indexToUpdate] = toUpdateItem;
  return prevToDoItems;
});
```

Do ✅

```typescript
setToDoItems((prevToDoItems) => {
  const updatedItems = [...prevToDoItems];
  updatedItems[indexToUpdate] = toUpdateItem;
  return updatedItems;
});
```

---

#### **7.) Remove transition on page load**

---

#### **8.) Fixing enter animations that are triggered (started) twice in framer motion**

just use v4() from uuid

---

#### **9.) Disabling initial transition of `<AnimatePresence>` children elements when `initial` prop is set to `false`**

Don't ❌

```typescript
const Item = () => (
  <div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    />
  </div>
)

export const MyComponent = ({ items }) => (
  <AnimatePresence initial={false}>
    <Item key={id} />
  </AnimatePresence>
)
```

This will still trigger `initial` animation despite `initial` props of `<AnimatePresence>` is set to `false`

Do ✅

```typescript
const Item:JSX.Element = (
  <div key={id}>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    />
  </div>
)

export const MyComponent = ({ items }) => (
  <AnimatePresence initial={false}>
    {Item}
  </AnimatePresence>
)
```

`Item` should be a direct descendant of `<AnimatePresence>`

<https://www.framer.com/motion/animate-presence/##animating-custom-components>

---

#### **10.) Dont rely too much on the framework**

using useEffect() instead of `<AnimatePresence>` initial property

---

#### **11.) Using custom components in `<Draggable>`**
