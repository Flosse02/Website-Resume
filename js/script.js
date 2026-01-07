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

  fetch(repoBase + "components/socials.html")
    .then(res => res.text())
    .then(html => socialsHTML = html)
    .catch(err => console.error("Socials fetch error:", err));

  fetch(repoBase +  "components/footer.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("footerContainer").innerHTML = html;
      const footerSocials = document.getElementById("socialsContainerFooter");
      if (footerSocials) footerSocials.innerHTML = socialsHTML;
      const footerNav = document.getElementById("footerNav");
      if (footerNav && typeof pages !== "undefined") {
        let htmlNav = '<ul class="list-unstyled">';
        pages.forEach(p => {
          htmlNav += `<li class="mb-2"><a href="${p.link}" class="footer-link">${p.title}</a></li>`;
        });
        htmlNav += '</ul>';
        footerNav.innerHTML = htmlNav;
      }
    })
    .catch(err => console.error("footer error:", err));

  fetch(repoBase + "components/header.html")
    .then(res => res.ok ? res.text() : Promise.reject("Failed to fetch header"))
    .then(html => {
      document.getElementById("headerContainer").innerHTML = html;
      const headerSocials = document.getElementById("socialsContainerHeader");
      if (headerSocials) headerSocials.innerHTML = socialsHTML;

      const headerNav = document.getElementById("headerNav");
      if (headerNav && typeof pages !== "undefined") {
        let htmlNav = '<ul class="list-unstyled">';
        pages.forEach(p => {
          htmlNav += `<li class="mb-2"><a href="${p.link}" class="footer-link">${p.title}</a></li>`;
        });
        htmlNav += '</ul>';
        headerNav.innerHTML = htmlNav;
      }

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

function initProjects() {
  if (typeof projects !== "undefined") {

    function openProjectModal(projectId) {
      const project = projects.find(p => p.id === projectId);
      if (!project) return;

      const tagsContainer = document.getElementById("projectModalTags");
      tagsContainer.innerHTML = ""; 

      project.features.forEach(feature => {
        const tag = document.createElement("span");
        tag.className = "tag";
        tag.textContent = feature;
        tagsContainer.appendChild(tag);
      });


      document.getElementById("projectModalTitle").textContent = project.title;
      document.getElementById("projectModalDescription").textContent = project.description;
      const actionBtn = document.getElementById("projectModalAction");

      if (project.successor != "") {
        actionBtn.textContent = "See Successor";
        actionBtn.removeAttribute("href");
        actionBtn.removeAttribute("target");
        actionBtn.onclick = (e) => {
          e.preventDefault();
          
          const modalEl = document.getElementById("projectModal");
          const modal = bootstrap.Modal.getInstance(modalEl);
          const successorId = project.successor;

          const onHidden = () => {
            modalEl.removeEventListener("hidden.bs.modal", onHidden);
            openProjectModal(successorId);
          };

          modalEl.addEventListener("hidden.bs.modal", onHidden);
          modal.hide();
        };
        actionBtn.style.display = "inline-block";
      } else if (project.github) {
        actionBtn.textContent = "View on GitHub";
        actionBtn.href = project.github;
        actionBtn.target = "_blank";
        actionBtn.onclick = null;
        actionBtn.style.display = "inline-block";
      } else {
        actionBtn.style.display = "none";
      }

      const videoEl = document.getElementById("projectModalVideo");
      const imgEl = document.getElementById("projectModalImage");

      videoEl.pause();
      videoEl.removeAttribute("src");
      videoEl.load();
      videoEl.style.display = "none";

      imgEl.src = "";
      imgEl.style.display = "none";

      if (project.video) {
        if (project.video.match(/\.(mp4|webm|ogg)$/i)) {
          videoEl.src = project.video;
          videoEl.style.display = "block";
          videoEl.play().catch(() => {});
        } else if (project.video.match(/\.(png|jpg|jpeg|gif|webp)$/i)) {
          imgEl.src = project.video;
          imgEl.style.display = "block";
        }
      }


      new bootstrap.Modal(document.getElementById("projectModal")).show();
    }

    // 1. Swiper (home page)
    const swiperWrapper = document.getElementById("projectsSwiper");
    if (swiperWrapper) {
      projects.forEach(p => {
        swiperWrapper.innerHTML += `
          <div class="swiper-slide" style="cursor: pointer">
            <div class="card card-custom project-card" data-project-id="${p.id}">
              <img src="${p.image}" class="card-img-top project-card-img" alt="${p.title}">
              <div id="projectLocation" class="position-absolute top-0 end-0 m-3 badge bg-secondary">${p.location}</div>
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
            <div class="card card-custom project-card h-100" data-project-id="${p.id}" style="cursor: pointer">
              <img src="${p.image}" class="card-img-top project-card-img" alt="${p.title}">
              <div id="projectLocation" class="position-absolute top-0 end-0 m-3 badge bg-secondary">${p.location}</div>
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

    document.addEventListener("DOMContentLoaded", () => {
      const navContainers = document.querySelectorAll(".nav-container");

      navContainers.forEach(container => {
        let html = '<ul class="list-unstyled">';
        pages.forEach(p => {
          html += `<li class="mb-2"><a href="${p.link}" class="footer-link">${p.title}</a></li>`;
        });
        html += '</ul>';
        container.innerHTML = html;
      });
    });
  }
}

// Fetch project modals and initialize projects
function loadProjectModals() {

  fetch(repoBase + "components/projectModals.html")
    .then(res => res.text())
    .then(html => {
      const container = document.getElementById("projectModalContainer");
      if (container) {
        container.innerHTML = html;
        initProjects();
      }
    });
}

// Run after DOM ready
document.addEventListener("DOMContentLoaded", () => {
  loadProjectModals();
});

})(jQuery);