var btnTranslate = document.querySelector("#btn-translate");
var inputText = document.querySelector("#txt-input");
var outputDivText = document.querySelector("#txt-output")

var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function constructTranslationTextURL(text){
    return serverURL + "?" + "text=" + text;
}

function errorHandler(error){
    console.log("Error occured: ", error);
}

function translateButtonClickHandler(){
    fetch(constructTranslationTextURL(inputText.value))
    .then(response => response.json())
    .then(json => {
        outputDivText.innerText = json.contents.translated;})
    .catch(errorHandler)
}


btnTranslate.addEventListener("click", translateButtonClickHandler);