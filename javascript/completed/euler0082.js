/* eslint-disable no-undef */
import fs from 'fs';
import _ from 'lodash';

export function solve82() {
  const file = fs.readFileSync('./data/x0082.txt', {
    encoding: 'utf-8',
  });
  const matrix = file.split('\n').map((row) => row.split(',').map((c) => parseInt(c, 10)));

  let allNodes = {};
  let unvisitedNodes = [];
  let visitedNodes = [];

  const startNode = {
    distance: 0,
    value: 0,
    visited: false,
    coords: `start`,
    outgoing: matrix.map((_row, i) => `${i}.0`),
  };

  allNodes[startNode.coords] = startNode;
  unvisitedNodes.push(startNode);

  const destNode = {
    distance: -1,
    value: 0,
    visited: false,
    coords: `dest`,
    outgoing: [],
  };

  allNodes[destNode.coords] = destNode;
  unvisitedNodes.push(destNode);

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
      if (j === row.length - 1) {
        outgoing.push(`dest`);
      } else {
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
