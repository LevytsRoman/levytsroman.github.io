$(document).ready(function(){
  var colors = {
    'about': 'rgb(142,85,114)',
    'current_projects':  '#F46036',
    'finished_projects': '#2E294E'
  }
  var address = window.location.href.split('/'),
      pagename = address[address.length - 2];
      console.log(address);
  console.log(colors[pagename]);
  $('nav').css('background-color', colors[pagename]);
  var a = $('.card-action a').css('color', colors[pagename]);
});
