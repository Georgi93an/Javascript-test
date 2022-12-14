  
  const checkSudokuLines=(Lines)=> {
    
  let errorDiv = document.getElementById("lineError");

  // check if the data provided in Lines is valid
  let isValid = isValidSudoku(Lines);
  if (isValid === false) {
    //Display error and return false if not valid
    errorDiv.innerHTML = "<p>The data provided is not valid</p>";
    return false;
  }
  //Boolean to keep track if any anomaly found
  let errorFound=false;

  ///For loop to iterate over the lines of sudokuBoard
  for (let i = 0; i < sudokuBoard.length; i++) {
    let sudokuBoardRows = sudokuBoard[i];
    let toCheckLines = Lines[i];

    //If all elements dont have the same position in both lines display error message
    if (!sudokuBoardRows.every((value, index) => value === toCheckLines[index])) {
      errorDiv.innerHTML += `
              <p>Error at Line ${i + 1}: Board Values: ${sudokuBoardRows.join(", ")}
              || Input Values: ${toCheckLines.join(", ")}</p>`;
              errorFound=true;
    }
  }
  //If no error found display message
  if(!errorFound){
    errorDiv.innerHTML+="All Lines are correct";
  }
  return true;
}

  
  
  const checkSudokuColumns=(Column)=> {
    let errorDiv = document.getElementById("columnError");

    // check if the data provided in Column is valid
    let isValid = isValidSudoku(Column);
    if (isValid === false) {
      //Display error and return false if not valid
      errorDiv.innerHTML = "<p>The data provided is not valid</p>";
      return false;
    }
    //Boolean to keep track if any anomaly found
    let errorFound=false;

    //For loop to iterate over the columns of sudokuBoard
    for (let i = 0; i < sudokuBoard.length; i++) {
      let sudokuBoardColumns = sudokuBoard.map(row => row[i]);
      let toCheckColumns = Column.map(row => row[i]);

      //If all elements dont have the same position in both columns display error message
      if (!sudokuBoardColumns.every((value, index) => value === toCheckColumns[index])) {
        errorDiv.innerHTML += `
                <p>Error at Column ${i + 1}:Board Values: ${sudokuBoardColumns.join(", ")}
                || Input Values: ${toCheckColumns.join(", ")}</p>`;
                errorFound=true;
      }
    }
    //If no error found display message
    if(!errorFound){
      errorDiv.innerHTML+="All Columns are correct";
    }
    return true;
  }

  



const checkSudokuRegion=(Region)=> {
  let errorDiv=document.getElementById("regionError")

  // check if the data provided in Region is valid
  let isValid = isValidSudoku(Region);
  if(isValid === false) {
    //Display error and return false if not valid
    errorDiv.innerHTML="<p>The data provided is not valid</p>";
    return false;
  }
  // Initialize to 0 to keep square Index
  let squareIndex=0;
  let errorFound=false;
  // Loop through each 3x3 square in the Sudoku board
  for (let i = 0; i < sudokuBoard.length; i += 3) {
    
    for (let j = 0; j < sudokuBoard[i].length; j += 3) {
      // Initialize empty arrays to store the 3x3 squares
      let sudokuBoardSquare = [];
      let toCheckSquare = [];
      // Loop through each element in the 3x3 square
      for (let k = i; k < i + 3; k++) {
        for (let l = j; l < j + 3; l++) {
          sudokuBoardSquare.push(sudokuBoard[k][l]);
          toCheckSquare.push(Region[k][l]);
        }  
      }
      squareIndex+=1;
      //If all elements dont have the same position in both squares display error message
      if (sudokuBoardSquare.length !== toCheckSquare.length ||
        !sudokuBoardSquare.every((value, index) => {
          const checkIndex = toCheckSquare.findIndex(checkValue => value === checkValue);
          return index === checkIndex;
        })
        ){
          errorDiv.innerHTML += `
                <p>Region ${squareIndex} Incorrect: Board Values: ${sudokuBoardSquare.join(", ")} 
                || Input Values: ${toCheckSquare.join(", ")}</p>`;
                errorFound=true;
        }   
      }
    }
    //If no error found display message
    if(!errorFound){
      errorDiv.innerHTML+="All Regions are correct";
    }
    return true;
}

    