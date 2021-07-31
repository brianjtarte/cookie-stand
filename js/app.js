'use strict';

console.log('Hello World');
// global variable for array of operating hours//
let hourOfDay = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

let cookieTable = document.getElementById('cookietest');

//constructor function

function Salmoncookies (location, min, max, avg){
  this.location = location;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.customerHour = [];
  this.cookiesSold = [];
  this.totalCookies = 0;

  this.getRandomCustomer = function(min,max){
    let randomNumber = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    return randomNumber;
  };
  this.renderCustPerHour = function(min,max) {
    for (let i = 0; i < hourOfDay.length; i++){
      let num = this.getRandomCustomer(this.min, this.max);
      this.customerHour.push(num);
    }
    console.log(this.customerCalc);
  };

  this.renderCookiesPurchased = function(){
    for (let i = 0; i < this.customerHour.length; i++){
      this.cookiesSold.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
    }
    console.log(this.cookiesSold);
  };
  this.renderCity = function() {
    let h3 = document.createElement('h3');
    h3.textContent = `${this.location}`;
    cookieTable.appendChild(h3);
    let tr = document.createElement('tr');
    let total = 0;
    for (let i = 0; i < hourOfDay.length; i++) {
      let td = document.createElement('td');
      td.textContent = `${hourOfDay[i]}: ${this.cookiesSold[i]}`;
      tr.appendChild(td);
      total += this.cookiesSold[i];
    }
    let td = document.createElement('td');
    td.textContent = `Total cookies: ${total}`;
    tr.appendChild(td); 
    cookieTable.appendChild(tr);
  };

  this.callUponAll = function() {
    this.renderCustPerHour();
    this.renderCookiesPurchased();
    this.renderCity();
  };
  this.callUponAll();
  this.shopArray.push(this);
}
Salmoncookies.prototype.shopArray = [];
  
const seattle = new Salmoncookies('Seattle', 23, 65, 6.3);
const tokyo = new Salmoncookies('Tokyo', 3, 24, 1.2);
const dubai = new Salmoncookies('Dubai', 11, 38, 3,7);
const paris = new Salmoncookies('Paris', 20, 38, 2.3);
const lima = new Salmoncookies('Lima', 2, 16, 0.6);

console.log(Salmoncookies.prototype.shopArray);

let tableCookie = document.createElement('table');
cookieTable.appendChild(tableCookie);

function tableHeader(){
  let tr= document.createElement('tr');
  tableCookie.appendChild(tr);

  let th = document.createElement('th');
  tableCookie.appendChild(th);

  for (let i = 0; i < hourOfDay.length; i++){
    let th = document.createElement('th');
    th.textContent = hourOfDay[i];
    tableCookie.appendChild(th);
  }
}

tableHeader();
// render =  function (){
//     let seattleHeader = document.createElement('h3');
//     seattleHeader.textContent = 'Seattle';
//     Salmoncookies.appendChild(seattleHeader);

//     let ul = document.createElement('ul');

//     for (let i = 0; i <hourOfDay.length; i++){
//       let seattleCookiesSold = this.cookiesPurchased();
//       this.cookiesSold.push(seattleCookiesSold);
//       console.log(this.avgCookiesSoldEachHour);
//       let li = document.createElement('li');

//       li.textContent = `${hourOfDay[i]}: ${seattleCookiesSold} cookies`;
//       ul.appendChild(li);
//       this.dailyTotal = this.dailyTotal + seattleCookiesSold;
//       console.log(seattleCookiesSold);
//     }
//     let li = document.createElement('li');
//     li.textContent = `Total: ${this.dailyTotal}`;
//     ul.appendChild(li);
//     seattleCookieList.appendChild(ul);
// }
// };

// let Salmoncookies = document.getElementById('cookietest');
// Salmoncookies.render();
//object literal for the city of Seattle//
// let seattle = {
//   name: 'Seattle',
//   min: 23,
//   max: 65,
//   avg: 6.3,
//   avgCookiesSoldEachHour:[],
//   dailyTotal: 0,

//   getRandomCustomer: function(){
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },

//   cookiesPurchased: function(){
//     return Math.ceil(this.getRandomCustomer()*this.avg);
//   },

//   render: function (){
//     let seattleHeader = document.createElement('h3');
//     seattleHeader.textContent = 'Seattle';
//     seattleCookieList.appendChild(seattleHeader);

//     let ul = document.createElement('ul');

//     for (let i = 0; i <hourOfDay.length; i++){
//       let seattleCookiesSold = this.cookiesPurchased();
//       this.avgCookiesSoldEachHour.push(seattleCookiesSold);
//       console.log(this.avgCookiesSoldEachHour);
//       let li = document.createElement('li');

//       li.textContent = `${hourOfDay[i]}: ${seattleCookiesSold} cookies`;
//       ul.appendChild(li);
//       this.dailyTotal = this.dailyTotal + seattleCookiesSold;
//       console.log(seattleCookiesSold);
//     }
//     let li = document.createElement('li');
//     li.textContent = `Total: ${this.dailyTotal}`;
//     ul.appendChild(li);
//     seattleCookieList.appendChild(ul);
//   }
// };

// let seattleCookieList = document.getElementById('cookietest');

// seattle.render();
// //object literal for Tokyo
// let tokyo = {
//   name: 'Tokyo',
//   min: 3,
//   max: 24,
//   avg: 1.2,
//   avgCookiesSoldEachHour:[],
//   dailyTotal: 0,

//   getRandomCustomer: function(){
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },

//   cookiesPurchased: function(){
//     return Math.ceil(this.getRandomCustomer()*this.avg);
//   },

//   render: function (){
//     let tokyoHeader = document.createElement('h3');
//     tokyoHeader.textContent = 'Tokyo';
//     tokyoCookieList.appendChild(tokyoHeader);

//     let ul = document.createElement('ul');

//     for (let i = 0; i <hourOfDay.length; i++){
//       let tokyoCookiesSold = this.cookiesPurchased();
//       this.avgCookiesSoldEachHour.push(tokyoCookiesSold);
//       console.log(this.avgCookiesSoldEachHour);
//       let li = document.createElement('li');

//       li.textContent = `${hourOfDay[i]}: ${tokyoCookiesSold} cookies`;
//       ul.appendChild(li);
//       //0 = 0 + 
//       this.dailyTotal = this.dailyTotal + tokyoCookiesSold;
//       console.log(tokyoCookiesSold);
//       console.log('IM HERE' + this.dailyTotal);
//     }
//     let li = document.createElement('li');
//     li.textContent = `Total: ${this.dailyTotal}`;
//     ul.appendChild(li);
//     tokyoCookieList.appendChild(ul);
//   }
// };

// let tokyoCookieList = document.getElementById('tokyo');
// tokyo.render();
// //object literal for Dubai
// let dubai = {
//   name: 'Dubai',
//   min: 11,
//   max: 38,
//   avg: 3.7,
//   avgCookiesSoldEachHour:[],
//   dailyTotal: 0,

//   getRandomCustomer: function(){
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },

//   cookiesPurchased: function(){
//     return Math.ceil(this.getRandomCustomer()*this.avg);
//   },

//   render: function (){
//     let dubaiHeader = document.createElement('h3');
//     dubaiHeader.textContent = 'Dubai';
//     dubaiCookieList.appendChild(dubaiHeader);

//     let ul = document.createElement('ul');

//     for (let i = 0; i <hourOfDay.length; i++){
//       let dubaiCookiesSold = this.cookiesPurchased();
//       this.avgCookiesSoldEachHour.push(dubaiCookiesSold);
//       console.log(this.avgCookiesSoldEachHour);
//       let li = document.createElement('li');

//       li.textContent = `${hourOfDay[i]}: ${dubaiCookiesSold} cookies`;
//       ul.appendChild(li);
//       this.dailyTotal = this.dailyTotal + dubaiCookiesSold;
//       console.log(dubaiCookiesSold);
//     }
//     let li = document.createElement('li');
//     li.textContent = `Total: ${this.dailyTotal}`;
//     ul.appendChild(li);
//     dubaiCookieList.appendChild(ul);
//   }
// };

// let dubaiCookieList = document.getElementById('dubai');
// dubai.render();
// //object literal for Paris
// let paris = {
//   name: 'Paris',
//   min: 20,
//   max: 38,
//   avg: 2.3,
//   avgCookiesSoldEachHour:[],
//   dailyTotal: 0,

//   getRandomCustomer: function(){
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },

//   cookiesPurchased: function(){
//     return Math.ceil(this.getRandomCustomer()*this.avg);
//   },

//   render: function (){
//     let parisHeader = document.createElement('h3');
//     parisHeader.textContent = 'Paris';
//     parisCookieList.appendChild(parisHeader);

//     let ul = document.createElement('ul');

//     for (let i = 0; i <hourOfDay.length; i++){
//       let parisCookiesSold = this.cookiesPurchased();
//       this.avgCookiesSoldEachHour.push(parisCookiesSold);
//       console.log(this.avgCookiesSoldEachHour);
//       let li = document.createElement('li');

//       li.textContent = `${hourOfDay[i]}: ${parisCookiesSold} cookies`;
//       ul.appendChild(li);
//       this.dailyTotal = this.dailyTotal + parisCookiesSold;
//       console.log(parisCookiesSold);
//     }
//     let li = document.createElement('li');
//     li.textContent = `Total: ${this.dailyTotal}`;
//     ul.appendChild(li);
//     parisCookieList.appendChild(ul);
//   }
// };

// let parisCookieList = document.getElementById('paris');
// paris.render();
// //object literal for Lima
// let lima = {
//   name: 'Lima',
//   min: 2,
//   max: 16,
//   avg: 4.6,
//   avgCookiesSoldEachHour:[],
//   dailyTotal: 0,

//   getRandomCustomer: function(){
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },

//   cookiesPurchased: function(){
//     return Math.ceil(this.getRandomCustomer()*this.avg);
//   },

//   render: function (){
//     let limaHeader = document.createElement('h3');
//     limaHeader.textContent = 'Lima';
//     limaCookieList.appendChild(limaHeader);

//     let ul = document.createElement('ul');

//     for (let i = 0; i <hourOfDay.length; i++){
//       let limaCookiesSold = this.cookiesPurchased();
//       this.avgCookiesSoldEachHour.push(limaCookiesSold);
//       console.log(this.avgCookiesSoldEachHour);
//       let li = document.createElement('li');

//       li.textContent = `${hourOfDay[i]}: ${limaCookiesSold} cookies`;
//       ul.appendChild(li);
//       this.dailyTotal = this.dailyTotal + limaCookiesSold;
//       console.log(limaCookiesSold);
//     }
//     let li = document.createElement('li');
//     li.textContent = `Total: ${this.dailyTotal}`;
//     ul.appendChild(li);
//     limaCookieList.appendChild(ul);
//   }
// };

// let limaCookieList = document.getElementById('lima');
// lima.render();