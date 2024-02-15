// $(document).ready(function(){
//     let recipes = [];
//     $(".currentr").click(function() {
//         $("#home").css("visibility", "hidden");
//         $("#add").css("visibility", "hidden");
//         $("#recipes").css("visibility", "visible");
//         for(i = 0; i < recipes.length; i++) {
//             let current = recipes[i];
//             $("#textbox").append(current.name, "<br/>", current.cuisine, "<br/>", current.meal, "<br/>", current.recipe);
//         }
//     });
//     $(".newr").click(function() {
//         $("#home").css("visibility", "hidden");
//         $("#add").css("visibility", "visible");
//         $("#recipes").css("visibility", "hidden");
//         $("#buttonAdd").click(function(){
//             let current = {name: $("#name").val(), cuisine: $("#select-cuisine").val(), meal: $("#select-meal").val(), recipe: $("#recipe").val()};
//             recipes.push(current);
//         });
//     });
//     $(".mainpage").click(function() {
//         $("#home").css("visibility", "visible");
//         $("#add").css("visibility", "hidden");
//         $("#recipes").css("visibility", "hidden");
//     });
// });

$(document).ready(function(){
    let recipes = [];

    $(".currentr").click(function() {
        $("#home").css("visibility", "hidden");
        $("#add").css("visibility", "hidden");
        $("#recipes").css("visibility", "visible");

        // Clear existing content in the textbox
        $("#textbox").empty();

        // Display each recipe
        for(let i = 0; i < recipes.length; i++) {
            let current = recipes[i];
            $("#textbox").append("<p><strong>Recipe Name: </strong> " + current.name + "</p>");
            $("#textbox").append("<p><strong>Cuisine Type: </strong> " + current.cuisine + "</p>");
            $("#textbox").append("<p><strong>Meal Type: </strong> " + current.meal + "</p>");
            $("#textbox").append("<p><strong>Recipe: </strong> " + current.recipe + "</p>");
            $("#textbox").append("<hr>");
        }
    });

    $(".newr").click(function() {
        $("#home").css("visibility", "hidden");
        $("#add").css("visibility", "visible");
        $("#recipes").css("visibility", "hidden");
    });

    // Click event handler for "Add Recipe" button
    $("#buttonAdd").click(function(){
        let current = {
            name: $("#name").val(),
            cuisine: $("#select-cuisine").val(),
            meal: $("#select-meal").val(),
            recipe: $("#recipe").val()
        };
        recipes.push(current);

        alert("Recipe added successfully. View the Recipes page.");

        // Reset form fields
        $("#name").val("");
        $("#select-cuisine").val("");
        $("#select-meal").val("");
        $("#recipe").val("");

        // Show the home section after adding the recipe
        $("#home").css("visibility", "visible");
        $("#add").css("visibility", "hidden");
        $("#recipes").css("visibility", "hidden");
    });

    $(".mainpage").click(function() {
        $("#home").css("visibility", "visible");
        $("#add").css("visibility", "hidden");
        $("#recipes").css("visibility", "hidden");
    });
});



