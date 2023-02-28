const score = document.getElementById("display-score");
const resetScore = document.getElementById("btnreset");
const btnClick = document.getElementById("click-me");
const btnSmall = document.getElementById("smallAdd");
const btnMedium = document.getElementById("mediumAdd");
const btnBig = document.getElementById("bigAdd");
let prixSmall = document.getElementById("prixsmall");
let prixMedium = document.getElementById("prixmedium");
let prixBig = document.getElementById("prixbig");

document.getElementById("smallAdd").disabled = true; //desactive items trop chers
document.getElementById("mediumAdd").disabled = true;
document.getElementById("bigAdd").disabled = true;
document.getElementById("display-score").innerHTML = 0;
score.innerHTML = 0;
let valueClick = 1;
let scoreClick = 0;
let mediumActive=false; //variable pour voir si setInterval medium fonctionne
let bigActive=false; //variable pour voir si setInterval medium fonctionne

//----------fonctions pour augmenter la valeur du click------

function newClick() {
    scoreClick += valueClick;
    document.getElementById("display-score").innerHTML = scoreClick;
    check();
}

//----------fonction régulièrement appeler pour vérifier si on bloque bouton ou pas------

function check() {
    addLocalStorage();
    if (scoreClick >= disabled_btn_small) {
        document.getElementById("smallAdd").disabled = false;
    } else if (scoreClick <= disabled_btn_small) {
        document.getElementById("smallAdd").disabled = true;
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

//---------------variable et fonction pour le bouton le moins chers-------------

let disabled_btn_small = 10;
prixSmall.innerHTML = disabled_btn_small;

function small() {
    valueClick = valueClick + 1;//la valeure du click augmente
    scoreClick = scoreClick - disabled_btn_small;//on soustrait prix du click
    document.getElementById("display-score").innerHTML = scoreClick;
    disabled_btn_small = disabled_btn_small * 2; //prix du bouton qu augmente
    prixSmall.innerHTML = disabled_btn_small;
    check(); // on check pour désactiver boutons trop chers
}

//---------------variable et fonction pour le bouton moyen chers-------------

let valueMedium = 1;
let disabled_btn_medium = 100;
prixMedium.innerHTML = disabled_btn_medium;

function mediumInc() {
    scoreClick = scoreClick + valueMedium;
    document.getElementById("display-score").innerHTML = scoreClick;
    check();
}

function medium() {
    intervalMedium = setInterval(mediumInc, 1000);
    scoreClick = scoreClick - disabled_btn_medium;//on soustrait prix du click
    disabled_btn_medium = disabled_btn_medium * 3;
    prixMedium.innerHTML = disabled_btn_medium;
    valueMedium = valueMedium * 2;//augmente l'incrémentation chaque fois qu'on clique
    mediumActive=true;
}

function medium_refresh(){
    intervalMedium = setInterval(mediumInc, 1000);
    prixMedium.innerHTML = disabled_btn_medium;
    mediumActive=true;
}

//---------------variable et fonction pour bouton le plus chers-------------

let valueBig = 10;//valeur qui va être multipliée quand on clique sur big()
let disabled_btn_big = 1000;
prixBig.innerHTML = disabled_btn_big;

function bigInc() {
    scoreClick = scoreClick + valueBig;
    document.getElementById("display-score").innerHTML = scoreClick;
    check();
}

function big() {
    intervalBig = setInterval(bigInc, 1000);
    scoreClick = scoreClick - disabled_btn_big;//on soustrait prix du click
    disabled_btn_big = disabled_btn_big * 5;
    prixBig.innerHTML = disabled_btn_big;
    valueBig = Math.round(valueBig * 3);
    bigActive=true;
}
function big_refresh() {
    intervalBig = setInterval(bigInc, 1000);
    prixBig.innerHTML = disabled_btn_big;
    bigActive=true;
}

//---------------fonction pour rentrer valeurs en local.storage-------------

function addLocalStorage() {
        var strScore = scoreClick.toString();//données sur le score
        console.log("score "+strScore);
        localStorage.setItem('score', strScore);       
        localStorage.setItem('valueClick', valueClick);
        localStorage.setItem('disabled_btn_small', disabled_btn_small);
        localStorage.setItem('disabled_btn_medium', disabled_btn_medium);
        localStorage.setItem('disabled_btn_big', disabled_btn_big);
        localStorage.setItem('valueMedium', valueMedium);
        localStorage.setItem('valueBig', valueBig);
        localStorage.setItem('bigActive', bigActive);
        localStorage.setItem('mediumActive', mediumActive);
        console.log(localStorage);
}

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
    if(localStorage.getItem('valueBig') != null) {
        valueBig=localStorage.getItem('valueBig');
        valueBig = parseInt(valueBig);
    }
    if(localStorage.getItem('mediumActive') != null) {
        mediumActive=localStorage.getItem('mediumActive');
        if(mediumActive==="true"){
            medium_refresh();
        }
    }

    if(localStorage.getItem('bigActive') != null) {
        bigActive=localStorage.getItem('bigActive');
        if(bigActive==="true"){
            big_refresh();
        }
    }
}

window.onload = (event) => {
    getLocalStorage()
    document.getElementById("display-score").innerHTML = scoreClick
    check();
};

function reset() {
    localStorage.clear();
    valueClick = 1;
    scoreClick = 0;
    mediumActive=false; 
    bigActive=false; 
    disabled_btn_small = 10;
    prixSmall.innerHTML = disabled_btn_small;
    valueMedium = 2;
    disabled_btn_medium = 100;
    prixMedium.innerHTML = disabled_btn_medium;
    valueBig = 10;
    disabled_btn_big = 1000;
    prixBig.innerHTML = disabled_btn_big;
    score.innerHTML = 0;
    clearInterval(intervalMedium);
    clearInterval(intervalBig);
} 
