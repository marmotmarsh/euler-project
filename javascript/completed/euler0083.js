/* eslint-disable no-undef */
import fs from 'fs';
import _ from 'lodash';

export function solve83() {
  const file = fs.readFileSync('./data/x0083.txt', {
    encoding: 'utf-8',
  });
  const matrix = file.split('\n').map((row) => row.split(',').map((c) => parseInt(c, 10)));

  let allNodes = {};
  let unvisitedNodes = [];
  let visitedNodes = [];

  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    for (let j = 0; j < row.length; j++) {
      let outgoing = [];

      if (i !== 0) {
        outgoing.push(`${i - 1}.${j}`);
      }
      if (i !== matrix.length - 1) {
        outgoing.push(`${i + 1}.${j}`);
      }
      if (j !== 0) {
        outgoing.push(`${i}.${j - 1}`);
      }
      if (j !== row.length - 1) {
        outgoing.push(`${i}.${j + 1}`);
      }

      const value = row[j];
      const node = {
        distance: -1,
        value,
        visited: false,
        coords: `${i}.${j}`,
        outgoing,
      };

      allNodes[node.coords] = node;
      unvisitedNodes.push(node);
    }
  }

  const startNode = allNodes['0.0'];
  startNode.distance = startNode.value;

  const destNode = allNodes[`${matrix.length - 1}.${matrix[0].length - 1}`];

  while (!destNode.visited) {
    let currentNode = _.minBy(
      unvisitedNodes.filter((n) => n.distance !== -1),
      'distance'
    );

    for (let nextNodeCoords of currentNode.outgoing) {
      let nextNode = allNodes[nextNodeCoords];
      if (nextNode.distance === -1) {
        nextNode.distance = currentNode.distance + nextNode.value;
      } else {
        nextNode.distance = Math.min(currentNode.distance + nextNode.value, nextNode.distance);
      }
    }

    currentNode.visited = true;
    _.remove(unvisitedNodes, (n) => n.coords === currentNode.coords);
    visitedNodes.push(currentNode);
  }

  return destNode.distance;
}
