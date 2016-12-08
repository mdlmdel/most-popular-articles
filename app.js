$(document).ready(function () {
  // Submit event handler
  $('#search-form').submit( function(e) {
    e.preventDefault();
    getMostPopular();
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
      method: 'GET',
    }).done(function(result) {
      console.log(result);
    }).fail(function(err) {
      throw err;
    });
  }
  
})