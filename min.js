//calling inputs
//by @aelhajji
var orgname = document.getElementById('org-name');
var orgfrname = document.getElementById('org-name-fr');
var cardtitle = document.getElementById('card-title');
var nameofpersone = document.getElementById('per-name');
var whois = document.getElementById('per-iden');
var cin =document.getElementById('cin');
var annins = document.getElementById('aan-ins');
var myadresse = document.getElementById('adresse');
var bg = document.getElementById('select-bg')


//calling content
//by @aelhajji
var orgnamehtml = document.getElementById('org-name-html');
var orgfrnamehtml = document.getElementById('org-name-fr-html');
var cardtitlehtml = document.getElementById('card-title-html');
var nameofpersonehtml = document.getElementById('per-name-html');
var whoishtml = document.getElementById('per-iden-html');
var cinhtml =document.getElementById('cin-html');
var anninshtml = document.getElementById('aan-ins-html');
var myadressehtml = document.getElementById('adresse-html');

//changr  inputs value
//by @elhajji

function changeOrgNameAr(){
    orgnamehtml.innerHTML = orgname.value;
}

function changeOrgNameFr(){
    orgfrnamehtml.innerHTML = orgfrname.value.toUpperCase();
}

function changeCardTitle(){
    cardtitlehtml.innerHTML = cardtitle.value;
}

function changeName(){
    nameofpersonehtml.innerHTML = nameofpersone.value;
}

function changeSifa(){
    whoishtml.innerHTML = whois.value;
}

function changeCin(){
    cinhtml.innerHTML = cin.value.toUpperCase();
}

function changeIns(){
    anninshtml.innerHTML = annins.value.toUpperCase();
}
function changeAdress(){
    myadressehtml.innerHTML = myadresse.value;
}

//change bg 
//by @aelhajji

function changeBg(){
    if(!bg.value){
        document.getElementsByClassName("card-content")[0].style.backgroundImage = "url('imges/card-bg.jpg'')";

    }else
    document.getElementsByClassName("card-content")[0].style.backgroundImage = "url('"+bg.value+"')";
    
}
