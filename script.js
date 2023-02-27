const score = document.getElementById("display-score");
const btnClick = document.getElementById("click-me");
const btnSmall = document.getElementById("smallAdd");
const btnMedium = document.getElementById("mediumAdd");
const btnBig = document.getElementById("bigAdd");
let prixSmall = document.getElementById("prixsmall");
let prixMedium = document.getElementById("prixmedium");
let prixBig = document.getElementById("prixbig");

document.getElementById("smallAdd").disabled = true;
document.getElementById("mediumAdd").disabled = true;
document.getElementById("bigAdd").disabled = true;

score.innerHTML = 0;
let valueClick = 1.0;
let scoreClick = 0;

//----------fonctions pour augmenter la valeur du click------

function newClick() {
    scoreClick += valueClick;
    document.getElementById("display-score").innerHTML = scoreClick;
    check();
    console.log("hello " + disabled_btn_small);
}

//----------fonction régulièrement appeler pour vérifier si on bloque bouton ou pas------

function check() {
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

let nb_small = 0; //nombre de fois où j'appelle la fonction small


function small() {
    valueClick = Math.round(valueClick * 1.6);//la valeure du click augmente
    //console.log("value click "+valueClick);
    scoreClick = scoreClick - disabled_btn_small;//on soustrait prix du click
    document.getElementById("display-score").innerHTML = scoreClick;
    disabled_btn_small = disabled_btn_small * 2; //prix du bouton qu augmente
    console.log("prix bouton: " + disabled_btn_small)
    prixSmall.innerHTML = disabled_btn_small;
    nb_small++;
    check(); // on check pour désactiver boutons trop chers
}

//---------------variable et fonction pour le bouton moyen chers-------------

let valueMedium = 2;
let disabled_btn_medium = 100;
prixMedium.innerHTML = disabled_btn_medium;
let nb_medium = 0; //nombre de fois où j'appelle la fonction medium

function mediumInc() {
    scoreClick = scoreClick + valueMedium;
    document.getElementById("display-score").innerHTML = scoreClick;
    check();
}

function medium() {
    intervalMedium = setInterval(mediumInc, 1000);
    scoreClick = scoreClick - disabled_btn_medium;//on soustrait prix du click
    disabled_btn_medium = disabled_btn_medium * 2;
    prixMedium.innerHTML = disabled_btn_medium;
    valueMedium = Math.round(valueMedium * 1.6);//augmente l'incrémentation chaque fois qu'on clique
    nb_medium++;
}

//---------------variable et fonction pour bouton le plus chers-------------

let valueBig = 10;//valeur qui va être multipliée quand on clique sur big()
let disabled_btn_big = 1000;
prixBig.innerHTML = disabled_btn_big;
let nb_big = 0; //nombre de fois où j'appelle la fonction big


function bigInc() {
    scoreClick = scoreClick + valueBig;
    document.getElementById("display-score").innerHTML = scoreClick;
    check();
}

function big() {
    intervalBig = setInterval(bigInc, 1000);
    scoreClick = scoreClick - disabled_btn_big;//on soustrait prix du click
    disabled_btn_big = disabled_btn_big * 2;
    prixBig.innerHTML = disabled_btn_big;
    valueBig = Math.round(valueBig * 2);
    nb_big++;
}