$(document).ready(function () {
  // Sticky Navigation Bar
  var waypoint = new Waypoint({
    element: document.getElementById("features"),
    handler: function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    offset: "80px",
  });

  // Smooth Scroll
  // Select all links with hashes
  $('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top,
            },
            1000
          );
        }
      }
    });

    // Animation
    var waypoint = new Waypoint({
      element: document.querySelector(".js-wp-1"),
      handler: function (direction) {
        if (direction == "down") {
          $(".js-wp-1").addClass("animate__animated animate__zoomIn");
        } else {
          $(".js-wp-1").removeClass("animate__animated animate__zoomIn");
        }
      },
      offset: "75%",
    });
    var waypoint = new Waypoint({
      element: document.querySelector(".js-wp-2"),
      handler: function (direction) {
        if (direction == "down") {
          $(".js-wp-2").addClass("animate__animated animate__fadeInUp");
        } else {
          $(".js-wp-2").removeClass("animate__animated animate__fadeInUp");
        }
      },
      offset: "75%",
    });
    var waypoint = new Waypoint({
      element: document.querySelector(".js-wp-3"),
      handler: function (direction) {
        if (direction == "down") {
          $(".js-wp-3").addClass("animate__animated animate__fadeIn");
        } else {
          $(".js-wp-3").removeClass("animate__animated animate__fadeIn");
        }
      },
      offset: "75%",
    });
    var waypoint = new Waypoint({
      element: document.querySelector(".js-wp-4"),
      handler: function (direction) {
        if (direction == "down") {
          $(".js-wp-4").addClass("animate__animated animate__pulse");
        } else {
          $(".js-wp-4").removeClass("animate__animated animate__pulse");
        }
      },
      offset: "75%",
    });

    $('.mobile-nav-icon').on('click', function() {
      var nav = $("nav")
      var mainNav = $(".main-nav")
      var icon = $('.mobile-nav-icon i')
      if(icon.hasClass('ion-navicon-round')) {
        icon.addClass('ion-close-round').removeClass('ion-navicon-round')
      } else {
        icon.removeClass('ion-close-round').addClass('ion-navicon-round')
      }
      nav.toggleClass('open')
      mainNav.slideToggle(200)
    })
});
