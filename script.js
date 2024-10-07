document.addEventListener("DOMContentLoaded", function() {
  const generateButton = document.getElementById("generate");
  const promptInput = document.getElementById("prompt");
  const heightInput = document.getElementById("hInput");
  const widthInput = document.getElementById("wInput");
  const imageContainer = document.getElementById("image-container");
  const loadingSpinner = document.getElementById("loading-spinner");
  const genText = document.getElementById("generatedText");
  const dlButton = document.getElementById("dlButton");

  generateButton.addEventListener("click", function() {
    var description = promptInput.value ? encodeURIComponent(promptInput.value) : "beautiful%20landscape";
    const randomSeed = Math.floor(Math.random() * 1000000000);
    const heightA = heightInput.value ? parseInt(heightInput.value) : 360;
    const widthA = widthInput.value ? parseInt(widthInput.value) : 480;

    loadingSpinner.style.display = "block";
    genText.style.display = "none";
    generateButton.classList.add("hide");

    const imageUrl = `https://image.pollinations.ai/prompt/${description}?nologo=1&seed=${randomSeed}&height=${heightA}&width=${widthA}`;
    console.log("URL: " + imageUrl);
    const image = document.createElement("img");

    image.onload = function() {
      loadingSpinner.style.display = "none";
      genText.style.display = "block";
      document.getElementById("dlButton").setAttribute("href", imageUrl);
      dlButton.style.display = "block";
      generateButton.classList.remove("hide");
      imageContainer.innerHTML = "";
      imageContainer.appendChild(image);
    };
    image.src = imageUrl;
  });
});
