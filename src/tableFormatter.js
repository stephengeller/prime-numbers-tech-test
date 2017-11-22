const RowGenerator = require('./rowGenerator');

class TableFormatter {
  constructor(rowGenerator = new RowGenerator()) {
    this.rowGenerator = rowGenerator;
  }
  renderTable(rows) {
    return rows
      .map(row => {
        row = this.checkForZeros(row);
        return this.formatRow(row);
      })
      .join('\n');
  }

  formatTable(array2D) {
    const multiplicationTable = this.rowGenerator.generateRows(array2D);
    return this.renderTable(multiplicationTable);
  }

  formatRow(row) {
    let formattedRow = '|';
    for (let i = 0; i < row.length; i++) {
      formattedRow += ` ${row[i]}|`;
    }
    return formattedRow;
  }

  checkForZeros(array) {
    return array.map(value => (value === 0 ? ' ' : value));
  }
}

module.exports = TableFormatter;
