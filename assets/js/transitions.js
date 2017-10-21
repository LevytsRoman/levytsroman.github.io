var HideShowTransition = Barba.BaseTransition.extend({
  start: function() {
    this.newContainerLoading.then(this.finish.bind(this));
  },

  finish: function() {
    initializeScripts();
    document.body.scrollTop = 0;
    $('html').css('overflow-y', 'hidden')

    $(this.newContainer).addClass('barba-new-container')
    $(this.newContainer).show()

    $(this.newContainer).css({
      visibility : 'visible',
      opacity : 1
    });

    var _this = this;

    // debugger
    $(this.oldContainer).addClass('barba-old-container')
    // $('body').css('backgroundColor', 'black')
    // debugger
    $('.my-borders').css({
      height: '2px',
      width: '2px'
    })
    // var pos = $('.Me-border').position().left + 'px'
    // $('.stuff-border').css({left: pos})
    var pro1 = new Promise((resolve, reject) => {
      $('.Me-border').animate({
        height: '100%'
      }, 500, function(){
        resolve()
      })
		});

    var pro2 = new Promise((resolve, reject) => {
      $('.Projects-border').animate({
        width: '100%'
      }, 500, function(){
        resolve()
      })
		});

    var pro3 = new Promise((resolve, reject) => {
      $('.stuff-border').animate({
        width: '100%'
      }, 500, function(){
        resolve()
      })
		});

    var pro4 = new Promise((resolve, reject) => {
      $('.Contact-border').animate({
        height: '100%'
      }, 500, function(){
        resolve()
      })
		});
    // debugger
    // var pro5
    Promise.all([pro1,pro2,pro3,pro4]).then(values => {
      // debugger
      // This line below fixes a weird bug that only happens on one page ...
      $('.top-row').css('background-color', 'transparent')

      var contactWidth = $('.contact').width(),
          contactHeight = $('.contact').height(),
          currentWidth = $('.current').width(),
          currentHeight = $('.current').height(),
          completedWidth = $('.completed').width(),
          completedHeight = $('.completed').height(),
          aboutWidth = $('.about').width(),
          aboutHeight = $('.about').height();

      $(this.oldContainer).find('.about').animate({
        left: '+='+ aboutWidth +'px',
        top: '+=' + aboutHeight + 'px'
      }, 500)
      $(this.oldContainer).find('.contact').animate({
        left: '-=' + contactWidth + 'px',
        top: '-=' + contactHeight + 'px'
      }, 500)
      $(this.oldContainer).find('.current').animate({
        left: '+=' + currentWidth + 'px',
        top: '-=' + currentHeight + 'px'
      }, 500)
      $(this.oldContainer).find('.completed').animate({
        left: '-=' + completedWidth + 'px',
        top: '+=' + completedHeight + 'px'
      }, 500, function(){
        // debugger
        $('.barba-old-container').removeClass('barba-old-container')
        $('.barba-new-container').removeClass('barba-new-container');

        $(this.oldContainer).find('.about').finish();
        $(this.oldContainer).find('.current').finish();
        $(this.oldContainer).find('.completed').finish();
        $(this.oldContainer).find('.contact').finish();
        $('.my-borders').finish();
        $('html').css('overflow-y', 'visible')
        // $('body').css('background-color','purple')
        // debugger

        _this.done();
      }.bind(this))
      // $(this.oldContainer).find('.current').animate({ opacity: 0 })
      // $(this.oldContainer).find('.completed').animate({ opacity: 0 })
      // $(this.oldContainer).find('.about').animate({ opacity: 0 })
    })
  }
});

var FadeTransition = Barba.BaseTransition.extend({
  start: function() {


    /**
     * This function is automatically called as soon the Transition starts
     * this.newContainerLoading is a Promise for the loading of the new container
     * (Barba.js also comes with an handy Promise polyfill!)
     */

    // As soon the loading is finished and the old page is faded out, let's fade the new page
    // Barba.Dispatcher.on('newPageReady', function(currentStatus, oldStatus, container) {
    // }.bind(this));
    Promise.all([this.newContainerLoading, this.fadeIn()]);
  },

  fadeOut: function() {
    /**
     * this.oldContainer is the HTMLElement of the old Container
     */
    // $(this.oldContainer).addClass('animated bounceOutLeft');
    // debugger
    //  else {
      // return $(this.oldContainer).animate({ opacity: 0 }, 1000).promise();
    // }
  },

  fadeIn: function() {
    /**
     * this.newContainer is the HTMLElement of the new Container
     * At this stage newContainer is on the DOM (inside our #barba-container and with visibility: hidden)
     * Please note, newContainer is available just after newContainerLoading is resolved!
     */
    //  debugger
    //  $(this.newContainer).css('z-index', 10)
    // debugger
    Promise.all([this._newContainerPromise]).then(() => {
      initializeScripts();


      if(this.newContainer.baseURI === "http://localhost:4000/"){
        $(this.newContainer).addClass('barba-old-container');
        $('.my-borders').css({
          height: '2px',
          width: '2px'
        })
        $('.Me-border').css({height: '100%'})
        $('.Contact-border').css({height: '100%'})
        $('.Projects-border').css({width: '100%'})
        $('.stuff-border').css({width: '100%'})

        // debugger
        // var pos = $('.Me-border').position().left + 'px'
        // $('.stuff-border').css({left: pos})
        var contactXPos = $('.contact').position().left,
        contactYPos = $('.contact').position().top,
        currentXPos = $('.current').position().left,
        currentYPos = $('.current').position().top,
        completedXPos = $('.completed').position().left,
        completedYPos = $('.completed').position().top,
        aboutXPos = $('.about').position().left,
        aboutYPos = $('.about').position().top
        contactWidth = $('.contact').width(),
        contactHeight = $('.contact').height(),
        currentWidth = $('.current').width(),
        currentHeight = $('.current').height(),
        completedWidth = $('.completed').width(),
        completedHeight = $('.completed').height(),
        aboutWidth = $('.about').width(),
        aboutHeight = $('.about').height();
        // debugger

        $(this.newContainer).find('.about').css({
          left: '+='+ aboutWidth +'px',
          top: '+=' + aboutHeight + 'px'
        })
        $(this.newContainer).find('.contact').css({
          left: '-=' + contactWidth + 'px',
          top: '-=' + contactHeight + 'px'
        })
        $(this.newContainer).find('.current').css({
          left: '+=' + currentWidth + 'px',
          top: '-=' + currentHeight + 'px'
        })
        $(this.newContainer).find('.completed').css({
          left: '-=' + completedWidth + 'px',
          top: '+=' + completedHeight + 'px'
        })

        // debugger
        var _this = this;
        var pro1 = new Promise((resolve, reject) => {
          $(this.newContainer).find('.about').animate({
            left: '-='+ aboutWidth +'px',
            top: '-=' + aboutHeight + 'px'
          }, 500, function(){
            resolve()
          })
        });
        var pro2 = new Promise((resolve, reject) => {
          $(this.newContainer).find('.contact').animate({
            left: '+=' + contactWidth + 'px',
            top: '+=' + contactHeight + 'px'
          }, 500, function(){
            resolve()
          })
        });
        var pro3 = new Promise((resolve, reject) => {
          $(this.newContainer).find('.current').animate({
            left: '-=' + currentWidth + 'px',
            top: '+=' + currentHeight + 'px'
          }, 500, function(){
            resolve()
          })
        });
        var pro4 = new Promise((resolve, reject) => {
          $(this.newContainer).find('.completed').animate({
            left: '+=' + completedWidth + 'px',
            top: '-=' + completedHeight + 'px'
          }, 500, function(){
            resolve()
          })
        });
        // debugger
        var _this = this;
        var pros = [pro1, pro2, pro3, pro4];

        Promise.all(pros).then(() => {
          $(this.newContainer).removeClass('barba-old-container')
          //  $(this.oldContainer).css();
          console.log("me")
          _this.done();
          var proBorder1 = new Promise((resolve, reject) => {
            $('.Me-border').css({
              height: '0%'
            }, 500, function(){
              resolve()
            })
      		});

          var proBorder2 = new Promise((resolve, reject) => {
            $('.Projects-border').animate({
              width: '0%'
            }, 500, function(){
              resolve()
            })
      		});

          var proBorder3 = new Promise((resolve, reject) => {
            $('.stuff-border').animate({
              width: '0%'
            }, 500, function(){
              resolve()
            })
      		});

          var proBorder4 = new Promise((resolve, reject) => {
            $('.Contact-border').animate({
              height: '0%'
            }, 500, function(){
              resolve()
            })
      		});
          var borderPromises = [proBorder1,proBorder2,proBorder3,proBorder4]

          Promise.all(borderPromises).then(()=>{
            $(this.newContainer).removeClass('barba-old-container')
            //  $(this.oldContainer).css();
            console.log("me")
            _this.done();
          })
        })
        // return $(this.oldContainer).animate({ opacity: 1 }, 1000).promise();
      } else {
        $('.barba-old-container').removeClass('barba-old-container')
        $('.barba-new-container').removeClass('barba-new-container')

        var $el = $(this.newContainer);

        $el.css({
          visibility : 'visible',
          opacity : 0
        });

        $(this.oldContainer).animate({ opacity: 0 }, 100, ()=>{
          $(this.oldContainer).hide();
          $el.animate({opacity: 1}, 100, ()=>{
            this.done();
          })
        })
        // $(this.oldContainer).animate({
        //   opacity: 0
        // }, 400, () => {
          // var _this = this;
          // var $el = $(this.newContainer);
          //
          //
          // $el.css({
          //   visibility : 'visible',
          //   opacity : 0
          // });
        //   // debugger
        //   // $el.addClass('animated bounceInRight');
        //   $el.animate({ opacity: 1 }, 400, function() {
        //     _this.done();
        //     /**
        //     * Do not forget to call .done() as soon your transition is finished!
        //     * .done() will automatically remove from the DOM the old Container
        //     */
        //
        //   });
        // });
      }
    });
  }
});
