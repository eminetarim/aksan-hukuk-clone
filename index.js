window.addEventListener("load", function () {
  var loadingScreen = document.getElementById("loading-screen");
  var progressBar = document.querySelector(".progress-bar");
  var content = document.getElementById("content");

  // Loading ekranını 1 saniye boyunca göster
  setTimeout(function () {
    progressBar.style.width = "100%"; // Tamamen doldur
  }, 1000); // 1000 milisaniye (1 saniye) beklet

  setTimeout(function () {
    loadingScreen.style.display = "none"; // Loading ekranını gizle
    content.style.display = "block"; // Diğer sayfayı göster
  }, 2000); // 2000 milisaniye (2 saniye) sonra çalıştır (progress bar'ın tamamlanmasını bekleyin)
});
