(function ($) {

  "use strict";

  // Initialize AOS animation
  AOS.init({
    duration: 1000,
    once: true,
    easing: 'ease-in-out',
  });

  // init Isotope
  var initIsotope = function () {

    $('.grid').each(function () {

      // $('.grid').imagesLoaded( function() {
      // images have loaded
      var $buttonGroup = $('.button-group');
      var $checked = $buttonGroup.find('.is-checked');
      var filterValue = $checked.attr('data-filter');

      var $grid = $('.grid').isotope({
        itemSelector: '.portfolio-item',
        // layoutMode: 'fitRows',
        filter: filterValue
      });

      // bind filter button click
      $('.button-group').on('click', 'a', function (e) {
        e.preventDefault();
        filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
      });

      // change is-checked class on buttons
      $('.button-group').each(function (i, buttonGroup) {
        $buttonGroup.on('click', 'a', function () {
          $buttonGroup.find('.is-checked').removeClass('is-checked');
          $(this).addClass('is-checked');
        });
      });
      // });

    });
  }

  // init Chocolat light box
  var initChocolat = function () {
    Chocolat(document.querySelectorAll('.image-link'), {
      imageSize: 'contain',
      loop: true,
    })
  }

  // window load
  $(window).load(function () {
    $(".preloader").fadeOut("slow");
    initIsotope();
  })

  $(document).ready(function () {
    initChocolat();

    // Initialize Testimonials Swiper
    const servicesSwiper = new Swiper('.servicesSwiper', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });

    // Initialize Testimonials Swiper
    const testimonialsSwiper = new Swiper('.testimonialsSwiper', {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        300: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });

    // Initialize Works Swiper
    const worksSwiper = new Swiper('.worksSwiper', {
      slidesPerView: 4,
      spaceBetween: 20,
      loop: true,
      // autoplay: {
      //   delay: 4000,
      //   disableOnInteraction: false,
      // },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        300: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });

    // Initialize Articles Swiper
    const articlesSwiper = new Swiper('.articlesSwiper', {
      slidesPerView: 3,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 4500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        300: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });

    // Initialize Logos Swiper
    const logosSwiper = new Swiper('.logosSwiper', {
      slidesPerView: 2,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      breakpoints: {
        576: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        992: {
          slidesPerView: 5,
          spaceBetween: 50,
        }
      }
    });

  });

document.addEventListener("DOMContentLoaded", () => {
    const socialsContainer = document.getElementById("socialsContainer");

    fetch("components/socials.html")
        .then(response => {
            if (!response.ok) throw new Error("Network response was not ok");
            return response.text();
        })
        .then(data => {
            socialsContainer.innerHTML = data;
        })
        .catch(error => {
            console.error("Error loading social links:", error);
        });
});

  document.addEventListener("DOMContentLoaded", () => {

  const openBtn = document.getElementById("openMenuBtn");

  fetch("components/navbar.html")
  .then(res => res.ok ? res.text() : Promise.reject("Failed to fetch"))
  .then(html => {
    document.getElementById("navbarContainer").innerHTML = html;

    const menu = document.getElementById("fullscreenMenu");
    const openBtn = document.getElementById("openMenuBtn");
    const closeBtn = document.getElementById("closeMenuBtn");

    openBtn.addEventListener("click", () => {
      fullscreenMenu.style.display = "block";
      setTimeout(() => {
        fullscreenMenu.classList.add("active");
      }, 50);
      document.body.style.overflow = "hidden";
    });

    closeBtn.addEventListener("click", () => {
      fullscreenMenu.classList.remove("active");
      document.body.style.overflow = "";
    });

    menu.querySelectorAll(".menu-link").forEach(link => {
      link.addEventListener("click", () => {
        menu.classList.remove("open");
        document.body.style.overflow = "auto";
      });
    });
  })
  .catch(err => console.error(err));

});

fetch("../components/footer.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("footerContainer").innerHTML = html;
  });


})(jQuery);