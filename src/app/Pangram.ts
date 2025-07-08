function Pangram(sentence: string): boolean {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const lowerCaseSentence = sentence.toLowerCase();

    for (const char of alphabet) {
        if (!lowerCaseSentence.includes(char)) {
            return false;
        }
    }
    return true;
}

console.log(Pangram("The quick brown fox jumps over the lazy dog")); // true
console.log(Pangram("Hello World")); // false