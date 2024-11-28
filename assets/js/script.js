/*
        // 1. lang change
        // 2. preloader 
        // 3. mobile menu show-hide
    */
/********* 1-lang change **********/
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

// 2. preloader
$(window).on("load", function () {
  $(".preloader").fadeOut();
});
/////////////////////////////////////
// Select all shapes with the class "move-shape"
const shapes = document.querySelectorAll(".move-shape");

// Scroll event listener
window.addEventListener("scroll", () => {
  // Current scroll position
  const scrollY = window.scrollY;

  // Iterate through each shape
  shapes.forEach((shape, index) => {
    // Calculate movement (maximum 50px)
    const movement = Math.sin(scrollY * 0.01 + index) * 100;

    // Apply movement with transform
    shape.style.transform = `translateY(${movement}px)`;
  });
});
//////////////////////////
