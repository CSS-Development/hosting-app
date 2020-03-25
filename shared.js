var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var selectPlanButton = document.querySelectorAll(".plan button");
var modalCancelButton = document.querySelector(".modal__action--negative");
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");
var ctaButton = document.querySelector(".main-nav__item--cta");
console.dir(backdrop);

// backdrop.style.display = "block";\
// console.dir(selectPlanButton);
for (var i = 0; i < selectPlanButton.length; i++) {
  selectPlanButton[i].addEventListener("click", function() {
    // modal.style.display = "block";
    // backdrop.style.display = "block";
    // modal.className = "open"; // This will actually override the complete class list
    modal.classList.add("open");
    backdrop.style.display = "block";
    setTimeout(function() {
      backdrop.classList.add("open");
    }, 10);
  });
}

if (modalCancelButton) {
  modalCancelButton.addEventListener("click", closeModal);
}

backdrop.addEventListener("click", function() {
  mobileNav.classList.remove("open");
  closeModal();
});

function closeModal() {
  //   modal.style.display = "none";
  //   backdrop.style.display = "none";
  if (modal) {
    modal.classList.remove("open");
  }
  backdrop.classList.remove("open");
  setTimeout(function() {
    backdrop.style.display = "none";
  }, 200);
}

toggleButton.addEventListener("click", function() {
  //   backdrop.style.display = "block";
  //   mobileNav.style.display = "block";
  mobileNav.classList.add("open");
  backdrop.style.display = "block";
  setTimeout(function() {
    backdrop.classList.add("open");
  }, 10);
});

// test

ctaButton.addEventListener("animationstart", function(event) {
  console.log("Animation started", event);
});

ctaButton.addEventListener("animationend", function(event) {
  console.log("Animation ended", event);
});

ctaButton.addEventListener("animationiteration", function(event) {
  console.log("Animation iteration", event);
});
