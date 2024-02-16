$(document).ready(function(){
    $(".currentr").click(function() {
        window.location.href = "recipes.html";
    });
    $(".newr").click(function() {
        window.location.href = "add.html";
    });
    $(".mainpage").click(function() {
        window.location.href = "index.html";
    });
    const params = new URLSearchParams(document.location.search);
    $("#rname").text(decodeURIComponent(params.get("name")));
    $("#author").text(decodeURIComponent(params.get("author")));
    $("#date").text(decodeURIComponent(params.get("date")));
    $("#cuisine").text(decodeURIComponent(params.get("cuisine")));
    $("#meal").text(decodeURIComponent(params.get("meal")));
    $("#recipe").text(decodeURIComponent(params.get("recipe")));
});