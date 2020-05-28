var LANGUAGE = {
    en : {
        "Welcome to Internationalization Example":"Welcome to Internationalization Example",
        "Language Preference":"Language Preference",
        "Please select language to vote -":"Please select language to vote -"
    },
    fr : {
        "Welcome to Internationalization Example":"Bienvenue dans l'exemple d'internationalisation",
        "Language Preference":"Préférence de langue",
        "Please select language to vote -":"Veuillez sélectionner la langue pour voter -"
    },
    du : {
        "Welcome to Internationalization Example":"Willkommen zum Internationalisierungsbeispiel",
        "Language Preference":"Spracheinstellung",
        "Please select language to vote -":"Bitte wählen Sie die Sprache zur Abstimmung aus -"
    }
}
var languages = Array.from(document.getElementsByClassName("language"));

languages.forEach(function (item, index) {
    item.addEventListener('click', function () {
        changeSystemLanguage(LANGUAGE[this.dataset.lang]);
    });
});

var DEFAULT_LANG = "en";

function changeSystemLanguage(data){
    let list = Array.from(document.querySelectorAll("span,h1,h2,h3,h4,h5,h6"));
    list.forEach((item,index)=>{
        if(data[item.dataset.langkey]){
            item.innerHTML = data[item.dataset.langkey];
        }
    })
}

