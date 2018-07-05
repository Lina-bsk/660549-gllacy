var link = document.querySelector(".button--feedback");
var overlay = document.querySelector(".feedback-overlay");
var popup = document.querySelector(".feedback");
var close = popup.querySelector(".feedback-close");
var form = popup.querySelector(".feedback-form");
var login = popup.querySelector("[name=login]");
var email = popup.querySelector("[name=email]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}


link.addEventListener("click", function(evt) {
  evt.preventDefault();
  overlay.classList.add("overlay-show");
  popup.classList.add("feedback-show");

  if (storage) {
    login.value = storage;
    email.focus();
  } else {
    login.focus();
  }
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("feedback-show");
  popup.classList.remove("feedback-error");
  overlay.classList.remove("overlay-show");
});

overlay.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("feedback-show");
  popup.classList.remove("feedback-error");
  overlay.classList.remove("overlay-show");
});

form.addEventListener("submit", function(evt) {
  if (!login.value || !email.value) {
    evt.preventDefault();
    popup.classList.remove("feedback-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("feedback-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", login.value);
    }
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("feedback-show")) {
      popup.classList.remove("feedback-show");
      popup.classList.remove("feedback-error");
      overlay.classList.remove("overlay-show");
    }
  }
});
