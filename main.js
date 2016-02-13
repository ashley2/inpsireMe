'use strict';

$(document).ready(init);

function init() {

$('#quoteButton').click(function(evt){

$.get('http://quotes.rest/qod.json')
.success(function(data){
  $('#quoteBox').append(data);

})

});
	
}