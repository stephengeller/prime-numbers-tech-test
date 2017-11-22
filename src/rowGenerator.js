class RowGenerator {
  generateRows(array) {
    let result = [];
    for (var i = 0; i < array.length + 1; i++) {
      let row = [];
      if (this.isTopCorner(row, i)) row.push(0);
      for (var j = 0; j < array.length + 1; j++) {
        if (this.isXAxis(i, j)) {
          row.push(array[j - 1]);
        } else if (this.isYAxis(i, j)) {
          row.push(array[i - 1]);
        } else if (i > 0 && j > 0) {
          row.push(array[i - 1] * array[j - 1]);
        }
      }
      row = this.checkForZeros(row);
      result.push(row);
    }
    return result;
  }

  checkForZeros(row) {
    return row.map(value => (value === 0 ? ' ' : value));
  }

  isXAxis(i, j) {
    return i == 0 && j > 0;
  }

  isYAxis(i, j) {
    return j == 0 && i > 0;
  }

  isTopCorner(row, i) {
    return row.length === 0 && i === 0;
  }
}

module.exports = RowGenerator;
