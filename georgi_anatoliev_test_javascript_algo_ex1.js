// Global variable to represent the sudoku grid
const sudokuBoard = Array.from({length: 9}, () => Array(9).fill());

function sudokuGrid() {
  // Convert the array_number strings into arrays of numbers 
  let rows = array_number.map(values => values.split(" ").map(values => parseInt(values)));

  // Loop through each row in array_numbers and add it to sudokuBoard
  rows.forEach((row, i) => sudokuBoard[i] = row);
  return sudokuBoard;
}
console.log(sudokuBoard);

function createTable() {
  // Generate the HTML for the table
  let htmlTable = `
    <table style='width:100%'>
      ${sudokuBoard.map(row => `
        <tr>
          ${row.map(value => `
            <td style='border:1px solid black'>${value}</td>
          `).join('')}
        </tr>
      `).join('')}
    </table>`;
  // Set the innerHTML of the table container element to the generated HTML
  document.getElementById('sudoku').innerHTML = htmlTable;
}











































