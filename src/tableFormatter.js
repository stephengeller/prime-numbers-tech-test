const RowGenerator = require('./rowGenerator');

class TableFormatter {
  constructor(rowGenerator = new RowGenerator()) {
    this.rowGenerator = rowGenerator;
  }

  renderTable(rows) {
    return rows
      .map(row => {
        return this.formatRow(row, this.checkMaxWidth(rows));
      })
      .join('\n');
  }

  formatTable(array2D) {
    const multiplicationTable = this.rowGenerator.generateRows(array2D);
    return this.renderTable(multiplicationTable);
  }

  formatRow(row, maxWidth) {
    let formattedRow = '|';
    for (let i = 0; i < row.length; i++) {
      const extraSpaces = this.addExtraSpaces(row[i], maxWidth);
      formattedRow += extraSpaces;
      formattedRow += ` ${row[i]}|`;
    }
    return formattedRow;
  }

  addExtraSpaces(number, maxWidth) {
    const currentWidth = number.toString().length;
    const widthDifference = maxWidth - currentWidth;
    return new Array(widthDifference + 1).join(' ');
  }

  checkMaxWidth(array2D) {
    const lastArray = array2D[array2D.length - 1];
    const lastNumber = lastArray[lastArray.length - 1];
    return lastNumber.toString().length;
  }
}

module.exports = TableFormatter;
