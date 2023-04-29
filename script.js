'use strict';
const overlay = document.querySelector('.overlay');
const bclose = document.querySelectorAll('.close-modal');
const solveing = document.querySelector('.solveing');
const solve = document.querySelectorAll('.solve');
const closeModal = function () {
  overlay.classList.add('hidden');
  e2.classList.add('hidden');
  e3.classList.add('hidden');
  e4.classList.add('hidden');
  solveing.classList.remove('hidden');
};

// 2 equations cod
const e2 = document.querySelector('.e2');
const opene2 = document.querySelector('.e2s');
opene2.addEventListener('click', function () {
  e2.classList.remove('hidden');
  overlay.classList.remove('hidden');
  solveing.classList.add('hidden');
});
// 3 equations cod
const e3 = document.querySelector('.e3');
const opene3 = document.querySelector('.e3s');
opene3.addEventListener('click', function () {
  e3.classList.remove('hidden');
  overlay.classList.remove('hidden');
  solveing.classList.add('hidden');
});
// 4 equations cod
const e4 = document.querySelector('.e4');
const opene4 = document.querySelector('.e4s');
opene4.addEventListener('click', function () {
  e4.classList.remove('hidden');
  overlay.classList.remove('hidden');
  solveing.classList.add('hidden');
});
// close modal cod
for (let i = 0; i < bclose.length; i++) {
  bclose[i].addEventListener('click', closeModal);
}
overlay.addEventListener('click', closeModal);
//solve button
for (let i = 0; i < solve.length; i++) {
  solve[i].addEventListener('click', function () {
    if (i == 0) {
      let a11 = Number(document.querySelector('#a11').value);
      let a12 = Number(document.querySelector('#a12').value);
      let b1 = Number(document.querySelector('#b1').value);
      let a21 = Number(document.querySelector('#a21').value);
      let a22 = Number(document.querySelector('#a22').value);
      let b2 = Number(document.querySelector('#b2').value);
      let arry = [
        [a11, a12, b1],
        [a21, a22, b2],
      ];
      print_arry(arry);

      console.log(arry);
      console.log('2eq');
    } else if (i == 1) {
      let y11 = Number(document.querySelector('#y11').value);
      let y12 = Number(document.querySelector('#y12').value);
      let y13 = Number(document.querySelector('#y13').value);
      let z1 = Number(document.querySelector('#z1').value);
      let y21 = Number(document.querySelector('#y21').value);
      let y22 = Number(document.querySelector('#y22').value);
      let y23 = Number(document.querySelector('#y23').value);
      let z2 = Number(document.querySelector('#z2').value);
      let y31 = Number(document.querySelector('#y31').value);
      let y32 = Number(document.querySelector('#y32').value);
      let y33 = Number(document.querySelector('#y33').value);
      let z3 = Number(document.querySelector('#z3').value);
      let arry = [
        [y11, y12, y13, z1],
        [y21, y22, y23, z2],
        [y31, y32, y33, z3],
      ];
      console.log(arry);
      console.log('3eq');
      print_arry(arry);
    } else if (i == 2) {
      let x11 = Number(document.querySelector('#x11').value);
      let x12 = Number(document.querySelector('#x12').value);
      let x13 = Number(document.querySelector('#x13').value);
      let x14 = Number(document.querySelector('#x14').value);
      let c1 = Number(document.querySelector('#c1').value);
      //
      let x21 = Number(document.querySelector('#x21').value);
      let x22 = Number(document.querySelector('#x22').value);
      let x23 = Number(document.querySelector('#x23').value);
      let x24 = Number(document.querySelector('#x24').value);
      let c2 = Number(document.querySelector('#c2').value);
      //
      let x31 = Number(document.querySelector('#x31').value);
      let x32 = Number(document.querySelector('#x32').value);
      let x33 = Number(document.querySelector('#x33').value);
      let x34 = Number(document.querySelector('#x34').value);
      let c3 = Number(document.querySelector('#c3').value);
      //
      let x41 = Number(document.querySelector('#x41').value);
      let x42 = Number(document.querySelector('#x42').value);
      let x43 = Number(document.querySelector('#x43').value);
      let x44 = Number(document.querySelector('#x44').value);
      let c4 = Number(document.querySelector('#c4').value);
      let arry = [
        [x11, x12, x13, x14, c1],
        [x21, x22, x23, x24, c2],
        [x31, x32, x33, x34, c3],
        [x41, x42, x43, x44, c4],
      ];
      print_arry(arry);
      console.log(arry);
      console.log('4eq');
    }
    closeModal();
  });
}
function print_arry(arry) {
  const contSolve = document.getElementById('contSolve');
  const newDiv = document.createElement('div');
  let h2 = document.createElement('h2');
  newDiv.appendChild(h2);
  h2.innerHTML = 'your array';
  newDiv.classList.add('solveDiv');
  contSolve.appendChild(newDiv);
  for (let i = 0; i < arry.length; i++) {
    for (let j = 0; j < arry.length + 1; j++) {
      let newSpan = document.createElement('span');
      newSpan.classList.add('span');
      newDiv.appendChild(newSpan);
      newSpan.innerHTML = '   ' + '   ' + arry[i][j];
    }
    const newBr = document.createElement('br');
    newDiv.appendChild(newBr);
  }
  let x = gauss(arry);
  const newDiv2 = document.createElement('div');
  for (let i = 0; i < x.length; i++) {
    contSolve.appendChild(newDiv2);
    let newSpan = document.createElement('span');
    newSpan.classList.add('span');
    newDiv2.appendChild(newSpan);
    newSpan.innerHTML = 'x' + (i + 1) + '  =  ' + x[i];
  }
}

function gauss(arry) {
  var n = arry.length;

  for (var i = 0; i < n; i++) {
    // Search for maximum in this column
    var maxEl = Math.abs(arry[i][i]);
    var maxRow = i;
    for (var k = i + 1; k < n; k++) {
      if (Math.abs(arry[k][i]) > maxEl) {
        maxEl = Math.abs(arry[k][i]);
        maxRow = k;
      }
    }

    // Swap maximum row with current row (column by column)
    for (var k = i; k < n + 1; k++) {
      var tmp = arry[maxRow][k];
      arry[maxRow][k] = arry[i][k];
      arry[i][k] = tmp;
    }

    // Make all rows below this one 0 in current column
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

  // Solve equation Ax=b for an upper triangular matrix A
  var x = new Array(n);
  for (var i = n - 1; i > -1; i--) {
    x[i] = arry[i][n] / arry[i][i];
    for (var k = i - 1; k > -1; k--) {
      arry[k][n] -= arry[k][i] * x[i];
    }
  }
  return x;
}
