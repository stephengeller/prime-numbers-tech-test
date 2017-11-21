class RowGenerator {
  generateRow(array) {
    var result = '|  ';
    for (var i = 0; i < array.length + 1; i++) {
      for (var j = 0; j < array.length + 1; j++) {
        if (i == 0 && j > 0) {
          result += `| ${array[j - 1]}`;
        } else if (j == 0 && i > 0) {
          result += `| ${array[i - 1]}`;
        } else if (i > 0 && j > 0) {
          result += `| ${array[i - 1] * array[j - 1]}`;
        }
      }
      result += '|\n';
    }
    console.log(result);
    return result;
  }
}

module.exports = RowGenerator;
