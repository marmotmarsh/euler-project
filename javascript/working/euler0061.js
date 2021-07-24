function getPolygonalNumbers(polygon, min, max) {
  let nums = [];
  let n = 1;
  let p;

  do {
    switch (polygon) {
      case 3: {
        p = (n * (n + 1)) / 2;
        break;
      }
      case 4: {
        p = n * n;
        break;
      }
      case 5: {
        p = (n * (3 * n - 1)) / 2;
        break;
      }
      case 6: {
        p = n * (2 * n - 1);
        break;
      }
      case 7: {
        p = (n * (5 * n - 3)) / 2;
        break;
      }
      case 8: {
        p = n * (3 * n - 2);
        break;
      }
      default: {
        p = max;
      }
    }
    if (p >= min && p <= max) {
      nums.push(p.toString());
    }
    n++;
  } while (p < max);

  return nums;
}

function isCyclic(first, second) {
  return first.slice(2) === second.slice(0, 2);
}

export function solve61() {
  const triangles = getPolygonalNumbers(3, 1000, 9999);
  const squares = getPolygonalNumbers(4, 1000, 9999);
  const pentagons = getPolygonalNumbers(5, 1000, 9999);
  const hexagons = getPolygonalNumbers(6, 1000, 9999);
  const heptagons = getPolygonalNumbers(7, 1000, 9999);
  const octagons = getPolygonalNumbers(8, 1000, 9999);

  for (let tri of triangles) {
    for (let squa of squares) {
      if (isCyclic(tri, squa)) {
        for (let pent of pentagons) {
          if (isCyclic(squa, pent)) {
            for (let hex of hexagons) {
              if (isCyclic(pent, hex)) {
                for (let hept of heptagons) {
                  if (isCyclic(hex, hept)) {
                    for (let oct of octagons) {
                      if (isCyclic(hept, oct) && isCyclic(oct, tri)) {
                        return (
                          parseInt(tri, 10) +
                          parseInt(squa, 10) +
                          parseInt(pent, 10) +
                          parseInt(hex, 10) +
                          parseInt(hept, 10) +
                          parseInt(oct, 10)
                        );
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  // return isCyclic('8128', '2811');
}

// solve61();
