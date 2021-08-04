import { parseFileAs2DArray } from '../util.js';
import _ from 'lodash';

export function solve67() {
  const pyramid = parseFileAs2DArray('./data/x0067.txt').map((r) => r.map((v) => parseInt(v, 10)));
  let pyramidMap = {};

  let topoSort = [];
  for (let i = 0; i < pyramid.length; i++) {
    const row = pyramid[i];
    pyramidMap[i] = {};
    for (let j = 0; j < row.length; j++) {
      const vertex = {
        max: undefined,
        coords: { x: i, y: j },
        incoming:
          i === 0
            ? []
            : j === 0
            ? [[i - 1, 0]]
            : j === row.length - 1
            ? [[i - 1, j - 1]]
            : [
                [i - 1, j - 1],
                [i - 1, j],
              ],
      };
      topoSort.push(vertex);
      pyramidMap[i][j] = vertex;
    }
  }

  topoSort.forEach((v) => {
    if (v.coords.x === 0) {
      v.max = pyramid[v.coords.x][v.coords.y];
    } else {
      v.max = pyramid[v.coords.x][v.coords.y] + Math.max(...v.incoming.map((c) => pyramidMap[c[0]][c[1]].max));
    }
  });

  return topoSort.reduce((max, v) => Math.max(max, v.max), 0);
}
