const number = document.getElementById('number');
const generateBtn = document.getElementById('generateBtn');

const randomNumberGenerator(1,6){
    const randomNumber =  Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    number.textContent = randomNumber;

}

generateBtn.addEventListener('click', randomNumberGenerator);
randomNumberGenerator();
