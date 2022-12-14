 //Used array to test functions
  const testArray = [
    [6, 1, 4, 5, 7, 8, 3, 9, 2],
    [9, 8, 3, 7, 6, 2, 5, 1, 4],
    [4, 2, 7, 3, 5, 1, 9, 8, 6],
    [1, 5, 6, 8, 9, 4, 7, 2, 3],
    [7, 4, 1, 6, 3, 9, 2, 5, 8],
    [2, 3, 9, 1, 8, 5, 4, 6, 7],
    [5, 6, 8, 2, 4, 7, 1, 3, 9],
    [8, 7, 2, 9, 1, 3, 6, 4, 5],
    [3, 9, 5, 4, 2, 6, 8, 7, 1]
    ]

function isValidSudoku(input) {
  let valid = true;

  // Check if the input is an Array 9x9
  if (!input.every(row => Array.isArray(row) && row.length === 9)) {
    return false;
  }

  // Check if all the elements are diferent for each row
  if (!input.every(row => {
    const uniqueValues = row.filter((value, index, self) => self.indexOf(value) === index);
    return uniqueValues.length === row.length;
  })) {
    return false;
  }

  // Check if all the elements are numbers from 1 to 9
  if (!input.every(row => row.every(value => typeof value === "number" && value >= 1 && value <= 9))) {
    return false;
  }

  return valid;
}









