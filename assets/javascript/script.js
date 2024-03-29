$(document).ready(function () {

    var portfolio = {
        projects: [
            { week: "1", title: "Basic-Portfolio", url: "https://edean78.github.io/Basic-Portfolio/", image: "./assets/images/portfolio.jpg", desc: "This portfolio was created using HTML and CSS", type: "homework", github: "https://github.com/edean78/Basic-Portfolio" },
            { week: "2", title: "Responsive-Portfolio", url: "https://edean78.github.io/Responsive-Portfolio/", image: "./assets/images/portfolio.jpg", desc: "This portfolio uses media queries to make the site responsive. Meaning as the size of the site changes so does the layout", type: "homework", github: "https://github.com/edean78/Responsive-Portfolio" },
            { week: "2a", title: "Bootstrap-Portfolio", url: "https://edean78.github.io/Bootstrap-Portfolio/", image: "./assets/images/portfolio.jpg", desc: "This portfolio uses twitter bootstrap to handle the responsiveness and styling", type: "homework", github: "https://github.com/edean78/Basic-Portfolio" },
            { week: "3", title: "Psychic-Game", url: "https://edean78.github.io/Psychic-Game/", image: "https://www.lovethispic.com/uploaded_images/113458-Crystal-Ball.jpg", desc: "This game gives the user 10 guesses to guess the letter the computer chose.", type: "homework", github: "https://github.com/edean78/Psychic-Game" },
            { week: "4", title: "Cyrstal Collector Game", url: "https://edean78.github.io/unit-4-game/", image: "assets/images/crystal.jpg", desc: "When this game starts the computer will choose a random number. There are four crystals that represent four different random values. When the player clicks on a crystal the values are added together. The object of the game is to add up the value of the crystal to equal the computer's random value.", type: "homework", github: "https://github.com/edean78/Psychic-Game" },
            { week: "5", title: "Trivia Game", url: "https://edean78.github.io/TriviaGame/", image: "assets/images/bulldawgs.jpg", desc: "This UGA trivia game uses time intervals to give the player 30 seconds to answer each question. After each question, a message will display along with a gif letting the player know if the question was ansered correctly or not.", type: "homework", github: "https://github.com/edean78/TriviaGame" },
            { week: "6", title: "Giphy-Api", url: "https://edean78.github.io/giphyapi/", image: "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif", desc: "This application displays gifs that the user inputs into the search box. When the user clicks search, an ajax call is executed to the giphyapi to receive the gif and corresponding information", type: "homework", github: "https://github.com/edean78/giphyapi" },
            { week: "7", title: "Train Scheduler", url: "https://edean78.github.io/train-scheduler/", image: "https://cdn.pixabay.com/photo/2017/06/24/23/03/railway-2439189_1280.jpg", desc: "This application lets the user input train schedule information and it will display in a table. The application uses moment.js to calculate the minutes to the next train and when the next train will arrive", type: "homework", github: "https://github.com/edean78/train-scheduler" },
            { week: "8", title: "In the Loop", url: "https://edean78.github.io/Project-1-Group-4/", image: "https://i0.wp.com/spacetourismguide.com/wp-content/uploads/2019/01/Stargazing-in-Atlanta-Featured.jpg?zoom=1.25&fit=862%2C575&ssl=1", desc: "The In the Loop project allows a user to input a event in Atlanta and receive weather, location, and ticket prices for the event. We use ajax calls to receive weather and event information.", type: "project", github: "https://github.com/edean78/Project-1-Group-4" },
            { week: "9", title: "LIRI Bot", url: "", image: "", desc: "LIRI Bot is like iPhone's Siri. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that take in parameteters and give you back data.", type: "homework", github: "https://github.com/edean78/liri-node-app"},
            { week: "10", title: "Constructor Word Guess", url: "", image: "https://gt.bootcampcontent.com/GT-Coding-Boot-Camp/gt-atl-fsf-pt-08-2019-u-c/raw/master/01-Class-Content/11-js-constructors/02-Homework/Instructions/Images/01-WordGuess-Cli.gif", desc: "Word Guess command-line using constructor functions", type: "homework", github: "https://github.com/edean78/Con-Word-Guess"},
            { week: "11", title: "Bamazon", url: "", image: "", desc: "A Amazon-like storefront application using MySQL. The application will take in orders from customers and deplete stock from the store's inventory.", type: "homework", github: "https://github.com/edean78/bamazon"},
            { week: "12", title: "Friend Finder", url: "https://vast-springs-19218.herokuapp.com/", image: "https://unsplash.com/@miinyuii?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge", desc: "This application is basically a dating app. This full-stack site will take in results from your users survey, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.", type: "homework", github: "https://github.com/edean78/FriendFinder"},
            { week: "13", title: "Burger App", url: "https://nameless-mountain-68976.herokuapp.com/", image: "https://images.unsplash.com/photo-1550317138-10000687a72b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60", desc: "This application is created using MySQL, Node, Express, Handlebars and a homemade ORM.", type: "homework", github: "https://github.com/edean78/burger"},
            { week: "14", title: "Santa's Little Helper", url: "https://dry-shelf-70211.herokuapp.com/", image: "https://unsplash.com/@jeshoots?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge", desc: "This application allows users to create a user account, create a list of wanted items, list the items in the wishlist, and search others wishlist", type: "project", github: "https://github.com/edean78/Project-2"}

        ]
    };

    var projects = portfolio.projects;

    function createPortfolio() {
        $(".portfolio").empty();

        for (let i = 0; i < projects.length; i++) {
            const project = projects[i];

            var projectDisplay = `
            <div class="col m4">
                 <div class="card small">
                    <div class="card-image waves-effect waves-block waves-light">
                        <img class="activator" src="${project.image}">
                    </div>
                    <div class="card-content">
                        <span class="card-title activator grey-text text-darken-4">${project.title}<i class="material-icons right">more_vert</i></span>
                        <a href="${project.github}" title="Github Profile" target="_blank"><i class="fab fa-github" style="font-size: 24px; color: blue;"></i></a>
                        <p><a href="${project.url}" target="_blank">Link to website</a></p>
                    </div>
                    <div class="card-reveal">
                        <span class="card-title grey-text text-darken-4">${project.title}<i class="material-icons right">close</i></span>
                        <p>${project.desc}</p>
                    </div>
                </div>
            </div>
            `;

          $(".portfolio").append(projectDisplay);
        }

        
    }

    createPortfolio();



});