function inversor(word: string): string {
    let invertedWord = '';
    for (let i = word.length - 1; i >= 0; i--) {
        invertedWord += word[i];
    }
    return invertedWord;
}
console.log(inversor("Hello World"));
console.log(inversor("palavra invertida"));