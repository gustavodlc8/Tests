const alfabeto = ["a", "b", "c", "d", "e", "f", 'g', "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", 'u', "v", "w", "x", "y", "z" , "a" , "b", "c"];
function descifrate(sequence: string): string {
    sequence = sequence.split('') && sequence.toLowerCase();
    let result = '';
    for (let i = 0; i < sequence.length; i++) {
        for (let j = 0; j < alfabeto.length; j++) {
            if (sequence[i] === alfabeto[j]) {
                result += alfabeto[j + 3]
                break;
            }
        }
    }
    return result;
}
console.log(descifrate('dxz'));
console.log(descifrate('abc'));