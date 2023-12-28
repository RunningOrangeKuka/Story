const outputElement = document.getElementById('output');
const choicesElement = document.getElementById('choices');

function printMessage(message) {
    outputElement.innerHTML += `<p>${message}</p>`;
}

function presentChoices(choices) {
    choicesElement.innerHTML = '';
    choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.innerHTML = choice.text;
        button.addEventListener('click', () => makeChoice(index));
        choicesElement.appendChild(button);
    });
}

function makeChoice(index) {
    const choice = currentChoices[index];
    printMessage(choice.result);
    currentChoices = choice.nextChoices;
    presentChoices(currentChoices);
}

let currentChoices = initialChoices;
presentChoices(currentChoices);
