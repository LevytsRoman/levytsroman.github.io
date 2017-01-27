$(document).ready(function(){
  $('select').material_select();

  $(".button-collapse").sideNav({
    menuWidth: 200,
    edge: 'left',
    closeOnClick: true,
    draggable: true
  });

  var colors = {
        'about': 'rgb(142,85,114)',
        'projects': '#F46036',
        'algorithms': '#2E294E'
      },
      address = window.location.href.split('/'),
      pagename = address[address.length - 1]

  $('body').css('background-color', colors[pagename]);
  $('.card-action a').css('color', colors[pagename]);
  $('nav a').attr('style', 'color: ' + colors[pagename] + '');
  $("a:contains('" + pagename + "')").parent().css('background-color', colors[pagename]);

  $("a:contains('" + pagename + "')").css('color', "white");

  $('select').change(function(event){
    debugger
    var tag = $(this).val(),
        projects = $('.card');

        for(var i=0; i < projects.length; i++){
          console.log("I is :" + i);
          var $project = $(projects[i]);
          // debugger
          if($project.attr('tags').indexOf(tag) > -1 || tag === "all"){
            // debugger
            $project.show();
          } else {
            $project.hide();
          }
        }
  })
});
