'use strict';

$(document).ready(init);

var colors = ['#b3b3b3','#ff0066', '#00ccff', '#0066cc']
var i = 0;
function init() {

  $('#quoteButton').click(function(evt){

    $.get('http://quotes.rest/qod.json')
    .success(function(data){
      var color = colors[i];
      var quote = data.contents.quotes[0].quote
      var author = data.contents.quotes[0].author
      $('#quoteBox').text('"' +quote + '" -' + author).css({
        color: color,
        fontFamily: "'Raleway', sans-serif",
        fontSize: "54px"
      });
      i++;
      if (i === 4){
        i = 0;
      }
    })

    .error(function(err){
      console.log(err);
    })
  });
}