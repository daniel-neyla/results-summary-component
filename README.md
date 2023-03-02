# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./design/active-states.jpg)

### Links

- Live Site URL: [Click here](https://results-summary-component.onrender.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox


### What I learned


To see how you can add code snippets, see below:


Using media queries for responsive design:

```css
@media (max-width: 375px) {
 ...
}
```

Using vanilla javascript to manipulate the DOM(i normally use a framework like vue.js):

```js
fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const list = document.querySelector(".categories");

    data.forEach((item) => {
      const li = document.createElement("li");
      li.classList.add("category");
      ...
      list.appendCild(li)
      
    });
  })
  .catch((err) => console.log(err));

```

### Continued development

I want to improve in responsive design, because i feel i could have done better/easier


### Useful resources

- [Chat GPT](https://chat.openai.com/chat) - an AI that probably everyone knows and uses. Super helpful if you use it the right way!!!
- [Odin Project](https://www.theodinproject.com/) - I can recommend everyone to go through the curriculum(it is free)



