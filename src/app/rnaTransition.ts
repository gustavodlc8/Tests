function rnaTransition(rna: string): string {
  const nucleotides = rna.match(/.{1,3}/g);
  const transitions: { [key: string]: string } = {
    'AUG': 'Methionine',
    'UUU': 'Phenylalanine',
    'UUC': 'Phenylalanine',
    'UUA': 'Leucine',
    'UUG': 'Leucine',
    'UCU': 'Serine',
    'UCC': 'Serine',
    'UCA': 'Serine',
    'UCG': 'Serine',
    'CCU': 'Proline',
    'CCC': 'Proline',
    'CCA': 'Proline',
    'CCG': 'Proline',
    'ACU': 'Threonine',
    'ACC': 'Threonine',
    'ACA': 'Threonine',
    'ACG': 'Threonine',
    'GCU': 'Alanine',
    'GCC': 'Alanine',
    'GCA': 'Alanine',
    'GCG': 'Alanine',
    'UAA': 'Stop',
    'UAG': 'Stop',
    'UGA': 'Stop',
  };
  let result = '';
  if (nucleotides) {
    for (const codon of nucleotides) {
      if (transitions[codon]) {
        result += transitions[codon] + ' ';
      } else {
        result += 'Unknown ';
      }
    }
  }
    return result.trim();
}

console.log(rnaTransition('AUGUUUUUCUUCCUACCUACG')); // Example usage