function solution(players, callings) {
    let playerInfo = {};
    players.forEach((e, i) => playerInfo[e] = i);
    
    callings.forEach(e => {
      let idx =  playerInfo[e];
      let frontName = players[idx - 1];

      players[idx] = players[idx - 1];
      players[idx - 1] = e;
      
      playerInfo[e] = idx - 1;
      playerInfo[frontName] = idx;
    })


    
    return players;
}