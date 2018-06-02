//fix bug! *** Use new JSON
// 02/08/2018: fixed bug : works fine now :)
var url ="https://gist.githubusercontent.com/dmakk767/9375ff01aff76f1788aead1df9a66338/raw/491f8c2e91b7d3b8f1c8230e32d9c9bc1a1adfa6/Quotes.json%2520";
    
var getX = function(data){
  this.x = Math.floor((Math.random() * data.length)  + 1);
  this.quote = data[this.x].quote;
  this.name = data[this.x].name;
};



function generation() {
   $.getJSON(url, function(data){
     console.log(data[1])
   var a = new getX(data);

   $('#tweeter iframe').remove();
   $('#container').empty();
   var tweetBtn = $('<a></a>')
        .addClass('twitter-share-button')
        .attr('id','tweeter')
        .attr('href', 'http://twitter.com/share')
        .attr('data-url', 'none')
        .attr('data-text', a.quote)
        .attr('data-size','large');
    $('#container').append(tweetBtn);
    twttr.widgets.load();
  $("#quote").html(a.quote);
  $("#from").html("- "+ a.name );
});}
   
$(document).ready(function(){
    $("button").click(generation);
    });

