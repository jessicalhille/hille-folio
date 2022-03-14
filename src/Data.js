import MaxedOut from "./images/maxedout.png";
import Tech from "./images/techtalkblog.png";
import EmTracker from "./images/emtracker.png";
import Budget from "./images/budgetbreeze.png";
import Backyard from "./images/backyardbartender.png";
import Notes from "./images/notetaker.png";

export const products = [
    {
        id: 1,
        img: MaxedOut,
        title: "Maxed Out",
        collab: "Full-Stack Team Project",
        description: "A simple and easy to use at home fitness tracker where a user can log and view their workouts from the comfort of their own home.",
        skills: "Built with: Node.js / Express.js / Handlebars.js / MySQL / Sequelize",
        link: "https://aqueous-headland-83808.herokuapp.com/",
        github: "https://github.com/Travis2445/maxed-out",
    },
    {
        id: 2,
        img: Tech,
        title: "Tech-Talk Blog",
        collab: "Solo Project",
        description: "A CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers' posts as well.",
        skills: "Built with: Handlebars.js / Express.js / MySQL",
        link: "https://agile-forest-43043.herokuapp.com/",
        github: "https://github.com/jessicalhille/tech-talk"
    },
    {
        id: 3,
        img: EmTracker,
        title: "The 'EM' Tracker",
        collab: "Solo Project",
        description: "A command-line application to manage a company's employee database. This application uses Node.js, Inquirer, and MySQL.",
        skills: "Built with: Node.js / Inquirer / MySQL",
        link: "https://youtu.be/C7YLmmjLeFs",
        github: "https://github.com/jessicalhille/the-em-tracker"
    },
    {
        id: 4,
        img: Backyard,
        title: "The Backyard Bartender",
        collab: "Front-End Team Project",
        description: "A stress-free, easy to use cocktail generator where all you need to know is which liquor you will be using. The API will do the rest.",
        skills: "Built with: HTML / CSS / JavaScript / APIs",
        link: "https://jessicalhille.github.io/backyard-bartender/",
        github: "https://github.com/jessicalhille/backyard-bartender"
    },
    {
        id: 5,
        img: Budget,
        title: "Budget Breeze",
        collab: "Solo Project",
        description: "A budget tracker application that allows for offline access and functionality. This progressive web application (PWA) allows users to add expenses and deposits to their budget with or without connection.",
        skills: "Built with: Express.js / MongoDB / PWAs",
        link: "https://shrouded-ocean-30327.herokuapp.com/",
        github: "https://github.com/jessicalhille/budget-breeze"
    },
    {
        id: 6,
        img: Notes,
        title: "iNote Take Express",
        collab: "Solo Project",
        description: "A virtual note taking application that can be used to write and save notes on your personal device.",
        skills: "Built with: HTML / CSS / JavaScript / Web APIs",
        link: "https://floating-basin-51458.herokuapp.com",
        github: "https://github.com/jessicalhille/inote-take-express"
    }
];