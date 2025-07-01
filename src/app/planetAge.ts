function calculate(age: number) {
    console.log('sua idade em Marte: ',age*1.8808158/31557600)
    console.log('sua idade em Venus: ',age*0.61519726/31557600)
    console.log('sua idade em Mercúrio: ',age*0.2408467/31557600)
    console.log('sua idade em Júpiter: ',age*11.862615/31557600)
    console.log('sua idade em Saturno: ',age*29.447498/31557600)
    console.log('sua idade em Uranus: ',age*84.016846/31557600)
    console.log('sua idade em Netuno: ',age*164.79132/31557600)
    console.log(`Sua idade em anos na terra: ${age/31557600}`)
}
calculate(2000000000)