document.querySelector(".toggle-info").addEventListener("click", function () {
  const moreInfo = document.querySelector(".more-info");
  if (moreInfo.style.display === "none") {
    moreInfo.style.display = "block";
    this.textContent = "Show Less";
  } else {
    moreInfo.style.display = "none";
    this.textContent = "Show More";
  }
});
