var HideShowTransition = Barba.BaseTransition.extend({
  start: function() {
    this.newContainerLoading.then(this.finish.bind(this));
  },

  finish: function() {
    initializeScripts();
    document.body.scrollTop = 0;
    $("html").css("overflow-y", "hidden");

    $(this.newContainer).addClass("barba-new-container");
    $(this.newContainer).show();

    $(this.newContainer).css({
      visibility: "visible",
      opacity: 1
    });

    var _this = this;

    $(this.oldContainer).addClass("barba-old-container");
    var le =
      $(".algorithms-border").position().left -
      $(".about-border").position().left;

    //fixes displaced borders due to glitch animation

    // $(".algorithms-border").css({
    //   right: le + 20 + "px",
    //   top: "-11px"
    // });

    // $(".about-border").css({
    //   right: "+20px"
    // });

    // $(".projects-border").css({
    //   bottom: "+10px",
    //   left: "-20px"
    // });

    // $(".contact-border").css({
    //   top: "-10px",
    //   left: "-20px"
    // });

    // endFix

    $(".my-borders").css({
      height: "1px",
      width: "1px"
    });
    var pro1 = new Promise((resolve, reject) => {
      $(".about-border").animate(
        {
          height: "100%"
        },
        400,
        function() {
          resolve();
        }
      );
    });
    var pro2 = new Promise((resolve, reject) => {
      $(".projects-border").animate(
        {
          width: "100%"
        },
        400,
        function() {
          resolve();
        }
      );
    });

    var pro3 = new Promise((resolve, reject) => {
      $(".algorithms-border").animate(
        {
          width: "100%"
        },
        400,
        function() {
          resolve();
        }
      );
    });

    var pro4 = new Promise((resolve, reject) => {
      $(".contact-border").animate(
        {
          height: "100%"
        },
        400,
        function() {
          resolve();
        }
      );
    });

    Promise.all([pro1, pro2, pro3, pro4]).then(values => {
      // debugger
      // This line below fixes a weird bug that only happens on one page ...
      $(".top-row").css("background-color", "transparent");

      var contactWidth = $(".contact").width(),
        contactHeight = $(".contact").height(),
        projectsWidth = $(".projects").width(),
        projectsHeight = $(".projects").height(),
        algorithmsWidth = $(".algorithms").width(),
        algorithmsHeight = $(".algorithms").height(),
        aboutWidth = $(".about").width(),
        aboutHeight = $(".about").height();

      $(this.oldContainer)
        .find(".about")
        .animate(
          {
            left: "-=" + aboutWidth + "px",
            top: "-=" + aboutHeight + "px"
          },
          400
        );
      $(this.oldContainer)
        .find(".contact")
        .animate(
          {
            left: "+=" + contactWidth + "px",
            top: "+=" + contactHeight + "px"
          },
          400
        );
      $(this.oldContainer)
        .find(".projects")
        .animate(
          {
            left: "+=" + projectsWidth + "px",
            top: "-=" + projectsHeight + "px"
          },
          400
        );
      $(this.oldContainer)
        .find(".algorithms")
        .animate(
          {
            left: "-=" + algorithmsWidth + "px",
            top: "+=" + algorithmsHeight + "px"
          },
          400,
          function() {
            $(".barba-old-container").removeClass("barba-old-container");
            $(".barba-new-container").removeClass("barba-new-container");

            $(this.oldContainer)
              .find(".about")
              .finish();
            $(this.oldContainer)
              .find(".projects")
              .finish();
            $(this.oldContainer)
              .find(".algorithms")
              .finish();
            $(this.oldContainer)
              .find(".contact")
              .finish();
            $(".my-borders").finish();
            $("html").css("overflow-y", "visible");
            _this.done();
          }.bind(this)
        );
    });
  }
});

var FadeTransition = Barba.BaseTransition.extend({
  start: function() {
    Promise.all([this.newContainerLoading, this.fadeIn()]);
  },

  fadeIn: function() {
    Promise.all([this._newContainerPromise]).then(() => {
      initializeScripts();
      if (this.newContainer.baseURI === window.location.origin + '/') {
        $(this.newContainer).addClass("barba-new-container-back");
        $(".my-borders").css({
          height: "1px",
          width: "1px"
        });
        $(".about-border").css({ height: "100%" });
        $(".contact-border").css({ height: "100%" });
        $(".projects-border").css({ width: "100%" });
        $(".algorithms-border").css({ width: "100%" });
        var contactXPos = $(".contact").position().left,
          contactYPos = $(".contact").position().top,
          projectsXPos = $(".projects").position().left,
          projectsYPos = $(".projects").position().top,
          algorithmsXPos = $(".algorithms").position().left,
          algorithmsYPos = $(".algorithms").position().top,
          aboutXPos = $(".about").position().left,
          aboutYPos = $(".about").position().top;
        (contactWidth = $(".contact").width()),
          (contactHeight = $(".contact").height()),
          (projectsWidth = $(".projects").width()),
          (projectsHeight = $(".projects").height()),
          (algorithmsWidth = $(".algorithms").width()),
          (algorithmsHeight = $(".algorithms").height()),
          (aboutWidth = $(".about").width()),
          (aboutHeight = $(".about").height());

        $(this.newContainer)
          .find(".about")
          .css({
            left: "-=" + aboutWidth + "px",
            top: "-=" + aboutHeight + "px"
          });
        $(this.newContainer)
          .find(".contact")
          .css({
            left: "+=" + contactWidth + "px",
            top: "+=" + contactHeight + "px"
          });
        $(this.newContainer)
          .find(".projects")
          .css({
            left: "+=" + projectsWidth + "px",
            top: "-=" + projectsHeight + "px"
          });
        $(this.newContainer)
          .find(".algorithms")
          .css({
            left: "-=" + algorithmsWidth + "px",
            top: "+=" + algorithmsHeight + "px"
          });

        var _this = this;
        var pro1 = new Promise((resolve, reject) => {
          $(this.newContainer)
            .find(".about")
            .animate(
              {
                left: "+=" + aboutWidth + "px",
                top: "+=" + aboutHeight + "px"
              },
              400,
              function() {
                resolve();
              }
            );
        });
        var pro2 = new Promise((resolve, reject) => {
          $(this.newContainer)
            .find(".contact")
            .animate(
              {
                left: "-=" + contactWidth + "px",
                top: "-=" + contactHeight + "px"
              },
              400,
              function() {
                resolve();
              }
            );
        });
        var pro3 = new Promise((resolve, reject) => {
          $(this.newContainer)
            .find(".projects")
            .animate(
              {
                left: "-=" + projectsWidth + "px",
                top: "+=" + projectsHeight + "px"
              },
              400,
              function() {
                resolve();
              }
            );
        });
        var pro4 = new Promise((resolve, reject) => {
          $(this.newContainer)
            .find(".algorithms")
            .animate(
              {
                left: "+=" + algorithmsWidth + "px",
                top: "-=" + algorithmsHeight + "px"
              },
              400,
              function() {
                resolve();
              }
            );
        });
        var _this = this;
        var pros = [pro1, pro2, pro3, pro4];

        Promise.all(pros).then(() => {
          $(this.newContainer).removeClass("barba-old-container");

          $(".algorithms-border").css("top", "-1px");
          //fixes displaced borders due to glitch animation

          // $(".algorithms-border").css({
          //   right: "+20px",
          //   top: "-11px"
          // });

          // $(".about-border").css({
          //   right: "+20px"
          // });

          // $(".projects-border").css({
          //   bottom: "+10px",
          //   left: "-20px"
          // });

          // $(".contact-border").css({
          //   left: "-20px",
          //   top: "-10px"
          // });

          // endFix

          _this.done();
          var proBorder1 = new Promise((resolve, reject) => {
            $(".about-border").animate(
              {
                height: "0%"
              },
              400,
              function() {
                resolve();
              }
            );
          });

          var proBorder2 = new Promise((resolve, reject) => {
            $(".projects-border").animate(
              {
                width: "0%"
              },
              400,
              function() {
                resolve();
              }
            );
          });

          var proBorder3 = new Promise((resolve, reject) => {
            $(".algorithms-border").animate(
              {
                width: "0%"
              },
              400,
              function() {
                resolve();
              }
            );
          });

          var proBorder4 = new Promise((resolve, reject) => {
            $(".contact-border").animate(
              {
                height: "0%"
              },
              400,
              function() {
                resolve();
              }
            );
          });
          var borderPromises = [proBorder1, proBorder2, proBorder3, proBorder4];

          Promise.all(borderPromises).then(() => {
            $(this.newContainer).removeClass("barba-old-container");
          });
        });
      } else {
        $(".barba-old-container").removeClass("barba-old-container");
        $(".barba-new-container").removeClass("barba-new-container");

        var $el = $(this.newContainer);

        $el.css({
          visibility: "visible",
          opacity: 0
        });
        // debugger
        $(this.oldContainer).animate({ opacity: 0 }, 300, () => {
          $(this.oldContainer).hide();
          $el.animate({ opacity: 1 }, 300, () => {
            this.done();
            $("html, body").animate({ scrollTop: 0 }, 500);
            $(".button-collapse").sideNav({
              menuWidth: 200,
              edge: "left",
              closeOnClick: true,
              draggable: true
            });
          });
        });
      }
    });
  }
});
