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


//changr  form inputs from  contrnt from to  styling form
//by @elhajji
function changeContent(){
    document.getElementById("stylecontrols").className = "hiddden rounded cotrol-element d-flex align-items-center justify-content-center flex-wrap col-sm ";
    document.getElementById("contentcontrols").className = " rounded cotrol-element d-flex align-items-center justify-content-center flex-wrap col-sm ";
    
}
function changeStyle(){
    document.getElementById("stylecontrols").className = " rounded cotrol-element d-flex align-items-center justify-content-center flex-wrap col-sm ";
    document.getElementById("contentcontrols").className = "hiddden rounded cotrol-element d-flex align-items-center justify-content-center flex-wrap col-sm ";
}

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

// cange element color
// by elhajji
function changeTitleArColor(){
    orgnamehtml.style.color= document.getElementById('title-color').value;
}
function changeTitleFrColor(){
    orgfrnamehtml.style.color= document.getElementById('title-fr-color').value;
}
function changeJobTitleFrColor(){
    cardtitlehtml.style.color = document.getElementById('card-job-color').value;
}
function changeInfosColor(){
    // document.getElementsByTagNameNS('td')[0].style.color = document.getElementById('card-info-color').value;
    var colorchanger = document.getElementsByTagName("td");
    for(var i = 0, j = colorchanger.length; i < j; ++i)
    colorchanger[i].style.color = document.getElementById('card-info-color').value;
    }
function changeInfosTitleColor(){
    var colorchanger = document.getElementsByTagName("th");
    for(var i = 0, j = colorchanger.length; i < j; ++i)
    colorchanger[i].style.color = document.getElementById('card-info-title-color').value;
}
//change bg  card
//by @aelhajji

function changeBg(){
    if(!this.bg.value){
        document.getElementsByClassName("card-content")[0].style.backgroundImage = "url('imges/card-bg0.jpg')";

    }
    if (this.bg.value == "imges/card-bg-acc.jpg") {
        this.orgfrnamehtml.innerHTML ='Association Ajdour pour le Développement Humain';
        this.orgfrname.value ='Association Ajdour pour le Développement Humain';
        this.orgnamehtml.innerHTML ='جمعية أجدور للتنمية البشرية';
        this.orgname.value ='جمعية أجدور للتنمية البشرية';
        this.cardtitlehtml.innerHTML ='بطاقة المنخرط(ة)';
        this.cardtitle.value ='بطاقة المنخرط(ة)';
        this.whoishtml.innerHTML ='منخرط';
        this.whois.value ='منخرط';
        this.anninshtml.innerHTML ='2022';
        this.annins.value ='2022';
        document.getElementsByClassName("card-content")[0].style.backgroundImage = "url('"+bg.value+"')";
    }
    else {
    document.getElementsByClassName("card-content")[0].style.backgroundImage = "url('"+bg.value+"')";
    }
}

// change content emplacment
// by @ellhajji
function changeTitlePosition(){
    // orgnamehtml.className = "gov-title-ar-center";
    // orgfrnamehtml.className = "gov-title-fr-center";
    // cardtitlehtml.className ="mission-center"
    // document.getElementById('person-info').className='person-info-center'
    const emplacmentt = document.getElementById('select-dir').value;
    switch (emplacmentt) {
        case 'right':
            orgnamehtml.className = "gov-title-ar";
            orgfrnamehtml.className = "gov-title-fr";
            cardtitlehtml.className ="mission"
            document.getElementById('person-info').className='person-info'
          break;
        case 'center':
            orgnamehtml.className = "gov-title-ar-center";
            orgfrnamehtml.className = "gov-title-fr-center";
            cardtitlehtml.className ="mission-center"
            document.getElementById('person-info').className='person-info-center'
            break;
        case 'left':
            orgnamehtml.className = "gov-title-ar-left";
            orgfrnamehtml.className = "gov-title-fr-left";
            cardtitlehtml.className ="mission-left"
            document.getElementById('person-info').className='person-info-left'
          break;
        default:
          alert(`Sorry, we are out of here bb.`);
      }
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
    var r = confirm("مازال العمل مستمر من اجل تطوير هده الخدمة لكن يمكمن تجريبها عن طريق الظغط على ok");
        if (r == true) {
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
        } else {}
}