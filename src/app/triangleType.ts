function triangleType(a: number, b: number, c: number): string {
    if (a <= 0 || b <= 0 || c <= 0) {
        return 'Invalid';
    }
    if (a + b <= c || a + c <= b || b + c <= a) {
        return 'Not a triangle';
    }
    if (a === b && b === c) {
        return 'Equilateral';
    }
    if (a === b || b === c || a === c) {
        return 'Isosceles';
    }
    return 'Scalene';
}