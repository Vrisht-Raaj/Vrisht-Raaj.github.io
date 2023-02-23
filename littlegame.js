let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterNameText = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

const weapons = [];

const locations = [
  {
    name: "town square",
    "button text":["Go to store","Go to cave","Fight dragon"],
    "button functions": [goStore, goCave, fightDragon],
    text:"You are in the town square. You see a sign that says \"store\"."
  },{
    name: "Store",
    "button text":["Buy 10 health (10 gold)","Buy weapon (10 gold)","Go to town square"],
    "button functions": [buyHealth, buyWeapon, goTown],
    text:"You are entered the store."
  },{
    name: "Cave",
    "button text": ["Fight slime", "Fight fang beast", "Go to town square"],
    "button functions": [fightSlime, fightBeast, goTown],
    text: "You entered the cave! You see some monsters!"
  }
];

//Single line comment
/*Multi line comment*/

//Initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

/*Create a generic function
function functionName(){
  
}*/
function update(locations){
  button1.innerText = locations["button text"][0];
  button2.innerText = locations["button text"][1];
  button3.innerText = locations["button text"][2];

  button1.onclick = locations["button functions"][0];
  button2.onclick = locations["button functions"][1];
  button3.onclick = locations["button functions"][2];
  // \ is escaping
  text.innerText = locations.text;
}

function goTown(){
  /*
  button1.innerText = "Go to store";
  button2.innerText = "Go to cave)";
  button3.innerText = "Fight dragon";

  button1.onclick = goStore;
  button2.onclick = goCave;
  button3.onclick = fightDragon;
  // \ is escaping
  text.innerText = "You are in the town square. You see a sign that says \"store\".";*/
  update(locations[0]);
}

function goStore(){
  //print message
  //console.log("Going to Store");
  /*
  button1.innerText = "Buy 10 health (10 gold)";
  button2.innerText = "Buy weapon (10 gold)";
  button3.innerText = "Go to town square";

  button1.onclick = buyHealth;
  button2.onclick = buyWeapon;
  button3.onclick = goTown;
  text.innerText = "You entered the store.";*/
  update(locations[1]);
}

function goCave(){
  update(locations[1]);
}

function fightDragon(){
  console.log("Fighting dragon");
}

function buyHealth(){
  if(gold >= 10){
    gold -= 10;
    health += 10;
    goldText.innerText = gold;
    healthText.innerText = health;
  } else{
    text.innerText = "You do not have enough gold to buy health.";
  }

}

function buyWeapon(){
  
}

function fightSlime(){
  
}

function fightBeast(){
  
}