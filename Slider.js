const entities = [
    {
        city: 'Rostov-on-Don \n LCD admiral',
        time: '3.5 months',
        area: '81 m2',
        cost:'Upon request',
        img: './images/image1.png'
    },
    {
        city: 'Sochi \n Thieves',
        time: '4 months',
        area: '105 m2',
        cost:'Upon request',
        img: './images/image2.png'
    },
    {
        city: 'Rostov-on-Don \n Patriotic',
        time: '3 months',
        area: '93 m2',
        cost:'Upon request',
        img: './images/image3.png'
    }
];
  
const city = document.querySelector('.city');
const time = document.querySelector('.time');
const area = document.querySelector('.area');
const cost = document.querySelector('.cost');
const img = document.querySelector('.slider-img');
const prev = document.querySelector('.btn-prev');
const next = document.querySelector('.btn-next');
const firstLink = document.querySelector('.link-first');
const secondLink = document.querySelector('.link-second');
const thirdLink = document.querySelector('.link-third');
const firstLineLink = document.querySelector('.link-line-first');
const secondLineLink = document.querySelector('.link-line-second');
const thirdLineLink = document.querySelector('.link-line-third');
const firstBull = document.querySelector('.dot-first');
const secondBull = document.querySelector('.dot-second');
const thirdBull = document.querySelector('.dot-third');
let currentIndex = 0;
const linkLine = document.createElement("div");
linkLine.classList.add('link-line');
  
function setEntity(index){
    city.innerText = entities[index].city;
    time.innerText = entities[index].time;
    area.innerText = entities[index].area;
    cost.innerText = entities[index].cost;
    img.style.backgroundImage = `url(${entities[index].img})`;
    if (index==0) {
        firstLink.classList.add("clicked-link");
        secondLink.classList.remove("clicked-link");
        thirdLink.classList.remove("clicked-link");
        firstBull.setAttribute('src', './images/bullWhite.png');
        secondBull.setAttribute('src', './images/bullBlack.png');
        thirdBull.setAttribute('src', './images/bullBlack.png');
        firstLineLink.style.display = 'block';
        secondLineLink.style.display = 'none';
        thirdLineLink.style.display = 'none';
    }
    if (index==1) {
        firstLink.classList.remove("clicked-link");
        secondLink.classList.add("clicked-link");
        thirdLink.classList.remove("clicked-link");
        firstBull.setAttribute('src', './images/bullBlack.png');
        secondBull.setAttribute('src', './images/bullWhite.png');
        thirdBull.setAttribute('src', './images/bullBlack.png');
        firstLineLink.style.display = 'none';
        secondLineLink.style.display = 'block';
        thirdLineLink.style.display = 'none';
    }
    if (index==2) {
        firstLink.classList.remove("clicked-link");
        secondLink.classList.remove("clicked-link");
        thirdLink.classList.add("clicked-link");
        firstBull.setAttribute('src', './images/bullBlack.png');
        secondBull.setAttribute('src', './images/bullBlack.png');
        thirdBull.setAttribute('src', './images/bullWhite.png');
        firstLineLink.style.display = 'none';
        secondLineLink.style.display = 'none';
        thirdLineLink.style.display = 'block';
    }
};
  
function clickPrev(){
    currentIndex -= 1;
    if(currentIndex < 0) currentIndex = 2;
    setEntity(currentIndex);
}
function clickNext(){
    currentIndex += 1;
    if(currentIndex > 2) currentIndex = 0;
    setEntity(currentIndex);
}
  
prev.addEventListener('click', () => {
    clickPrev();
});
next.addEventListener('click', () => {
    clickNext();
});
firstLink.addEventListener('click', () => {
    setEntity(0);
});
secondLink.addEventListener('click', () => {
    setEntity(1);
});
thirdLink.addEventListener('click', () => {
    setEntity(2);
});
firstBull.addEventListener('click', () => {
    setEntity(0);
});
secondBull.addEventListener('click', () => {
    setEntity(1);
});
thirdBull.addEventListener('click', () => {
    setEntity(2);
});