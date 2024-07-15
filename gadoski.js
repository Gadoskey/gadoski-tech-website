/*latest post js*/
const posts = [
  {
    link: "https://www.google.com/",
    title: "Getting Started with Version Control: An Introduction to Git and GitHub",
    date: "2024-07-14",
  },
  {
    link: "https://www.google.com/",
    title: "Lorem ipsum dolor sit, amet consectetur adipisicing",
    date: "2024-07-12",
  },
  {
    link: "https://www.google.com/",
    title: "Lorem ipsum dolor sit, amet consectetur adipisicing",
    date: "2024-07-12",
  },
  {
    link: "https://www.google.com/",
    title: "Lorem ipsum dolor sit, amet consectetur adipisicing",
    date: "2024-07-12",
  }
];
let postsHTML = "";
posts.forEach((posts) => {
  postsHTML += `
    <tr>
      <td class="left-align"><a href="${posts.link}">${posts.title}</a></td>
      <td class="right-align">${posts.date}</td>
    </tr>
  `;
  document.querySelector(".js-generated-post").innerHTML = postsHTML;
});
/*project js*/
project = [
  {
    name: "Rock-Papper-Scissors",
    image: "images/rock-paper-scissors.jpg",
    link: "ROCK_PAPER_SCISSORS-GAME/Simple-rock_paper_scissors-game.html",
  },
  {
    name: "Todo List Web App",
    image: "images/to-do-list.jpg",
    link: "TO-DO_LIST_MAKER/to-do.html",
  },
  {
    name: "Youtube Home Page Clone",
    image: "images/youtube.webp",
    link: "YOUTUBE_CLONE/youtube_clone.html",
  },
  {
    name: "Rock-Papper-Scissors",
    image: "images/rock-paper-scissors.jpg",
    link: "ROCK_PAPER_SCISSORS-GAME/Simple-rock_paper_scissors-game.html",
  },
  {
    name: "Todo List Web App",
    image: "images/to-do-list.jpg",
    link: "TO-DO_LIST_MAKER/to-do.html",
  },
  {
    name: "Youtube Home Page Clone",
    image: "images/youtube.webp",
    link: "YOUTUBE_CLONE/youtube_clone.html",
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
      <a href="${project.link}">
        <button class="view-button">
          View Project
        </button>
      </a>
    </div>
  `;
  document.querySelector(".project-grid").innerHTML = computedHTML;
});
