function Calculator(sequence: string) {
    let sentence = sequence.split(' ')
    for(let i = 0; i < sentence.length; i++) {
        if (sentence[i] === 'mais') {
            return parseInt(sentence[i - 1]) + parseInt(sentence[i + 1]);
        }
        if (sentence[i] === 'menos') {
            return parseInt(sentence[i - 1]) - parseInt(sentence[i + 1]);
        }
        if (sentence[i] === 'vezes') {
            return parseInt(sentence[i - 1]) * parseInt(sentence[i + 1]);
        }
        if (sentence[i] === 'dividido') {
            return parseInt(sentence[i - 1]) / parseInt(sentence[i + 1]);
        }
}
}
console.log(Calculator('2 mais 2'));
console.log(Calculator('10 menos 5')); 
console.log(Calculator('3 vezes 3'));
console.log(Calculator('Quanto é 8 dividido 2'));