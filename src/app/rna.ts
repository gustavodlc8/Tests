function rna(sequence: string):string{
    return sequence.split('').map(nucleotide => {
        switch(nucleotide){
            case 'G':
                return 'C'
            case 'C':
                return 'G'
            case 'T':
                return 'A'
            case 'A':
                return 'U'
            default:
                return('invalid input')          
        }
    })
    .join('')
}

console.log(rna('GACT'))
console.log(rna('CGTA'))