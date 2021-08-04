import fs from 'fs';
import _ from 'lodash';

export function solve81() {
  const file = fs.readFileSync('./data/x0081.txt', {
    encoding: 'utf-8',
  });
  const matrix = file.split('\n').map((row) => row.split(',').map((c) => parseInt(c, 10)));
  let matrixVertices = [];

  let topoSort = [];
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    let verticesRow = [];
    for (let j = 0; j < row.length; j++) {
      let incoming;
      if (i === 0) {
        if (j === 0) {
          incoming = [];
        } else {
          incoming = [[0, j - 1]];
        }
      } else {
        if (j === 0) {
          incoming = [[i - 1, 0]];
        } else {
          incoming = [
            [i - 1, j],
            [i, j - 1],
          ];
        }
      }
      const vertex = {
        min: undefined,
        coords: { x: i, y: j },
        incoming,
      };
      verticesRow.push(vertex);
      topoSort.push(vertex);
    }
    matrixVertices.push(verticesRow);
  }

  topoSort.forEach((v, i) => {
    if (i === 0) {
      v.min = matrix[v.coords.x][v.coords.y];
    } else {
      v.min = matrix[v.coords.x][v.coords.y] + Math.min(...v.incoming.map((c) => matrixVertices[c[0]][c[1]].min));
    }
  });

  return topoSort.pop().min;
}
