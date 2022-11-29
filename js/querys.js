// User
const userImg = document.querySelector('img.account-img');
const name = document.querySelector('h1.name');
const divisionWinrate = document.querySelector('p.division-winrate');

// Match
const userChamp = document.querySelector('champ-img');
const userSpells = document.querySelectorAll('img.spell-img');
const [result, division] = document.querySelectorAll('div.info h1');
const [kda, csAndLevel] = document.querySelectorAll('div.kda h1');
const date = document.querySelector('div.kda p');
const items = document.querySelectorAll('img.items img');
const champs = document.querySelectorAll('div.champs img');

// User data and match information
const informationContainer = document.querySelector('article.information-container');
const prediction = document.querySelector('article.prediction');

// Button for search summoner
const searchButton = document.querySelector('button.search-button');

// Buttons for change region
const region = document.querySelector('button.regions');
const allRegion = document.querySelector('div.all-regions');
const regions = document.querySelectorAll('div.container');

// Show match history
const matchInformation = document.querySelector('article.match');

const best = document.querySelector('article.best');
const showMatch = document.querySelector('div.arrow');
const matchHistory = document.querySelector('article.match-history');

const teams = document.querySelectorAll('section.team');
const team1 = document.querySelector('section.t1');
const team2 = document.querySelector('section.t2');

// Toggle newsletter
const newsLetterButton = document.querySelector('button.newsletter-button');

const newsLetter1 = document.querySelector('div.nl1');
const newsLetter2 = document.querySelector('div.nl2');