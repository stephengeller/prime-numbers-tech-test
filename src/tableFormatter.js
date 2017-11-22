class TableFormatter {
  renderTable(rows) {
    return rows
      .map(row => {
        row = this.checkForZeros(row);
        return this.formatRow(row);
      })
      .join('\n');
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
