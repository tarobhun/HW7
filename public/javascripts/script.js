$(document).ready(function(){

    let RecipeObject = function (pName, pAuthor, pDate, pCuisine, pMeal, pRecipe) {
        this.id =  Math.random().toString(16).slice(5);
        this.name = pName;
        this.author = pAuthor;
        this.date = pDate;  
        this.cuisine = pCuisine;
        this.meal = pMeal;
        this.recipe = pRecipe;
    }
    

    $("#buttonAdd").click(function(){
        let current = new RecipeObject(
            $("#name").val(),
            $("#author").val(),
            $("#date").val(),
            $("#select-cuisine").val(),
            $("#select-meal").val(),
            $("#recipe").val()
        );
        $.ajax({
            type: "POST",
            url: "/addRecipe",
            data: JSON.stringify(current),
            dataType: "json",
            success: function() {
                alert("Recipe added successfully. Go to the My Recipes page to see it!");
            },
            error: function() {
                alert("ERROR: Recipe addition failed. Please try again.")
            }
        });

        // Reset form fields
        $("#name").val("");
        $("#author").val("");
        $("#date").val("");
        $("#select-cuisine").val("");
        $("#select-meal").val("");
        $("#recipe").val("");

    });  

    // Function to display recipes
    function displayRecipes() {
        const recipes = $.ajax({
            type: "GET",
            url: "/getRecipes",
            dataType: "json",
            error: function() {
                alert("Internal error, please refresh the page and try again.")
            }
        });
        if (recipes.length > 0) {
            // Clear existing content in the textbox
            $("#recipeList").empty();
            // Display each recipe
            for(let i = 0; i < recipes.length; i++) {
                let current = recipes[i];
                $("#recipeList").append("<li class='recipeItem' data-id='" 
                    + current.id 
                    + "'>" 
                    + current.name 
                    + "</li>"
                    + "<hr>");
                //$("#recipeList").append("<hr>");
            }
        } else {
            alert("Please add a recipe");
        }
    }

    $(document).on("pageshow","#recipes",function(){

        displayRecipes();
     
    });

    // Get the parent element (ul) of recipe items
    const recipeList = document.getElementById("recipeList");

    // Add click event listener to the parent element
    recipeList.addEventListener("click", function(event) {
        // Check if the clicked element is a recipe item (li)
        if (event.target.classList.contains("recipeItem")) {
            // Get the recipe details from data attributes
            let id = event.target.dataset.id;
            let current = recipes[id - 1];
            // Load the details page
            $.mobile.changePage("#recipe-details");
            $("#rname").text(current.name);
            $("#rauthor").text(current.author);
            $("#rdate").text(current.date);
            $("#rcuisine").text(current.cuisine);
            $("#rmeal").text(current.meal);
            $("#rrecipe").text(current.recipe);
        }
    });
});