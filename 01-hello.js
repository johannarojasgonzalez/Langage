/**
 * fonction(a,b) pareil que (a, b) =>
 * @param a {number | string}
 * @param b {number | string}
 * @return {number}
 */
const addition = (a, b) => {
  return Number(a) + Number(b);
};

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    console.log(addition(i, i));
  }
}