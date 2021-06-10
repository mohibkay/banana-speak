const textInput = document.querySelector("#text-input");
const textOutput = document.querySelector("#text-output");
const btnTranslate = document.querySelector("#btn-translate");

btnTranslate.addEventListener("click", handleClick);

serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text) {
  return serverURL + "?text=" + text;
}

function handleClick() {
  fetch(getTranslationURL(textInput.value))
    .then((res) => res.json())
    .then((json) => {
      textOutput.innerText = json.contents.translated;
    })
    .catch(handleError);
}

function handleError() {
  alert("Something went wrong! Please try again after sometime.");
}
