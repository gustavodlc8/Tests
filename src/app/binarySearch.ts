function binarySearch(array: number[], target: number): number {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const midValue = array[mid];

        if (midValue === target) {
            console.log(`Encontrado o número: ${target} na posição: ${mid}`);
            return mid;
        } else if (midValue < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}

const favoriteNumbers = [4, 8, 12, 16, 23, 28, 32];
const targetNumber = 16;
binarySearch(favoriteNumbers, targetNumber)