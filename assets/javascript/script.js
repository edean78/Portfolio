$(document).ready(function () {

    var portfolio = {
        projects: [
            { week: "1", title: "Basic-Portfolio", url: "https://edean78.github.io/Basic-Portfolio/", image: "", desc: "This portfolio was created using HTML and CSS", type: "homework" },
            { week: "2", title: "Responsive-Portfolio", url: "https://edean78.github.io/Responsive-Portfolio/", image: "", desc: "This portfolio uses media queries to make the site responsive. Meaning as the size of the site changes so does the layout", type: "homework" },
            { week: "2a", title: "Bootstrap-Portfolio", url: "https://edean78.github.io/Bootstrap-Portfolio/", image: "", desc: "This portfolio uses twitter bootstrap to handle the responsiveness and styling", type: "homework" },
            { week: "3", title: "Psychic-Game", url: "https://edean78.github.io/Psychic-Game/", image: "", desc: "This game gives the user 10 guesses to guess the letter the computer chose.", type: "homework" },
            { week: "4", title: "Cyrstal Collector Game", url: "https://edean78.github.io/unit-4-game/", image: "When this game starts the computer will choose a random number. There are four crystals that represent four different random values. When the player clicks on a crystal the values are added together. The object of the game is to add up the value of the crystal to equal the computer's random value.", desc: "", type: "homework" },
            { week: "5", title: "Trivia Game", url: "https://edean78.github.io/TriviaGame/", image: "", desc: "This UGA trivia game uses time intervals to give the player 30 seconds to answer each question. After each question, a message will display along with a gif letting the player know if the question was ansered correctly or not.", type: "homework" },
            { week: "6", title: "Giphy-Api", url: "https://edean78.github.io/giphyapi/", image: "", desc: "This application displays gifs that the user inputs into the search box. When the user clicks search, an ajax call is executed to the giphyapi to receive the gif and corresponding information", type: "homework" },
            { week: "7", title: "Train Scheduler", url: "https://edean78.github.io/train-scheduler/", image: "", desc: "This application lets the user input train schedule information and it will display in a table. The application uses moment.js to calculate the minutes to the next train and when the next train will arrive", type: "homework" },
            { week: "8", title: "In the Loop", url: "https://edean78.github.io/Project-1-Group-4/", image: "", desc: "The In the Loop project allows a user to input a event in Atlanta and receive weather, location, and ticket prices for the event. We use ajax calls to receive weather and event information.", type: "project" }
        ]
    };

    var projects = portfolio.projects;

    function createPortfolio() {
        $(".portfolio").empty();

        for (let i = 0; i < projects.length; i++) {
            const project = projects[i];

            var projectDisplay = `
                <div class="col s8 m4">
                    <div class="card">
                        <div class="card-image">
                            <img src="images/sample-1.jpg">
                            <span class="card-title">${project.title}</span>
                        </div>
                        <div class="card-content">
                            <p>${project.desc}</p>
                        </div>
                        <div class="card-action">
                            <a href="${project.url}">This is a link</a>
                        </div>
                    </div>
                </div>
            `;

          $(".portfolio").append(projectDisplay);
        }

        
    }

    createPortfolio();



});