//VARIABELEN
const toggleBtn = document.getElementById('toggle-menu__btn'); //hamburger link
const menu = document.getElementById('menu'); //de div met de ul list met buttons
const body = document.getElementById('body');
const naamKleur = document.getElementById('naam-kleur'); //naam in de achtergrond
const menuBtns = document.querySelectorAll('#menu ul il a'); //maakt node list met de buttons
//const menuButtons = document.getElementsByClassName('menu__btn'); //maakt HTMLCollectiemet de buttons
//const menuBtns = Array.from(menuBtns);//maakt een array van een HTML collectie

// MENU VERSCHIJNT EN VERDWIJNT DOOR TE KLIKKEN OP HAMBURGER
/*
const toggle = () => menu.classList.toggle('visible'); //functie waarmee de classname veranderd tussen visible en hidden.

toggleBtn.addEventListener('click', toggle);
*/
// MENU VERSCHIJNT EN VERDWIJNT DOOR OVER DE HMBURGER TE HOVEREN

const toggle = () => menu.classList.toggle('visible'); //functie waarmee de classname veranderd tussen visible en hidden.

toggleBtn.addEventListener('mouseenter', toggle);

// KLEUR VERANDEREN VAN ACHTERGROND

//callback function
let toggleColor = (toggleColor) => {
  menu.className = 'menu hidden'; //sluit het menu weer
  let kleur = toggleColor.target.getAttribute('title'); //pakt de title(='kleur') van het geklikte element
  body.className = kleur; //geeft kleur aan achtergrond
  naamKleur.innerHTML = kleur; //veranderd woord in de achtergrond
};

menuBtns.forEach((btn) => btn.addEventListener('click', toggleColor)); //voegt event toe aan een button en voert de functie toggleColor uit

//MET KEYBOARD EVENT

let checkKeypress = (key) => {
  menu.className = 'menu hidden'; //sluit het menu weer
  if (key.keyCode == '49') {
    //key 1 Home
    body.className = 'cadetblue';
    naamKleur.innerHTML = 'cadetblue';
  } else if (key.keyCode == '50') {
    //key 2
    body.className = 'rood';
    naamKleur.innerHTML = 'rood';
  } else if (key.keyCode == '51') {
    //key 3
    body.className = 'oranje';
    naamKleur.innerHTML = 'oranje';
  } else if (key.keyCode == '52') {
    //key 4
    body.className = 'geel';
    naamKleur.innerHTML = 'geel';
  } else if (key.keyCode == '53') {
    //key 5
    body.className = 'groen';
    naamKleur.innerHTML = 'groen';
  } else if (key.keyCode == '54') {
    //key 6
    body.className = 'blauw';
    naamKleur.innerHTML = 'blauw';
  } else if (key.keyCode == '55') {
    //key 7
    body.className = 'paars';
    naamKleur.innerHTML = 'paars';
  }
};

window.addEventListener('keydown', checkKeypress, false);
