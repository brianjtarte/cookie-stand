'use strict';

console.log('Hello World');
// global variable for array of operating hours//
let hourOfDay = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
//constructor function
function Cookieshop (location, min, max, avg){
  this.location = location;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.customerPerHour = [];
  this.cookiesSold = [];
  this.totalCookies = 0;

  this.getRandomCustomer = function(min,max) {
    let randomNumber = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    return randomNumber;
  };

  this.renderCustomerPerHour = function(min,max) {
    for (let i = 0; i < hourOfDay.length; i++){
      let num = this.getRandomCustomer(this.min, this.max);
      this.customerPerHour.push(num);
    }
    console.log(this.customerPerHour);
  };

  this.renderCookiesSold = function() {
    for (let i = 0; i < this.customerPerHour.length; i++) {
      let num = Math.floor(this.customerPerHour[i] * this.avg);
      this.totalCookies += num;
      this.cookiesSold.push(num);
    }
    console.log(this.cookiesSold);
  };

  this.callUponAll = function() {
    this.renderCustomerPerHour();
    this.renderCookiesSold();
  }
  this.callUponAll();
  this.shopArray.push(this);
}

Cookieshop.prototype.shopArray = [];
  
const seattle = new Cookieshop('Seattle', 23, 65, 6.3);
const tokyo = new Cookieshop('Tokyo', 3, 24, 1.2);
const dubai = new Cookieshop('Dubai', 11, 38, 3,7);
const paris = new Cookieshop('Paris', 20, 38, 2.3);
const lima = new Cookieshop('Lima', 2, 16, 0.6);

console.log(Cookieshop.prototype.shopArray);

const cookieTable = document.getElementById('cookietest');

console.log(cookieTable);

const tableCookieElem = document.createElement('table');
cookieTable.appendChild(tableCookieElem);

function tableHeader(){
  const tableTr= document.createElement('tr');
  tableCookieElem.appendChild(tableTr);

  const tableTh = document.createElement('th');
  tableCookieElem.appendChild(tableTh);

  for (let i = 0; i < hourOfDay.length; i++){
    const tableTh = document.createElement('th');
    tableTh.textContent = hourOfDay[i];
    tableCookieElem.appendChild(tableTh);
  }
  const dailyTh = document.createElement('th');
  dailyTh.textContent = 'Daily Location Total';
  tableCookieElem.appendChild(dailyTh);
}

function tableContent(){
  for (let i = 0; i < Cookieshop.prototype.shopArray.length; i++){
    let shopCity = Cookieshop.prototype.shopArray[i];
    const shopCityTr = document.createElement('tr');
    tableCookieElem.appendChild(shopCityTr);

    const shopCityTh = document.createElement('th');
    shopCityTh.textContent = shopCity.location;
    shopCityTr.appendChild(shopCityTh);

    for (let j = 0; j < shopCity.cookiesSold.length; j++){
      const shopCityTd = document.createElement('td');
      shopCityTd.textContent = `${shopCity.cookiesSold[j]}`;
      shopCityTr.appendChild(shopCityTd);
    }
    const shopCityTd2 = document.createElement('td');
    shopCityTd2.textContent = shopCity.totalCookies;
    shopCityTr.appendChild(shopCityTd2);
  }
}

function tableFooter(){
  const footerTr = document.createElement('tr');
  tableCookieElem.appendChild(footerTr);

  const footerTh = document.createElement('th');
  footerTh.textContent = 'Combined Total Per Hour';
  footerTr.appendChild(footerTh);

  let combinedCookies = [];
  for (let h = 0; h < hourOfDay.length; h++){
    let combinedTotal = 0;
    for (let i = 0; i < Cookieshop.prototype.shopArray.length; i++) {
      let currentStore = Cookieshop.prototype.shopArray[i];
      combinedTotal += currentStore.cookiesSold[h];
    }
    const footerTd = document.createElement('td');
    footerTd.textContent = `${combinedTotal}`;
    footerTr.appendChild(footerTd);
    combinedCookies.push(combinedTotal);
  }
  let combinedDailyTotal = 0;
  for (let i = 0; i < combinedCookies.length; i++) {
    combinedDailyTotal += combinedCookies[i];
  } 
  console.log(combinedDailyTotal);

  const footerTd2 = document.createElement('td');
  footerTd2.textContent = combinedDailyTotal;
  footerTr.appendChild(footerTd2);
}

tableHeader();
tableContent();
tableFooter();

