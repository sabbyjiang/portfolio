$(document).ready(() => {
    $(".project-gon").mouseenter(e => {
        Descriptions = {project1: {description: "Responsively designed, 2-player checkers game. Includes hint functions, cheat codes, win counter, and checking for valid moves.", title: "Checkers"}, project2: {description: "Full stack web app that queries the Spoonacular API in order to find reipces, save them to the user, and allows the user to save recipe preferences.", title: "Recipe Saver"}, project3: {description: "holder description", title: "holder title"}}
        $(e.target.children[1]).removeClass("hidden");
        $description = $('<div>').addClass("hexacontent");
        $title = $('<h2>').text(Descriptions[$(e.target).attr('id')].title);
        $description = $('<p>').text(Descriptions[$(e.target).attr('id')].description);
        $content = $('<div>').addClass('hexacontent hexadesc').append($('<p>'),$title, $description, $('<p>'));
        $('.description').append($content);
    });

    $(".project-gon").mouseleave(e => {
        $(".hexahover").addClass("hidden");
        $(".hexadesc").remove();
    });

})