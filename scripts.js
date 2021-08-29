var btnTranslate = document.querySelector("#btn-translate");
var inputText = document.querySelector("#txt-input");
var outputDivText = document.querySelector("#txt-output")

function translateButtonClickHandler(){
    console.log("clicked");
    console.log("Input entered in text-area: ", inputText.value);
    outputDivText.innerText = inputText.value;
}

btnTranslate.addEventListener("click", translateButtonClickHandler);