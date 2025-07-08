function matrixPosition(matrix: number[][]): { [position: string]: number } {
  const result: { [key: string]: number } = {};

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      const position = `${i + 1}${j + 1}`;
      result[position] = matrix[i][j];
    }
  }

  return result;
}

console.log(matrixPosition([[9, 8, 7], [5, 3, 2], [6, 6, 7]]));

function matrixRowColumn(matrix: number[][]): { [key: string]: number[] } {
  const result: { [key: string]: number[] } = {};

  for (let i = 0; i < matrix.length; i++) {
    result[`row${i + 1}`] = matrix[i];
  }

  for (let j = 0; j < matrix[0].length; j++) {
    const column: number[] = [];
    for (let i = 0; i < matrix.length; i++) {
      column.push(matrix[i][j]);
    }
    result[`column${j + 1}`] = column;
  }

  return result;
}

console.log(matrixRowColumn([[9, 8, 7], [5, 3, 2], [6, 6, 7]]));