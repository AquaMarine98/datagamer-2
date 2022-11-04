const active = 'active';
const numberOfPlayers = 5;

window.addEventListener('beforeunload', () => {
    window.scrollTo(0, 0);
})

// Search summoner button
searchButton.addEventListener('click', () => {
    informationContainer.classList.remove(active);
    prediction.classList.add(active);

    matchInformation.scrollIntoView({
        behavior: "smooth",
        block: 'end'
    })

    showMatch.classList.remove(active);
    matchHistory.classList.remove(active);

    // Erase the before information and fill the information of the match
    createTeamContainer(team1);
    createTeamContainer(team2);
})

// Change region button
region.addEventListener('click', () => {
    allRegion.classList.toggle(active);
})

document.addEventListener('click', function(e) {
    var button = region;
    if (!button.contains(e.target)) {
        allRegion.classList.remove(active);
    }
})

regions.forEach(function(actual) {
    actual.addEventListener('click', () => {
        region.querySelector('h1').innerText = actual.querySelector('div').textContent;
    })
})

// Match history and rotate arrow
showMatch.addEventListener('click', () => {
    showMatch.classList.toggle(active);
    matchHistory.classList.toggle(active);

    /* if(matchHistory.classList.contains(active)) {
        matchHistory.scrollIntoView({
            behavior: "smooth",
            block: 'end'
        })
    } */
    best.classList.toggle(active);
})
function createTeamContainer(team) {
    team.innerHTML = '';

    for(let i = 0; i < numberOfPlayers - 1; i++) {
        createPlayerContainer(team);
        const span = document.createElement('span');
        team.appendChild(span);
    }

    createPlayerContainer(team);
}
function createPlayerContainer(team) {
    const container = document.createElement('div');
    container.classList.add('player', 'flex-row');

    const playerChamp = document.createElement('img');
    playerChamp.setAttribute('src', './images/tham-kench-miniatura.png');
    playerChamp.setAttribute('alt', '');

    const playerNameAndDivisonContainer = document.createElement('div');  
    playerNameAndDivisonContainer.classList.add('name', 'flex-column');
    const pName = document.createElement('p');
    const pDivision = document.createElement('p');
    pName.innerText = 'Anashe';
    pDivision.innerText = 'Madera IV';
    playerNameAndDivisonContainer.appendChild(pName);
    playerNameAndDivisonContainer.appendChild(pDivision);

    const playerKdaAndFarm = document.createElement('div');
    playerKdaAndFarm.classList.add('score', 'flex-column');
    const pKda = document.createElement('p');
    const pFarm = document.createElement('p');
    pKda.innerText = '1 / 1 / 1';
    pFarm.innerText = '47CS - 16lvl';
    playerKdaAndFarm.appendChild(pKda);
    playerKdaAndFarm.appendChild(pFarm);

    const itemsContainer = document.createElement('div');
    itemsContainer.classList.add('items');
    
    for(let i = 0; i < 7; i++) {
        const i = document.createElement('img');
        i.setAttribute('src', './images/item.png');
        i.setAttribute('alt', '');
        itemsContainer.appendChild(i);
    }

    container.appendChild(playerChamp);
    container.appendChild(playerNameAndDivisonContainer);
    container.appendChild(playerKdaAndFarm);
    container.appendChild(itemsContainer);

    team.appendChild(container);
}

// Add sent text to newsletter when press button
newsLetterButton.addEventListener('click', () => {
    newsLetter1.classList.remove(active);
    newsLetter2.classList.add(active);
})