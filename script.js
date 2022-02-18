const hrE = document.querySelector('[datahourhand]');
const minE = document.querySelector('[dataminhand]');
const secE = document.querySelector('[datasechand]');
const digHrE = document.querySelector('.dig.hr');
const digminE = document.querySelector('.dig.min');
const digsecE = document.querySelector('.dig.sec');


function setClock(){
    const currentDate = new Date();
    const secRatio = (currentDate.getSeconds()) / 60;
    const minRatio = (secRatio + currentDate.getMinutes()) / 60;
    const hourRatio = ( minRatio + currentDate.getHours()) / 12;
    setRotate(hrE , hourRatio);
    setRotate(minE , minRatio);
    setRotate(secE , secRatio);
}

function setRotate(ele , ratio){
    ele.style.setProperty('--rotation' , ratio * 360);
}
function getData( arg ){
    return arg >= 10 ? (arg) : `0${arg}`;
}

function digital(){
    const currentDate = new Date();
    const sec = getData(currentDate.getSeconds());
    const min = getData(currentDate.getMinutes());
    const hrs = getData(currentDate.getHours());
    digHrE.innerText = hrs;
    digminE.innerText = ": " + min;
    digsecE.innerText = ": " + sec;
}

setInterval(setClock, 1000);
setInterval(digital,1000);
digital();
setClock();