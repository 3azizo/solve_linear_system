let print = document
  .querySelector(".print")
  .addEventListener("click", function () {
    let colm = Number(document.getElementById("colm").value);
    // console.log("3azizo");
    let row = Number(document.querySelector("#row").value);
    if (row == 0 || colm == 0) {
      alert("enter size of matrix");
    } else {
      let contSolvep2 = document.querySelector(".contSolvep2");
      let div1 = document.querySelector(".div1");
      div1.classList.toggle("hidden");
      contSolvep2.classList.remove("hidden");
      for (let i = 0; i < row; i++) {
        for (let j = 0; j < colm; j++) {
          let newInp = document.createElement("input");
          newInp.classList.add(`x${i + 1}${1 + j}`);
          contSolvep2.appendChild(newInp);
          // console.log(newInp);
        }
        let newBR = document.createElement("br");
        contSolvep2.appendChild(newBR);
      }
      let newButton = document.createElement("button");
      newButton.classList.add("btn");
      contSolvep2.appendChild(newButton);
      newButton.innerHTML = "solve";
      newButton.addEventListener("click", function () {
        let FinalArry = [];
        let rowArry = [];
        for (let i = 0; i < row; i++) {
          for (let j = 0; j < colm; j++) {
            let inpValue = Number(
              document.querySelector(`.x${1 + i}${1 + j}`).value
            );
            rowArry.push(inpValue);
          }
          FinalArry.push(rowArry);
          rowArry = [];
        }
        console.log(FinalArry);
        let arry = FinalArry;
        //
        gauss(arry);
        //
      });
    }
    // console.log(row, colm);]
  });
//

function gauss(arry) {
  var n = arry.length;

  for (var i = 0; i < n; i++) {
    var maxEl = Math.abs(arry[i][i]);
    var maxRow = i;
    for (var k = i + 1; k < n; k++) {
      if (Math.abs(arry[k][i]) > maxEl) {
        maxEl = Math.abs(arry[k][i]);
        maxRow = k;
      }
    }

    for (var k = i; k < n + 1; k++) {
      var tmp = arry[maxRow][k];
      arry[maxRow][k] = arry[i][k];
      arry[i][k] = tmp;
    }
    for (k = i + 1; k < n; k++) {
      var c = -arry[k][i] / arry[i][i];
      for (var j = i; j < n + 1; j++) {
        if (i == j) {
          arry[k][j] = 0;
        } else {
          arry[k][j] += c * arry[i][j];
        }
      }
    }
  }

  var x = new Array(n);
  for (var i = n - 1; i > -1; i--) {
    x[i] = arry[i][n] / arry[i][i];
    for (var k = i - 1; k > -1; k--) {
      arry[k][n] -= arry[k][i] * x[i];
    }
  }
  const newDiv2 = document.createElement("div");
  for (let i = 0; i < x.length; i++) {
    contSolve.appendChild(newDiv2);
    let newSpan = document.createElement("span");
    newSpan.classList.add("span");
    newDiv2.appendChild(newSpan);
    newSpan.innerHTML = "x" + (i + 1) + "  =  " + x[i];
  }
}
