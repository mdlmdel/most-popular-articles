$(document).ready(function () {
  // Submit event handler
  $('#search-form').submit( function(e) {
    e.preventDefault();
    getMostPopular(results);
  })

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
    }).done(function(result) {
      console.log(result);
      // Define which results will be displayed and display them
      var article_url = results.url;
      var title = results.title;
      $('#results').append("<li><h3>" + title + 
        "</h3>" + article_url + "</li>");
    }).fail(function(err) {
      throw err;
    });
  }
  
})