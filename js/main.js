var LANGUAGE = {
    default:{
        "Welcome to Internationalization Example":"Welcome to Internationalization Example",
        "Language Preference":"Language Preference",
        "Please select language to vote -":"Please select language to vote -",
        "Welcome to Himachal Tourism":"Welcome to Himachal Tourism",
        "Great place to visit":"Great place to visit",
        "Cheap Hotels for your stay":"Cheap Hotels for your stay",
        "INFO_TEXT_P1":"Himachal Pradesh is a northern Indian state in the Himalayas. It's home to scenic mountain towns and resorts such as Dalhousie. Host to the Dalai Lama, Himachal Pradesh has a strong Tibetan presence. This is reflected in its Buddhist temples and monasteries, as well as its vibrant Tibetan New Year celebrations. The region is also well known for its trekking, climbing and skiing areas."
    },
    en : {
        "Welcome to Internationalization Example":"Welcome to Internationalization Example",
        "Language Preference":"Language Preference",
        "Please select language to vote -":"Please select language to vote -",
        "Welcome to Himachal Tourism":"Welcome to Himachal Tourism",
        "Great place to visit":"Great place to visit",
        "Cheap Hotels for your stay":"Cheap Hotels for your stay",
        "INFO_TEXT_P1":"Himachal Pradesh is a northern Indian state in the Himalayas. It's home to scenic mountain towns and resorts such as Dalhousie. Host to the Dalai Lama, Himachal Pradesh has a strong Tibetan presence. This is reflected in its Buddhist temples and monasteries, as well as its vibrant Tibetan New Year celebrations. The region is also well known for its trekking, climbing and skiing areas."
    },
    fr : {
        "Welcome to Internationalization Example":"Bienvenue dans l'exemple d'internationalisation",
        "Language Preference":"Préférence de langue",
        "Please select language to vote -":"Veuillez sélectionner la langue pour voter -",
        "Welcome to Himachal Tourism":"Bienvenue à Himachal Tourism",
        "Great place to visit":"Super endroit à visiter",
        "Cheap Hotels for your stay":"Hôtels pas chers pour votre séjour",
        "INFO_TEXT_P1":"L'Himachal Pradesh est un État du nord de l'Inde dans l'Himalaya. Il abrite des villes et des stations de montagne pittoresques comme Dalhousie. Hôte du Dalaï Lama, l'Himachal Pradesh a une forte présence tibétaine. Cela se reflète dans ses temples et monastères bouddhistes, ainsi que dans ses célébrations animées du Nouvel An tibétain. La région est également bien connue pour ses zones de trekking, d'escalade et de ski."
    },
    du : {
        "Welcome to Internationalization Example":"Willkommen zum Internationalisierungsbeispiel",
        "Language Preference":"Spracheinstellung",
        "Please select language to vote -":"Bitte wählen Sie die Sprache zur Abstimmung aus -",
        "Welcome to Himachal Tourism":"Willkommen bei Himachal Tourismus",
        "Great place to visit":"Toller Ort zu besuchen",
        "Cheap Hotels for your stay":"Günstige Hotels für Ihren Aufenthalt",
        "INFO_TEXT_P1":"Himachal Pradesh ist ein nordindischer Staat im Himalaya. Es ist die Heimat malerischer Bergstädte und Resorts wie Dalhousie. Himachal Pradesh ist Gastgeber des Dalai Lama und hat eine starke tibetische Präsenz. Dies spiegelt sich in den buddhistischen Tempeln und Klöstern sowie in den lebhaften tibetischen Neujahrsfeiern wider. Die Region ist auch bekannt für ihre Trekking-, Kletter- und Skigebiete."
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

