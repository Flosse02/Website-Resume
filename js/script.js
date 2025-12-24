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

  let socialsHTML = "";
  fetch("/components/socials.html")
    .then(res => res.text())
    .then(html => socialsHTML = html)
    .catch(err => console.error("Socials fetch error:", err));

  fetch("/components/footer.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("footerContainer").innerHTML = html;
      const footerSocials = document.getElementById("socialsContainerFooter");
      if (footerSocials) footerSocials.innerHTML = socialsHTML;
    })
    .catch(err => console.error("footer error:", err));

  fetch("/components/header.html")
    .then(res => res.ok ? res.text() : Promise.reject("Failed to fetch header"))
    .then(html => {
      document.getElementById("headerContainer").innerHTML = html;
      const headerSocials = document.getElementById("socialsContainerHeader");
      if (headerSocials) headerSocials.innerHTML = socialsHTML;

      const menu = document.getElementById("fullscreenMenu");
      const openBtn = document.getElementById("openMenuBtn");
      const closeBtn = document.getElementById("closeMenuBtn");

      if (!menu || !openBtn || !closeBtn) {
      console.warn("header elements missing on this page menu status: ", menu, openBtn, closeBtn);
      return;
    }

      openBtn.addEventListener("click", () => {
        menu.style.display = "block";
        setTimeout(() => menu.classList.add("active"), 50);
        document.body.style.overflow = "hidden";
      });

      closeBtn.addEventListener("click", () => {
        menu.classList.remove("active");
        document.body.style.overflow = "";
      });

      menu.querySelectorAll(".menu-link").forEach(link => {
        link.addEventListener("click", () => {
          menu.classList.remove("active");
          document.body.style.overflow = "";
        });
      });
    })
    .catch(err => console.error("header error:", err));
});

if (typeof projects !== "undefined") {

  // Modal function — define once, globally within this block
  function openProjectModal(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;

    document.getElementById("projectModalTitle").textContent = project.title;
    document.getElementById("projectModalImage").src = project.image;
    document.getElementById("projectModalDescription").textContent = project.description;

    const list = document.getElementById("projectModalFeatures");
    list.innerHTML = "";
    project.features.forEach(f => {
      const li = document.createElement("li");
      li.textContent = f;
      list.appendChild(li);
    });

    document.getElementById("projectModalGithub").href = project.github;

    new bootstrap.Modal(document.getElementById("projectModal")).show();
  }

  // 1. Swiper (home page)
  const swiperWrapper = document.getElementById("projectsSwiper");
  if (swiperWrapper) {
    projects.forEach(p => {
      swiperWrapper.innerHTML += `
        <div class="swiper-slide">
          <div class="card card-custom project-card" data-project-id="${p.id}">
            <img src="${p.image}" class="img-fluid" alt="${p.title}">
            <div class="card-body text-center">
              <div class="date-text mb-2">${p.category}</div>
              <h3 class="subtitle">${p.title}</h3>
            </div>
          </div>
        </div>
      `;
    });

    // Attach click listeners for swiper cards
    document.querySelectorAll(".project-card").forEach(card => {
      card.addEventListener("click", () => {
        const id = card.dataset.projectId;
        openProjectModal(id);
      });
    });

    // Initialize Swiper AFTER slides added
    new Swiper(".worksSwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      breakpoints: {
        768: { slidesPerView: 2 },
        1200: { slidesPerView: 3 }
      }
    });
  }

  // 2. Projects grid (projects.html)
  const grid = document.getElementById("projectsGrid");
  if (grid) {
    projects.forEach(p => {
      grid.innerHTML += `
        <div class="col-md-4 mb-4">
          <div class="card card-custom project-card h-100" data-project-id="${p.id}">
            <img src="${p.image}" class="img-fluid" alt="${p.title}">
            <div class="card-body text-center">
              <div class="date-text mb-2">${p.category}</div>
              <h3 class="subtitle">${p.title}</h3>
            </div>
          </div>
        </div>
      `;
    });

    // Attach click listeners for grid cards
    document.querySelectorAll(".project-card").forEach(card => {
      card.addEventListener("click", () => {
        const id = card.dataset.projectId;
        openProjectModal(id);
      });
    });
  }

}

})(jQuery);