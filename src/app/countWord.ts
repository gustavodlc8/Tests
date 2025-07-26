function prepareText(text: string): string {
    return text.toLowerCase().trim();
}
function countWords(text: string): { [word: string]: number } {
    const words = prepareText(text).split(/[!:?\s]/);
    const wordCount: { [word: string]: number } = {};

    for (const word of words) {
        if (word) {
            wordCount[word] = (wordCount[word] || 0) + 1;
        }
    }

    return wordCount;
}
console.log(countWords("Hello world! Hello everyone. How are you?"));