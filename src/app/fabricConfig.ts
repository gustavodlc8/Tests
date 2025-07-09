function randomLetter(): string {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const index = Math.floor(Math.random() * alphabet.length);
  return alphabet[index];
}
function resetConfig(): string {
    let name = ''
    for (let i = 0; i < 2; i++) {
        name += randomLetter();
    }
    for (let i = 0; i < 3; i++) {
        name += Math.floor(Math.random() * 10);
    }
    if (names.includes(name)) {
        return resetConfig();
    }else {
        names.push(name);
        return name;
    }
}
let names: string[] = [];
console.log(resetConfig());