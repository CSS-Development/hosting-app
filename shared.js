var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var selectPlanButton = document.querySelectorAll(".plan button");
var modalCancelButton = document.querySelector(".modal__action--negative");
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");
console.dir(backdrop);

// backdrop.style.display = "block";\
// console.dir(selectPlanButton);
for (var i = 0; i < selectPlanButton.length; i++) {
  selectPlanButton[i].addEventListener("click", function() {
    // modal.style.display = "block";
    // backdrop.style.display = "block";
    // modal.className = "open"; // This will actually override the complete class list
    modal.classList.add("open");
    backdrop.classList.add("open");
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
}

toggleButton.addEventListener("click", function() {
  //   backdrop.style.display = "block";
  //   mobileNav.style.display = "block";
  mobileNav.classList.add("open");
  backdrop.classList.add("open");
});
