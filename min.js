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
var dataa = document.getElementsByClassName('card-content')

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

//save img 
// by @aelhajji

function SaveImg(){
    const input = document.getElementById('card-content');    
    html2canvas(input)
    .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        downloadURI(imgData, this.nameofpersone.value+" card.png");
  });
}
function downloadURI(uri, name) {
    var link = document.createElement("a");

    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    location.reload();
}
// save pdf 
//by @elhajji
function SavePdf(){    
    const text = document.getElementsByClassName('card-content')[0];
    html2pdf(text, {
        hmargin:       -0.60, 
        vmargin:       20, 
        filename:     this.nameofpersone.value+' card.pdf',
        image:        { type: 'jpeg', quality: 1 },
        html2canvas:  { dpi: 192, letterRendering: true },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait'}
       });
    html2pdf()
    .from(text)
}