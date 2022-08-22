
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
const players = [];
function select(element) {
    const playersName = element.parentNode.children[0].innerText;
    const playersObj = {
        playerName: playersName
    };
    players.push(playersObj);

    if (players.length <= 5) {

        const select = element;
        select.innerText = 'selected';
        select.setAttribute('disabled', true);
        console.log(select);
    } else {
        return alert('You cant add more than 5 Players');
    }
    setPlayerName(players);
    console.log(players);
}

function setPlayerName(nameList) {
    const tableBody = document.getElementById('selected-player-list');
    tableBody.innerHTML = '';
    for (let i = 0; i < nameList.length; i++) {
        const names = nameList[i].playerName;
        console.log(names);
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <th scope="row">${i + 1}</th>
          <td>${names}</td>
          `;
        tableBody.appendChild(tr);
    }
}


document.getElementById('Calculate').addEventListener('click', function () {
    const perplayercost = inputvalue('player-cost');
    const playerlist = players.length;
    const playerexpenses = document.getElementById('player-expenses');
    playerexpenses.innerText = perplayercost * playerlist;


})
document.getElementById('Total-ammount').addEventListener('click', function () {
    const Allplayerammount = playerammount('player-expenses')

    const Allplayerammountnumber = parseFloat(Allplayerammount)

    const managerammount = inputvalue('manager-ammount');

    const coahammount = inputvalue('coah-ammount');
    if (isNaN(Allplayerammountnumber)) {
        alert('please input the ammount')

    }
    else if (isNaN(managerammount)) {
        alert('please input the ammount')
    }
    else if (isNaN(coahammount)) {
        alert('please input the ammount')
    }
    else {
        const allammount = Allplayerammountnumber + managerammount + coahammount;


        const totalammount = document.getElementById('total-ammount');
        totalammount.innerText = allammount;
    }
})