document.addEventListener("DOMContentLoaded", () => {
  const spans = document.querySelectorAll("#intro span");
  spans.forEach((span, index) => {
    setTimeout(() => {
      span.classList.add("show");
    }, index * 300); // Adjust the delay as needed
  });

  // Add slide-up class to all spans at the same time after the initial slide effect
  setTimeout(() => {
    spans.forEach((span) => {
      span.classList.add("slide-up");
    });

    // Show the cover after the slide-up effect
    setTimeout(() => {
      document.querySelector(".cover").classList.add("show");
    }, 900); // Adjust the delay as needed
  }, spans.length * 300 + 500); // Adjust the delay as needed
});
// Adjust the delay as needed
