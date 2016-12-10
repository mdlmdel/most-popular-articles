$(document).ready(function () {
  // Submit event handler
  $('#search-form').submit( function(e) {
    e.preventDefault();
    getMostPopular(results);
  })

  $('#read').hide();
  // Get lists of most popular articles from the New York Times Magazine section 
  function getMostPopular() {
    var url = 'https://api.nytimes.com/svc/mostpopular/v2/mostemailed/Magazine/30.json';
    let params = {
      q: 'query',
      'api-key': '85b2939e3df349dd8502775e8623d350'
    }
    url += '?' + $.param(params)
    $.ajax({
      url: url, 
      title: results.title,

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

        $('#results').append("<li><h3>" + title + 
          "</h3>" + abstract + "<br><br>" + "<a target='blank' href='" + article_url + "'>" + 
          "<img src='" + image + "'>" + "'</a></li>");
        $('#read').append("<a target='blank' href='" + article_url + "'>" + 
          "<img src='" + image + "'>" + "'</a>");
      } 
      
    }).fail(function(err) {
      throw err;
    });
  }
  
})