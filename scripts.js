var btnTranslate = document.querySelector("#btn-translate");
var inputText = document.querySelector("#txt-input");

function translateButtonClickHandler(){
    console.log("clicked");
    console.log("Input entered in text-area: ", inputText.value);
}

btnTranslate.addEventListener("click", translateButtonClickHandler);