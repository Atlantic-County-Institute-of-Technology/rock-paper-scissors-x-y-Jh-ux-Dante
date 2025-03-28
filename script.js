const buttons = document.querySelectorAll('button');
const resultElement = document.getElementById('result');
const choices = ['rock', 'paper', 'scissors', 'pizza', 'shredder'];




buttons.forEach(button => {
    button.addEventListener('click', () => {
        const playerChoice = button.id;
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        const winner = determineWinner(playerChoice, computerChoice);
        console.log(winner);
        resultElement.textContent = `you chose ${playerChoice}, computer chose ${computerChoice}. ${winner}`;
    });
});

function determineWinner(player, computer) {
    if (player == computer) {
        return "It's a tie";
     } else if (
        (player == 'rock' && computer == 'scissors' ) || (player == 'scissors' && computer == 'paper') ||
        (player == 'paper' && computer == 'rock') || (player == 'pizza' && computer == 'paper') ||
        (player == 'shredder' && computer == 'paper') || (player == 'scissors' && computer == 'shredder')
     ) {
        return 'You win!';
     } else {
        return 'computer wins!';
     }
}

if (winner == 'You win!') {
    playerScore++;
} else if (winner == 'Computer wins!') {
    computerScore++;
}
