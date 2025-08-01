function rainDrops(cod: number): string {
  let result = '';
    if (cod % 3 === 0) {
        result += 'Pling';
    }if (cod % 5 === 0) {
        result += 'Plang';
    }
    if (cod % 7 === 0) {
        result += 'Plong';
    }
    if (result === '') {
        result = cod.toString();
    }
    return result;
}
console.log(rainDrops(28)); 
console.log(rainDrops(30)); 
console.log(rainDrops(34)); 