let output = document.querySelector(".output");
let textInput = document.querySelector(".inputText");
let choosePic = false;
let photo = new Image();
let h = 600;
let w = 400;
let rangeValue = 20;

document.querySelector(".rangNum").innerHTML = rangeValue + " px";

document.querySelector(".go").addEventListener("click", goHandler);

function goHandler() {
  let inputText = document.querySelector(".inputText").value;
  inputText = inputText.trim();

  if (!choosePic) return alert("You should choose photo from your device!");

  if (inputText.length < 1) {
    alert("You should enter some text");
    textInput.value = "";
    textInput.focus();
    return;
  }

  if (!URL.createObjectURL(document.querySelector(".inputPic").files[0])) {
    return alert("not ok");
  }
  let range = rangeValue;
  output.style.fontSize = `${range}px`;

  let num = Math.floor((h * w * 2.5) / ((range * inputText.length) / 5));
  for (let i = 0; i <= num; i++) {
    inputText += inputText;
    if (inputText.length > num) {
      output.innerHTML = inputText;
      output.classList.add("build");
      return;
    }
  }
}
document.querySelector(".range").addEventListener("change", () => {
  rangeValue = document.querySelector(".range").value;
  document.querySelector(".rangNum").textContent = rangeValue + " px";
  output.style.fontSize = `${rangeValue}px`;
  goHandler();
});

document.querySelector(".inputPic").addEventListener("change", () => {
  let src = URL.createObjectURL(document.querySelector(".inputPic").files[0]);
  output.style.background = `url(${src}) 100% 100% / cover  no-repeat`;
  document.querySelector(".inputPic").style.background = "green";
  choosePic = true;
});
document.body.addEventListener("click", (e) => {
  if (e.target.classList.contains("inputText")) {
    textInput.style.height = "200px";
  } else {
    textInput.style.height = "20px";
  }
});

document.querySelector(".download-btn").addEventListener("click", function () {
  if (!choosePic) return alert("Please select an image");
  let captureArea = document.querySelector(".output");
  domtoimage
    .toPng(captureArea, {
      width: captureArea.clientWidth,
      height: captureArea.clientHeight,
    })
    .then(function (dataUrl) {
      let link = document.createElement("a");
      link.href = dataUrl;
      link.download = "text-portrait.png";
      link.click();
    })
    .catch(function (error) {
      console.error("oops, something went wrong!", error);
    });
});

const validationHandler = () => {};
