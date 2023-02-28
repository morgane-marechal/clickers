const score = document.getElementById("display-score");
const resetScore = document.getElementById("btnreset");
const btnClick = document.getElementById("click-me");
const btnSmall = document.getElementById("smallAdd");
const btnMedium = document.getElementById("mediumAdd");
const btnBig = document.getElementById("bigAdd");
let prixSmall = document.getElementById("prixsmall");
let prixMedium = document.getElementById("prixmedium");
let prixBig = document.getElementById("prixbig");
let displayInc = document.getElementById("inc");

btnSmall.disabled = true; //desactive items trop chers
document.getElementById("mediumAdd").disabled = true;
document.getElementById("bigAdd").disabled = true;

let valueClick = 1;
let scoreClick = 0;
let disabled_btn_small = 5;
score.innerHTML = scoreClick;
const audioclick = document.getElementById("audio-click");
const audioUp = document.getElementById("audio-up");
let inc_per_second=0;
displayInc.innerHTML=inc_per_second;

//----------fonction régulièrement appeler pour vérifier si on bloque bouton ou pas------

//fonction pour activer boutons bonus
function check() {
    addLocalStorage();
    if (scoreClick >= disabled_btn_small) {
        btnSmall.disabled = false;
    } else if (scoreClick <= disabled_btn_small) {
        btnSmall.disabled = true;
    }

    if (scoreClick >= disabled_btn_medium) {
        document.getElementById("mediumAdd").disabled = false;
    } else if (scoreClick <= disabled_btn_medium) {
        document.getElementById("mediumAdd").disabled = true;
    }

    if (scoreClick >= disabled_btn_big) {
        document.getElementById("bigAdd").disabled = false;
    } else if (scoreClick <= disabled_btn_big) {
        document.getElementById("bigAdd").disabled = true;
    }
}

//----------fonctions pour augmenter la valeur du click------

//fonction pour ajouter valeur d'un click à score
function newClick() {
    //check();
    scoreClick += valueClick;
    document.getElementById("display-score").innerHTML = scoreClick;
    console.log(scoreClick);
    audioclick.play();
    check();
}

//---------------variable et fonction pour le bouton le moins chers-------------

prixSmall.innerHTML = disabled_btn_small;

//fonction pour augmenter la valeure du click
function small() {
    valueClick = valueClick + 1;//la valeure du click augmente
    scoreClick = scoreClick - disabled_btn_small;//on soustrait prix du click
    document.getElementById("display-score").innerHTML = scoreClick;
    disabled_btn_small = disabled_btn_small * 2; //prix du bouton qu augmente
    prixSmall.innerHTML = disabled_btn_small;
    audioUp.play();
    check(); // on check pour désactiver boutons trop chers
}

//---------------variable et fonction pour le bouton moyen chers-------------

let valueMedium = 2;
let disabled_btn_medium = 50;
prixMedium.innerHTML = disabled_btn_medium;

function medium() {
    inc_per_second = inc_per_second + valueMedium;
    scoreClick = scoreClick - disabled_btn_medium;//on soustrait prix du click
    check();
    disabled_btn_medium = disabled_btn_medium * 3;
    prixMedium.innerHTML = disabled_btn_medium;
    audioUp.play();
}

//---------------variable et fonction pour bouton le plus chers-------------

let disabled_btn_big = 500;
prixBig.innerHTML = disabled_btn_big;

function big() {
    inc_per_second = inc_per_second * 2;
    scoreClick = scoreClick - disabled_btn_big;//on soustrait prix du click
    check();
    disabled_btn_big = disabled_btn_big * 5;
    prixBig.innerHTML = disabled_btn_big;
    audioUp.play();
}

//---------------fonction pour rentrer valeurs en local.storage-------------

//fonction ajoute variables dans local storage
function addLocalStorage() {
        var strScore = scoreClick.toString();//données sur le score
        console.log("score "+strScore);
        localStorage.setItem('score', strScore);       
        localStorage.setItem('valueClick', valueClick);
        localStorage.setItem('disabled_btn_small', disabled_btn_small);
        localStorage.setItem('disabled_btn_medium', disabled_btn_medium);
        localStorage.setItem('disabled_btn_big', disabled_btn_big);
        localStorage.setItem('valueMedium', valueMedium);
        localStorage.setItem('inc_per_second', inc_per_second);
        console.log(localStorage);
}

//fonction pour récupérer variable du local storage
function getLocalStorage(){
    if (localStorage.getItem('score') != null) {
        console.log("get score "+localStorage.getItem('score'));
        scoreClick=localStorage.getItem('score');
        scoreClick = parseInt(scoreClick);
    } 
    if (localStorage.getItem('valueClick') != null) {
        valueClick=localStorage.getItem('valueClick');
        valueClick = parseInt(valueClick);
    } 
    if(localStorage.getItem('disabled_btn_small') != null) {
        disabled_btn_small=localStorage.getItem('disabled_btn_small');
        disabled_btn_small = parseInt(disabled_btn_small);
        prixSmall.innerHTML = disabled_btn_small;
    }
    if(localStorage.getItem('disabled_btn_medium') != null) {
        disabled_btn_medium=localStorage.getItem('disabled_btn_medium');
        disabled_btn_medium = parseInt(disabled_btn_medium);
        prixMedium.innerHTML = disabled_btn_medium;
    }
    if(localStorage.getItem('disabled_btn_big') != null) {
        disabled_btn_big=localStorage.getItem('disabled_btn_big');
        disabled_btn_big = parseInt(disabled_btn_big);
        prixBig.innerHTML = disabled_btn_big;
    }
    if(localStorage.getItem('valueMedium') != null) {
        valueMedium=localStorage.getItem('valueMedium');
        valueMedium = parseInt(valueMedium);
    }

    if(localStorage.getItem('inc_per_second') != null) {
        inc_per_second=localStorage.getItem('inc_per_second');
        inc_per_second = parseInt(inc_per_second);
    }
}

//fonction pour quand on rafraichit la page
window.onload = (event) => {
    getLocalStorage()
    document.getElementById("display-score").innerHTML = scoreClick
    check();
};

function perSecond(){
    scoreClick = scoreClick + inc_per_second;
    score.innerHTML = scoreClick;
    displayInc.innerHTML=inc_per_second;
    check();
}

const intervalId=setInterval(perSecond, 1000);

//fonction pour reset les valeurs
function reset() {
    localStorage.clear();
    valueClick = 1;
    scoreClick = 0;
    disabled_btn_small = 5;
    prixSmall.innerHTML = disabled_btn_small;
    valueMedium = 2;
    disabled_btn_medium = 50;
    prixMedium.innerHTML = disabled_btn_medium;
    disabled_btn_big = 500;
    prixBig.innerHTML = disabled_btn_big;
    score.innerHTML = 0;
    inc_per_second = 0;
    check();
}
  
