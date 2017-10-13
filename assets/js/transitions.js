var slideOutTransition = Barba.BaseTransition.extend({
  start: function() {
    Promise
      .all([this.newContainerLoading, this.fadeOut()])
      .then(this.fadeIn.bind(this));
  },

  fadeOut: function() {
    /**
     * this.oldContainer is the HTMLElement of the old Container
     */
    // debugger
    // $('body').css('backgroundColor', 'black')
    var contactWidth = $('.contact').width(),
        contactHeight = $('.contact').height(),
        currentWidth = $('.current').width(),
        currentHeight = $('.current').height(),
        completedWidth = $('.completed').width(),
        completedHeight = $('.completed').height(),
        aboutWidth = $('.about').width(),
        aboutHeight = $('.about').height();

    $(this.oldContainer).find('.contact').animate({
      left: '-=' + contactWidth + 'px',
      top: '-=' + contactHeight + 'px'
    }, 600)
    $(this.oldContainer).find('.about').animate({
      left: '+='+ aboutWidth +'px',
      top: '+=' + aboutHeight + 'px'
    }, 600)
    $(this.oldContainer).find('.current').animate({
      left: '+=' + currentWidth + 'px',
      top: '-=' + currentHeight + 'px'
    }, 600)
    $(this.oldContainer).find('.completed').animate({
      left: '-=' + completedWidth + 'px',
      top: '+=' + completedHeight + 'px'
    }, 600)
    // $(this.oldContainer).find('.current').animate({ opacity: 0 })
    // $(this.oldContainer).find('.completed').animate({ opacity: 0 })
    // $(this.oldContainer).find('.about').animate({ opacity: 0 })
    return $(this.oldContainer).find('.contact').animate({ opacity: 0 }, 400).promise();
  },

  fadeIn: function() {
    /**
     * this.newContainer is the HTMLElement of the new Container
     * At this stage newContainer is on the DOM (inside our #barba-container and with visibility: hidden)
     * Please note, newContainer is available just after newContainerLoading is resolved!
     */

    var _this = this;
    var $el = $(this.newContainer);

    $(this.oldContainer).hide();

    $el.css({
      visibility : 'visible',
      opacity : 0
    });

    $el.animate({ opacity: 1 }, 400, function() {
      /**
       * Do not forget to call .done() as soon your transition is finished!
       * .done() will automatically remove from the DOM the old Container
       */

      _this.done();
    });
    initializeScripts()
  }
})

var FadeTransition = Barba.BaseTransition.extend({
  start: function() {
    /**
     * This function is automatically called as soon the Transition starts
     * this.newContainerLoading is a Promise for the loading of the new container
     * (Barba.js also comes with an handy Promise polyfill!)
     */

    // As soon the loading is finished and the old page is faded out, let's fade the new page
    Promise
      .all([this.newContainerLoading, this.fadeOut()])
      .then(this.fadeIn.bind(this));
  },

  fadeOut: function() {
    /**
     * this.oldContainer is the HTMLElement of the old Container
     */
    // $(this.oldContainer).addClass('animated bounceOutLeft');
    return $(this.oldContainer).animate({ opacity: 0 }).promise();
  },

  fadeIn: function() {
    /**
     * this.newContainer is the HTMLElement of the new Container
     * At this stage newContainer is on the DOM (inside our #barba-container and with visibility: hidden)
     * Please note, newContainer is available just after newContainerLoading is resolved!
     */

    var _this = this;
    var $el = $(this.newContainer);

    $(this.oldContainer).hide();

    $el.css({
      visibility : 'visible',
      opacity : 0
    });
    // $el.addClass('animated bounceInRight');
    $el.animate({ opacity: 1 }, 400, function() {
      /**
       * Do not forget to call .done() as soon your transition is finished!
       * .done() will automatically remove from the DOM the old Container
       */

      _this.done();
    });
    initializeScripts()
  }
});
