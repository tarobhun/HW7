$(document).ready(function(){
    let recipes = [];
    let recipeIdCounter = 1;

    $(".currentr").click(function() {
        $("#home").css("visibility", "hidden");
        $("#add").css("visibility", "hidden");
        $("#recipe-details").css("visibility", "hidden");
        $("#recipes").css("visibility", "visible");
        displayRecipes(); // Display recipes when the #recipes element becomes visible
    });
    
    $(".newr").click(function() {
        $("#home").css("visibility", "hidden");
        $("#recipes").css("visibility", "hidden");
        $("#recipe-details").css("visibility", "hidden");
        $("#add").css("visibility", "visible");
    });

    $(".mainpage").click(function() {
        $("#recipes").css("visibility", "hidden");
        $("#add").css("visibility", "hidden");
        $("#recipe-details").css("visibility", "hidden");
        $("#home").css("visibility", "visible");
    });

    $("#buttonAdd").click(function(){
        let current = {
            id: recipeIdCounter,
            name: $("#name").val(),
            author: $("#author").val(),
            date: $("#date").val(),
            cuisine: $("#select-cuisine").val(),
            meal: $("#select-meal").val(),
            recipe: $("#recipe").val()
        };
        recipes.push(current);
        recipeIdCounter++;
        localStorage.setItem("recipes", JSON.stringify(recipes));
        localStorage.setItem("counter", JSON.stringify(recipeIdCounter));

        // Display the new recipe in the recipe list
        // $("#recipeList").append("<li class='recipeItem' data-id='" 
        //     + current.id 
        //     + "' data-name='" 
        //     + current.name 
        //     + "' data-author='" 
        //     + current.author 
        //     + "' data-date='" 
        //     + current.date 
        //     + "' data-cuisine='" 
        //     + current.cuisine 
        //     + "' data-meal='" 
        //     + current.meal 
        //     + "' data-recipe='" 
        //     + current.recipe
        //     + "'>" 
        //     + current.name 
        //     + "</li>");
        // $("#recipeList").append("<hr>");

        alert("Recipe added successfully. View the Recipes page.");

        // Reset form fields
        $("#name").val("");
        $("#author").val("");
        $("#date").val("");
        $("#select-cuisine").val("");
        $("#select-meal").val("");
        $("#recipe").val("");

        // Show the home section after adding the recipe
        $("#recipe-details").css("visibility", "hidden");
        $("#add").css("visibility", "hidden");
        $("#recipes").css("visibility", "hidden");
        $("#home").css("visibility", "visible");
    });  

    // Function to display recipes
    function displayRecipes() {
        if (recipes.length > 0) {
            // Clear existing content in the textbox
            $("#recipeList").empty();
            // Display each recipe
            for(let i = 0; i < recipes.length; i++) {
                let current = recipes[i];
                $("#recipeList").append("<li class='recipeItem' data-id='" 
                    + current.id 
                    + "' data-name='" 
                    + current.name 
                    + "' data-author='" 
                    + current.author 
                    + "' data-date='" 
                    + current.date 
                    + "' data-cuisine='" 
                    + current.cuisine 
                    + "' data-meal='" 
                    + current.meal 
                    + "' data-recipe='" 
                    + current.recipe 
                    + "'>" 
                    + current.name 
                    + "</li>");
                $("#recipeList").append("<hr>");
            }
        } else {
            alert("Please add a recipe");
        }
    }

    // Call the displayRecipes function when the page loads initially
    displayRecipes();

    // Get the parent element (ul) of recipe items
    const recipeList = document.getElementById("recipeList");

    // Add click event listener to the parent element
    recipeList.addEventListener("click", function(event) {
        // Check if the clicked element is a recipe item (li)
        if (event.target.classList.contains("recipeItem")) {
            // Get the recipe details from data attributes
            let id = event.target.dataset.id;
            let name = event.target.dataset.name;
            let author = event.target.dataset.author;
            let date = event.target.dataset.date;
            let cuisine = event.target.dataset.cuisine;
            let meal = event.target.dataset.meal;
            let recipe = event.target.dataset.recipe;

            console.log("ID:", id);
            console.log("Name:", name);
            console.log("Author:", author);
            console.log("Date:", date);
            console.log("Cuisine:", cuisine);
            console.log("Meal:", meal);
            console.log("Recipe:", recipe);

            // Construct an item to use for loading the details page
            let details = {
                Id: id,
                Name: name,
                Author: author,
                Date: date,
                Cuisine: cuisine,
                Meal: meal,
                Recipe: recipe
            }
            // Load the details page
            $("#home").css("visibility", "hidden");
            $("#add").css("visibility", "hidden");
            $("#recipes").css("visibility", "hidden");
            $("#recipe-details").css("visibility", "visible");
            $("#rname").text(details.Name);
            $("#author").text(details.Author);
            $("#date").text(details.Date);
            $("#cuisine").text(details.Cuisine);
            $("#meal").text(details.Meal);
            $("#recipe").text(details.Recipe);
        }
    });
});
