$(document).ready(function(){
  $(".button-collapse").sideNav({
    menuWidth: 200,
    edge: 'left',
    closeOnClick: true,
    draggable: true
  });

  var colors = {
    'about': 'rgb(142,85,114)',
    'current': '#F46036',
    'finished': '#2E294E'
  }
  var address = window.location.href.split('/'),
      pagename = address[address.length - 1],
      navtag = pagename.split('_')[0];

  $('body').css('background-color', colors[pagename]);
  $('.card-action a').css('color', colors[pagename]);
  $('nav a').attr('style', 'color: ' + colors[pagename] + ' !important;');
  $("a:contains('" + navtag + "')").parent().css('background-color', colors[pagename]);
  $("a:contains('" + navtag + "')").css('color', 'white');
});
