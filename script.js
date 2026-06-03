document.addEventListener("DOMContentLoaded", () => {
  const likeButtons = document.querySelectorAll(".like-btn");

  likeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const likeCountSpan = button.querySelector(".like-count");

      let currentLikes = parseInt(likeCountSpan.textContent, 10);
      currentLikes++;

      likeCountSpan.textContent = currentLikes;

      button.style.transform = "scale(0.95)";
      setTimeout(() => {
        button.style.transform = "scale(1)";
      }, 100);
    });
  });
});
