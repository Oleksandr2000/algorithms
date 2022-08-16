// Ми маємо матрицю що скалдається з нулів і одиниць

// Реалізувати алгоритм пошуку строки по, горизонталі чи вертикалі

// cкладність такого алгоритму буде O(n);

let gameMatrix = [
  [1, 1, 1],
  [0, 1, 0],
  [0, 0, 1],
];

function searchLine(matrix, value) {
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] === value && matrix[i][1] === value && matrix[i][2] === value) {
      console.log(`Have horizontalalLine ${value} in ${i + 1} row`);
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[0][i] === value && matrix[1][i] === value && matrix[2][i] === value) {
      console.log(`Have verticalLine ${value} in ${i + 1} column`);
    }
  }
}

searchLine(gameMatrix, 1);
