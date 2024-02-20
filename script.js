$(document).ready(function(){
    let recipes = [];
    let recipeIdCounter = 1;

    $(".currentr").click(function() {
        window.location.href = "recipes.html";
        recipes = JSON.parse(localStorage.getItem("recipes"));
        recipeIdCounter = JSON.parse(localStorage.getItem("counter"));
    });
    if (window.location.href == "recipe.html") {
        recipes = JSON.parse(localStorage.getItem("recipes"));
        recipeIdCounter = JSON.parse(localStorage.getItem("counter"));
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

                    // Construct the URL for the recipe details page with recipe details as parameters
                    let url = "recipe-details.html?id=" + id 
                            + "&name=" + encodeURIComponent(name) 
                            + "&author=" + encodeURIComponent(author) 
                            + "&date=" + encodeURIComponent(date) 
                            + "&cuisine=" + encodeURIComponent(cuisine) 
                            + "&meal=" + encodeURIComponent(meal) 
                            + "&recipe=" + encodeURIComponent(recipe);

                    // Navigate to the recipe details page
                    window.location.href = url;
                }
            });
        }
        else {
            alert("Oops! You haven't added any recipes yet! Please navigate to the add recipes page to get started.");
        }
    }

    $(".newr").click(function() {
       window.location.href = "add.html";
       recipes = JSON.parse(localStorage.getItem("recipes"));
       recipeIdCounter = JSON.parse(localStorage.getItem("counter"));
    });



    // Click event handler for "Add Recipe" button
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

        alert("Recipe added successfully. View the Recipes page.");

        // Reset form fields
        $("#name").val("");
        $("#author").val("");
        $("#date").val("");
        $("#select-cuisine").val("");
        $("#select-meal").val("");
        $("#recipe").val("");

        // Show the home section after adding the recipe
        window.location.href = "index.html";
    });

    $(".mainpage").click(function() {
        window.location.href = "index.html";
        recipes = JSON.parse(localStorage.getItem("recipes"));
        recipeIdCounter = JSON.parse(localStorage.getItem("counter"));
    });
});

// $(document).on("pagebeforeshow", "#recipes", function (event) {
//     createList();
// });

// $(document).on("pagebeforeshow", "#details", function (event) {
//     let localID = localStorage.getItem('parm');

//     recipesArray = JSON.parse(localStorage.getItem('recipesArray'));

//     console.log(recipesArray[localID - 1]);

//     document.getElementById("oneRecipeName").innerHTML = "Recipe Name: " + recipesArray[localID -1].recipe;
//     document.getElementById("oneAuthor").innerHTML = "Author Name: " + recipesArray[localID -1].author;
//     document.getElementById("oneDate").innerHTML = "Date: " + recipesArray[localID -1].date;
//     document.getElementById("oneCuisine").innerHTML = "Cuisine Type: " + recipesArray[localID -1].cuisine;
//     document.getElementById("oneMeal").innerHTML = "Meal Type: " + recipesArray[localID -1].meal;

// });


    // function createList() {
    //     let myUL = document.getElementById("RecipesListul");
    //     myUL.innerHTML = "";

    //     RecipesArray.forEach(function (oneRecipe,) {
    //         var myLi = document.createElement('li');
    //         myLi.classList.add('oneRecipe');
    //         myLi.setAttribute("data-parm", oneRecipe.ID);
    //         myLi.innerHTML = oneRecipe.ID + ": " + oneRecipe.name + " " + oneRecipe.author;
    //         myUL.appendChild(myLi);
    //     });
    // }

    // var liList = document.getElementsByClassName("oneRecipe");
    // let newRecipeArray = Array.from(liList);
    // newRecipeArray.forEach(function (element) {
    //     element.addEventListener('click', function () {
    //         var parm = this.getAttribute("data-parm");
    //         localStorage.setItem('parm', parm);
    //         let stringRecipesArray = JSON.stringify(recipesArray);
    //         localStorage.setItem('recipesArray', stringRecipesArray);
    //         document.location.href = "index.html#details";
    //     });
    // });



                    // $("#recipeList").on("click", "li", function() {
                //     let id = $(this).data("id");
                //     let name = $(this).data("name");
                //     let author = $(this).data("author");
                //     let date = $(this).data("date");
                //     let cuisine = $(this).data("cuisine");
                //     let meal = $(this).data("meal");
                //     let recipe = $(this).data("recipe");


                //     // Redirect to a new page with details of the selected recipe
                //     window.location.href = "recipe-details.html?id=" + id + "&name=" + encodeURIComponent(name) 
                //     + "&author=" + encodeURIComponent(author) 
                //     + "&date=" + encodeURIComponent(date) 
                //     + "&cuisine=" + encodeURIComponent(cuisine) 
                //     + "&meal=" + encodeURIComponent(meal) 
                //     + "&recipe=" + encodeURIComponent(recipe);;
                // });