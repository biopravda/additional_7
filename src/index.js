module.exports = function solveSudoku(matrix) {
  function solver(matrix) {
    let a
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (!matrix[i][j]) {
          for (let k = 1; k < 10; k++) {
            if (put(matrix, i, j, k)) {
               matrix[i][j] = k
               a = solver(matrix)
               if (a) return true
               matrix[i][j] = 0};}
               return false};};}
                return true}
     
    function put(matrix, i, j, k) {
      for (let b = 0; b < 9; b++) {
        if (b !== i && matrix[b][j] === k) return false
        if (b !== j && matrix[i][b] === k) return false
     }
     for (let b = 0; b < 3; b++) {
       for (let a = 0; a < 3; a++) {if (b !== i && a !== j && matrix[(Math.floor((i / 3)) * 3) + b][(Math.floor((j / 3)) * 3) + a] === k) return false
    };}
    return true}
    solver(matrix)
    return matrix
  
  
}

