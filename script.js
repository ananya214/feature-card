document.addEventListener("DOMContentLoaded", function () {
  const plusButtons = document.querySelectorAll(".plus-button");
  const cards = document.querySelectorAll(".card");
  const videos = document.querySelectorAll(".card-video");

  cards.forEach((card) => {
    const video = card.querySelector(".card-video");

    card.addEventListener("mouseenter", function () {
      if (video) {
        video.play();
      }
    });

    card.addEventListener("mouseleave", function () {
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    });
  });

  plusButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.stopPropagation();

      const card = this.closest(".card");

      card.classList.toggle("active");

      if (card.classList.contains("active")) {
        card.style.width = "700px";
        card.querySelector(".card-details").style.left = "50%";
        card.querySelector(".card-details").style.opacity = "1";
        const video = card.querySelector(".card-video");
        if (video) {
          video.style.filter = "blur(0)";
          video.play();
        }
      } else {
        card.style.width = "350px";
        card.querySelector(".card-details").style.left = "100%";
        card.querySelector(".card-details").style.opacity = "0";
        const video = card.querySelector(".card-video");
        if (video) {
          video.style.filter = "blur(5px)";
          video.pause();
          video.currentTime = 0;
        }
      }
    });
  });

  document.addEventListener("click", function (e) {
    if (!e.target.closest(".card")) {
      cards.forEach((card) => {
        card.classList.remove("active");
        card.style.width = "350px";
        card.querySelector(".card-details").style.left = "100%";
        card.querySelector(".card-details").style.opacity = "0";
        const video = card.querySelector(".card-video");
        if (video) {
          video.style.filter = "blur(5px)";
          video.pause();
          video.currentTime = 0;
        }
      });
    }
  });
});
