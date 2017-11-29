function clearFilters(){
  $(".closing-icon").remove();
  $(".active_tag").removeClass('active_tag');
  $('.card').show();
}

function showContactForm(){

}

function toggleTags(button, tag){
  if(button.attr('class').indexOf('active_tag') > -1){
    button.removeClass("active_tag");
    button.html(tag);
  } else {
    button.html(tag + '<i class="material-icons left closing-icon">close</i>');
    button.addClass("active_tag");
  }
}

function addActiveTags(buttons){
  var active_tags = [];
  for(var j=0; j < buttons.length; j++){
    current_button = $(buttons[j]);
    if(current_button.attr('class').indexOf('active_tag') > -1){
      active_tags.push(current_button.attr('val'));
    }
  }
  return active_tags;
}

function showProjects(projects, active_tags){
  projects.each(function(i){
    var project = $(projects[i]);
    project.hide();

    $.each(active_tags, function(k){
      var active_tag = active_tags[k],
      projectContainsTag = project.attr('tags').indexOf(active_tag) > -1;

      if(projectContainsTag){
        project.show();
      }
    })
  })

  var activeTagsAreEmpty = active_tags.length === 0;

  if(activeTagsAreEmpty){
    projects.show();
  }
}

function hideCloseIcons(element){
  element.children().remove('i');
}

function assignColors(pagename, color){
  // debugger
  $('body').css('background-color', color);
  $('.card-action a').css('color', color);
  // debugger
  $('.nav-wrapper').css('background-color', color);
  $("a:contains('" + pagename + "')").parent().css('background-color', color);
  $("a:contains('" + pagename + "')").css('color', "white");
}
