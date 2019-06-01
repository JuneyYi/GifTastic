    
    
    var gif = ["Batman", "Superman", "Iron Man", "The Office", "Sponge Bob"];

   function displayGif() {

     var gif = $(this).attr("data-name");

     var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=S2HG1ftVVArRHHhO5O2THLSuTucKs8W8&q=" + gif + "&limit=10&offset=0&rating=PG-13&lang=en";
    
     $.ajax({
       url: queryURL,
       method: "GET"
     }).then(function(response) {

        console.log(response)

        var gifDiv = $("#gif-view");

        var imgURL = response.data[2].images.preview_webp.url;

        var image = $("<img>").attr("src", imgURL);

        gifDiv.append(image);

        var title = response.data[2].title

        gifDiv.prepend(title)
    
     });
   }

  function renderButtons() {

    $("#buttons-view").empty();

    for (var i = 0; i < gif.length; i++) {

      var a = $("<button>");
      
      a.addClass("gif-btn");
      
      a.attr("data-name", gif[i]);
     
      a.text(gif[i]);
      
      $("#buttons-view").append(a);
    }
  }


  $("#add-gif").on("click", function(event) {
    
    event.preventDefault();
    
    var gifs = $("#gif-input").val().trim();

    gif.push(gifs);

    renderButtons();
  });

  // Adding a click event listener to all elements with a class of "movie-btn"
  $(document).on("click", ".gif-btn", displayGif);

  displayGif() 
  renderButtons()

