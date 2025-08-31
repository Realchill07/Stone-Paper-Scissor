function Computer_Choice() {
  let n = Math.random() * 3; 
  if (n <= 1) {
    return 'Rock';
  }
  else if (n <= 2) {
    return 'Paper';
  }
  else {
    return 'Scissor';
  }
}
function Result(userchoice,computerchoice) {
  if (userchoice === 'Rock'){
    if (computerchoice === 'Rock') {
      score.tie++;
      return `It's a tie.`;
  }
    else if (computerchoice === 'Paper') {
      score.lose++;
      return 'Computer won.';
  }
    else {
      score.win++;
      return 'User won.';
  }
}
  if (userchoice === 'Paper'){
    if (computerchoice === 'Rock') {
      score.win++;
      return `User won.`;
  }
    else if (computerchoice === 'Paper') {
      score.tie++;
      return `It's a tie.` ; 
  }
    else {
      score.lose++;
      return 'Computer won.';
  }
} 
  if (userchoice === 'Scissor'){
    if (computerchoice === 'Rock') {
      score.lose++;
      return `Computer won.`;
  }
    else if (computerchoice === 'Paper') {
    score.win++;
    return 'User won.';
  }
    else {
    score.tie++;
    return `It's a tie.`;
  }
  }
}
let score = {
  win : 0,
  lose : 0,
  tie : 0,
};