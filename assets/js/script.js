$(document).ready(function(){
  var colors = {
    'about': 'rgb(142,85,114)',
    'current_projects':  '#F46036',
    'current': '#F46036',
    'finished_projects': '#2E294E',
    'finished': '#2E294E'
  }
  var address = window.location.href.split('/'),
      pagename = address[address.length - 2],
      navtag = pagename.split('_')[0];

  $('body').css('background-color', colors[pagename]);
  $('.card-action a').css('color', colors[pagename]);
  $('nav a').attr('style', 'color: ' + colors[pagename] + ' !important;');
  $("a:contains('" + navtag + "')").parent().css('background-color', colors[pagename]);
  $("a:contains('" + navtag + "')").css('color', 'white');
});
