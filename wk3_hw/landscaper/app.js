console.log('Landscaper Game app.js is attached to index.html');
let tool;
let money;
let cost;
let choice;

const start = () => {
  tool = 'your teeth';
  money = 1;
  askForAction();
};
const showStatus = () => {
  alert('You have $' + money + '.  Your tool is ' + tool + '.')
};
const askForAction = () => {
  showStatus();
  promptQuestions();
};

const promptQuestions = () => {
  choice = prompt('What do you want to do?', 'mow/buy tools');
    if (choice.toLowerCase() === 'mow') {
      landscape();
    } else if (choice.toLowerCase() === 'buy tools') {
      checkTool();
    } else if (choice.toLowerCase() === 'exit') {
    } else if (choice.toLowerCase() === 'restart') {
      start();
    } else {
      alert('Please try that action again!')
      askForAction();
    }
};
const landscape = () => {
  if (tool === 'your teeth') {
    alert('Using ' + tool + ' will earn you $1 each day!')
    money += 1;
    askForAction();
  } else if (tool === 'a pair of rusty scissors') {
    money += 5;
    askForAction();
  } else if (tool === 'an old-timey push lawnmower') {
    money += 50;
    askForAction();
  } else if (tool === 'a fancy battery-powered lawnmower') {
    money += 100;
    askForAction();
  } else if (tool === 'a team of starving students') {
    money += 250;
    if (money <1000) {
      askForAction();
    } else {
      alert('Congratulations!  You have made $' + money + ' with the help of your tools!  You have won the game!')
    }
  }
};

const checkTool = function () {
  if (money < 5) {
    alert('Sorry, you don\'t have enough money to buy a new tool yet.  Keep landscaping!');
    askForAction();
  } else {
    buyTool();
  }
};

const buyTool = () => {
  if ((money >= 5) && (tool === 'your teeth')) {
    alert('You can afford to buy a new tool!')
    buyScissors();
  } else if ((money >= 25) && (tool === 'a pair of rusty scissors')) {
    alert('You can afford to buy a new tool!')
    buyOldTimey();
  } else if ((money >= 250) && (tool === 'an old-timey push lawnmower')) {
    alert('You can afford to buy a new tool!')
    buyFancyBattery();
  } else if ((money >= 500) && (tool === 'a fancy battery-powered lawnmower')) {
    alert('You can afford to buy a new tool!')
    buyTeamOfStudents();
  } else {
    alert('Sorry, you don\'t have enough money to buy a new tool yet.  Keep landscaping!');
    askForAction();
  }
};
const buyScissors = () => {
  cost = 5;
  money -= 5;
  makeAmount = 5;
  tool = 'a pair of rusty scissors';
  alertText();
};

const buyOldTimey = () => {
  cost = 25;
  money -= 25;
  makeAmount = 50;
  tool = 'an old-timey push lawnmower';
  alertText();
};

const buyFancyBattery = () => {
  cost = 250;
  money -= 250;
  makeAmount = 100;
  tool = 'a fancy battery-powered lawnmower';
  alertText();
};

const buyTeamOfStudents = () => {
  cost = 500;
  money -= 500;
  makeAmount = 250;
  tool = 'a team of starving students';
  alertText();
};

const alertText = () => {
  alert('You can buy ' + tool + ' for $' + cost + '.');
  alert('You have purchased ' + tool + '!  Using this tool will earn you $' + makeAmount + ' each day!');
  askForAction();
};
document.addEventListener('DOMContentLoaded', () => {
  start();
});