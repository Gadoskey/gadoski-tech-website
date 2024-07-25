/*latest post js*/
const posts = [
  {
    link: "https://www.google.com/",
    title:
      "Getting Started with Version Control: An Introduction to Git and GitHub",
    date: "2024-07-14",
  },
  {
    link: "blog_page/usingEmailJS/EmailJS.html",
    title: "Using EmailJS: An Easy Way to Send Emails With JavaScript + HTML",
    date: "2024-07-12",
  },
  {
    link: "https://www.google.com/",
    title: 'What happens when you type "https://www.google.com" in your browser and press "Enter"?',
    date: "2024-07-12",
  },
  {
    link: "https://www.google.com/",
    title: "Lorem ipsum dolor sit, amet consectetur adipisicing",
    date: "2024-07-12",
  },
];
let postsHTML = "";
posts.forEach((posts) => {
  postsHTML += `
    <tr>
      <td class="left-align"><a class="post-link" href="${posts.link}">${posts.title}</a></td>
      <td class="right-align">${posts.date}</td>
    </tr>
  `;
  document.querySelector(".js-generated-post").innerHTML = postsHTML;
});
/*project js*/
project = [
  {
    name: "Todo List Web App",
    image: "images/to-do-list.jpg",
    link: "TO-DO_LIST_MAKER/to-do.html",
  },
  {
    name: "Rock-Papper-Scissors",
    image: "images/rock-paper-scissors.jpg",
    link: "ROCK_PAPER_SCISSORS-GAME/Simple-rock_paper_scissors-game.html",
  },
  {
    name: "Youtube Clone",
    image: "images/youtube.png",
    link: "YOUTUBE_CLONE/youtube_clone.html",
  },
  {
    name: "Bash Shell Clone",
    image: "images/bash.png",
    link: "ROCK_PAPER_SCISSORS-GAME/Simple-rock_paper_scissors-game.html",
  },
  {
    name: "Todo List Web App",
    image: "images/to-do-list.jpg",
    link: "TO-DO_LIST_MAKER/to-do.html",
  },
  {
    name: "Youtube Home Page Clone",
    image: "images/youtube.png",
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
/*The update time function for the first image of the carousel*/
  function updateDateTime() {
        // Get the current date
        const currentDate = new Date();

        // Options for formatting the date eg July, 10 2020.
        const dateOptions = {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        };

        // Format the date eg July, 10 2020.
        const formattedDate = currentDate.toLocaleDateString('en-US', dateOptions);

        // Options for formatting the time
        const timeOptions = {
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric'
        };

        // Format time
        const formattedTime = currentDate.toLocaleTimeString('en-US', timeOptions);

        // Update the content of the date display element/tag
        document.getElementById('dateDisplay').textContent = formattedDate +'.' + ' '  + formattedTime;
    }
  // Call the function initially to display the current date and time
  updateDateTime();
  // Update date and time every second
  setInterval(updateDateTime, 1000);

  
  /*EmailJS javascript to send mail to me with EmailJS sorting out the backend for me. i will
  update this with node and express when i fully understand how to go about it*/
  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("mailOptions").addEventListener("submit", function(event){
    event.preventDefault();
    const serviceId = "service_7njsmph";
    const templateId = "template_xy8v0jb";
    emailjs.sendForm(serviceId, templateId, this)
    .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            document.getElementById('mailOptions').reset();
        alert('Email sent successfully!');
        }, function(error) {
            console.log('FAILED...', error);
        });
      });
});