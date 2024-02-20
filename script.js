$(document).ready(function(){
    let recipes = [];
    let recipeIdCounter = 1;

    $("#display").load("pages/home.ejs");
    $(".currentr").click(function() {
        $("#display").load("pages/recipes.ejs");
    });
    
    $(".newr").click(function() {
        $("#display").load("pages/add.ejs");
    });

    $(".mainpage").click(function() {
        $("#display").load("pages/home.ejs");
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