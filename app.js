$(document).ready(function () {

  // Submit event handler
  $('#search-form').submit( function(e) {
    e.preventDefault();
    getMostPopular(results);
  })

  // Hide the top stories button when the page loads
  $('#summary').hide();

  // Get lists of the most emailed articles within the last 30 days from the New York Times Magazine section
  function getMostPopular() {
    var url = 'https://api.nytimes.com/svc/mostpopular/v2/mostemailed/Magazine/30.json';
    let params = {
      q: 'query',
      'api-key': '85b2939e3df349dd8502775e8623d350'
    }
    url += '?' + $.param(params)
    $.ajax({
      url: url,
      method: 'GET',
    }).done(function(data) {
      console.log(data);

      // Define which results will be displayed and display them
      for (var i = 0; i < 5; i++) {
        var title = data.results[i].title;
        $('#read').show();
        var article_url = data.results[i].url;
        var abstract = data.results[i].abstract;

        // Use bracket notation for media-metadata
        var image = data.results[i].media[0]['media-metadata'][0].url;
        console.log(image);
        
        // Display results in HTML
        $('#results').append("<li><h3>" + title + 
          "</h3>" + abstract + "<br><br>" + "<a target='blank' href='" + article_url + "'>" + 
          "<img src='" + image + "'>" + "'</a></li>");
        $('#summary').append("<a target='blank' href='" + article_url + "'>" + 
          "<img src='" + image + "'>" + "'</a>");
      } 
    }).fail(function(err) {
      throw err;
    });
  }
  
})