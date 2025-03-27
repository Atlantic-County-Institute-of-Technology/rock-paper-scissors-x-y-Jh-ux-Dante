const buttons = document.querySelectorAll('button');
const resultElement = document.getElementById('result');
const choices = ['rock', 'paper', 'scissors', 'pizza', 'shredder'];




buttons.forEach(button => {
    button.addEventListener('click', () => {
    const playerChoice = button.id;
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const winner = determineWinner(playerChoice, computerChoice);
    resultElement.textContent = 'you chose ${playerChoice}, computer chose ${computerChoice}. ${winner}';
}