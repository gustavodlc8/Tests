function girarDado(min:number , max:number):number {
    const dado =  Math.floor(Math.random()*(max - min))+ min;
    return dado
}

function gerarPersonagem(dado:number) { 
    let caracteristica = ''
    let valor = 0
    if (dado === 1) caracteristica = 'Força';
  else if (dado === 2) caracteristica = 'Destreza';
  else if (dado === 3) caracteristica = 'Constituição Física';
  else if (dado === 4) caracteristica = 'Inteligência';
  else if (dado === 5) caracteristica = 'Sabedoria';
  else return { caracteristica: 'Inválida', valor: 0 };
  for (let i = 0; i < 5; i++) {
    valor += girarDado(1, 7); // soma 5 rolagens de 1 a 6
  }

  return { caracteristica, valor };
}

const personagem = gerarPersonagem(girarDado(1, 6));
console.log(`Atributo: ${personagem.caracteristica}, Valor: ${personagem.valor}`);