project = [
  {
    name: "Rock Papper Scissors",
    image: "images/rock-papper-scissors.jpg",
    description:
      "Whether you're looking to pass the time or challenge your friends, our Rock Paper Scissors game is a perfect choice for a quick and entertaining break. Plus, you can enable autoplay to watch the computer play against itself.",
    link: "ROCK_PAPER_SCISSORS-GAME/Simple-rock_paper_scissors-game.html",
  },
  {
    name: "Todo List",
    image: "images/to-do-list.jpg",
    description:
      "Stay organized and productive with our Todo List Manager. This simple web app allows you to create and manage your todo lists. Write down tasks, set deadlines with customizable dates, and save them securely for future use.",
    link: "TO-DO_LIST_MAKER/to-do.html",
  },
  {
    name: "Rock Papper Scissors",
    image: "images/x.png",
    description:
      "This is a short description of a rock paper scisors game built by the author",
  },
  {
    name: "Rock Papper Scissors",
    image: "images/x.png",
    description:
      "This is a short description of a rock paper scisors game built by the author",
  },
  {
    name: "Rock Papper Scissors",
    image: "images/x.png",
    description:
      "This is a short description of a rock paper scisors game built by the author",
  },
  {
    name: "Rock Papper Scissors",
    image: "images/x.png",
    description:
      "This is a short description of a rock paper scisors game built by the author",
  },
  {
    name: "Rock Papper Scissors",
    image: "images/x.png",
    description:
      "This is a short description of a rock paper scisors game built by the author",
  },
  {
    name: "Rock Papper Scissors",
    image: "images/x.png",
    description:
      "This is a short description of a rock paper scisors game built by the author",
  },
  {
    name: "Rock Papper Scissors",
    image: "images/x.png",
    description:
      "This is a short description of a rock paper scisors game built by the author",
  },
  {
    name: "Rock Papper Scissors",
    image: "images/x.png",
    description:
      "This is a short description of a rock paper scisors game built by the author",
  },
  {
    name: "Rock Papper Scissors",
    image: "images/x.png",
    description:
      "This is a short description of a rock paper scisors game built by the author",
  },
  {
    name: "Rock Papper Scissors",
    image: "images/x.png",
    description:
      "This is a short description of a rock paper scisors game built by the author",
  },
];
let computedHTML = "";
project.forEach((project) => {
  computedHTML += `
    <div class="project-container">
      <div class="project-name">
        ${project.name}
      </div>
      <div class="project-image-container">
        <img class="project-image" src="${project.image}">
      </div>
      <div class="project-description">
        ${project.description}
      </div>
      <a href="${project.link}" target="_blank">
        <button class="viewbutton">
          View Project
        </button>
      </a>
    </div>
  `;
  document.querySelector(".project-grid").innerHTML = computedHTML;
});
