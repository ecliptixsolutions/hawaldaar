function createFrames() {
  var frameCountElement = document.getElementById("number-of-frames-input");

  if (frameCountElement != null) {
    var webAddressInput = document.getElementById("web-address-input");
    var webAddress = "";
    var logOutputElement = document.getElementById("log-container");

    if (webAddressInput != null) {
      webAddress = webAddressInput.value;
    }

    var frameCount = parseInt(frameCountElement.value);
    var framesContainer = document.getElementById("frames-container");
    framesContainer.innerHTML = "";
    logOutputElement.innerText = "Creating " + frameCount + " frames for " + webAddress;

    for (var i = 0; i < frameCount; i++) {
      var frameDiv = document.createElement("iframe");
      frameDiv.src = webAddress;
      frameDiv.classList.add("content-frame");
      framesContainer.appendChild(frameDiv);
    }
  }
}
