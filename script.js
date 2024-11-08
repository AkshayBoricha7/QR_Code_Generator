document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const inputText = document.getElementById("inputText").value;
  const qrCanvas = document.getElementById("qrCanvas");

  if (inputText) {
    QRCode.toCanvas(qrCanvas, inputText, function (error) {
      if (error) {
        console.error(error);
      } else {
        qrCanvas.style.display = "block";
      }
    });
  } else {
    alert("Please enter a text or URL");
  }
});
