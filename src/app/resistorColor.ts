const colorCode = (color: string) => {
    return Color.indexOf(color)
}
const Color = [
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'grey',
    'white'
]

function value(colors:string[]): number  {
    const first = Color.indexOf(colors[0].toLowerCase())
    const second = Color.indexOf(colors[1].toLowerCase())
    return first * 10 + second;
}

console.log(value(['Yellow','Blue','Red']))
console.log(value(['Red','Green']))