"use strict";

console.log("Hello world");

fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const list = document.querySelector(".categories");

    data.forEach((item) => {
      const li = document.createElement("li");
      li.classList.add("category");

      const div = document.createElement("div");

      // New <img> element for the item's icon
      const icon = document.createElement("img");
      icon.src = item.icon;
      icon.classList.add("category-icon");
      div.appendChild(icon);

      // Add category
      const category = document.createElement("span");
      category.textContent = item.category;
      category.classList.add("category-name");
      div.appendChild(category);

      // Add <div> element to <li> element
      li.appendChild(div);

      // Create <div> element for that contains the score and the max. score
      const score = document.createElement("div");
      score.classList.add("category-score");
      // Create <span> element for the result and max-score of each category
      const result = document.createElement("span");
      result.classList.add("category-result");
      result.textContent = item.score;

      const maxScore = document.createElement("span");
      maxScore.textContent = "/ 100";

      score.appendChild(result);
      score.appendChild(maxScore);

      li.appendChild(score);

      // Add <li> element to the <ul> element
      list.appendChild(li);
    });
  })
  .catch((err) => console.log(err));
