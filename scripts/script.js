$(document).ready(() => {

    const toggleModalClasses = () => {
        $('body').toggleClass('noscroll');
        $('.modal').toggleClass('hidden');
        $('.full').toggleClass('blur');
    }

    const getProjectInfo = (id) => {
        const projects = {
            checkers: {
                title: 'Checkers',
                technologiesUsed: ['jQuery'],
                image: 'images/project-screenshots/' + id,
                description: 'A two player checkers game that checks for valid moves, gives users hints for possible moves, and keeps track of wins and pieces on the board. There are also fun cheat codes.',
                link: 'https://git.generalassemb.ly/pages/sabrina-jiang/Project-1-Checkers-Sabrina-Jiang'
            },
            recipes: {
                title: 'Recipes Organizer and Meal Planner',
                technologiesUsed: ['Node.js', 'Mustache-Express.js', 'PSQL', 'Spoonacular API', 'BCrypt', 'Passport', 'unirest', 'jQuery'],
                image: 'images/project-screenshots/' + id,
                description: 'A web app that allows users to search for recipes through dietary preferences, by ingredients, or by recipe name. Users are then able to organize their recipes by meals (breakfast, lunch, dinner) or by dish (appetizer, entree, dessert, side).',
                link: 'https://meal-planner-and-recipe.herokuapp.com/'
            },
            apartment: {
                title: 'apARTment',
                technologiesUsed: ['Ruby On Rails', 'Rijks Museum API', 'SVG', 'Git for Group Workflow'],
                image: 'images/project-screenshots/' + id,
                description: 'A web app that allows users to search the Rijks Museum for their collection of art. Once users saves pieces into their gallery, they are able to create a mockup of a room (current choices are bedroom or living room) and colour coordinate their furniture to the art piece. Future expansion includes other room types, more furniture types, and custom colour picker.',
                link: 'https://appartement.herokuapp.com'
            },
            reddit: {
                title: 'Checkers',
                technologiesUsed: ['Node.js', 'IBM Watson Tone Analyzer API', 'Reddit API', 'OAuth 2.0', 'D3', 'React.js'],
                image: 'images/project-screenshots/' + id,
                description: 'A webapp that allows users to view the current emotional state of reddit. Users who are not logged in (or don\'t have a reddit account can see the emotional analysis for the front page by post. Users who authorise the app can see the emotional (joy, anger, fear, disgust, and sadness) or social (Conscientiousness, Openness, Emotional Range(Neuroticism), Agreeableness, and Extraversion) tone analysis for their subreddits.',
                link: 'https://reddit-emotions.herokuapp.com/'
            }
        }

        return projects[id];
    }

    $('.hexLink').click(e => {
        e.preventDefault();
        const targetProjectID = $(e.currentTarget).attr('id');

        if(targetProjectID){
            toggleModalClasses();
            const projectInfo = getProjectInfo(targetProjectID);
            const modal = $('.description');

            const title = $('<h1>').addClass('project-title');

            title.append($('<a>').text(projectInfo.title).attr('href', projectInfo.link).addClass('emph hexanav'));

            const image = $('<img>').attr('src', projectInfo.image + '.png').addClass('project-image');

            const technologies = $('<div>').addClass('technolgies');
            technologies.append($('<h4>').text('Technologies Used:'));

            projectInfo.technologiesUsed.forEach(tech => {
                const techItem = $('<li>').text(tech);
                technologies.append(techItem);
            });
            const description = $('<p>').text(projectInfo.description).addClass('project-description');

            $(modal).append(title, image, technologies, description);
        }
        
    });

    $('#empty').unbind('click');

    $('#close-modal').click(e => {
        e.preventDefault();
        $('.description').empty();
        toggleModalClasses();
    })
})