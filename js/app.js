'use strict';

console.log('Hello World');
// global variable for array of operating hours//
let hourOfDay = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
//object literal for the city of Seattle//
let seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  avgCookiesSoldEachHour:[],
  dailyTotal: 0,

  getRandomCustomer: function(){
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },

  cookiesPurchased: function(){
    return Math.ceil(this.getRandomCustomer()*this.avg);
  },

  render: function (){
    let seattleHeader = document.createElement('h3');
    seattleHeader.textContent = 'Seattle';
    seattleCookieList.appendChild(seattleHeader);

    let ul = document.createElement('ul');

    for (let i = 0; i <hourOfDay.length; i++){
      let seattleCookiesSold = this.cookiesPurchased();
      this.avgCookiesSoldEachHour.push(seattleCookiesSold);
      console.log(this.avgCookiesSoldEachHour);
      let li = document.createElement('li');

      li.textContent = `${hourOfDay[i]}: ${seattleCookiesSold} cookies`;
      ul.appendChild(li);
      this.dailyTotal = this.dailyTotal + seattleCookiesSold;
      console.log(seattleCookiesSold);
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailyTotal}`;
    ul.appendChild(li);
    seattleCookieList.appendChild(ul);
  }
};

let seattleCookieList = document.getElementById('cookietest');

seattle.render();
//object literal for Tokyo
let tokyo = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
  avgCookiesSoldEachHour:[],
  dailyTotal: 0,

  getRandomCustomer: function(){
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },

  cookiesPurchased: function(){
    return Math.ceil(this.getRandomCustomer()*this.avg);
  },

  render: function (){
    let tokyoHeader = document.createElement('h3');
    tokyoHeader.textContent = 'Tokyo';
    tokyoCookieList.appendChild(tokyoHeader);

    let ul = document.createElement('ul');

    for (let i = 0; i <hourOfDay.length; i++){
      let tokyoCookiesSold = this.cookiesPurchased();
      this.avgCookiesSoldEachHour.push(tokyoCookiesSold);
      console.log(this.avgCookiesSoldEachHour);
      let li = document.createElement('li');

      li.textContent = `${hourOfDay[i]}: ${tokyoCookiesSold} cookies`;
      ul.appendChild(li);
      //0 = 0 + 
      this.dailyTotal = this.dailyTotal + tokyoCookiesSold;
      console.log(tokyoCookiesSold);
      console.log('IM HERE' + this.dailyTotal);
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailyTotal}`;
    ul.appendChild(li);
    tokyoCookieList.appendChild(ul);
  }
};

let tokyoCookieList = document.getElementById('tokyo');
tokyo.render();
//object literal for Dubai
let dubai = {
  name: 'Dubai',
  min: 11,
  max: 38,
  avg: 3.7,
  avgCookiesSoldEachHour:[],
  dailyTotal: 0,

  getRandomCustomer: function(){
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },

  cookiesPurchased: function(){
    return Math.ceil(this.getRandomCustomer()*this.avg);
  },

  render: function (){
    let dubaiHeader = document.createElement('h3');
    dubaiHeader.textContent = 'Dubai';
    dubaiCookieList.appendChild(dubaiHeader);

    let ul = document.createElement('ul');

    for (let i = 0; i <hourOfDay.length; i++){
      let dubaiCookiesSold = this.cookiesPurchased();
      this.avgCookiesSoldEachHour.push(dubaiCookiesSold);
      console.log(this.avgCookiesSoldEachHour);
      let li = document.createElement('li');

      li.textContent = `${hourOfDay[i]}: ${dubaiCookiesSold} cookies`;
      ul.appendChild(li);
      this.dailyTotal = this.dailyTotal + dubaiCookiesSold;
      console.log(dubaiCookiesSold);
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailyTotal}`;
    ul.appendChild(li);
    dubaiCookieList.appendChild(ul);
  }
};

let dubaiCookieList = document.getElementById('dubai');
dubai.render();
//object literal for Paris
let paris = {
  name: 'Paris',
  min: 20,
  max: 38,
  avg: 2.3,
  avgCookiesSoldEachHour:[],
  dailyTotal: 0,

  getRandomCustomer: function(){
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },

  cookiesPurchased: function(){
    return Math.ceil(this.getRandomCustomer()*this.avg);
  },

  render: function (){
    let parisHeader = document.createElement('h3');
    parisHeader.textContent = 'Paris';
    parisCookieList.appendChild(parisHeader);

    let ul = document.createElement('ul');

    for (let i = 0; i <hourOfDay.length; i++){
      let parisCookiesSold = this.cookiesPurchased();
      this.avgCookiesSoldEachHour.push(parisCookiesSold);
      console.log(this.avgCookiesSoldEachHour);
      let li = document.createElement('li');

      li.textContent = `${hourOfDay[i]}: ${parisCookiesSold} cookies`;
      ul.appendChild(li);
      this.dailyTotal = this.dailyTotal + parisCookiesSold;
      console.log(parisCookiesSold);
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailyTotal}`;
    ul.appendChild(li);
    parisCookieList.appendChild(ul);
  }
};

let parisCookieList = document.getElementById('paris');
paris.render();
//object literal for Lima
let lima = {
  name: 'Lima',
  min: 2,
  max: 16,
  avg: 4.6,
  avgCookiesSoldEachHour:[],
  dailyTotal: 0,

  getRandomCustomer: function(){
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },

  cookiesPurchased: function(){
    return Math.ceil(this.getRandomCustomer()*this.avg);
  },

  render: function (){
    let limaHeader = document.createElement('h3');
    limaHeader.textContent = 'Lima';
    limaCookieList.appendChild(limaHeader);

    let ul = document.createElement('ul');

    for (let i = 0; i <hourOfDay.length; i++){
      let limaCookiesSold = this.cookiesPurchased();
      this.avgCookiesSoldEachHour.push(limaCookiesSold);
      console.log(this.avgCookiesSoldEachHour);
      let li = document.createElement('li');

      li.textContent = `${hourOfDay[i]}: ${limaCookiesSold} cookies`;
      ul.appendChild(li);
      this.dailyTotal = this.dailyTotal + limaCookiesSold;
      console.log(limaCookiesSold);
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailyTotal}`;
    ul.appendChild(li);
    limaCookieList.appendChild(ul);
  }
};

let limaCookieList = document.getElementById('lima');
lima.render();

