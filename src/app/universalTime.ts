const year = 7;
const month = 5;
const day = 15;
const hour = 20;
const minute = 37;

function universalTime(year: number, month: number, day: number, hour: number, minute: number): string {
  let seconds = minute * 60 + hour * 3600;
  seconds += (day - 1) * 24 * 3600;      // Dias
  seconds += (month - 1) * 30 * 24 * 3600; // Meses aproximados
  seconds += year * 365 * 24 * 3600;     // Anos aproximados
  seconds += Math.floor((year) / 4) * 24 * 3600; // Anos bissextos aproximados
  console.log('Gigaseconds:', seconds / 1e9);
  return `Seconds: ${seconds}`;
}

console.log(universalTime(year, month, day, hour, minute));
