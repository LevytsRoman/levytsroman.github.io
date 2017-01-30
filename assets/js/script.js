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

  $('.tag').click(function(event){
    event.preventDefault();
    $(this).children().remove('i');

    var $button = $(this),
        tag = $(this).attr('val'),
        projects = $('.card'),
        buttons = $('.btn'),
        active_tags = [];

    if($button.attr('class').indexOf('active_tag') > -1){
      $button.removeClass("active_tag");
      $button.html(tag);
    } else {
      $button.html(tag + '<i class="material-icons left">close</i>');
      $button.addClass("active_tag");
    }

    for(var j=0; j < buttons.length; j++){
      $current_button = $(buttons[j]);
      if($current_button.attr('class').indexOf('active_tag') > -1){
        active_tags.push($current_button.attr('val'));
      }
    }

    for(var i=0; i < projects.length; i++){
      var $project = $(projects[i]);
      $project.hide();
      for(var k=0; k < active_tags.length; k++){
        var active_tag = active_tags[k];
        if($project.attr('tags').indexOf(active_tag) > -1 || active_tag === "all" || active_tag === ""){
          $project.show();
        }
      }
    }
  })

});
