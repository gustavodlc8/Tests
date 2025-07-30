function Collatz(n: number): number[] {
    if (n <= 0) {
        throw new Error("Input must be a positive integer.");
    }

    const sequence: number[] = [n];

    while (n !== 1) {
        if (n % 2 === 0) {
            n = n / 2;
        } else {
            n = 3 * n + 1;
        }
        sequence.push(n);
    }

    return sequence;
}
console.log(Collatz(6)); 
console.log(Collatz(19));