const choices = document.querySelectorAll('.choice');
const resultDisplay = document.getElementById('result');

const outcomes = {

    rock: { scissors: 'crushes', lizard: 'crushes' },
    paper: { rock: 'covers', spock: 'disproves' },
    scissors: { paper: 'cuts', lizard: 'decapitates' },
    lizard: { spock: 'poisons', paper: 'eats' },
    spock: { scissors: 'smashes', rock: 'vaporizes' },
};

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const userChoice = choice.dataset.choice;
        const computerChoice = getComputerChoice();
        const result = getResult(userChoice, computerChoice);
        resultDisplay.textContent = `You chose ${userChoice}, computer chose ${computerChoice}. ${result}`;

    });

});



function getComputerChoice() {


    const randomIndex = Math.floor(Math.random() * choices.length);


    return choices[randomIndex].dataset.choice;
}

function getResult(user, computer) {


    if (user === computer) {

        return "It's a tie!";

    } else if (outcomes[user][computer]) {

        return `You win! ${user} ${outcomes[user][computer]} ${computer}.`;

    } else {
        
        return `You lose! ${computer} ${outcomes[computer][user]} ${user}.`;
    }
}
