console.log('js file added done')

function playertext(innerid) {
    const playerfield = document.getElementById(innerid);
    const playerName = playerfield.innerText;
    return playerName;
}
function playerammount(innerid) {
    const playerfield = document.getElementById(innerid);
    const playerName = playerfield.innerText;
    return playerName;
}

function inputvalue(inputid) {
    const selectInput = document.getElementById(inputid);
    const selectInputstring = selectInput.value;
    const inputammount = parseFloat(selectInputstring);
    selectInput.value = '';
    return inputammount;
}
function playername1() {
    const playerName = playertext('player-name1')
    const playerinputfield = document.getElementById('player-input-field');
    const li = document.createElement('li');
    li.innerText = playerName;
    playerinputfield.appendChild(li);

    const btn = document.getElementsByTagName('button');
    btn.style.display

}
function playername2() {
    const playerName = playertext('player-name2')
    const playerinputfield = document.getElementById('player-input-field');
    const li = document.createElement('li');
    li.innerText = playerName;
    playerinputfield.appendChild(li);
}
function playername3() {
    const playerName = playertext('player-name3')
    const playerinputfield = document.getElementById('player-input-field');
    const li = document.createElement('li');
    li.innerText = playerName;
    playerinputfield.appendChild(li);
}
function playername4() {
    const playerName = playertext('player-name4')
    const playerinputfield = document.getElementById('player-input-field');
    const li = document.createElement('li');
    li.innerText = playerName;
    playerinputfield.appendChild(li);
}
function playername5() {
    const playerName = playertext('player-name5')
    const playerinputfield = document.getElementById('player-input-field');
    const li = document.createElement('li');
    li.innerText = playerName;
    playerinputfield.appendChild(li);
}
function playername6() {
    const playerName = playertext('player-name6')
    const playerinputfield = document.getElementById('player-input-field');
    const li = document.createElement('li');
    li.innerText = playerName;
    playerinputfield.appendChild(li);

}
