function Hamming(example1: string, example2: string): number {
    if (example1.length !== example2.length) {
        throw new Error('Strings must be of equal length');
    }

    let distance = 0;
    for (let i = 0; i < example1.length; i++) {
        if (example1[i] !== example2[i]) {
            distance++;
        }
    }
    return distance;
}