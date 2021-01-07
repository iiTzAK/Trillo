const tabItems = document.querySelectorAll(".side-nav__item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

function selectItem() {
  removeActive();
  removeShow();

  this.classList.add("side-nav__item--active");

  const tabContentItem = document.querySelector(`#${this.id}-content`);

  tabContentItem.classList.add("show");
}

function removeActive() {
  tabItems.forEach((item) => item.classList.remove("side-nav__item--active"));
}

function removeShow() {
  tabContentItems.forEach((item) => item.classList.remove("show"));
}

tabItems.forEach((item) => item.addEventListener("click", selectItem));
