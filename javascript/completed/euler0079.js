import fs from 'fs';
import _ from 'lodash';

export function solve79() {
  const file = fs.readFileSync('./data/x0079.txt', {
    encoding: 'utf-8',
  });
  let logins = file.split('\n').map((l) => l.split(''));

  let password = '';

  while (logins.length > 0) {
    const loginsByFirstDig = _.groupBy(logins, (l) => l[0]);
    const { dig } = _.reduce(
      loginsByFirstDig,
      (accum, l, k) => (l.length > accum.logins.length ? { dig: k, logins: l } : accum),
      { dig: 0, logins: [] }
    );

    password += dig;

    logins = logins.reduce((accum, l) => {
      if (l[0] === dig) {
        if (l.length > 1) {
          return [...accum, l.slice(1)];
        }
        return accum;
      }
      return [...accum, l];
    }, []);
  }

  return password;
}
