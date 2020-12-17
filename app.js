var btnTranslate = document.querySelector("#btn-Translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");


var serverUrl = "https://api.funtranslations.com/translate/minion.json";

function getTranslationUrl(text)
{
       
       return serverUrl + "?text=" +text;
       
}

function errorHandler(error)
{
       console.log("Error occured:", error);
       alert("something wrong");

}

function clickHandler() 
{
       var inputTxt = txtInput.value;
       var res1 = fetch(getTranslationUrl(inputTxt));
       
       fetch(getTranslationUrl(inputTxt))
       .then(res => res.json())
       .then(json => {
              var translatedText = json.contents.translated;
              outputDiv.innerHTML = translatedText;
       })
       .catch(errorHandler)
};

btnTranslate.addEventListener("click",clickHandler)


















//just study purpose
// var username = prompt("give me your username");
// alert("Welocme"+username);