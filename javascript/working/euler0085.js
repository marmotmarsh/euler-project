function findRectsOfIncreasedX(x, y, memo) {
  if (x === 1) {
    const rects = (y * (y + 1)) / 2;
    memo = {
      ...memo,
      [x]: {
        ...(memo[x] || {}),
        [y]: rects,
      },
      [y]: {
        ...(memo[y] || {}),
        [x]: rects,
      },
    };
    return rects;
  } else if (y === 1) {
    const rects = (x * (x + 1)) / 2;
    memo = {
      ...memo,
      [x]: {
        ...(memo[x] || {}),
        [y]: rects,
      },
      [y]: {
        ...(memo[y] || {}),
        [x]: rects,
      },
    };
    return rects;
  } else {
    const newX = memo[y][1];
    const prevX = memo[y][x - 1];
    const rects = prevX + newX * (x - 1);
    memo = {
      ...memo,
      [x]: {
        ...(memo[x] || {}),
        [y]: rects,
      },
      [y]: {
        ...(memo[y] || {}),
        [x]: rects,
      },
    };
    return rects;
  }
}

export function solve85() {
  const n = 18;
  let memo = { 1: { 1: 1 } };

  let x = 1;
  let y = 1;
}
