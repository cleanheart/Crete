$(function () {
  //////////
  /*

        // 1. Scroll top button
        // 2. 2-lang change
        // 3. preloader 
        // 3. mobile menu show-hide
    */

  //1. Scroll top button
  $(window).on("scroll", function () {
    var scrollBar = $(this).scrollTop();
    if (scrollBar > 150) {
      $(".scroll-top-btn").fadeIn();
    } else {
      $(".scroll-top-btn").fadeOut();
    }
  });
  $(".scroll-top-btn").on("click", function () {
    $("body,html").animate({
      scrollTop: 0,
    });
  });
  /********* 2-lang change **********/
  const langDropdownButton = document.getElementById("langDropdownButton");
  const langDropdownList = document.getElementById("langDropdownList");
  const langDropdownText = document.getElementById("langDropdownText");
  const langDropdownIcon = document.getElementById("langDropdownIcon");

  langDropdownButton.addEventListener("click", () => {
    const isOpen = langDropdownList.classList.contains("open");
    console.log(
      "Dropdown button clicked. Current state:",
      isOpen ? "Open" : "Closed"
    );
    langDropdownList.classList.toggle("open");

    langDropdownIcon.innerHTML = isOpen
      ? '<i class="fa-solid fa-angle-down"></i>'
      : '<i class="fa-solid fa-angle-up"></i>';
    console.log("Dropdown state changed to:", isOpen ? "Closed" : "Open");
  });

  langDropdownList.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
      console.log(
        "List item clicked. Selected value:",
        event.target.dataset.value
      );
      langDropdownText.textContent = event.target.dataset.value;
      langDropdownList.classList.remove("open");

      langDropdownIcon.innerHTML = '<i class="fa-solid fa-angle-down"></i>';
      console.log(
        "Dropdown closed after selection. Current text:",
        langDropdownText.textContent
      );
    }
  });

  document.addEventListener("click", (event) => {
    if (!langDropdownButton.contains(event.target)) {
      console.log(
        "Click detected outside the dropdown. Closing dropdown if open."
      );
      langDropdownList.classList.remove("open");

      langDropdownIcon.innerHTML = '<i class="fa-solid fa-angle-down"></i>';
    }
  });
  // 3. Preloder
  // Hide Preloader after page loads
  window.addEventListener("load", function () {
    document.querySelector(".preloader").style.display = "none";
  });

  /////////////////////////////////////
  const shapes = document.querySelectorAll(".move-shape");

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    shapes.forEach((shape, index) => {
      const movement = Math.sin(scrollY * 0.01 + index) * 100;

      shape.style.transform = `translateY(${movement}px)`;
    });
  });
  //////////
  $(".counter-text").counterUp({
    delay: 10,
    time: 1000,
  });
  /////////
  //8. Article Hover
  $(".article-card").on("mouseover", function () {
    $(this).find("p.description").slideDown();
  });

  $(".article-card").on("mouseleave", function () {
    $(this).find("p.description").slideUp();
  });
  //////////

  ////////////////
});
$(function () {
  //////////////
  new WOW().init();
  /////////////
  $(".portfolio-slider").slick({
    slidesToShow: 1,
    prevArrow:
      '<button class="prev-arrow"><i class="fas fa-arrow-left"></i></button>',
    nextArrow:
      '<button class="next-arrow"><i class="fas fa-arrow-right"></i></button>',
  });
  $(".feedback-slider").slick({
    slidesToShow: 1,
    autoplay: true,
    speed: 700,
    prevArrow:
      '<button class="prev-arrow"><svg width="48" height="39" viewBox="0 0 48 39" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.9961 1.1875L1.06641 19.2227C0.75 19.5391 0.75 20.0664 1.06641 20.3828L18.9961 38.418C19.418 38.7344 19.9453 38.7344 20.2617 38.418C20.5781 38.1016 20.5781 37.4688 20.2617 37.1523L3.70312 20.6992H47.1562C47.6836 20.6992 48 20.2773 48 19.75C48 19.3281 47.6836 18.9062 47.1562 18.9062H3.70312L20.2617 2.45312C20.5781 2.13672 20.5781 1.50391 20.2617 1.1875C19.9453 0.871094 19.3125 0.871094 18.9961 1.1875Z" fill="white""/></svg></button>',
    nextArrow:
      '<button class="next-arrow"><svg width="48" height="39" viewBox="0 0 48 39" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M29.0039 1.1875L46.9336 19.2227C47.25 19.5391 47.25 20.0664 46.9336 20.3828L29.0039 38.418C28.582 38.7344 28.0547 38.7344 27.7383 38.418C27.4219 38.1016 27.4219 37.4688 27.7383 37.1523L44.2969 20.6992H0.84375C0.316406 20.6992 0 20.2773 0 19.75C0 19.3281 0.316406 18.9062 0.84375 18.9062H44.2969L27.7383 2.45312C27.4219 2.13672 27.4219 1.50391 27.7383 1.1875C28.0547 0.871094 28.6875 0.871094 29.0039 1.1875Z" fill="white"/></svg></button>',
  });
});

//////////////////
//header sticky
$(window).on("scroll", function () {
  var scrollBarPosition = $(this).scrollTop();

  if (scrollBarPosition > 150) {
    $("header").addClass("sticky");
  } else {
    $("header").removeClass("sticky");
  }
});

//////////////
//9. Offcanvus Toggle
$(".offcanvus-toggle").on("click", function () {
  $(".offcanvus-box").addClass("active");
});

$(".offcanvus-close").on("click", function () {
  $(".offcanvus-box").removeClass("active");
});

$(document).on("mouseup", function (e) {
  var offCanvusMenu = $(".offcanvus-box");

  if (!offCanvusMenu.is(e.target) && offCanvusMenu.has(e.target).length === 0) {
    $(".offcanvus-box").removeClass("active");
  }
});

/////////////////////
//6. Mobile Menu
// Open the offcanvas mobile menu when the button is clicked
$(".mobile-btn").on("click", function () {
  $(".offcanvas-mobile").addClass("active");
  $("body").addClass("overflow-hidden");
});

// Close the offcanvas mobile menu when the close button is clicked
$(".offcanvas-mobile .close").on("click", function () {
  $(".offcanvas-mobile").removeClass("active");
  $("body").removeClass("overflow-hidden");
});

// Close the offcanvas mobile menu if you click outside of it (on the body)
$(document).on("click", function (e) {
  if (
    !$(e.target).closest(".offcanvas-mobile").length &&
    !$(e.target).closest(".mobile-btn").length
  ) {
    $(".offcanvas-mobile").removeClass("active");
    $("body").removeClass("overflow-hidden");
  }
});
