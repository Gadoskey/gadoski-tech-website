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