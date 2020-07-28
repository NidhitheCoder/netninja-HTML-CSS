document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid");
  const width = 8;
  const squares = [];
  let score = 0;

  const candyColors = ["red", "orange", "blue", "green", "yellow", "#550f0f"];
  // Create Boards inside the grid div
  function createBoard() {
    for (let i = 0; i < width * width; i++) {
      const square = document.createElement("div");
      //   the below line helps to make the div is dragable
      square.setAttribute("draggable", true);
      square.setAttribute("id", i);
      let randomColor = Math.floor(Math.random() * candyColors.length);
      square.style.backgroundColor = candyColors[randomColor];
      grid.appendChild(square);
      squares.push(square);
    }
  }
  createBoard();

  //   Drag the candies

  let colorBeingDragged,
    colorBeingReplaced,
    squareIdBeingDragged,
    squareIdBeingReplaced;
  squares.forEach(square => square.addEventListener("dragstart", dragStart));
  squares.forEach(square => square.addEventListener("dragend", dragEnd));
  squares.forEach(square => square.addEventListener("dragover", dragOver));
  squares.forEach(square => square.addEventListener("dragenter", dragEnter));
  squares.forEach(square => square.addEventListener("dragleave", dragLeave));
  squares.forEach(square => square.addEventListener("drop", dragDrop));

  function dragStart() {
    colorBeingDragged = this.style.backgroundColor;
    squareIdBeingDragged = parseInt(this.id);
    console.log(this.id, "dragStart");
  }

  function dragOver(e) {
    e.preventDefault();
    console.log(this.id, "dragOver");
  }

  function dragEnter(e) {
    e.preventDefault();
    console.log(this.id, "drag enter");
  }

  function dragLeave() {
    console.log(this.id, "drag leave");
  }

  function dragDrop() {
    colorBeingReplaced = this.style.backgroundColor;
    squareIdBeingReplaced = parseInt(this.id);
    this.style.backgroundColor = colorBeingDragged;
    squares[squareIdBeingDragged].style.backgroundColor = colorBeingReplaced;
    console.log(this.id, "drag drop");
  }

  function dragEnd() {
    // what is a valid move ? (allow move nearest locations
    // or replace with nearest elements,not diagonal elements)
    let validMoves = [
      squareIdBeingDragged - 1,
      squareIdBeingDragged - width,
      squareIdBeingDragged + 1,
      squareIdBeingDragged + width
    ];

    let validMove = validMoves.includes(squareIdBeingReplaced);

    if ((squaren = colorBeingReplaced && validMove)) {
      squareBeingReplaced = null;
    } else if (squareIdBeingReplaced && !validMove) {
      squares[squareIdBeingReplaced].style.backgroundColor = colorBeingReplaced;
      squares[squareIdBeingDragged].style.backgroundColor = colorBeingDragged;
    } else {
      squares[squareIdBeingDragged].style.backgroundColor = colorBeingDragged;
    }
  }

  //   Checking for matches
  // check for row of four
  function checkRowForFour() {
    for (let i = 0; i < 60; i++) {
      let rowOfFour = [i, i + 1, i + 2, i + 3];
      let decidedColor = squares[i].style.backgroundColor;
      const isBlank = squares[i].style.backgroundColor === "";
      let notValid = [
        5,
        6,
        7,
        13,
        14,
        15,
        21,
        22,
        23,
        29,
        30,
        31,
        37,
        38,
        39,
        45,
        46,
        47,
        53,
        54,
        55
      ];

      if (notValid.includes(i)) {
        continue;
      }

      if (
        rowOfFour.every(
          index =>
            squares[index].style.backgroundColor === decidedColor && !isBlank
        )
      ) {
        score += 4;
        rowOfFour.forEach(index => {
          squares[index].style, (backgroundColor = "");
        });
      }
    }
  }
  checkRowForFour();

  // check column for four
  function checkColumnForFour() {
    for (let i = 0; i < 47; i++) {
      let columnForFour = [i, i + width, i + width * 2, i + width * 3];
      let decidedColor = squares[i].style.backgroundColor;
      const inBlank = squares.style.backgroundColor === "";
      if (
        columnForFour.every(
          index =>
            squares[index].style.backgroundColor === decidedColor && !isblank
        )
      ) {
        score += 4;
        columnForFour.forEach(index => {
          squares[index].style, (backgroundColor = "");
        });
      }
    }
  }

  // checking row of three
  function checkRowForThree() {
    for (let i = 0; i < 61; i++) {
      let rowOfThree = [i, i + 1, i + 2];
      let decidedColor = squares[i].style.backgroundColor;
      const isBlank = squares[i].style.backgroundColor === "";

      //   create a not valid array becouse of matching elements are in the different rows is not valied for the game. we need to fix it
      let notValid = [6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55];
      // skip when not valied includes i
      if (notValid.includes(i)) {
        continue;
      }

      if (
        rowOfThree.every(
          index =>
            squares[index].style.backgroundColor === decidedColor && !isBlank
        )
      ) {
        score += 3;
        rowOfThree.forEach(index => {
          squares[index].style.backgroundColor = "";
        });
      }
    }
  }
  checkRowForThree();

  //   check dfor column of three
  function checkColumnForThree() {
    for (let i = 0; i <= 47; i++) {
      let ColumnOfThree = [i, i + width, i + width * 2];
      let decidedColor = squares[i].style.backgroundColor;
      const isblank = squares[i].style.backgroundColor === "";
      if (
        ColumnOfThree.every(
          index =>
            squares[index].style.backgroundColor === decidedColor && !isblank
        )
      ) {
        score += 3;
        ColumnOfThree.forEach(index => {
          squares[index].style.backgroundColor = "";
        });
      }
    }
  }
  checkColumnForThree();

  setInterval(() => {
    checkRowForThree();
    checkColumnForThree();
  }, 100);
});
