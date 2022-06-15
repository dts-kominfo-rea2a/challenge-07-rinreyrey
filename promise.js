const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = (kemarahan) => {
  return new Promise((resolve) => {
    const arrayTotal = [];
    promiseTheaterIXX().then((data) =>
      data.forEach((d) => arrayTotal.push(d.hasil))
    );
    promiseTheaterVGC().then((data) => {
      data.forEach((d) => arrayTotal.push(d.hasil));
      const arrayFiltered = arrayTotal.filter((d) => d == kemarahan);
      return arrayFiltered.length;
    }).then((data) => resolve(data));


  })

};

module.exports = {
  promiseOutput,
};
