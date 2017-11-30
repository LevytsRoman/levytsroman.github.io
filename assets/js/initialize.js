function initializeScripts(){
  // $( document ).tooltip();

  $('.materialboxed').materialbox();
  $(".button-collapse").sideNav({
    menuWidth: 200,
    edge: 'left',
    closeOnClick: true,
    draggable: true
  });
  // $('.carousel-arrows').click(function(e){
  //   var arrow = e.target;
  //   debugger
  // })
  $('.email_me').submit(function(e){
    e.preventDefault();

    $.ajax({
        url: "https://formspree.io/r.levyts@gmail.com",
        method: "POST",
        data: $('.email_me').serialize(),
        dataType: "json"
    }).done(function(res) {
      $('.email_input').val('');
      $('.email_input').removeClass('valid');
      $('#email_modal').modal('open');
    })
  })

  $('.my-borders').css({
    height: '0px',
    width: '0px'
  })
  // $('.carousel.carousel-slider').carousel({fullWidth: true});
  // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
  function randomAnswer(){
    var answers = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
    ]

    var ans = answers[Math.round(Math.random()*19)]
    $('.answer').html(ans);
  }

  $('.8ball').click(randomAnswer);

  $('#textarea1').trigger('autoresize');

  $('.project_list').on('click', '.next', function(e){
    e.preventDefault();
    var thisId = $(this).attr('id');
    var nextId = (parseInt(thisId) + 1).toString();

    $('#' + thisId).modal('close');

    // need to rework this to use promise rather then setTimeout
    setTimeout(function(){
      var nextId = (parseInt(thisId) + 1).toString();
      $('#' + nextId).modal('open')
    }, 200)
  })

  $('#email_modal').modal({
    opacity: .8, // Opacity of modal background
    inDuration: 200, // Transition in duration
    outDuration: 200, // Transition out duration
    startingTop: '30%', // Starting top style attribute
    endingTop: '35%',
  })

  $('.project_list .modal').modal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .8, // Opacity of modal background
      inDuration: 200, // Transition in duration
      outDuration: 200, // Transition out duration
      startingTop: '0%', // Starting top style attribute
      endingTop: '0%', // Ending top style attribute
      ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
        // alert("Ready");
        modal_open = true
        $('.carousel.carousel-slider').carousel({fullWidth: true});
      },
      complete: function(e) {
        // debugger
      } // Callback for Modal close
    });

  var colors = {
        'about': 'rgb(142,85,114)',
        'projects': '#F46036',
        'contact': '#fcb',
        'resume': '#2E294E'
      },
      urlString = window.location.href,
      scrollHeight = $(document).scrollTop();

  var pagename = ''
  $.each(colors, function(key,val){
    if(urlString.indexOf(key) > -1){
      color = val;
      pagename = key;
    }
  });
  // debugger
  if(urlString === 'http://localhost:4000/' || urlString === 'https://levytsroman.github.io/'){
    Barba.Pjax.getTransition = function() {
      return HideShowTransition;
    };
  } else {
    Barba.Pjax.getTransition = function() {
      return FadeTransition;
    };
  }

  if(pagename){
    // assignColors(pagename, color);
    $('nav a[href="/' + pagename + '"]').parent().find('div').addClass('nav-underlined');
  }

  $('.tag').click(function(event){
    event.preventDefault();

    hideCloseIcons($(this));

    var button = $(this),
        tag = $(this).attr('val'),
        projects = $('.card'),
        buttons = $('.btn'),
        active_tags = [],
        needToClearFilters = tag === "clear-filters";

    if(needToClearFilters){
      clearFilters();
    } else{
      toggleTags(button, tag);
      active_tags = addActiveTags(buttons);
      showProjects(projects, active_tags);
    }
  })

  $("nav ul li a").hover(function(e){
    $(e.target).parent().find('div').addClass('nav-hover-underlined');
  }, function(e){
    $(e.target).parent().find('div').removeClass('nav-hover-underlined');
  });

  $("#filter").click(function(event){
    event.preventDefault();
    var text = $('#filter').text(),
        options = {
          "filter": "hide filters",
          "hide filters": "filter"
        };

    $("#filter").text(options[text]);
    $("#tags").toggle(400);
  })
  // debugger
  $(window).scroll(() => {
    var scrollPos = $(document).scrollTop();
        documentHeight = $(document).height();
    if(scrollPos/documentHeight > 0.1){
      $('#scroll-top').css('display', 'block');
    }else {
      $('#scroll-top').css('display', 'none');
    }
  })

  $('#scroll-top').click((e)=>{
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 250);
    return false;
  })
}
